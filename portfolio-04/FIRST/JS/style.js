$(function(){


  $(window).scroll(function(){
    if($(window).scrollTop() > $("#concept").offset().top){
      $("#JS-header-nav").css("background","#232F35");
    }else{
      $("#JS-header-nav").css("background","none");
    }
  })
})