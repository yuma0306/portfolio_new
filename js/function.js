$(window).on('load',function(){
    $("#splash-logo").delay(1000).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1000).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

    //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg1').on('animationend', function() {
    //この中に動かしたいJSを記載
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
});


// swiper
var mySwiper = new Swiper('.swiper-container', {
    speed: 300,
    loop: true,
    autoHeight: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
});

//tab
function serviceTab() {
    var tab = $('.service__tab-item');
    var content = $('.service__item');
    $(tab).on('click',function() {
        let dataNum = $(this).data('num');
        $(tab).removeClass('active');
        $(this).addClass('active');
        $(content).fadeOut(0);
        switch (dataNum) {
            case 1:
                $('.service__item:nth-of-type(1)').fadeIn(0);
            break;
            case 2:
                $('.service__item:nth-of-type(2)').fadeIn(0);
            break;
            case 3:
                $('.service__item:nth-of-type(3)').fadeIn(0);
            break;
        }
    });
}
serviceTab();

//scroll
// $(function() {
//   $('a[href^="#"]').click(function(e) {
//     var href = $(this).attr("href");
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     var position = target.offset().top;
//       $.when(
//         $("html, body").animate({
//           scrollTop: position
//         }, 400, "swing"),
//         e.preventDefault()
//       ).done(function() {
//         var diff = target.offset().top;
//         if (diff === position) {
//         } else {
//           $("html, body").animate({
//             scrollTop: diff
//           }, 10, "swing");
//         }
//       });
//   });
// });

// burgerLock
var open_position;
function burgerLock(){
  var $wrapper = $('#wrapper');
  var burgerOpen = $('#js-header-menu').hasClass('active');
  if(burgerOpen) {
      open_position = $(window).scrollTop();
      $wrapper.css({'width':'100%', 'position':'fixed', 'top': -(open_position)});
  } else {
      $wrapper.attr('style','');
      $(window).scrollTop(open_position);
  }
}

//burger
$(function() {
  var $burger = $('#js-header-menu');
  var $menu = $('#js-menu');
  var $jsMask = $('#js-mask');
  $($burger).click(function() {
    $(this).toggleClass('active');
    $($menu).slideToggle();
    $($jsMask).fadeToggle();
    burgerLock();
  });
  $('#js-mask, .g-nav__item').click(function() {
    $($burger).removeClass('active');
    $($menu).slideUp();
    $($jsMask).fadeOut();
    burgerLock();
  });
});

//scroll
$(function(){
  $(window).scroll(function (){
    $('.left-to-right, .right-to-left, .down-to-top').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 150){
          $(this).addClass('scrollin');
        }
    });
  });
});

//js-switch
$(function () {
  var $setElem = $(".js-switch");
  var pc = "pc";
  var sp = "sp";
  var replaceWidth = 767;
  $setElem.each(function () {
    var $this = $(this);
    function imgSize() {
      if (window.innerWidth > replaceWidth) {
        if ($this[0].tagName == "IMG") {
          $this.attr("src", $this.attr("src").replace(sp, pc));
        }
      } else {
        if ($this[0].tagName == "IMG") {
          $this.attr("src", $this.attr("src").replace(pc, sp));
        }
      }
  }
  var resizeTimer;
  $(window).on('load resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        imgSize();
      }, 200);
    });
  });
});

//ipad対応
function deviceJudgment() {
  var ua = navigator.userAgent;
  if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
      $('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1">');
  } else {
      $('head').prepend('<meta name="viewport" content="width=1200">');
  }
}
deviceJudgment();


$(function(){
    $('a[href^="#"]').click(function(){
      let speed = 500;
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
  });
