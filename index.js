$(function(){
	$('#arrow-about').click(function(){
	  $('html,body').animate({scrollTop:$('.about').offset().top}, 1000);
	}); 
	$('#nav-about').click(function(){
	  $('html,body').animate({scrollTop:$('.about').offset().top}, 1000);
	});
	$('#arrow-activities').click(function(){
	  $('html,body').animate({scrollTop:$('.activities').offset().top}, 1000);
	});
	$('#nav-activities').click(function(){
	  $('html,body').animate({scrollTop:$('.activities').offset().top}, 1000);
	});
});