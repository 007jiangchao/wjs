
/*自己定义的js文件*/
'use strict';

/*业务:获得屏幕宽度  去根据屏幕宽度更换图片大小*/
$(function () {

    /*只要屏幕发生变化   这事件就启动*/
    function  path()  {
        /*获得屏幕宽度*/
        var resize = $(window).width();
            $("#main-carou > .carousel-inner > div").each(function (i, item) {

               // $(this).removeAttr("backgroundImage");
                var $item =$(item);

                $item.empty();
                $item.css("backgroundImage","url()");

            if(resize < 600)
            {
                var temp =  $(item).data("img-sm");
               /* $(item).height(100%);*/
                $item.css("height","auto");
                $item.html('<img src='+temp+'>');

            }
            else{
                $(item).height(410);
                $item.css("backgroundImage",$(item).data("img-lg"));
            }

        })
    }
    $(window).on("resize",path).trigger('resize');


    var tabwidth = 0;

    $("#tab .nav-tabs li").each(function (index, element) {
        var $el = $(element);
        tabwidth+= $el.width();
    })
    if($(window).width() <= tabwidth){
        $("#tab .nav-tabs").width(tabwidth);
        $("#tab .scroll").css("overflow-x","scroll");
    }



    $('[data-toggle="tooltip"]').tooltip()/*用于提示框*/



    /*屏幕滑动*/
    var carousel = $("#main-carou");
    var carousel_x = 0;
    var carousel_move = 0;
    carousel.on("touchstart", function (e) {
        console.log(e);
        carousel_x = e.originalEvent.touches[0].clientX;
        //console.log(carousel_x);
    })
    carousel.on("touchmove", function (e) {
        carousel_move = e.originalEvent.touches[0].clientX;
        //console.log(carousel_move);
    })
    carousel.on("touchend", function (e) {

        /*手一动距离要大于50才算是一动*/
        var temp = Math.abs(carousel_x - carousel_move);/*手指一动距离*/
        if(temp >= 50){
                carousel.carousel(carousel_x > carousel_move?'next':'prev')
        }
    })
});