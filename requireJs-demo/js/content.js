define(['jquery','bootstrap'],function(){
    return `<div class="content">
        <div class="container">
            <div class="content_wrap">
                <div class="panel-group" id="accordion">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" 
                                   href="#collapseOne">
                                    特点
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in">
                            <div class="panel-body">
                                <h3>异步加载模块</h3>
                                <p>当我们引入 js 文件时，不会阻塞浏览器对 html 文档的渲染。</p>
                                <h3>按依赖顺序加载</h3>
                                <p>我们不用在当心 js 文件的引入顺序，RequireJS 会自动帮我们处理依赖关系。</p>
                                <h3>模块依赖前置</h3>
                                <p>建议所有的依赖在模块开始就全部声明加载，不过现在也提供就近加载的方法。</p>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" 
                                   href="#collapseTow">
                                    baseUrl
                                </a>
                            </h4>
                        </div>
                        <div id="collapseTow" class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>在requirejs的模块路径解析里，  baseUrl 是非常基础的概念，离开了它，基本就玩不转了，所以这里简单介绍一下。
                                简单的说，  baseUrl 指定了一个目录，然后requirejs基于这个目录来寻找依赖的模块。</p>
                                <q>在html里加载requirejs，同时在requirejs所在的script上声明data-main 属性，那么，requirejs加载下来后，它会做两件事件：</q>
                                <p>1、加载js/main.js</p>
                                <p>2、将baseUrl设置为data-main指定的文件所在的路径，这里是 js/</p>
                                <p>除了  data-main 属性,你也可以手动配置  baseUrl ，比如下面例子。需要强调的是： 如果没有通过 data-main属性指定  
                                baseUrl ，也没有通过config的方式显示声明  baseUrl ，那么  baseUrl 默认为加载requirejs的那个页面所在的路径</p>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" 
                                   href="#collapseThree">
                                    define, require
                                </a>
                            </h4>
                        </div>
                        <div id="collapseThree" class="panel-collapse collapse">
                            <div class="panel-body">
                            <div>
                                <h4>define</h4>
                                <q>define(定义模块,引用模块,查找模块)</q>
                                <q>define("foo/title", ["my/cart", "my/inventory"], function(cart, inventory) { // do something})</q>
                            </div>
                              <div>
                                <h4>require</h4>
                                <q>require(dependencies?, factory)</q>
                            </div> 
                            <p>require 和 define 函数内部机制差不多，不一样的地方是 define 的回调函数需要有 return 语句返回模块对象，
                            这样 define 定义的模块才能被其他模块引用；require 的回调函数不需要 return 语句。</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
})
