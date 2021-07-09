$(function(){

	$(window).scroll(function(){
	
		if($(window).scrollTop() > $("#concept").offset().top){
		
		$(".hero-area__navigation").css("background","#232F35");
		
		}else{
		$(".hero-area__navigation").css("background","none");
		
		}
	});
	
	
	$("a").click(function(){
		$("#menu-btn").removeAttr("checked").prop('checked', false).change();
		
	});
	
});

