// Fullpage
$(document).ready(function() {
	if( $(window).width() > 767 ) {
		$('#fullpage').fullpage({
			// anchors:['projects', 'about', 'contact'],
			scrollingSpeed: 1200,
			onLeave: function(index, nextIndex, direction){
				var leavingSection = $(this);

				//after leaving section 2
				if(index == 1 && direction =='down'){
					if( $("#section-02").hasClass("animateIntro") === true ){
						gsapSec_2();
					};
					$("#section-02").removeClass("animateIntro");
				}

				else if(index == 2 && direction == 'down'){
					if( $("#section-03").hasClass("animateIntro") === true ){
						gsapSec_3();
					};
					$("#section-03").removeClass("animateIntro");
				}
			}
		});

		var activeSec = $("section.active").index() + 1;
		if( activeSec == 1){
			slick01();
			setTimeout(function(){
				slick02();
			}, 600);
		}
		else if( activeSec == 2){
			slick02();
			setTimeout(function(){
				slick01();
			}, 600);
		}
	} else {
		slick01();
		setTimeout(function(){
			slick02();
		}, 600);
	}

  // SLICK CAROUSEL PROJECTS
	function slick01() {
  	$('#section-01 .sliderSlick').slick({
	    arrows: false,
	    slidesToScroll: 1,
	    variableWidth: true,
	    draggable: true,
	    autoplay: true,
	    autoplaySpeed: 3000,
			dots: true,
			customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<a></a>';
	    },
	  });
	}
	// SLICK CAROUSEL ABOUT
	function slick02() {
		$('#section-02 .sliderSlick_About').slick({
			arrows: false,
			slidesToScroll: 1,
			variableWidth: true,
			draggable: true,
			autoplay: true,
			autoplaySpeed: 3000,
			dots: true,
			customPaging : function(slider, i) {
				var thumb = $(slider.$slides[i]).data('thumb');
				return '<a></a>';
			},
		});
	}

	// FORM DOTS
	$("form input.casilla").focusin(function(){
		var input = $(this).parent();
		input.removeClass("filled");

		var chequed = $("form .inputDiv.filled").length + 1;
		if(chequed == 4) {
			$("input.color-gold").addClass("active");
		} else {
			$("input.color-gold").removeClass("active");
		}
	});
	$("form input.casilla").focusout(function(){
		var input = $(this).parent();
		var value = $(this).val();
		var chequed = $("form .inputDiv.filled").length + 1;
		if(value != "") {
			input.addClass("filled");
		} else {
			input.removeClass("filled");
		}
		if(chequed == 4) {
			$("input.color-gold").addClass("active");
		} else {
			$("input.color-gold").removeClass("active");
		}
	});


});

// SLICK01 CONTROLS
$("#section-01 .linkDiv").click(function(){
	$("#section-01 .linkDiv").removeClass("active");
	var indexLink = $(this).index() + 1;
	var slickDotAct = $("#section-01 .projects-slider .slick-dots li:nth-child("+indexLink+")");
	var activeHref = $(this).children().find(".text-subHeading").data("website");
	$(this).addClass("active");
	slickDotAct.trigger("click");
	$("#section-01 .side-2 .button-website").attr("href", activeHref);
});
// On before slide change
$('#section-01 .sliderSlick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	var activeDot = nextSlide + 1;
	var activeHref = $("#section-01 .linkDiv:nth-child("+activeDot+")").children(".text-subHeading").data("website");
	$("#section-01 .linkDiv").removeClass("active");
	$("#section-01 .linkDiv:nth-child("+activeDot+")").addClass("active");
	$("#section-01 .side-2 .button-website").attr("href", activeHref);
});

// START ANIMATIONS GSAP ---------------------------------------
var s1_linkDiv = $("#section-01 .linkDiv");
var s1_linkDivDots = $("#section-01 .dots .dot");
var s1_fillGreen = $("#section-01 .fill-green .textAreaGreen");
var s1_fillGreenDark = $("#section-01 .fill-greenDark");
var s1_array = ["#section-01 .side-2 .textAreaGreen", "#section-01 .side-2 .fill-greenDark"];
var s2_description = $("#section-02 .text-area .description p");
var s2_linkDiv = $("#section-02 .text-area .list .linkDiv");
var s2_social = $("#section-02 .text-area .socialDiv li");
var s3_stamps = $("#section-03 .row-top img");
var s3_description = $("#section-03 p");
var s3_inputs = $("#section-03 form .inputDiv");
var s3_submit = $("#section-03 form input.color-gold");

// var h_line = document.getElementsByClassName("lineView");
// var s1_buttonPlay = document.getElementsByClassName('playDemo');
function animationsGsap() {
  TweenMax.staggerFromTo( s1_linkDiv, 1.8,{
    x: "-=20",
    opacity: 0,
  	}, {
    ease: Power4.easeOut,
    x: 0,
    opacity: 1,
  }, .2);
	TweenMax.fromTo( $(".projects-slider > div"), 2,{
		y: "-=20"
		}, {
		delay: .2,
		ease: Power4.easeOut,
		y: 0
	});
	TweenMax.fromTo( s1_fillGreen, 1.8,{
    x: "+=20",
    opacity: .2,
  	}, {
		delay: 1.2,
    ease: Power4.easeOut,
    x: 0,
    opacity: 1,
  });
	TweenMax.fromTo( s1_fillGreenDark, 1.8,{
    x: "+=20",
  	}, {
		delay: 1.2,
    ease: Power4.easeOut,
    x: 0,
		onComplete: function() {
    	s1_fillGreenDark.addClass("transition");
  	}
  });
};

function gsapSec_2() {
	TweenMax.staggerFromTo( s2_description, 1.8,{
		x: "-=20",
		opacity: 0,
		}, {
		delay: .3,
		ease: Power4.easeOut,
		x: 0,
		opacity: 1,
	}, .2);
	TweenMax.staggerFromTo( s2_linkDiv, 1.8,{
		x: "-=20",
		opacity: 0,
		}, {
		delay: .8,
		ease: Power4.easeOut,
		x: 0,
		opacity: 1,
	}, .2);
	TweenMax.staggerFromTo( s2_social, 1.8,{
		x: "-=20",
		opacity: 0,
		}, {
		delay: 1.6,
		ease: Power4.easeOut,
		x: 0,
		opacity: 1,
	}, .2);
}

function gsapSec_3() {
	TweenMax.staggerFromTo( s3_stamps, 1.8,{
		opacity: 0,
		}, {
		delay: .3,
		ease: Power4.easeOut,
		opacity: 1,
	}, .2);
	TweenMax.staggerFromTo( s3_description, 1.8,{
		x: "-=20",
		opacity: 0,
		}, {
		delay: .8,
		ease: Power4.easeOut,
		x: 0,
		opacity: 1,
	}, .2);
	TweenMax.staggerFromTo( s3_inputs, 1.8,{
		x: "-=20",
		opacity: 0,
		}, {
		delay: 1.6,
		ease: Power4.easeOut,
		x: 0,
		opacity: 1,
	}, .2);
	TweenMax.fromTo( s3_submit, 1,{
		x: "-=20",
		opacity: 0,
		}, {
		delay: 2.6,
		ease: Power4.easeOut,
		x: 0,
		opacity: 1,
		onComplete: function() {
    	s3_submit.addClass("transition");
  	}
	}, .2);
}
