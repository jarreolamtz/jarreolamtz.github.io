$(document).ready(function() {
  $("header .icon-menu").click(function(){
    if( $("header").hasClass("active") == true ){
      $("header").removeClass("active");
      $("header .contact-container").removeClass("active");
    } else {
      $("header").addClass("active");
    }
  });
  $(".contact-trigger").click(function(){
    $("header").addClass("active");
    $(".contact-container").addClass("active");
    console.log("contact!");
  });

  $('header').on('click', function(e) {
  e.stopPropagation();
  });
  if( $("header").hasClass("active") == true ){
    $(document).on('click', function (e) {
      $("header").removeClass("active");
      $("header .contact-container").removeClass("active");
    });
  } else {
    
  }
});
