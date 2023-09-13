

$(document).ready(function() {
		$("#accordian a").click(function() {
				var link = $(this);
				var closest_ul = link.closest("ul");
				var parallel_active_links = closest_ul.find(".active")
				var closest_li = link.closest("li");
				var link_status = closest_li.hasClass("active");
				var count = 0;

				closest_ul.find("ul").slideUp(function() {
						if (++count == closest_ul.find("ul").length)
								parallel_active_links.removeClass("active");
				});

				if (!link_status) {
						closest_li.children("ul").slideDown();
						closest_li.addClass("active");
				}
		})
})

$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});





$(document).ready(function() {
  // Gets the video src from the data-src on each button
  var $videoSrc;
  $(".video-btn").click(function() {
    $videoSrc = $(this).attr("data-src");
    console.log("img clicked" + $videoSrc);
  });

  // when the modal is opened autoplay it
  $("#myModal").on("shown.bs.modal", function(e) {
    console.log("modal opened" + $videoSrc);
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=1"
    );
  });

  // stop playing the youtube video when I close the modal
  $("#myModal").on("hide.bs.modal", function(e) {
    // a poor man's stop video
    $("#video").attr("src", $videoSrc);
  });

  // document ready
});




$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
        $("#header-srollr").addClass("small")
    } else {
        $("#header-srollr").removeClass("small")
    }
});

  $(function(){


  $('#marquee-vertical').marquee();  
  $('#marquee-horizontal').marquee({direction:'horizontal', delay:0, timing:50});  

});

