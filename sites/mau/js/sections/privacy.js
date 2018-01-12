$(".headingTopic").click(function(){
	if( $(this).closest(".topic").hasClass("active") ) {
		$(".topic").removeClass("active");
		$(this).next(".infoTopic").slideUp();
	} else {
		$(".topic.active .infoTopic").slideUp();
		$(".topic").removeClass("active");
		$(this).closest(".topic").addClass("active");
		$(this).next(".infoTopic").slideDown();
	}
});