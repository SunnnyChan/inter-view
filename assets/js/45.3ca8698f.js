(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{289:function(a,t,r){"use strict";r.r(t);var v=r(28),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"多线程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多线程"}},[a._v("#")]),a._v(" 多线程")]),a._v(" "),r("h2",{attrs:{id:"多线程有什么作用？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多线程有什么作用？"}},[a._v("#")]),a._v(" 多线程有什么作用？")]),a._v(" "),r("ol",[r("li",[r("p",[a._v("发挥多核CPU的优势"),r("br"),a._v("\n单核CPU上多线程是并发，多核CPU上的多线程是并行。"),r("br"),a._v("\n多线程，可以真正发挥出多核CPU的优势来，达到充分利用CPU的目的。")])]),a._v(" "),r("li",[r("p",[a._v("防止阻塞"),r("br"),a._v("\n单核CPU应用多线程是为了防止阻塞。")])]),a._v(" "),r("li",[r("p",[a._v("便于建模"),r("br"),a._v("\n将任务拆分，通过不同的线程执行，简化了任务的建模。")])])]),a._v(" "),r("h2",{attrs:{id:"什么是多线程的上下文切换？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是多线程的上下文切换？"}},[a._v("#")]),a._v(" 什么是多线程的上下文切换？")]),a._v(" "),r("p",[a._v("CPU控制权由一个已经正在运行的线程切换到另外一个就绪并等待获取CPU执行权的线程的过程。")]),a._v(" "),r("h2",{attrs:{id:"创建线程的方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建线程的方式"}},[a._v("#")]),a._v(" 创建线程的方式")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("继承Thread类\n继承Thread类（假设子类为MyThread），"),r("br"),a._v("\n并重写run()方法，然后new一个MyThread对象并对其调用start()即可启动新线程。")])]),a._v(" "),r("li",[r("p",[a._v("实现Runnable接口\n实现Runnable接口（假设实现类为MyRunnable），"),r("br"),a._v("\n而后将MyRunnable对象作为参数传入Thread构造器，在得到的Thread对象上调用start()方法即可。")])])]),a._v(" "),r("p",[a._v("Runnable 的方式更好，面向接口的编程接方式比继承类的方式更灵活，也能减少程序之间的耦合度。")]),a._v(" "),r("h2",{attrs:{id:"线程状态的转换"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#线程状态的转换"}},[a._v("#")]),a._v(" 线程状态的转换")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("新建")])]),a._v(" "),r("li",[r("p",[a._v("运行"),r("br"),a._v("\n可能正在执行。可能正在等待CPU为它分配执行时间")])]),a._v(" "),r("li",[r("p",[a._v("无限期等待"),r("br"),a._v("\n不会被分配CUP执行时间，它们要等待被其他线程显式唤醒")])]),a._v(" "),r("li",[r("p",[a._v("限期等待"),r("br"),a._v("\n不会被分配CUP执行时间，它们无须等待被其他线程显式唤醒，一定时间会由系统自动唤醒")])]),a._v(" "),r("li",[r("p",[a._v("阻塞\n阻塞状态在等待这获取到一个排他锁，这个时间将在另一个线程放弃这个锁的时候发生"),r("br"),a._v("\n等待状态就是在等待一段时间，或者唤醒动作的发生")])]),a._v(" "),r("li",[r("p",[a._v("结束\n已终止线程的线程状态，线程已经结束执行")])])]),a._v(" "),r("h2",{attrs:{id:"runnable接口-和callable接口的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#runnable接口-和callable接口的区别"}},[a._v("#")]),a._v(" Runnable接口 和Callable接口的区别")]),a._v(" "),r("p",[a._v("Runnable接口中的run()方法的返回值是void，它做的事情只是纯粹地去执行run()方法中的代码而已\nCallable接口中的call()方法是有返回值的，是一个泛型，和Future、FutureTask配合可以用来获取异步执行的结果。")]),a._v(" "),r("h2",{attrs:{id:"start-方法和run-方法的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#start-方法和run-方法的区别"}},[a._v("#")]),a._v(" start()方法和run()方法的区别")]),a._v(" "),r("p",[a._v("只有调用了start()方法，才会表现出多线程的特性，不同线程的run()方法里面的代码交替执行。"),r("br"),a._v("\n如果只是调用run()方法，那么代码还是同步执行的，必须等待一个线程的run()方法里面的代码全部执行完毕之后。"),r("br"),a._v("\n另外一个线程才可以执行其run()方法里面的代码。")]),a._v(" "),r("h2",{attrs:{id:"sleep方法和wait方法有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sleep方法和wait方法有什么区别"}},[a._v("#")]),a._v(" sleep方法和wait方法有什么区别")]),a._v(" "),r("p",[a._v("sleep方法和wait方法都可以用来放弃CPU一定的时间")]),a._v(" "),r("p",[a._v("不同点在于如果线程持有某个对象的监视器："),r("br"),a._v("\nsleep方法不会放弃这个对象的监视器。"),r("br"),a._v("\nwait方法会放弃这个对象的监视器。")]),a._v(" "),r("h2",{attrs:{id:"thread-sleep-0-的作用是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#thread-sleep-0-的作用是什么"}},[a._v("#")]),a._v(" Thread.sleep(0)的作用是什么")]),a._v(" "),r("p",[a._v("为了让某些优先级比较低的线程也能获取到CPU控制权。"),r("br"),a._v("\n可以使用Thread.sleep(0)手动触发一次操作系统分配时间片的操作，这也是平衡CPU控制权的一种操作。")]),a._v(" "),r("h2",{attrs:{id:"怎么检测一个线程是否持有对象监视器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#怎么检测一个线程是否持有对象监视器"}},[a._v("#")]),a._v(" 怎么检测一个线程是否持有对象监视器")]),a._v(" "),r("p",[a._v("Thread类提供了一个holdsLock(Object obj)方法。"),r("br"),a._v("\n当且仅当对象obj的监视器被某条线程持有的时候才会返回true，"),r("br"),a._v('\n注意这是一个static方法，这意味着 "某条线程"指的是当前线程。')]),a._v(" "),r("h2",{attrs:{id:"怎么唤醒一个阻塞的线程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#怎么唤醒一个阻塞的线程"}},[a._v("#")]),a._v(" 怎么唤醒一个阻塞的线程")]),a._v(" "),r("p",[a._v("如果线程是因为调用了wait()、sleep()或者join()方法而导致的阻塞，"),r("br"),a._v("\ninterrupte()，会将线程的中断标志重新设置为false，并抛出一个InterruptedException。"),r("br"),a._v("\n如果线程遇到了IO阻塞，无能为力，因为IO是操作系统实现的，Java代码并没有办法直接接触到操作系统。")]),a._v(" "),r("h2",{attrs:{id:"线程类的构造方法、静态块是被哪个线程调用的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#线程类的构造方法、静态块是被哪个线程调用的"}},[a._v("#")]),a._v(" 线程类的构造方法、静态块是被哪个线程调用的")]),a._v(" "),r("p",[a._v("被new这个线程类所在的线程所调用的\nrun方法里面的代码才是被线程自身所调用的")]),a._v(" "),r("h2",{attrs:{id:"如何在两个线程之间共享数据？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何在两个线程之间共享数据？"}},[a._v("#")]),a._v(" 如何在两个线程之间共享数据？")]),a._v(" "),r("p",[a._v("通过在线程之间共享对象，然后通过wait/notify/notifyAll、await/signal/signalAll进行唤起和等待，"),r("br"),a._v("\n比方说阻塞队列BlockingQueue就是为线程之间共享数据而设计的。")]),a._v(" "),r("h2",{attrs:{id:"为什么wait-方法和notify-notifyall-方法要在同步块中被调用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么wait-方法和notify-notifyall-方法要在同步块中被调用"}},[a._v("#")]),a._v(" 为什么wait()方法和notify()/notifyAll()方法要在同步块中被调用")]),a._v(" "),r("p",[a._v("这是JDK强制的，wait()方法和notify()/notifyAll()方法在调用前都必须先获得对象的锁。")]),a._v(" "),r("h2",{attrs:{id:"wait-方法和notify-notifyall-方法在放弃对象监视器时有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wait-方法和notify-notifyall-方法在放弃对象监视器时有什么区别"}},[a._v("#")]),a._v(" wait()方法和notify()/notifyAll()方法在放弃对象监视器时有什么区别")]),a._v(" "),r("p",[a._v("wait()方法立即释放对象监视器\nnotify()/notifyAll()方法则会等待线程剩余代码执行完毕才会放弃对象监视器")]),a._v(" "),r("h2",{attrs:{id:"线程调度算法是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#线程调度算法是什么"}},[a._v("#")]),a._v(" 线程调度算法是什么?")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("抢占式"),r("br"),a._v("\n线程的执行时间由系统来分配\n一个线程用完CPU之后，操作系统会根据线程优先级、线程饥饿情况等数据算出一个总的优先级并分配下一个时间片给某个线程执行。")])]),a._v(" "),r("li",[r("p",[a._v("协同式调度"),r("br"),a._v("\n线程的执行时间由线程本身控制。")])])])])}),[],!1,null,null,null);t.default=_.exports}}]);