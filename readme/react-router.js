//react-router
//参考资料地址：
/*
    官方中文翻译文档：http://react-guide.github.io/react-router-cn/docs/API.html
    sf论坛文档：https://segmentfault.com/a/1190000010174260
 */


 /*
    hhh，刚上手就踩了这几多坑。溜溜溜
    需要注意的是：Router(1.BrowserRouter,2.HashRouter)下边只能有一个唯一子元素，并且，路由切换Link也必须在这个router下
    Route「**千万注意不是Router」可以由Switch包起来，这样就可以按需渲染
    上述提到的BrowserRouter/HashRouter/Switch/Route都由react-router-dom引入

    Route项中的属性exact是确保匹配路由path按严格规则匹配，即必须一毛一样，（path:"/todo"必须匹配"/todo"，不能是"/todo/2"）
    默认跳转路由地址暂时还没有学到。
 */