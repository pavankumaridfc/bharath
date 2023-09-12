$(document).ready(function() {


// REMOVES THE STICKY NAVIGATION FROM IE7

if($.browser.msie && parseInt($.browser.version, 10) <= 7) {			
	$('#navigation').removeClass('sticky-nav');		
}


//INITIALIZES THE PERSISTENT TOP NAVIGATION BAR ON SMALLER SCREENS

	$(window).load(function(){		
		$(".sticky-nav").sticky({ topSpacing: 0 });
		$(".sticky-wrapper").css({height : '0'});			
	});


//LOCAL LINK FUNCTION	

	$('.local').click(function() {
		var ele = $(this);
		var location = $(ele).attr('href');
			
		$('html, body').animate({
			scrollTop: $(location).offset().top
		}, 1000);
	});
	

//INITIALIZES PRETTYPHOTO PLUGIN

	$("a[data-pp-rel^='prettyPhoto']").prettyPhoto({theme:'light_square', social_tools:false}); //choose between different styles / dark_rounded / light_rounded / dark_square / light_square / facebook /
	
	if($.browser.msie && parseInt($.browser.version, 10) <= 8) {
	   $(function (){	
						
			$("a[data-pp-rel^='prettyPhoto']").click(function() {
				var position = $('.pp_pic_holder').offset();
				var newPosition = position.top - 2000;
				$('.pp_overlay').css({top : newPosition});
			});
		
		});
	} 
	
	
	
//INITIALIZES TWITTER FEED PLUGIN

	$('.twitter-feed').tweet({
		username: 'ivanjezh',  //just enter your twitter username
		modpath: './twitter/',
		join_text: '',
		avatar_size: null,
		count: 1, //number of tweets showing
		auto_join_text_default: ' ',
		loading_text: 'loading latest tweets...' //text displayed while loading tweets
	});	
	

//Detecting the iOS devices 
	
	var deviceAgent = navigator.userAgent.toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);	
	
//iPad BACKGROUND 

	/*	
		If you're using fixed fullscreen background image for the body, place the fallback bg class 
		for the iPad as it won't render the fixed image properly. 
		Use any of the classes with repeatable patterns (pattern-1 - pattern-10)	
	*/

	
		if (agentID) {
			$('body').removeClass().addClass('pattern-3');	//remove the comment tags to activate the code
		}
		

//NAVIGATION
	
	// If iOS device, run this code which fixes the issue with unclickable links after scroll
	if (agentID) {
 
        $('#nav-scroll').onePageNav({
		currentClass: 'active',
		begin: function() {
			//Hack so you can click other menu items after the initial click
			$('body').append('<div id="device-dummy" style="height: 1px;"></div>');
		},
		end: function() {
			$('#device-dummy').remove();
		}
	});
	// If not an iOS device run this code
	} else {
		$('#nav-scroll').onePageNav({
			currentClass: 'active'
		});
	}


		
	
//CREATING RESPONSIVE NAVIGATION (DROPDOWN MENU)	

	// Create the dropdown base
	$("<select />").appendTo("#navigation");

	// Create default option "Go to..."
	$("<option />", {
		"selected": "selected",
		"value"   : "",
		"text"    : "Go to..."
	}).appendTo("#navigation select");

	// Populate dropdown with menu items
	$(".nav li a").each(function() {
		var el = $(this);
		$("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
		}).appendTo("#navigation select");
	});
	
	$("#navigation select").change(function() {
		window.location = $(this).find("option:selected").val();
	});
	
	
	
//TOGGLE PANELS

	$('.toggle-content').hide();  //hides the toggled content, if the javascript is disabled the content is visible

	$('.toggle-header a').click(function () {		
		
		if ($(this).is('.tog-close')) {
			$(this).removeClass('tog-close')
			.addClass('tog-open')
			.closest('.toggle-header')
			.next('.toggle-content')
			.slideToggle(300);
			return false;
		} 		
		else {
			$(this).removeClass('tog-open')
			.addClass('tog-close')
			.closest('.toggle-header')
			.next('.toggle-content')
			.slideToggle(300);
			return false;
		}
	});	
	
	
	
//ACCORDION PANELS

	$('.accordion-content').hide();  //hides the toggled content, if the javascript is disabled the content is visible

	$('.accordion-header a').click(function () {			
		if ($(this).is('.acc-close')) {
		
		$(this).removeClass('acc-close').addClass('acc-open').closest('.accordion-header').next('.accordion-content').slideUp(300);
			return false;
		} 	
		else {
			$('.accordion-header a').removeClass('acc-close').addClass('acc-open').closest('.accordion-header').next('.accordion-content').slideUp(300);
			$(this).removeClass('acc-open').addClass('acc-close').closest('.accordion-header').next('.accordion-content').slideDown(300);		
			return false;
		}
	});	
	


//NOTIFICATION BOXES

	$('.info-close').click(function () {
	
		var parent = $(this).parent();
	
		$(parent).slideUp({duration: 300});
		return false;
	
	});
	
// TOOLTIPS

	$('#social-links li[title]').tooltip({
		effect: 'fade',
		fadeInSpeed: 300,
		fadeOutSpeed: 200,
		opacity: 1,
		offset: [-5, 0]		
	});	
	
	
	
