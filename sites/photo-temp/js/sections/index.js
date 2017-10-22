$(document).ready(function() {
  $("header .icon-menu").click(function(){
    if( $("header").hasClass("active") == true ){
      $("header").removeClass("active");
    } else {
      $("header").addClass("active");
    }
  });

  $('#fullpage').fullpage({
    scrollingSpeed: 1500,
    scrollOverflow:true,
    touchSensitivity: 15,
		normalScrollElementTouchThreshold: 2,
    onLeave: function(index, nextIndex, direction) {
      if(index === 1){
        $(".wordmark").addClass("unActive");
      } else {
        $(".wordmark").removeClass("unActive");
      }
    },
  });
});
