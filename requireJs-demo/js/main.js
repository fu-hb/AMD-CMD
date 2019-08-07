requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: './js',
    //the paths config could be for a directory.
    paths: {
        "jquery" : ["../plugins/jquery/jquery"],
        "bootstrap" : ["../plugins/bootstrap/js/bootstrap"],
        "head" : ["./head"],
        "banner" : ["./banner"],
        "conetent" : ["./content"],
    }
})
require(["jquery","head","banner","content"], function ($, head, banner,content) {
    $(document.body).append(head).append(banner).append(content);
})

