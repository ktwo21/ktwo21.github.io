const titles = document.querySelectorAll('.accordion-title');
//まずは、クリックできる対象すべてを取得（Classで取得すると配列でなくなるので注意）

titles.forEach( titleEach => {
  //foreach文でタイトルのすべてを一つずつ取り出して、以下を繰り返し処理
  let h4 = titleEach.nextElementSibling;
  //タイトルの次の要素を取得
  titleEach.addEventListener('click',function(){
    //タイトルがクリックされたとき
    titleEach.classList.toggle('is-active');
    //タイトルにクラスを取得
    h4.classList.toggle('is-open')
    //タイトルの次の要素にクラスを取得

  })
});


var mySwiper = new Swiper ('.swiper-container', {
  
  autoplay: {
  delay: 5000,
  disableOnInteraction: true
  },
  centeredSlides: true,
  slidesPerView:1.2,
  spaceBetween:10,
  // slidesPerView: 4.3,
  // spaceBetween: 30,
  initialSlide: 1,
  loop: true,
  autoResize:true,
  touchRatio: 1,
  followFinger: false ,
  breakpoints:{
    500:{
      slidesPerView:2,
      spaceBetween:10,
    },
    800:{
      slidesPerView:3.2,
      spaceBetween:10,
    },
    1100:{
      slidesPerView:4.3,
      spaceBetween:30,
    },
  }
});

AOS.init();


$(function(){

  const $submit = $('#submit');

  //各フォームに変化があった際の発火
  $('#form input,#form textarea').on('change',function(){
    if(
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form textarea').val() !== "" &&
      $('#form #checkbox').prop('checked') === true
    ){
      $submit.prop('disabled',false);
    }else{
      $submit.prop('disabled',true);   
    }
  });

  //ボタンを押されたときの発火
  $('#submit').on('click',function(){
    if(
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form textarea').val() !== "" &&
      $('#form #checkbox').prop('checked') === true
    ){
      $submit.prop('disabled',false);
      $('.submit-error').css('visibility','hidden');
    }else{
      $submit.prop('disabled',true);   
      $('.submit-error').css('visibility','visible');  
    }
  })

  //formをGformに遷移させない記述
  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeE6xdWOolj8JqcoGslVZNT3twujn1HjrJL7SASvPOnQPvzuA/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".button").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });


 //ハンバーガーメニュー
  $('.hamburger-menu').click(function(){
    $('.hamburger-menu').toggleClass('close');
    // クラスの付与で、アイコン切り替え
    $('.hamburger__nav').toggleClass('open');
    // メニューの表示
    $('body,html').toggleClass('noScroll')
    //スクロール防止
    $('.hamburger__background').fadeToggle();
  });
  
  
  /*aタグ要素に対して*/
  
  $('a').click(function(){
    $('.hamburger-menu').removeClass('open');
    // リンクをクリックしたらメニューを消す
    $('.hamburger-menu.close').removeClass('close');
    // バーガーメニューをもとに戻す
    $('body.noScroll').removeClass('noScroll')
    // スクロール防止を消す
  })
})