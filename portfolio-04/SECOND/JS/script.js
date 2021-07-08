$(function(){

	$(window).scroll(function(){
	
		if($(window).scrollTop() > $("#concept").offset().top){
		
		$(".hero-area__navigation").css("background","#232F35");
		
		}else{
		$(".hero-area__navigation").css("background","none");
		
		}
	});
	
	
	$(".hamburger-menu").click(function(){
		$(".bar").toggleClass("close");
		$(".hamburger-navigation").fadeToggle();
		$("body,html").toggleClass("noScroll")
	});
	
	
});

