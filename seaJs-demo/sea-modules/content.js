define(function (require, exports,module) {

    const Content1 = `
        <div class="panel panel-primary">
            <div class="panel-title">AMD</div>
            <div class="panel-body">
                 <p>是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。采用异步方式加载模块，
                 模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，
                 这个回调函数才会运行。</p>
                 <p>语法：define(id, dependences, factory);</p>
            </div>
        </div>
        <div class="panel panel-primary">
            <div class="panel-title">CommonJS</div>
            <div class="panel-body">
                 <p>用于服务器端模块化，有一个全局性方法require()，用于加载模块。</p>
                 <p>语法：require(dependences) // 加载依赖模块</p>
                 <p> exports.factory = function(){ // ...}; // 使用”exports”对象来做为输出的唯一表示。</p>
            </div>
        </div>
        <div class="panel panel-primary">
            <div class="panel-title">CMD</div>
            <div class="panel-body">
                 <p>CMD（Common Module Definition）是 SeaJS推广过程中产生的。和AMD不同的是，它并不是异步加载，而是松散加载，
                 只有当需要加载模块的时候，再用require方法引用模块。</p>
                 <p>语法：define(factory);</p>
            </div>
        </div>`;

    const Content2 = `
        <div class="jumbotron">
          <img src="./Images/cmd-example.png" alt="">
          <img src="./Images/usefull_third.png" alt="">
        </div>`;

    module.exports = {Content1,Content2};
})
