$(function(){

  $(function($){
    $('.headerImg').bgSwitcher({
      images:['img/fv-bgi_01@2x.jpg','img/fv-bgi_02@2x.jpg','img/fv-bgi_03@2x.jpg'],
    });
  });

  $(window).on('scroll',function(){
    if($('#header').height() < $(this).scrollTop()){
      $('.headerNav').addClass('withColor');
    }else{
      $('.headerNav').removeClass('withColor');
    }
  
  });


  $(window).on('load',function(){
    $('body').removeClass('fadeout');
  });

  $('a:not([href^="#"]):not([target])').on('click',function(e){
    e.preventDefault();
    url=$(this).attr('href');
    if(url !== ''){
      $('body').addClass('fadeout');
      setTimeout(function(){
        window.location = url;
      },400);
    }
    return false;
  });

  $('.hamburgerMenu').click(function(){
    $('.hamburgerMenu').toggleClass('close');
  // クラスの付与で、アイコン切り替え
   $('.hamburger').fadeToggle();
      // メニューの表示
      $('body,html').scrollTop(0).toggleClass('noScroll')
      //ページを一番上に戻す＋スクロール防止
  });
  
  
  /*aタグ要素に対して*/
  
  $('a').click(function(){
    $('.hamburger').hide();
    // リンクをクリックしたらメニューを消す
    $('.hamburgerMenu.close').removeClass('close');
    // バーガーメニューをもとに戻す
    $('body.noScroll').removeClass('noScroll')
    // スクロール防止を消す
  });
});