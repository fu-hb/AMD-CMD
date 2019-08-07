define(function(require, exports, module){
    const init = function(){
        // 默认添加
        const head = require('head');
        const banner = require('banner');
        const content = require('content');
        $(".head_wrap").append(head.Head);
        $(".banner_wrap").append(banner.Banner1);
        $(".content_wrap").append(content.Content1);
        // 动态改变
        $('.dropdown-menu li').on('click',function(){
            const target = $(this).find('a').text()
            if(target.indexOf('Banner') !== -1 && banner[target]){
                $(".banner_wrap").empty().append(banner[target]);
            } else if(target.indexOf('Content') !== -1 && content[target]){
                $(".content_wrap").empty().append(content[target]);
            } else {
                alert(`没有 ${target} 模块`)
            }
        })
    }

    exports.init = init;
})
