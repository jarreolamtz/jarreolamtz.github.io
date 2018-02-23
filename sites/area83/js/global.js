$(document).ready(function(){
  // Variables ------------------------------------------------------
  var viewPort = $(window).width();
  var desktop = 992;
  var tablet = 991;
  var phone = 767;


  //DESKTOP
  if( viewPort > tablet ){

  }
  else if( viewPort < desktop && viewPort > phone){

  }
  //Mobile
  else if( viewPort < desktop ){
    $(".menuMobile").click(function(){
      if( $("#navMobile").hasClass("active") === true ) {
        $(".menuMobile").removeClass("active");
        $("#navMobile").removeClass("active");
      } else {
        $(".menuMobile").addClass("active");
        $("#navMobile").addClass("active");
        var activeSec = $("section.active").index() + 1;
        $("#navMobile a").removeClass("active");
        $("#navMobile a:nth-child("+activeSec+")").addClass("active");
      }
    });
    $("#navMobile a").click(function(){
      $(".menuMobile").removeClass("active");
      $("#navMobile").removeClass("active");
    });
  };
  //PHONE
  if( viewPort <= phone){
    console.log("Phone");
    // Menu ------------------------------------------------------

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
