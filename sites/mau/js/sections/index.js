
$(document).ready(function(){
  $(".icon-menu-lines").click(function(){
    if( $(".mobile-menu").hasClass("active") === true){
      $(".mobile-menu").removeClass("active");
    } else {
      $(".mobile-menu").addClass("active");
    }
  });
  $(".icon-close").click(function(){
    $(".mobile-menu").removeClass("active");
  });
  // - Click fuera de header * cierra el menu
  $(".mobile-menu, .icon-menu-lines").on('click', function(e) {
    e.stopPropagation();
  });
  $(document, ".icon-close").on('click', function (e) {
    $(".mobile-menu").removeClass("active");
  });

  // Products Menu -------------------------------------------------
  $("#trigger-products").click(function(){
    $(".productsMenu").addClass("active");
  });

  $(".productsMenu .icon-close").click(function(){
    $(".productsMenu").removeClass("active");
  });
  // Products Menu MOBILE -------------------------------------------------
  $("#trigger-products-mobile").click(function(){
    $(".productsMenu").addClass("active");
    $(".mobile-menu").removeClass("active");
  });


  // - Click fuera de header * cierra el menu
  $('.productsMenu, #trigger-products').on('click', function(e) {
    e.stopPropagation();
  });
  $(document).on('click', function (e) {
    $(".productsMenu").removeClass("active");
  });

  $(".productsMenu .product").click(function(){
    if($(window).width() > 991 ) {
      // SLIDER
      var targetProdText = $(this).attr("data-target");
      var targetProdImg = ($("#section-02 .desktop-content .image-slides .sliden").length - $(this).attr("data-target") + 1);
      $("#section-02 .desktop-content .text-slides .slick-dots li:nth-child("+targetProdText+")").trigger("click");
      $("#section-02 .desktop-content .image-slides > .slick-dots li:nth-child("+targetProdImg+")").trigger("click");

      // BACK COLOR
      var currentSlide = ($('#section-02 .desktop-content .text-slides').slick('slickCurrentSlide') + 1);
      $(".back-color.active").removeClass("active")
      $(".back-color:nth-child("+currentSlide+")").addClass("active");

      // LINES NUMBER
      $(".slideLines .line").removeClass("active");
      $(".slideLines .line:nth-child("+currentSlide+")").addClass("active");
    } else {
      var targetProdText = $(this).attr("data-target");
      var currentSlide = ($('#section-02 .mobile-content').slick('slickCurrentSlide')+1);
      $("#section-02 .mobile-content > .slick-dots li:nth-child("+targetProdText+")").trigger("click");
      // LINES NUMBER
      $(".slideLines .line").removeClass("active");
      $(".slideLines .line:nth-child("+targetProdText+")").addClass("active");
      // BACK COLOR
      var currentSlideNext = ($('#section-02 .mobile-content').slick('slickCurrentSlide')+1);
      $(".back-color.active").removeClass("active")
      $(".back-color:nth-child("+currentSlideNext+")").addClass("active");
    }
  });

  // Contact -------------------------------------------------
  $("#trigger-contact, #trigger-contact-mobile").click(function(){
    $(".contactBox").addClass("active");
    $(".mobile-menu").removeClass("active");
  });
  $(".contactBox .icon-close").click(function(){
    $(".contactBox").removeClass("active");
  });
  // - Click fuera de header * cierra el menu
  $(".contactBox, #trigger-contact, #trigger-contact-mobile").on('click', function(e) {
    e.stopPropagation();
  });
  $(document).on('click', function (e) {
    $(".contactBox").removeClass("active");
  });



  // FullPage  -----------------------------------------
  $('#fullpage').fullpage({
    anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
    menu: '#myMenu',
    navigation: false,
    scrollingSpeed: 1800,
    controlArrows: false,
    hybrid:true,
    normalScrollElements: '.intern-slide',
    onLeave: function(index, nextIndex, direction){
      //it won't scroll if the destination is the 3rd section
      if(nextIndex == 2){
        $("header .border-line").parent().addClass("col-md-9");
      } else {
        $("header .border-line").parent().removeClass("col-md-9");
      }
    }
  });

  // Sliders -----------------------------------------
  if ($(window).width() > 991 ){
    $('#section-02 .desktop-content .text-slides').slick({
      vertical: true,
      verticalSwiping: true,
      infinite: false,
      dots: true,
      arrows: false,
      adaptiveHeight: false,
      speed: 2000,
      touchThreshold: 98,
      draggable: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            adaptiveHeight: true,
            vertical: false,
            verticalSwiping: false,
            draggable:false,
            swipe:false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            adaptiveHeight: true,
            vertical: false,
            verticalSwiping: false,
            draggable:false,
            swipe:false,
          }
        }
      ]
    });
    var lastNav = $("#section-02 .desktop-content .image-slides .sliden").length;
    $('#section-02 .desktop-content .image-slides').slick({
      vertical: true,
      verticalSwiping: true,
      infinite: false,
      dots: true,
      arrows: false,
      adaptiveHeight: true,
      speed: 2000,
      touchThreshold: 98,
      initialSlide: lastNav,
      draggable: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            adaptiveHeight: true,
            vertical: false,
            verticalSwiping: false,
            draggable:false,
            swipe:false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            adaptiveHeight: true,
            vertical: false,
            verticalSwiping: false,
            draggable:false,
            swipe:false,
          }
        }
      ]
    });
  } else {
    $('#section-02 .mobile-content').slick({
      infinite: false,
      focusOnSelect: false,
      dots: true,
      arrows: false,
      adaptiveHeight: true,
      speed: 2000,
    });
    $('#section-02 .mobile-content').on('swipe', function(event, slick, direction){
      var currentSlide = $('#section-02 .mobile-content').slick('slickCurrentSlide');
      var targetProdText = $(this).attr("data-line");
      var currentSlide = ($('#section-02 .mobile-content').slick('slickCurrentSlide') + 1);
      $(".back-color.active").removeClass("active")
      $(".back-color:nth-child("+currentSlide+")").addClass("active");
      $(".slideLines .line").removeClass("active");
      $(".slideLines .line:nth-child("+currentSlide+")").addClass("active");
    });
    $("#section-02 .mobile-content .comment-trigger").click(function(){
      if( $(this).closest(".text-block").hasClass("active") === true ) {
        $(".text-block.active .specs").slideDown(600, "swing");
        $(".text-block.active .commentbox").slideUp(600, "swing");
        $(this).closest(".text-block").removeClass("active");
      } else {
        $(this).closest(".text-block").addClass("active");
        $(".text-block.active .specs").slideUp(600, "swing")
        $(".text-block.active .commentbox").slideDown(600, "swing");
      }
    });
  }

  // Comment -----------------------------------------
  $("#section-02 .desktop-content .comment-trigger").click(function(){
    if( $(this).closest(".text-block").hasClass("active") === true ) {
      $(".text-block.active .specs").slideDown(600, "swing");
      $(".text-block.active .commentbox").slideUp(600, "swing");
      $(this).closest(".text-block").removeClass("active");
    } else {
      $(this).closest(".text-block").addClass("active");
      $(".text-block.active .specs").slideUp(600, "swing")
      $(".text-block.active .commentbox").slideDown(600, "swing");
    }
  });
  $("#section-02 .mobile-info-trigger").click(function(){
    if( $(this).hasClass("active") === true ) {
      $(this).closest(".text-slides").next().removeClass("hide-down");
      $(this).removeClass("active");
      $(this).parent().next().slideUp(1000);
      $("#section-02 .backs-color").removeClass("hide-down");
    } else {
      $(this).addClass("active");
      $(this).closest(".text-slides").next().addClass("hide-down");
      $(this).parent().next().slideDown(1000);
      $("#section-02 .backs-color").addClass("hide-down");
    }
  });
  // Intern Sliders -----------------------------------------
  $('#section-02 .intern-slider').slick({
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    arrows: false,
    adaptiveHeight: true,
    speed: 800,
    touchThreshold: 98,
    dots: true,
    normalScrollElements: '.img-01',
    normalScrollElementTouchThreshold: 20,
    customPaging: function(slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<a class="dot"></a>';
    },
  });

  //Lines Controls -----------------------------------------
  $(".slideLines .line").click(function(){
    $(".slideLines .line").removeClass("active");
    $(this).addClass("active");
    if ($(window).width() > 991 ){
      var targetProdText = $(this).attr("data-line");
      var targetProdImg = ($("#section-02 .desktop-content .image-slides .sliden").length - $(this).attr("data-line") + 1);
      $("#section-02 .desktop-content .text-slides .slick-dots li:nth-child("+targetProdText+")").trigger("click");
      $("#section-02 .desktop-content .image-slides > .slick-dots li:nth-child("+targetProdImg+")").trigger("click");
      var currentSlide = ($('#section-02 .desktop-content .text-slides').slick('slickCurrentSlide') + 1);
      $(".back-color.active").removeClass("active")
      $(".back-color:nth-child("+currentSlide+")").addClass("active");
    } else {
      var targetProdText = $(this).attr("data-line");
      $("#section-02 .mobile-content > .slick-dots li:nth-child("+targetProdText+")").trigger("click");
      var currentSlide = ($('#section-02 .mobile-content').slick('slickCurrentSlide') + 1);
      $(".back-color.active").removeClass("active")
      $(".back-color:nth-child("+currentSlide+")").addClass("active");
    }
  });

  // Controls Hidden  -----------------------------------------
  $(".controls").click(function(){
    var currentSlide = ($('#section-02 .desktop-content .text-slides').slick('slickCurrentSlide') + 1);
    $(".back-color.active").removeClass("active")
    $(".back-color:nth-child("+currentSlide+")").addClass("active");

    // Lines
    var currentSlide = ($('#section-02 .desktop-content .text-slides').slick('slickCurrentSlide') + 1);
    $(".slideLines .line").removeClass("active");
    $(".slideLines .line:nth-child("+currentSlide+")").addClass("active");
  });
  // - Prev
  $(".controls .top").click(function() {
    $('#section-02 .desktop-content .text-slides').slick('prev');
    $('#section-02 .desktop-content .image-slides').slick('next');
  });
  // - Next
  $(".controls .down").click(function() {
    $('#section-02 .desktop-content .image-slides').slick('prev');
    $('#section-02 .desktop-content .text-slides').slick('next');
  });

  $('#section-02 .desktop-content .image-slides').slick('prev');

});