// BOX HOVER SUBTITLE COLOR CHANGE	
			
	if($.browser.msie && parseInt($.browser.version, 10) <= 8) {
		
		$('.boxes-dark .box').hover(function() {		
			$(this).find('.subtitle').css({ color : '#2f2f2f'});
		},	
			
		function() {
			$(this).find('.subtitle').css({ color : '#646464' });
		});	
		
	} else {
			
		$('.boxes-dark .box').hover(function() {	
		
			$(this).find('.subtitle').css({ color : '#2f2f2f'});
			$(this).find('img').stop().animate({opacity : '1'}, 300);
				},	
				
			function() {
				$(this).find('.subtitle').css({ color : '#646464' });
				$(this).find('img').stop().animate({opacity : '.2'}, 300);
			});		
		}	

		
// BLOG IMAGE HOVER
			
	$('.img-link img').hover(function() {	
		$(this).stop().animate({opacity : '.7'}, 200);
			},				
		function() {
			$(this).stop().animate({opacity : '1'}, 200);
		});

		
		
// PORTFOLIO LOAD MORE IMAGES

		$("ul.portfolio-thumbs li").hide();
		
		var viewportWidth = $(window).width(); //gets the browser window width
	
		if (viewportWidth<1024) { //checks the window screen size
			$("ul.portfolio-thumbs li").slice(0, 6).show();	// if on a small screen load the first 6 portfolio items
		} else {
			$("ul.portfolio-thumbs li").slice(0, 9).show();	//if on a standard size screen load first 9 portfolio items
			}
		
		
		$("#load-more").click(function(){
			var showing = $("ul.portfolio-thumbs li:visible").length;
			$("ul.portfolio-thumbs li").slice(showing - 1, showing + 3).fadeIn({duration: 1500}); //when clicked on the load-more btn display additional 3 items
			return false;
		});
		

//OVERLAY ANIMATION

		
		$('ul.portfolio-thumbs li').hover(function(){  
			 $(".overlay", this).stop().animate({bottom:'0px'},{queue:false,duration:200});  
		 }, function() {  
			$(".overlay", this).stop().animate({bottom:'228px'},{queue:false,duration:200});  
		});  
		
		
		
//SHARE NETWORKS

	$('.share-networks').hide();

	$('.share-btn').click(function() {

		if ($(this).is('.closed')) {
			$(this).removeClass('closed').addClass('opened').prev('.share-networks').slideDown(500);		
				return false;
			} 
		else {
			$(this).removeClass('opened').addClass('closed').prev('.share-networks').slideUp(500);		
				return false;
		}
			
	});	

	 
//MAKING CONTENT SLIDER NAV VISIBLE ON HOVER 

	if (viewportWidth>480) { //checks the window screen size
		var sliderNav = $('.arrow');
		var sliderNavHeight = $('.arrow').height();
		$('.arrow').css({height: '0'});
		 
		$("#content-slider").hover(function() {			
			$(sliderNav).stop().animate({height : sliderNavHeight}, 200);
				}, function() {
					$(sliderNav).stop().animate({height : '0'}, 200);				
				});
	}			
	
	
//MAKING NIVO SLIDER NAV VISIBLE ON HOVER

			
	if (viewportWidth>480) { //checks the window screen size

	var nivoNav = $('.nivo-directionNav a');
	var nivoNavHeight = $('.nivo-directionNav a').height();
	$('.nivo-directionNav a').css({height: '0'});
	 
	$("#nivo-slider").hover(function() {			
		$(nivoNav).stop().animate({height : nivoNavHeight}, 200);
			}, function() {
				$(nivoNav).stop().animate({height : '0'}, 200);				
			});	
	} 		

		
//PORTFOLIO FILTER		
	
	$('ul.filter a').click(function() {
		$(this).css('outline','none');
		$('ul.filter li a.current').removeClass('current');
		$(this).addClass('current');

		var filterVal = $(this).attr('href').toLowerCase().replace(' ','-');

		if(filterVal == 'all') {
			$('ul.portfolio-thumbs li').animate({opacity : '1'}).find('a').css({cursor : 'auto'}).click(function() { return true; });
					$('ul.portfolio-thumbs li').find('.overlay').css({display: 'block'});
		} else {
			$('ul.portfolio-thumbs li').each(function() {
				if(!$(this).hasClass(filterVal)) {
					$(this).animate({opacity : '0.2'}).find('a').css({cursor : 'default'}).click(function() { return false; });
					$(this).find('.overlay').css({display: 'none'});
				} else {
					$(this).animate({opacity : '1'}).find('a').css({cursor : 'auto'}).click(function() { return true; });
					$(this).find('.overlay').css({display: 'block'});
				}
			});
		}

		return false;
	});				
			
			
			
// CONTACT FORM 
		
	$('#contact-form').ajaxForm({
		target: '#message-outcome',
			beforeSubmit: function() {
				$('#message-outcome').addClass('visible');
			},
				success: function() {
					$('#message-outcome').slideDown({duration: 500});
				}
	});	

	$.getJSON('captcha.php', function(json) {
			$('.security-question').append(json)
		});

		
	

});	//END of jQuery





