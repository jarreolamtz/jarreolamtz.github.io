$(document).ready(function(){
  $('#section01 .post-slider .post-slides').slick({
   	arrows: false,
   	autoplay: true,
   	infinite: false,
   	dots: true,
   	focusOnSelect: false,
  });
  $("#section01 .controls .slide-left").click(function(){
  	$("#section01 .slider").slick('slickPrev');
  })
  $("#section01 .controls .slide-right").click(function(){
  	$("#section01 .slider").slick('slickNext');
  })

  //Post slider Pagination
  $(".pagination-global li").click(function(){
  	var customPaging = $(this).index() + 1;
  	$(".post-slider  .post-slides .slick-dots li:nth-child("+ customPaging +")").trigger("click");
  });

  //Post slider Autoplay Pagination
  // On before slide change
	$('#section01 .post-slider .post-slides').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	    nextSlide = nextSlide + 1;
	    $(".slider-pagination li").removeClass("active");
	    $(".slider-pagination li:nth-child("+nextSlide+")").addClass("active");
	});


 
	//Icon Hearts: Click addClass "Active"
	$(".hearts-div .heart img").parent(".heart").click(function(){
		$(".hearts-div .heart").removeClass("active");
		var heartSelect = $(this).index() + 1;
		$(".hearts-div .heart:nth-child(-n+"+heartSelect+")").toggleClass("active");
	});
	//Icon Hearts: Hover toggleClass "hover"
	$(".hearts-div .heart img").parent(".heart").hover(function(){
		var heartHover = $(this).index() + 1;
		var selectCancel = $(this).parent(".hearts-div").children().length - heartHover;

		$(".hearts-div .heart:nth-last-child(-n+"+selectCancel+")").toggleClass("hover");
		$(".hearts-div .heart:nth-child(-n+"+heartHover+")").toggleClass("hoverShow");
	});


  // HEADER LINK:ACTIVE IF URL HAS...
  var sectActive = $(".postHeading-div .col-sm-center .post-category").text();
  console.log( sectActive )

  $(".nav .blueDots-link a:contains("+sectActive+")").addClass("active");

});