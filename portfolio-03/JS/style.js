$(function(){

  // HAMBURGER

  $('.header__nav--menu').click(function(){
    $('.header__nav--menu').toggleClass('open');
  // クラスの付与で、アイコン切り替え
   $('.header__hamburger').toggleClass('open');
      // メニューの表示
      $('body,html').scrollTop(0).toggleClass('noScroll')
      //ページを一番上に戻す＋スクロール防止
    $('.header__background--gray').fadeToggle();
    $('.header__nav--logo').toggleClass('gray');
  });
  
  
  /*aタグ要素に対して*/
  
  $('a').click(function(){
   $('.header__hamburger').removeClass('open');
    // リンクをクリックしたらメニューを消す
    $('.header__nav--menu.open').removeClass('open');
    // バーガーメニューをもとに戻す
    $('body.noScroll').removeClass('noScroll')
    // スクロール防止を消す
    $('.header__background--gray').fadeToggle();
    $('.header__nav--logo').toggleClass('gray');
  })

  //一定の範囲を越えたらメニューに背景色
  $(window).on('scroll',function(){
    if($('#header').height() < $(this).scrollTop()){ //この範囲を超えたら（#headerには高さが指定してある）
      $('.header__nav').addClass('withColor');//クラスの追加（.withColorには背景色のCSS）
    }else{
      $('.header__nav').removeClass('withColor');
    }
  
  });


  $(window).on('load', function(){
    $('body').removeClass('fadeout');
  });
  $('a:not([href^="#"]):not([target])').on('click', function(e){
    // e.preventDefault(); // ナビゲートをキャンセル
    url = $(this).attr('href'); // 遷移先のURLを取得
    if (url !== '') {
      $('body').addClass('fadeout');  // bodyに class="fadeout"を挿入
      setTimeout(function(){
        window.location = url;  // 0.8秒後に取得したURLに遷移
      }, 400);
    }
    return false;
  });

  $('head').append(
    '<style>body{display:none;}'
    );
    $(window).on("load", function() {
    $('body').delay(50).fadeIn("slow");
    });

 

  })