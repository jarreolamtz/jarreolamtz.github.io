$(document).ready(function(){
  // HEADER LINK:ACTIVE IF URL HAS...
  var sideActive = window.location.href.split("/").pop();
  $("#menu-sidebar .element-content a:contains("+sideActive+")").addClass("active");

  $("#menu-sidebar .element-content .moduleCat a").click(function(){
    $("#menu-sidebar .element-content .moduleCat a").removeClass("active");
    $(".module a").removeClass("active");
    $(this).addClass("active");
  });


  $(".blueDots-link .text-link:not(.contacto)").click(function(){
    $("#menu-sidebar .element-content .moduleCat a").removeClass("active");
    $(".module a").removeClass("active");
  });

  $(".section-heading-tags li a").click(function(){
    $(".section-heading-tags li a").removeClass("active");
  });


  // LOADER COLOR SELECT
  if (window.location.href.indexOf("#viaje-y-cultura") > -1) {
      $(".loader .slide").addClass("fill-blue");
  } else if(window.location.href.indexOf("#belleza") > -1) {
      $(".loader .slide").addClass("fill-pink");
  } else if(window.location.href.indexOf("#historias") > -1) {
      $(".loader .slide").addClass("fill-gray");
  } else if(window.location.href.indexOf("#salud-y-bienestar") > -1) {
      $(".loader .slide").addClass("fill-beige");
  }

  if( $(window).scrollTop() > 110 ) {
      $("header").addClass("top-0");
  } else {
      $("header").removeClass("top-0");
  }
  $(window).scroll(function(){
      if( $(window).scrollTop() > 110 ) {
          $("header").addClass("top-0");
      } else {
          $("header").removeClass("top-0");
      }
  });

  // MOBILE MENU
  $("header .icon-menu-div, .icon-menu-close, .header .icon-menu-div").click(function (){
      $("header #menu-sidebar").toggleClass("open");
  });

  // Click fuera de header * cierra el menu
  $('#menu-sidebar, .icon-menu-div').on('click', function(e) {
    e.stopPropagation();
  });

  $(document).on('click', function (e) {
    $("header #menu-sidebar").removeClass("open");
  });


  // MOBILE MENU
  $("header .contacto-trigger").click(function (){
      $("header #contacto").fadeIn();
  });
  $("header .icon-contacto-close").click(function (){
      $("header #contacto").fadeOut();
  });

  // MOBILE MENU
  $("header .icon-search-div, .header .icon-search-div").click(function (){
      $("header #searchSect").fadeIn();
      $("header #searchSect input").focus();
      $("header .searchBlank").fadeIn();
  });
  $("header .icon-search-close, header #searchSect a").click(function (){
      $("header #searchSect").fadeOut();
  });


  //SEARCH: ON SUBMIT
  $("header #searchSect form").submit(function(){
  	$("header #searchSect *").fadeOut();
    $(".searchBlank").css('background-color', 'rgba(255,255,255,1)');
  });

  // Click fuera de header * cierra el Search
  $('#searchSect, .icon-search-div').on('click', function(e) {
    e.stopPropagation();
  });

  $(document).on('click', function (e) {
    $("header #searchSect").fadeOut();
    $("header .searchBlank").fadeOut();
  });

  $("header #subscribe .icon-subscribe-close").click(function(){
  	$("header #subscribe").fadeOut();
  });

  function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
  }

  $("header #subscribe form").submit(function(){
      var email = $("form input[type='email']").val();

      if(email == "" || !validateEmail(email)){
          $("form input[type='email']").attr("placeholder", "Dirección de correo electrónico no válida");
      }
  });
  $("header #subscribe .icon-pointer-white").click(function(){
  	$("#formsubmit").click();
  });



  var lastScrollTop = 0;
  $(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       $(".mobileControls").removeClass("visible");
   } else {
      // upscroll code
      $(".mobileControls").addClass("visible");
   }
   lastScrollTop = st;
  });



  $("#subscribe").delay(1500).fadeIn(600);



  //PAGINATION GLOBAL
  $(".pagination-global a").click(function(){
    $(".pagination-global a").removeClass("active");
    $(this).addClass("active");
    console.log("entra1")
  });

  //BLUE DOTS TOGGLE
  $("navbar .blueDots-link a, .section-heading-tags.blueDots-link a ").click(function(){
      $(this).closest(".blueDots-link").children("a.active").removeClass("active");
      $(this).addClass("active");
  });

  $(".social-icon.dots").click(function() {
      $(this).addClass("active");
  });

  // Social Dots click outside Close
  $(':not(.social-icon.dots.active)').click(function() {
      $(".social-icon.dots").removeClass("active");
  });
});
