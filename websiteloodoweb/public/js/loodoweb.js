$(document).ready(function () {
	$(".nuttruot").click(function () {
		console.log("scroll");
		$("html").animate({scrollTop: 0});
	});
});