$(document).ready(function(){
  $(".project-image").click(function(){
    $(this).addClass("top");
    $(".project-description").parent().removeClass("top");
    $(".controlsInn").addClass("working");
    $(".icon-plus").removeClass("rotate-45");
  });
  $(".project-description").click(function(){
    $(this).parent().addClass("top");
    $(".project-image").removeClass("top");
    $(".controlsInn").removeClass("working");
    $(".icon-plus").addClass("rotate-45");
  });
  $(".icon-plus").click(function(){
    if ( $(".project-description").parent().hasClass("top") == true ){
      $(this).removeClass("rotate-45");
      $(".project-image").addClass("top");
      $(".project-description").parent().removeClass("top");
      $(".controlsInn").addClass("working");
    } else {
      $(this).addClass("rotate-45");
      $(this).parent().addClass("top");
      $(".project-image").removeClass("top");
      $(".controlsInn").removeClass("working");
    }
  });


  // Outer Carousel
  $('.slider').slick({
    infinite: false,
    slidesToShow: 1,
    arrows: false,
    speed: 1200,
    focusOnSelect: false,
    edgeFriction: 0.1,
    touchThreshold: 20,
  });

  // Inner Carousel
  $('.innerSlider').slick({
    infinite: false,
    slidesToShow: 1,
    arrows: false,
    speed: 600,
    focusOnSelect: false,
    adaptiveHeight: true,
    dots: true,
    vertical: true,
    verticalSwiping: true,
    swipe: true,
  });

  function changeProject() {
    // Project Num
    var projectActive = ($(".slick-current").index() + 1);
    $('.project-num').text("No.0" + projectActive);
    // Project Counter
    var projectCount = $(".slider .slide").length;
    $('.project-count').text("0" + projectActive + " / " + "0" + projectCount );
    // // Heading Color
    // var headingColor = $('.slick-current').children().find(".project-description").css('backgroundColor');
    // $('.heading-bigger').css("color", headingColor);
  };
  changeProject();

  var windowHalf = $(".clickArea").width() / 2;

  $(".slider .slide .clickArea").click(function(){
    if(event.pageX < windowHalf ) {
      $('.slider').slick("slickPrev");
    } else {
      $('.slider').slick("slickNext");
    }
    changeProject();

    var currentSlide = $('.slider').slick('slickCurrentSlide') + 1;
    console.log(currentSlide);
    $("header .rotate-90 a").removeClass("active");
    $("header .rotate-90 a:nth-child("+ currentSlide +")").addClass("active");
  });

  $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    changeProject();
  });

  // Logo Blink Timer
  var timerID = setInterval(function() {
    $(".blink").removeClass("hidden");
    setTimeout(function(){
      $(".blink").addClass("hidden");
    }, 200);
  }, 10 * 1000);



  $(".controlsInn .up").click(function(){
      $(this).parent().parent().find('.innerSlider').slick("slickPrev");
  });
  $(".controlsInn .down").click(function(){
      $(this).parent().parent().find('.innerSlider').slick("slickNext");
  });


  $("header .rotate-90 a").click(function(){
    $("header .rotate-90 a").removeClass("active");
    $(this).addClass("active");
  });


  $('header .rotate-90 a[data-slider], .mobile-menu a[data-slider]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slider');
    $('.slider').slick('slickGoTo', slideno - 1);
  });

  $('.icon-menu').click(function(){
    $(".mobile-menu").fadeIn();
  });

  $('.mobile-menu a, .icon-close').click(function(){
    $(".mobile-menu").fadeOut();
    $(".mobile-menu a").removeClass("active");
    $(this).addClass("active");
  });
});
