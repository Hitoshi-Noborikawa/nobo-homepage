// 画面遷移
$(window).on('load', function() {
  $('body').removeClass('fadeout');
});

//header
$(function() {
  // ハッシュリンク（＃）と別ウィンドウでページを開く場合はスルー
  $('a:not([href^="#"]):not([target])').on('click', function(e) {
    e.preventDefault(); // ナビゲートをキャンセル
    url = $(this).attr('href') // 遷移先のURLを取得
    if (url !== '') {
      $('body').addClass('fadeout'); // bodyにclass="fudaout"を挿入
      setTimeout(function() {
        window.location = url; // 0.8秒後に取得したURLに遷移
      }, 800);
    }
    return false;
  });
});

// スクロールフェードイン
// nav
$(function(){

  var effect_btm = 0; // 画面下からどの位置でフェードさせるか(px)
  var effect_move = 50; // どのぐらい要素を動かすか(px)
  var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

  //親要素と子要素のcssを定義
  $('.nav').css({
      opacity: 0
  });
  $('.nav').children().each(function(){
      $(this).css({
          opacity: 0,
          transform: 'translateY('+ effect_move +'px)',
          transition: effect_time + 'ms'
      });
  });

  // スクロールまたはロードするたびに実行
  $(window).on('scroll load', function(){
      var scroll_top = $(this).scrollTop();
      var scroll_btm = scroll_top + $(this).height();
      var effect_pos = scroll_btm - effect_btm;

      //エフェクトが発動したとき、子要素をずらしてフェードさせる
      $('.nav').each( function() {
          var this_pos = $(this).offset().top;
          if ( effect_pos > this_pos ) {
              $(this).css({
                  opacity: 1,
                  transform: 'translateY(0)'
              });
              $(this).children().each(function(i){
                  $(this).delay(100 + i*200).queue(function(){
                      $(this).css({
                          opacity: 1,
                          transform: 'translateY(0)'
                      }).dequeue();
                  });
              });
          }
      });
  });
});

// zoom-image
$(function(){

  var effect_btm = 300; // 画面下からどの位置でフェードさせるか(px)
  var effect_move = 50; // どのぐらい要素を動かすか(px)
  var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

  //親要素と子要素のcssを定義
  $('.zoom-grayscale').css({
      opacity: 0
  });
  $('.zoom-grayscale').children().each(function(){
      $(this).css({
          opacity: 0,
          transform: 'translateY('+ effect_move +'px)',
          transition: effect_time + 'ms'
      });
  });

  // スクロールまたはロードするたびに実行
  $(window).on('scroll load', function(){
      var scroll_top = $(this).scrollTop();
      var scroll_btm = scroll_top + $(this).height();
      var effect_pos = scroll_btm - effect_btm;

      //エフェクトが発動したとき、子要素をずらしてフェードさせる
      $('.zoom-grayscale').each( function() {
          var this_pos = $(this).offset().top;
          if ( effect_pos > this_pos ) {
              $(this).css({
                  opacity: 1,
                  transform: 'translateY(0)'
              });
              $(this).children().each(function(i){
                  $(this).delay(100 + i*200).queue(function(){
                      $(this).css({
                          opacity: 1,
                          transform: 'translateY(0)'
                      }).dequeue();
                  });
              });
          }
      });
  });
});

// maintitle
$(function(){
  var effect_pos = 700; // 画面下からどの位置でフェードさせるか(px)
  var effect_move = 50; // どのぐらい要素を動かすか(px)
  var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

  // フェードする前のcssを定義
  $('.maintitle').css({
      opacity: 0,
      transform: 'translateY('+ effect_move +'px)',
      transition: effect_time + 'ms'
  });

  // スクロールまたはロードするたびに実行
  $(window).on('scroll load', function(){
      var scroll_top = $(this).scrollTop();
      var scroll_btm = scroll_top + $(this).height();
      effect_pos = scroll_btm - effect_pos;

      // effect_posがthis_posを超えたとき、エフェクトが発動
      $('.maintitle').each( function() {
          var this_pos = $(this).offset().top;
          if ( effect_pos > this_pos ) {
              $(this).css({
                  opacity: 1,
                  transform: 'translateY(0)'
              });
          }
      });
  });
});

// subtitle
// $(function(){
//   var effect_pos = 700; // 画面下からどの位置でフェードさせるか(px)
//   var effect_move = 50; // どのぐらい要素を動かすか(px)
//   var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

//   // フェードする前のcssを定義
//   $('.inquiry').css({
//       opacity: 0,
//       transform: 'translateY('+ effect_move +'px)',
//       transition: effect_time + 'ms'
//   });

//   // スクロールまたはロードするたびに実行
//   $(window).on('scroll load', function(){
//       var scroll_top = $(this).scrollTop();
//       var scroll_btm = scroll_top + $(this).height();
//       effect_pos = scroll_btm - effect_pos;

//       // effect_posがthis_posを超えたとき、エフェクトが発動
//       $('.inquiry').each( function() {
//           var this_pos = $(this).offset().top;
//           if ( effect_pos > this_pos ) {
//               $(this).css({
//                   opacity: 1,
//                   transform: 'translateY(0)'
//               });
//           }
//       });
//   });
// });

// スクロールトップ
$(function() {
  var pagetop = $('#page-top');
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({scrollTop: 0}, 500);
    return false;
  });
});

// ハンバーガーメニュー
$(function(){
  $(".btn-gnavi").on("click", function(){
    // ハンバーガーメニューの位置を設定
    var rightVal = 0;
    if($(this).hasClass("open")){
      // 位置を移動させメニューを開いた状態にする
      rightVal = -300;
      // メニューを開いたら次回クリック時は閉じた状態になるよう設定
      $(this).removeClass("open");
    } else {
      // メニューを開いたら次回クリック時は閉じた状態になるよう設定
      $(this).addClass("open");
    }
    $("#global-navi").stop().animate({
      right: rightVal
    }, 200);
  });
});