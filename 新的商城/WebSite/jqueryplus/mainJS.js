// JavaScript source code
$(function () {
    //菜单栏切换功能。
    $(".tab .tab-item").mousemove(function () {
        let child = $(this).find(".dropdown");
        if (child.length > 0) {
            child.addClass("open");
        }
        $(this).find("a:eq(0)").css("color", "#df3348");
    });
    $(".tab .tab-item").mouseout(function () {
        let child = $(this).find(".dropdown");
        if (child.length > 0) {
            child.removeClass("open");
        }
        //$(this).find("a:eq(0)").css("color", "#fff");
    });
    $(".TopMenu .title").mousemove(function () {
        $(this).addClass("title-active");
        $(this).find("a").css("color", "#000");
    });
    $(".TopMenu .title").mouseout(function () {
        $(this).removeClass("title-active");
        $(this).find("a").css("color", "#fff");
    });

});
/**
 * 简体，繁体切换功能
 * 
 * */
function textChange(type) {
    let cn = "简";
    let cf = "繁";
    if (type === 'cn') {
        $("#divCn").removeClass("langText");
        $("#divCf").addClass("langText");
        $("#divCn").html(`<a>${cn}</a>`);
        $("#divCf").html(cf);
    }
    if (type === 'cf') {
        $("#divCn").addClass("langText");
        $("#divCf").removeClass("langText");
        $("#divCn").html(cn);
        $("#divCf").html(`<a>${cf}</a>`);
    }
}
