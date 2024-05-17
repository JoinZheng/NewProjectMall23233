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

const TAB_HEAD_TEMP =
  '<li class="active"><a href="javascript:;" class="t_name">{TITLE}</a><i class="t_close">&times;</i></li>';
var cached_view_pages = []; //缓存的视图页面

//创建页签页
function createTabPage(t, f) {
  if (t && "" != t && f && "" != f) {
    var p_idx = cached_view_pages.findIndex((itm) => t === itm.title);
    if (-1 < p_idx) {
      activeTabPage(p_idx, t);
      return false;
    }
    //生成页签头
    $(".vNav>li").removeClass("active");
    var $li_obj = $(TAB_HEAD_TEMP.replace("{TITLE}", t));
    $li_obj.click(function () {
      activeTabPage($li_obj.index(), t);
    });
    $li_obj.bind("contextmenu", function () {
      $(".updateNav").css({ top: "0", left: "0", display: "none" });
      let offset = $(".updateNav").offset({
        top: 89,
        left: $li_obj.position().left,
      });
      $(".updateNav").show("fast");
      return false;
    });
    $li_obj.find("i").click(function () {
      var i_idx = $li_obj.index();
      if (-1 < i_idx) {
        closeTabPage(i_idx);
      }
    });
    $(".vNav").append($li_obj);
    $(".vNav>li:eq(0)>i").remove();
    //创建页签内容
    $(".view-waper>object").attr("data", f);
    cached_view_pages.push({ title: t, file: f });
  }
}

function menuCk() {
  $(".nav-container li").click(function (i) {
    if (0 < $(this).children("ul").length) {
      return false;
    }
    var $a = $(this).children("a").first();
    var title = $a.find("span").text();
    var pageFileName = $a.attr("data-menu-url");
    if (!title || "" == title) {
      alert("页签标题不能为空!");
      return false;
    }
    if (!pageFileName || "" == pageFileName) {
      alert("页签的url不能为空!");
      return false;
    }
    createTabPage(title, pageFileName);
  });
}

//关闭页签
function closeTabPage(idx, ignoreConfirm) {
  if (!ignoreConfirm) {
    var result = confirm("确认关闭 ?");
    if (!result) {
      return false;
    }
  }
  if (-1 !== idx) {
    removeTabCache($(".vNav>li:eq(" + idx + ")")[0]);
    $(".vNav>li:eq(" + idx + ")").remove();
  } else {
    var aLi = $(".vNav>li:gt(0)");
    for (var i = 0; i < aLi.length; i++) {
      removeTabCache(aLi[i]);
    }
    aLi.remove();
  }
}
//关闭
//激活当前页签
function activeTabPage(idx, title) {
  if (-1 < idx) {
    $(".vNav>li").removeClass("active");
    $(".vNav>li:eq(" + idx + ")").addClass("active");

    var p_item = cached_view_pages.find((itm) => title === itm.title);
    $(".view-waper>object").attr("data", p_item.file);
  }
}
//移除页签数据缓存
function removeTabCache(doc_obj) {
  var title = $(doc_obj).find("a").text();
  var idx = cached_view_pages.findIndex((itm) => title === itm.title);
  if (-1 !== idx) {
    cached_view_pages.splice(idx, 1);
  }
}

