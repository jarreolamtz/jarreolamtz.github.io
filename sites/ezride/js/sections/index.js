$(document).ready(function(){
  $('#section01 .slider').slick({
   	arrows: false,
   	 responsive: [
    {
      breakpoint: 767,
      settings: {
      	dots: true,
      }
  	}

  	]
  });
  $("#section01 .controls .slide-left").click(function(){
  	$("#section01 .slider").slick('slickPrev');
  })
  $("#section01 .controls .slide-right").click(function(){
  	$("#section01 .slider").slick('slickNext');
  })
  $(".close-pop").click(function(){
    $(".share-mobile-pop").fadeOut();
  });
  $(".share-mobile").click(function(){
    $(this).parent().next().fadeIn();
    $(this).parent().next().next().fadeIn();
  });

  // Click fuera de header * cierra el menu
  $('.share-mobile-pop, .share-mobile').on('click', function(e) {
    e.stopPropagation();
  });

  $(document).on('click', function (e) {
    $(".share-mobile-pop").fadeOut();
  
  });


});
