# GC

## Q1: GC工作是如何发起的？

垃圾回收针对不同的分区又分为MinorGC和FullGC，不同分区的触发条件又有不同。  
总体来说GC的触发分为主动和被动两类：  

```
主动：程序显示调用System.gc发起GC（不一定马上甚至不会GC）
被动：内存分配失败，需要清理空间
```

***流程**  

```
Step1：需要GC的线程发起一个VM_Operation操作
    （这是一个基类，不同垃圾回收器发起各自的子类操作，如CMS收集器发起的是VM_GenCollectFullConcurrent）
Step2：该操作投递到一个队列中，JVM中有一个VMThread线程专门处理队列中的这些操作请求，
    该线程调用VM_Operation的evaluate函数来处理具体每一个操作。
Step3: VM_Operation的evaluate函数调用自身的doit虚函数
Step4: 各垃圾回收器派生的VM_Operation子类覆盖doit方法，
    实现各自的垃圾回收处理工作，一个典型的C++多态的使用。
```

## Q2: Stop The World到底如何让Java线程都停下来？

**为啥在垃圾收集期间其他工作线程会被挂起？**  
想象一下，你一边在收垃圾，另外一群人一边丢垃圾，垃圾能收拾干净吗?

停下来可不是让线程可以停在任何地方，因为接下来要进行的GC会导致堆区的对象进行“迁徙”，  
如果停的不合适，线程醒过来后对这些对象的操作将出现无法预期的错误。  

**那停在哪里合适呢？**  
由此引申出另一个重要的概念：安全点，进入安全点的线程意味着不会改变引用的关系。  

执行安全点同步是VMThread发起，在处理VM_Operation之前进行进入安全点同步，处理完成之后，撤销安全点同步。  

一个Java线程可能处于不同的状态，在HotSpot中，根据线程所处在不同的状态，让其进入安全点的方式也不尽相同。  

## Q3: 如何找到GC Roots？

GC的时候一般通过可达性分析算法找出还有价值的对象，将他们复制保留，剩下的不在追溯链中的对象将被清理消灭。  
可达性分析算法的起点是一组称为GC Roots的东西，那么GC Roots都是些什么东西？它们在哪里？  

```
虚拟机栈（栈帧中的本地变量表）中引用的对象
方法区中类静态属性引用的对象
方法区中常量引用的对象
本地方法栈中 JNI（即一般说的 Native 方法）引用的对象
```  

**GC的时候如何去找到它们呢？**  

核心思想很简单：提前将GC Roots的位置信息记录起来，GC的时候，按图索骥，快速找到它们。  
HotSpot 中的数据结构是 OopMap。  

## Q4: GC时如何处理四种特殊引用？  

**软引用**  

```
第一阶段：对于已经不再存活的对象，根据策略判定是否要从待清理列表移除
第二阶段：将指向对象还存活的引用从待清理列表移除
第三阶段：如果第一阶段的清理策略决定清理软引用，则到第三阶段将剩下的软引用置空，切断与对象最后的联系；  
    如果第一阶段的清理策略决定不清理软引用，则到第三阶段，待清理列表为空，软引用得以保留。
结论：一个只被软引用指向的对象，何时被清理，取决于清理策略，究其根源，取决于当前堆空间的使用情况
```

**弱引用**  

```text
第一阶段：无处理，第一阶段只处理软引用
第二阶段：将指向对象还存活的引用从待清理列表移除
第三阶段：剩下的弱引用指向对象均不再存活，将弱引用置空，切断与对象最后的联系
结论：一个只被弱引用指向的对象，第一次GC就被清理
```

**虚引用**  

```
第一阶段：无处理，第一阶段只处理软引用
第二阶段：将指向对象还存活的引用从待清理列表移除
第三阶段：剩下的虚引用指向对象均不再存活，将弱引用置空，切断与对象最后的联系
结论：一个只被虚引用指向的对象，第一次GC就被清理
```

## Q5: 对象移动后，引用如何修正？

在Java中，引用到底是如何“指向”对象的。在JVM的发展历史中，出现了两种方案：

* 句柄  

引用本身不直接指向对象，对象的地址存在一个表格中，引用本身只是这个表中表项的索引值。  
对象移动后，所有的引用本身不需修正，只需要修正这个表格中对应的对象地址即可。  
弊端是对于对象的访问需要经过一次“翻译转换”，性能上会打折扣。  

* 直接指针   

第二种方案就是直接指针的方式，没有中间商赚差价，引用本身就是一个指针。  
优势：访问对象更直接，性能上更快。弊端：对象移动后，引用的修复工作麻烦。  

以HotSpot为代表的的现代商业JVM选择了直接指针的方式进行对象访问定位。  
这种方式下就需要对所有存在的引用值进行修改，工作量不可谓不大。  

OopMap再一次扮演了救世主的身份。  
OopMap中存储的信息可以告诉JVM，哪些地方有引用，  
这份关键的信息，不仅用于寻找GC Roots进行垃圾回收，同时也是用于对引用进行修正的重要指南。