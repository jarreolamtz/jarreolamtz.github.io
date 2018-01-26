$(document).ready(function(){
  // Variables ------------------------------------------------------
  var viewPort = $(window).width();
  var desktop = 992;
  var tablet = 991;
  var phone = 767;


  //DESKTOP
  if( viewPort > tablet ){
    console.log("Desktop");
  }
  //TABLET
  else if( viewPort < desktop && viewPort > phone){
    console.log("Tablet");
  }
  //PHONE
  else if( viewPort <= phone){
    console.log("Phone");
    // Menu ------------------------------------------------------
    $(".icon-menu, .close-menu, .menu-area a").click(function(){
      if( $(".menu-area").hasClass("active") === true ) {
        $(".menu-area").removeClass("active");
        $(".menu-area").fadeOut();
      } else {
        $(".menu-area").addClass("active");
        $(".menu-area").fadeIn();
      }
    });
    // SMOOTH SCROLL ------------------------------------------------------
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
      	if($(this).attr("href") == "#nav") return;
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 60
            }, 1000);
            return false;
          }
        }
      });
    });
  }
});
