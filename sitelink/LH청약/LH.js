$(document).ready(function(){
    $(".maincon li").mouseover(function(){
        $(this).addClass("on");
    })
    $(".maincon li").mouseout(function(){
        $(this).removeClass("on")
    })

    $(".toggle").click(function(){
        $(this).toggleClass("hide");
        $(".Quickmenu").toggleClass("hide");
    })
});
$(function(){
    $(".maincon a").on('focusin mouseenter', function(){
        $(this).parent().addClass('on').siblings().removeClass('on');
    });
    $(".maincon").on('mouseleave', function(){
        $(".maincon li").removeClass('on');
    });
});

$(window).on('resize',function(){
    if($(window).width() < 768){
        $('.maincon li').removeClass('on');
    }else{
        $('.maincon .advance').addClass('on');
    }
}).resize();