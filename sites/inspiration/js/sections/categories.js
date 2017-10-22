// HEADER LINK:ACTIVE IF URL HAS...
var sectActive = $(".text-image-center").text();
if($(".text-image-center").length > 0 ) {
	$(".nav .blueDots-link a:contains("+sectActive+")").addClass("active");
}
