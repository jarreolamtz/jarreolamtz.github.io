$(document).ready(function(){
  // Variables ------------------------------------------------------
  var viewPort = $(window).width();
  var desktop = 992;
  var tablet = 991;
  var phone = 767;
  var s1_buttonPlay = document.getElementsByClassName('playDemo');


//DESKTOP
  if( viewPort > tablet ){

  }
  else if( viewPort < desktop && viewPort > phone){

  }
  //Mobile
  else if( viewPort < desktop ){

  };
  //PHONE
  if( viewPort <= phone){
    console.log("Phone");

    // SMOOTH SCROLL ------------------------------------------------------
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
      	if($(this).attr("href") == "#nav") return;
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 0
            }, 1000);
            return false;
          }
        }
      });
    });
  }
});