$(function () {
  $(".vNav>li:gt(0)").remove();
  cached_view_pages = [{ title: "欢迎页", file: "welcome.html" }];
  //首页事件
  $(".vNav>li:eq(0)").click(function () {
    activeTabPage(0, cached_view_pages[0].title);
  });
  //注册点击左侧子菜单事件
  menuCk();

  //右键菜单事件
  $(".updateNav").mouseleave(function () {
    $(".updateNav").hide("fast");
  });
  $(".updateNav li").click(function () {
    var idx = $(this).index();
    switch (idx) {
      case 0:
        $(".view-waper>object").attr(
          "data",
          $(".view-waper>object").attr("data")
        );
        break;
      case 1:
        closeTabPage($(".vNav").find(".active").index());
        break;
      case 2:
        var t_idx = $(".vNav").find(".active").index();
        var aGt = $(".vNav>li:gt(" + t_idx + ")");
        for (var i = 0; i < aGt.length; i++) {
          removeTabCache(aGt[i]);
        }
        aGt.remove();
        $(".vNav>li:lt(" + t_idx + ")").each(function (i) {
          if (i > 0) {
            removeTabCache($(this)[0]);
            $(this).remove();
          }
        });
        break;
      case 3:
        closeTabPage(-1);
        break;
      default:
        break;
    }
  });
  //菜单
  $(".nav-scroll").niceScroll({
    cursorcolor: "#ccc", //#CC0071 光标颜色
    cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
    touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
    cursorwidth: "5px", //像素光标的宽度
    cursorborder: "0", //   游标边框css定义
    cursorborderradius: "5px", //以像素为光标边界半径
    autohidemode: false, //是否隐藏滚动条
  });
  $(".nav-container ul ul").css("display", "none");
  // nav-sidebar收缩展开
  $(".nav-sidebar a").on("click", function () {
    $(".nav-scroll").niceScroll({
      cursorcolor: "#ccc", //#CC0071 光标颜色
      cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
      touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
      cursorwidth: "5px", //像素光标的宽度
      cursorborder: "0", //   游标边框css定义
      cursorborderradius: "5px", //以像素为光标边界半径
      autohidemode: false, //是否隐藏滚动条
    });

    if (!$(".scrollbarMenu").hasClass("menuNini")) {
      $(this)
        .parent("li")
        .siblings("li.nav-sidebar-item")
        .children("ul")
        .slideUp(200);
      if ($(this).next().css("display") == "none") {
        //展开未展开
        // $('.nav-sidebar-item').children('ul').slideUp(300);

        $(this).next("ul").slideDown(200);
        $(this)
          .parent("li")
          .addClass("nav-sidebar-show")
          .siblings("li")
          .removeClass("nav-sidebar-show");
      } else {
        //收缩已展开
        $(this).next("ul").slideUp(200);
        //$('.nav-sidebar-item.nav-sidebar-show').removeClass('nav-sidebar-show');
        $(this).parent("li").removeClass("nav-sidebar-show");
      }
    }
  });
  //menuNini
  var bodyHiehgt = document.body.clientHeight - 50;
  var bodyWidth = document.body.clientWidth;

  $(".menuNini-btn svg").on("click", function () {
    if ($('.menuNini-btn input[type="checkbox"]').prop("checked")) {
      $(".nav-sidebar-item.nav-sidebar-show").removeClass("nav-sidebar-show");
      $(".nav-container ul").removeAttr("style");
      $(".scrollbarMenu").addClass("menuNini");
      $(".scrollbarMenu").stop().animate({ width: 60 }, 200);
      $(".rightView").addClass("viewNini");
      $("#leftNavMenu").getNiceScroll().hide();
    } else {
      $(".scrollbarMenu").removeClass("menuNini");
      $(".nav-container ul ul").css("display", "none");
      $(".scrollbarMenu").stop().animate({ width: 220 }, 200);
      $(".rightView").removeClass("viewNini");
      $(".nav-scroll").niceScroll({
        cursorcolor: "#ccc", //#CC0071 光标颜色
        cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
        cursorwidth: "5px", //像素光标的宽度
        cursorborder: "0", //   游标边框css定义
        cursorborderradius: "5px", //以像素为光标边界半径
        autohidemode: false, //是否隐藏滚动条
      });
    }
  });

  $(document).on(
    "mouseover",
    ".menuNini .nav-container ul:first>li",
    function () {
      $(".nav-popup.third").hide();
      $(".nav-popup.second").length == 0 &&
        $(".nav-container").append(
          "<div class='second nav-popup nav-sidebar'><div></div></div>"
        );
      $(".nav-popup.second>div").html($(this).html());
      $(".nav-popup.second").show();
      $(".nav-popup.third").hide();
      var top = $(this).offset().top;
      var d = $(window).height() - $(".nav-popup.second>div").height();
      if (d - top <= 0) {
        top = d >= 0 ? d - 8 : 0;
      }
      $(".nav-popup.second").stop().animate({ top: top }, 100);

      menuCk();
    }
  );

  $(document).on(
    "mouseover",
    ".second.nav-popup.nav-sidebar > div > ul > li",
    function () {
      if (!$(this).hasClass("nav-sidebar-item")) {
        $(".nav-popup.third").hide();
        return;
      }
      $(".nav-popup.third").length == 0 &&
        $(".nav-container").append(
          "<div class='third nav-popup nav-sidebar'><div></div></div>"
        );
      $(".nav-popup.third>div").html($(this).html());
      $(".nav-popup.third").show();
      var top = $(this).offset().top;
      var d = $(window).height() - $(".nav-popup.third").height();
      if (d - top <= 0) {
        top = d >= 0 ? d - 8 : 0;
      }
      $(".nav-popup.third").stop().animate({ top: top }, 100);
    }
  );

  $(document).on(
    "mouseleave",
    ".menuNini .nav-container ul:first, .menuNini .slimScrollBar,.second.nav-popup ,.third.nav-popup",
    function () {
      $(".nav-popup.second").hide();
      $(".nav-popup.third").hide();
    }
  );

  $(document).on(
    "mouseover",
    ".menuNini .slimScrollBar,.second.nav-popup",
    function () {
      $(".nav-popup.second").show();
    }
  );
  $(document).on("mouseover", ".third.nav-popup", function () {
    $(".nav-popup.second").show();
    $(".nav-popup.third").show();
  });

  $(".member").click(function (event) {
    if ($(this).find(".mdown").is(":hidden")) {
      $(this).find(".mdown").show();
    } else {
      $(this).find(".mdown").hide();
    }
    event.stopPropagation();
  });
  $("body").click(function () {
    $(this).find(".mdown").hide();
  });
  $("object").click(function () {
    $(this).find(".mdown").hide();
  });
  $(".mdown").click(function (event) {
    event.stopPropagation();
  });

  $(".sysFontSet").click(function (event) {
    if ($(this).find(".ftMdown").is(":hidden")) {
      $(this).find(".ftMdown").show();
    } else {
      $(this).find(".ftMdown").hide();
    }
    event.stopPropagation();
  });
  $("body").click(function () {
    $(this).find(".ftMdown").hide();
  });
  $("object").click(function () {
    $(this).find(".ftMdown").hide();
  });
  $(".ftMdown").click(function (event) {
    event.stopPropagation();
  });

  $(".navQuery").click(function (event) {
    if ($(this).find(".inputq").is(":hidden")) {
      $(this).find(".inputq").show();
    } else {
      $(this).find(".inputq").hide();
    }
    event.stopPropagation();
  });
  $("body").click(function () {
    $(this).find(".inputq").hide();
  });
  $("object").click(function () {
    $(this).find(".inputq").hide();
  });

  $(".inputq").click(function (event) {
    event.stopPropagation();
  });

  $("#navTabs").niceScroll({
    cursorcolor: "#ccc", //#CC0071 光标颜色
    cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
    touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
    cursorwidth: "5px", //像素光标的宽度
    cursorborder: "0", //   游标边框css定义
    cursorborderradius: "5px", //以像素为光标边界半径
    autohidemode: false, //是否隐藏滚动条
  });

  // 菜单结束
});
