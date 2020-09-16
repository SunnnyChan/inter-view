(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{285:function(a,t,r){"use strict";r.r(t);var e=r(28),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"java-基础"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java-基础"}},[a._v("#")]),a._v(" Java 基础")]),a._v(" "),r("h2",{attrs:{id:"object中定义了哪些方法？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#object中定义了哪些方法？"}},[a._v("#")]),a._v(" object中定义了哪些方法？")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("clone()\nequals()\nhashCode()\ntoString()\nnotify()\nnotifyAll()\nwait()\nfinalize()\ngetClass()\n")])])]),r("h2",{attrs:{id:"为什么等待和通知是在-object-类而不是-thread-中声明的？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么等待和通知是在-object-类而不是-thread-中声明的？"}},[a._v("#")]),a._v(" 为什么等待和通知是在 Object 类而不是 Thread 中声明的？")]),a._v(" "),r("ol",[r("li",[a._v("同步是提供互斥并确保 Java 类的线程安全，而 wait 和 notify 是两个线程之间的通信机制。"),r("br"),a._v("\n记住同步和等待通知是两个不同的领域，不要把它们看成是相同的或相关的。"),r("br"),a._v("\n要确保这个机制对每个对象可用, 那么 Object 类则是的正确声明位置。")]),a._v(" "),r("li",[a._v("每个对象都可上锁，这是在 Object 类而不是 Thread 类中声明 wait 和 notify 的另一个原因。")]),a._v(" "),r("li",[a._v("在 Java 中为了进入代码的临界区，线程需要锁定并等待锁定，"),r("br"),a._v("\n他们不知道哪些线程持有锁，而只是知道锁被某个线程持有，"),r("br"),a._v("\n并且他们应该等待取得锁, 而不是去了解哪个线程在同步块内，并请求它们释放锁定。")]),a._v(" "),r("li",[a._v("Java 是基于 Hoare 的监视器的思想。在Java中，所有对象都有一个监视器。"),r("br"),a._v("\n线程在监视器上等待，为执行等待，我们需要2个参数：\n一个线程\n一个监视器(任何对象)\n在 Java 设计中，线程不能被指定，它总是运行当前代码的线程。但是，我们可以指定监视器(这是我们称之为等待的对象)。")])]),a._v(" "),r("h2",{attrs:{id:"for-each-与-常规for循环的-效率对比"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#for-each-与-常规for循环的-效率对比"}},[a._v("#")]),a._v(" for-each 与 常规for循环的 效率对比")]),a._v(" "),r("p",[a._v("for-each能够让代码更加清晰，并且减少了出错的机会。"),r("br"),a._v("\n使用for-each循环与常规的for循环相比，并不存在性能损失，即使对数组进行迭代也是如此。"),r("br"),a._v("\n实际上，在有些场合下它还能带来微小的性能提升，因为它只计算一次数组索引的上限。")]),a._v(" "),r("h2",{attrs:{id:"hashcode的作用是什么？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hashcode的作用是什么？"}},[a._v("#")]),a._v(" hashCode的作用是什么？")]),a._v(" "),r("h2",{attrs:{id:"与-equals-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#与-equals-的区别"}},[a._v("#")]),a._v(' ”==“与”equals()"的区别')]),a._v(" "),r("p",[a._v("“关系操作符生成的是一个boolean结果，它们计算的是操作数的值之间的关系”")]),a._v(" "),r("p",[a._v("== 就是用来比较值是否相等\nequals是Object类的方法，Object对它的实现是比较内存地址\n可以重写这个方法来自定义“相等”这个概念")]),a._v(" "),r("h2",{attrs:{id:"string-stringbuilder-stringbuffer的区别是什么？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#string-stringbuilder-stringbuffer的区别是什么？"}},[a._v("#")]),a._v(" String, StringBuilder, StringBuffer的区别是什么？")]),a._v(" "),r("p",[a._v("String: 不可变的字符序列，若要向其中添加新字符需要创建一个新的String对象\nStringBuilder: 可变字符序列，支持向其中添加新字符（无需创建新对象）\nStringBuffer: 可以看作线程安全版的StringBuilder")]),a._v(" "),r("h2",{attrs:{id:"为什么-string-在-java-中是不可变的？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么-string-在-java-中是不可变的？"}},[a._v("#")]),a._v(" 为什么 String 在 Java 中是不可变的？")]),a._v(" "),r("ol",[r("li",[a._v("由于 String 是不可变的，它可以安全地共享许多线程，这对于多线程编程非常重要")]),a._v(" "),r("li",[a._v("字符串已被广泛用作许多 Java 类的参数")]),a._v(" "),r("li",[a._v("Java 中的不可变 String 缓存其哈希码"),r("br"),a._v("\n使得它在 Java 中的 HashMap 中使用的 HashMap 键非常快。"),r("br"),a._v("\n因为 String 是不可变的，所以没有人可以在创建后更改其内容，这保证了 String 的 hashCode 在多次调用时是相同的。")]),a._v(" "),r("li",[a._v("String 不可变的绝对最重要的原因是它被类加载机制使用，因此具有深刻和基本的安全考虑。"),r("br"),a._v("\n如果 String 是可变的，加载“java.io.Writer” 的请求可能已被更改为加载 “mil.vogoon.DiskErasingWriter”。")]),a._v(" "),r("li",[a._v("字符串池的使用。"),r("br"),a._v("\n使得String是多引用的。")])]),a._v(" "),r("p",[a._v("安全性和字符串池是使字符串不可变的主要原因。")]),a._v(" "),r("h2",{attrs:{id:"为什么-char-数组比-java-中的-string-更适合存储密码？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么-char-数组比-java-中的-string-更适合存储密码？"}},[a._v("#")]),a._v(" 为什么 char 数组比 Java 中的 String 更适合存储密码？")]),a._v(" "),r("p",[a._v("在字符数组中存储密码可以明显降低窃取密码的安全风险。"),r("br"),a._v("\nString 在字符串池中, 它很可能会保留在内存中持续很长时间，从而构成安全威胁。")]),a._v(" "),r("h2",{attrs:{id:"io与nio的区别？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#io与nio的区别？"}},[a._v("#")]),a._v(" IO与NIO的区别？")]),a._v(" "),r("p",[a._v("IO 是面向流的，这意味着我们需要每次从流中读取一个或多个字节，直到读取完所有字节。\nNIO是面向缓冲的，也就是说会把数据读取到一个缓冲区中，然后对缓冲区中的数据进行相应处理。")]),a._v(" "),r("p",[a._v("IO 是阻塞 IO，而 NIO 是非阻塞 IO")]),a._v(" "),r("p",[a._v("NIO中存在一个称为选择器（selector）的东西，它允许你把多个通道（channel）注册到一个选择器上，\n然后使用一个线程来监视这些通道，若这些通道里有某个准备好可以开始进行读或写操作了，则开始对相应的通道进行读写。\n而在等待某通道变为可读/写期间，请求对通道进行读写操作的线程可以去干别的事情。")])])}),[],!1,null,null,null);t.default=n.exports}}]);