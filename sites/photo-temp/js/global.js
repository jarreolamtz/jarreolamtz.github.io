$(document).ready(function() {
  $("header .icon-menu").click(function(){
    if( $("header").hasClass("active") == true ){
      $("header").removeClass("active");
      $("header .contact-container").removeClass("active");
    } else {
      $("header").addClass("active");
    }
  });
  $("header .contact-trigger").click(function(){
    $("header .contact-container").addClass("active");
  });

  $('header').on('click', function(e) {
  e.stopPropagation();
  });

  $(document).on('click', function (e) {
    $("header").removeClass("active");
    $("header .contact-container").removeClass("active");
  });
});
