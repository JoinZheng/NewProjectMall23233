/*
* 作者：Poya QQ：931989338
* 购买: 定制模板、主题
* 讨论群：149663025
* 公众平台：SoSoIT
* 微信号：SoSoIT-Center（加我请说明来意）
* title:后台系统UI框架;
* 店铺地址：https://shop155629335.taobao.com/?spm=a230r.7195193.1997079397.2.diL9ud
* 广告：本人承接各类大中小型管理系统的软件设计与前端开发、主题开发，
* 有需要的朋友联系我啦~~~~
*/
$(function(){
    $('.lsm-scroll').slimscroll({
        height: 'auto',
        position: 'right',
        railOpacity: 1,
        size: "5px",
        opacity: .4,
        color: '#fffafa',
        wheelStep: 5,
        touchScrollStep: 50
    });
    $('.lsm-container ul ul').css("display", "none");
    // lsm-sidebar收缩展开
    $('.lsm-sidebar a').on('click',function(){
        $('.lsm-scroll').slimscroll({
            height: 'auto',
            position: 'right',
            size: "8px",
            color: '#9ea5ab',
            wheelStep: 5,
            touchScrollStep: 50
        });
        if (!$('.scrollbarMenu').hasClass('menuNini')) {
            $(this).parent("li").siblings("li.lsm-sidebar-item").children('ul').slideUp(200);
            if ($(this).next().css('display') == "none") {
                //展开未展开
                // $('.lsm-sidebar-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(200);
                $(this).parent('li').addClass('lsm-sidebar-show').siblings('li').removeClass('lsm-sidebar-show');
            }else{
                //收缩已展开
                $(this).next('ul').slideUp(200);
                //$('.lsm-sidebar-item.lsm-sidebar-show').removeClass('lsm-sidebar-show');
                $(this).parent('li').removeClass('lsm-sidebar-show');
            }
        }
    });
    //menuNini
    $('.menuNini-btn svg').on('click',function(){
        if ($('.menuNini-btn input[type="checkbox"]').prop("checked")) {
            $('.lsm-sidebar-item.lsm-sidebar-show').removeClass('lsm-sidebar-show');
            $('.lsm-container ul').removeAttr('style');
            $('.scrollbarMenu').addClass('menuNini');
            $('.scrollbarMenu').stop().animate({width : 60},200);
            $('.rightView').addClass('viewNini');

        }else{
            $('.scrollbarMenu').removeClass('menuNini');
            $('.lsm-container ul ul').css("display", "none");
            $('.scrollbarMenu').stop().animate({width: 240},200);
            $('.rightView').removeClass('viewNini');
        }
    });

    $(document).on('mouseover','.menuNini .lsm-container ul:first>li',function(){
        $(".lsm-popup.third").hide();
        $(".lsm-popup.second").length == 0 && ($(".lsm-container").append("<div class='second lsm-popup lsm-sidebar'><div></div></div>"));
        $(".lsm-popup.second>div").html($(this).html());
        $(".lsm-popup.second").show();
        $(".lsm-popup.third").hide();
        var top = $(this).offset().top;
        var d = $(window).height() - $(".lsm-popup.second>div").height();
        if(d - top <= 0 ){
            top  = d >= 0 ?  d - 8 : 0;
        }
        $(".lsm-popup.second").stop().animate({"top":top}, 100);
    });

    $(document).on('mouseover','.second.lsm-popup.lsm-sidebar > div > ul > li',function(){
        if(!$(this).hasClass("lsm-sidebar-item")){
            $(".lsm-popup.third").hide();
            return;
        }
        $(".lsm-popup.third").length == 0 && ($(".lsm-container").append("<div class='third lsm-popup lsm-sidebar'><div></div></div>"));
        $(".lsm-popup.third>div").html($(this).html());
        $(".lsm-popup.third").show();
        var top = $(this).offset().top;
        var d = $(window).height() - $(".lsm-popup.third").height();
        if(d - top <= 0 ){
            top  = d >= 0 ?  d - 8 : 0;
        }
        $(".lsm-popup.third").stop().animate({"top":top}, 100);
    });

    $(document).on('mouseleave','.menuNini .lsm-container ul:first, .menuNini .slimScrollBar,.second.lsm-popup ,.third.lsm-popup',function(){
        $(".lsm-popup.second").hide();
        $(".lsm-popup.third").hide();
    });

    $(document).on('mouseover','.menuNini .slimScrollBar,.second.lsm-popup',function(){
        $(".lsm-popup.second").show();
    });
    $(document).on('mouseover','.third.lsm-popup',function(){
        $(".lsm-popup.second").show();
        $(".lsm-popup.third").show();
    });
});
