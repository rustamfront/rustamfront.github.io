$(function() {
	$(".Accountant").click(
		function(e) {
			$(".Accountant__menu").toggleClass("show");
		}
	);
	$(".Accountant__menu li").click(function() {
		var tx = $(this).text();
		$(".Accountant").text(tx);
		$(".Accountant__menu").removeClass("show");
	})

	$(".work").click(
		function(e) {
			$(".work__menu").toggleClass("show");
		}
	);
	$(".work__menu li").click(function() {
		var tx = $(this).text();
		$(".work").text(tx);
		$(".work__menu").removeClass("show");
	});

	$(".visa").click(
		function(e) {
			$(".visa__menu").toggleClass("show");
		}
	);
	$(".visa__menu li").click(function() {
		var tx = $(this).text();
		$(".visa").text(tx);
		$(".visa__menu").removeClass("show");
	})

	$(".language").click(
		function(e) {
			$(".language__menu").toggleClass("show");
		}
	);
	$(".language__menu li").click(function() {
		var tx = $(this).text();
		$(".language").text(tx);
		$(".language__menu").removeClass("show");
	})

	$(".filter").click(
		function(e) {
			$(".filter__menu").toggleClass("show");
		}
	);
	$(".filter__menu li").click(function() {
		var tx = $(this).text();
		$(".filter").text(tx);
		$(".filter__menu").removeClass("show");
	})
})