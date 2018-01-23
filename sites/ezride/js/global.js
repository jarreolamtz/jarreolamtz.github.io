var viewPort = $(window).width();
$(window).load(function(){


  $(".messenger-trigger").click(function(){
    $(".ctrlq.fb-button").trigger("click");
  });

  $(".icon-menu, .close-menu, .menu-area a").click(function(){
    if( $(".menu-area").hasClass("active") === true ) {
      $(".menu-area").removeClass("active");
      $(".menu-area").fadeOut();
    } else {
      $(".menu-area").addClass("active");
      $(".menu-area").fadeIn();
    }
  });
});
//DESKTOP
if( viewPort > 991 ){
}
//TABLET
else if( viewPort < 992 && viewPort > 767){
}
//PHONE
else if( viewPort < 768){
}
