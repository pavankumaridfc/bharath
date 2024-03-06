 $(document).ready(function() {

$(function (){	

	var pattern = $('#bg-patt li a');
	
	$(pattern).click(function () {
		var patt = $(this).attr('href');	
		
		$('body').removeClass().addClass(patt);		
			return false;
	});
	
		
});


	var leftBg = $('#lbg-patt li a');
	
	$(leftBg).click(function () {
		var patt = $(this).attr('href');	
		
		$('#left-side').removeClass().addClass(patt);		
			return false;
	});
	

	var rightBg = $('#rbg-patt li a');
	
	$(rightBg).click(function () {
		var patt = $(this).attr('href');	
		
		$('#right-side').removeClass().addClass(patt);		
			return false;
	});
	
		


	
$('.closerer').click(function () {
	$('#optwrap').animate({"left": "-=203px"}, "4000");
	$(this).hide();
	$('.opener').show();
	return false;
});

$('.opener').click(function () {
	$('#optwrap').animate({"left": "+=203px"}, "4000");
	$(this).hide();
	$('.closerer').show();
	return false;
});

$('.opener').hover(function (){
	$(this).stop().animate({ 
			opacity : '1'
		}, 300);
			}, function() {
				$(this).stop().animate({ 
					opacity : '1' 
				}, 500);
});

/*

$('#lp-content').hover(function() {	
	console.log(this);
		$(this).find('.lp-overlay').fadeIn({duration: 300});
			},				
		function() {
			$(this).find('.lp-overlay').fadeOut({duration: 300});
		});

$('#lp-nivo').hover(function() {	
	console.log(this);
		$(this).find('.lp-overlay').fadeIn({duration: 300});
			},				
		function() {
			$(this).find('.lp-overlay').fadeOut({duration: 300});
		});		
	*/	
}); // end of jquery
  
  
  
  
  
  