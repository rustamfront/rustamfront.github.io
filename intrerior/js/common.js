$(function() {
	$(".menu li a").click(
		function() {
			$(".menu").find(".active-mnu").removeClass("active-mnu");
			$(this).addClass('active-mnu');
		});
	$(".carousel").owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide-wrap",
		navText: ""

	});
	$(".toggle-mnu").click(function() {
  		$(this).toggleClass("on");
  		$(".main-mnu").slideToggle();
  		return false;
	});
	$(".m-search").click(function() {
		$(".toggle-search").fadeToggle();
		return false;
	});
	var al = 0

	var percent_number_step = $.animateNumber.numberStepFactories.append(' %');
	if (window.pageYOffset >= 150) {
		
	}
	$('.percent-1').animateNumber({ 
		number: 85,
		numberStep: percent_number_step
	 }, 1200);

	$('.percent-2, .percent-3').animateNumber({ 
		number: 90,
		numberStep: percent_number_step
	 }, 1200);

	$('.percent-4').animateNumber({ 
		number: 80,
		numberStep: percent_number_step
	 }, 1200);

	$('.circle-1').circleProgress({
    value: 0.85,
    startAngle: Math.PI * -.5,
    reverse: true,
    thickness: 5,
    size: 150,
    emptyFill: "transparent",
    fill: {
      color: "#FF7200"
    }
  	});

  	$('.circle-2, .circle-3').circleProgress({
    value: 0.90,
    startAngle: Math.PI * -.5,
    reverse: true,
    thickness: 5,
    size: 150,
    emptyFill: "transparent",
    fill: {
      color: "#FF7200"
    }
  });

  	$('.circle-4').circleProgress({
    value: 0.80,
    startAngle: Math.PI * -.5,
    reverse: true,
    thickness: 5,
    size: 150,
    emptyFill: "transparent",
    fill: {
      color: "#FF7200"
    }
  });
	
	$('.mfp-gallery').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	function check(form){
    	alert("Hello");
	};


	$('.preloader').fadeOut();
	
});

//setInterval(function() {
//	console.log(window.pageYOffset);
//}, 1000);

