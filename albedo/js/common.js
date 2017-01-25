$(function() {
	$('.menu li a').click(
		function() {
			$('.menu').find('.active').removeClass('active');
			$(this).addClass('active');
		});
	var coord = $('.service').offset().top;
	console.log(coord);
	$('.mouse').click(
		function(e) {
			e.preventDefault();
			$('html, body').animate( {scrollTop : coord}, 500)
		});

	var overlay = document.getElementById('overlay');
	var vid = document.getElementById('video');

	if(overlay.addEventListener) {
		overlay.addEventListener("click", play, false)
	} else if(overlay.attachEvent) {
		overlay.attachEvent("onclick", play);
	}

	function play() {
		if(vid.paused) {
			vid.play();
			overlay.className = "o";
			$('.video_info').css('display', 'none');
		} else {
			vid.pause();
			overlay.className = "";
		}
	}

	var owl = $('.carousel');

	owl.owlCarousel({
		navText: "",
		nav: true,
		autoWidth: true,
		margin: 27,
		responsive:{
			1200:{
				items:3
			}
		}
	});

	$('.next').click(function() {
    	owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    	owl.trigger('prev.owl.carousel');
	})
});