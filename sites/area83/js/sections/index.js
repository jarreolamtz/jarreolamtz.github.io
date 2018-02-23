// FUI -----------------------------------
	function FUIscrollUp() {
		$("#fui .scrollDetect .dot").addClass("up");
		setTimeout(function(){
			$("#fui .scrollDetect .dot").removeClass("up");
		}, 800);
	}
	function FUIscrollDown() {
		$("#fui .scrollDetect .dot").addClass("down");
		setTimeout(function(){
			$("#fui .scrollDetect .dot").removeClass("down");
		}, 800);
	}
	function randomNum() {
		var randNumA = Math.round(Math.random());
		var randNumB = Math.round(Math.random());
		var randNumC = Math.round(Math.random());
		$("#fui .binario .num.a").text(randNumA);
		$("#fui .binario .num.b").text(randNumB);
		$("#fui .binario .num.c").text(randNumC);
	}
	$(document).mousemove(function( event ) {
		var x = event.clientX;
		var y = event.clientY;
		if( ($(document).height()/2) > y ) {
			var nomY = "N.";
		} else {
			var nomY = "S.";
		}
		if( ($(document).width()/2) > x ) {
			var nomX = "W.";
		} else {
			var nomX = "E.";
		}
		var messageY = nomY + y;
		var messageX = nomX + x;
		$(".north").text( messageY );
		$(".west").text( messageX );
	});
	function megasLines() {
		var topLine = Math.floor(Math.random() * 9) + 1;
		var randMb = 30 - (topLine * 2);
		var prevLines = $("#fui .megas .line:nth-child("+topLine+")").prevAll().length;
		var lineOpa = $("#fui .megas .line:nth-child("+topLine+")").prevAll().index()
		$("#fui .megas .line").removeClass("top");
		$("#fui .megas .line:nth-child("+topLine+")").addClass("top");
		$("#fui .megas .line").removeAttr("style");
		$("#fui .megas .line:nth-child("+topLine+")").prevAll().css("opacity", "0");
		$("#fui .megas .numMb").text("0" + randMb + "mb")
	}
	function makeId() {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		for (var i = 0; i < 25; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	}
	window.setInterval(function(){
		randomNum();
		$("#fui .keygen .key").text(makeId);
	}, 1200);
	window.setInterval(function(){
		megasLines();
	}, 800);


// Fullpage
$(window).load(function() {
	if( $(window).width() > 768 ) {
		$('#fullpage').fullpage({
			anchors:['base', 'projects', 'directors', 'contact'],
			scrollingSpeed: 1200,
			menu: '#menu',
			onLeave: function(index, nextIndex, direction) {
				var leavingSection = $(this);

				setTimeout(function(){
					var activeSec = $("section.active").index() + 1;
					$("header .link").removeClass('active');
					$("header .link[data-sec="+ activeSec +"]").addClass('active');
				}, 3000);

				// NAV
				if(direction == 'down') {
					$("header .link.active").removeClass("active").parent().next().children().addClass("active");
					FUIscrollDown();
				}
				else {
					$("header .link.active").removeClass("active").parent().prev().children().addClass("active");
					FUIscrollUp();
				}


				//after leaving section 1
				if(index == 1 && direction =='down'){

				}
				if(index == 2 && direction =='down'){

				}
				if(index == 3 && direction =='down'){
					// alert("Going to section 2!");
				}

				else if(index == 2 && direction == 'up'){
					// alert("Going to section 1!");

				}
				else if(index == 3 && direction == 'up'){
					// alert("Going to section 1!");

				}
				else if(index == 4 && direction == 'up'){
					// alert("Going to section 1!");

				}
			}
		});
	}

  // SLICK CAROUSEL
  var slidesFirst = ($(".slick-slide").length - $(".slick-cloned").length - 1);
  $('.slick').slick({
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: slidesFirst,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					draggable: true,
					centerMode: true,
				}
			},
			{
				breakpoint: 320,
				settings: {
					draggable: true,
					centerMode: true,
				}
			}
		]
  });

  // Manually refresh positioning of slick
	var projectSelect = $("#section-02 .slick .slick-slide.slick-active .videoBack").attr("data-url");
  $('.controlSlick .next').click(function(){
    $('.slick').slick('slickNext');
		var projectSelect = $("#section-02 .slick .slick-slide.slick-active .videoBack").attr("data-url");
		$("#videoProject").attr("src", projectSelect);
  });
  $('.controlSlick .prev').click(function(){
    $('.slick').slick('slickPrev');
		var projectSelect = $("#section-02 .slick .slick-slide.slick-active .videoBack").attr("data-url");
		$("#videoProject").attr("src", projectSelect);
  });

  // On before slide change
  $('.slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $("#section-02 .nom-sec").text("°0" + (nextSlide + 1));
    $(".videoInfo").attr('data-video',''+ (nextSlide + 1) +'');
    var titulo = $("#section-02 .slick-slide[data-slick-index='" + nextSlide + "'] .titulo").text();
    var descripcion = $("#section-02 .slick-slide[data-slick-index='" + nextSlide + "'] .descripcion").text();

    $("#section-02 .videoInfo .text-heading span").text(titulo);
    $("#section-02 .videoInfo .text-body").text(descripcion);
  });
});






// DIRECTORS CONTROLS --------------------------------
directorOne = $("#section-03 .director[data-director='1'] .directorImg");
directorTwo = $("#section-03 .director[data-director='2'] .directorImg");
directorThree = $("#section-03 .director[data-director='3']");
directorFour = $("#section-03 .director[data-director='4']");
directorFive = $("#section-03 .director[data-director='5']");
directorSix = $("#section-03 .director[data-director='6']");

directorOneLink = $("#section-03 .director[data-director='1']");
directorTwoLink = $("#section-03 .director[data-director='2']");

numOne = 1;
numTwo = 2;

numOneUp = 5;
numTwoUp = 6;

// ARROW TOP ----
// $(".controlsDirector .arrowTop").click(function(){
//   var dataDirOne = $(".directorsList .director[data-director='1']").attr('data-back');
//   var dataDirTwo = $(".directorsList .director[data-director='2']").attr('data-back');
//   var dataDirThree = $(".directorsNext .director[data-director='3']").attr('data-back');
//   var dataDirFour = $(".directorsNext .director[data-director='4']").attr('data-back');
//   var dataDirFive = $(".directorsNext .director[data-director='5']").attr('data-back');
//   var dataDirSix = $(".directorsNext .director[data-director='6']").attr('data-back');
//
//   directorFive.css('backgroundImage',''+ dataDirOne +'');
//   directorSix.css('backgroundImage',''+ dataDirTwo +'');
//   directorOne.css('backgroundImage',''+ dataDirThree +'');
//   directorTwo.css('backgroundImage',''+ dataDirFour +'');
//   directorThree.css('backgroundImage',''+ dataDirFive +'');
//   directorFour.css('backgroundImage',''+ dataDirSix +'');
//
//   $(".directorsList .director[data-director='1']").attr('data-back', dataDirFive);
//   $(".directorsList .director[data-director='2']").attr('data-back', dataDirSix);
//   $(".directorsNext .director[data-director='3']").attr('data-back', dataDirOne);
//   $(".directorsNext .director[data-director='4']").attr('data-back', dataDirTwo);
//   $(".directorsNext .director[data-director='5']").attr('data-back', dataDirThree);
//   $(".directorsNext .director[data-director='6']").attr('data-back', dataDirFour);
//
//
// 	var restOne =
// 	var restTwo =
//
// 	var nameOne = $(".director[data-director="+ numDispOne +"]").attr('data-name');
// 	var nameTwo = $(".director[data-director="+ numDispTwo +"]").attr('data-name');
// 	$(".director[data-director='1'] .text-nom span").text(nameOne);
// 	$(".director[data-director='2'] .text-nom span").text(nameTwo);
// });

// ARROW BOTTOM ----
$(".controlsDirector .arrowBottom").click(function(){
  var dataDirOne = $("#section-03 .director[data-director='1']").attr('data-back');
  var dataDirTwo = $("#section-03 .director[data-director='2']").attr('data-back');
  var dataDirThree = $("#section-03 .director[data-director='3']").attr('data-back');
  var dataDirFour = $("#section-03 .director[data-director='4']").attr('data-back');
  var dataDirFive = $("#section-03 .director[data-director='5']").attr('data-back');
  var dataDirSix = $("#section-03 .director[data-director='6']").attr('data-back');

  directorOne.css('backgroundImage',''+ dataDirThree +'');
  directorTwo.css('backgroundImage',''+ dataDirFour +'');
  directorThree.css('backgroundImage',''+ dataDirFive +'');
  directorFour.css('backgroundImage',''+ dataDirSix +'');
  directorFive.css('backgroundImage',''+ dataDirOne +'');
  directorSix.css('backgroundImage',''+ dataDirTwo +'');

  $("#section-03 .director[data-director='1']").attr('data-back', dataDirThree);
  $("#section-03 .director[data-director='2']").attr('data-back', dataDirFour);
  $("#section-03 .director[data-director='3']").attr('data-back', dataDirFive);
  $("#section-03 .director[data-director='4']").attr('data-back', dataDirSix);
  $("#section-03 .director[data-director='5']").attr('data-back', dataDirOne);
  $("#section-03 .director[data-director='6']").attr('data-back', dataDirTwo);

  var numDispOne = numOne + ++numOne;
  var numDispTwo = numTwo + ++numTwo - 1;

  if( numDispOne == 7){
    numOne = 1;
    numDispOne = 1;
    numTwo = 2;
    numDispTwo = 2;
  } else {
    //
  }

  $(".controlsDirector .text-nom").text('Directors / 0'+numDispOne + ' - 0' + numDispTwo);

	// CHANGE NAME
	var nameOne = $("#section-03 .director[data-director="+ numDispOne +"]").attr('data-name');
	var nameTwo = $("#section-03 .director[data-director="+ numDispTwo +"]").attr('data-name');
	$("#section-03 .director[data-director='1'] .text-nom span").text(nameOne);
	$("#section-03 .director[data-director='2'] .text-nom span").text(nameTwo);

	// Links
	var dataLinkOne = $("#section-03 .director[data-director="+ numDispOne +"]").attr('data-link');
	var dataLinkTwo = $("#section-03 .director[data-director="+ numDispTwo +"]").attr('data-link');

	directorOneLink.attr('href','directors/'+ dataLinkOne +'.html');
	directorTwoLink.attr('href','directors/'+ dataLinkTwo +'.html');
});



// START ANIMATIONS GSAP ---------------------------------------
var h_dropText = document.getElementsByClassName("text-drop-gsap");
var h_line = document.getElementsByClassName("lineView");
var s1_buttonPlay = document.getElementsByClassName('playDemo');
function animationsGsap() {
  TweenMax.fromTo(s1_buttonPlay, 3,{
    y: "-=10",
    opacity: 0,
  }, {
    delay: 2.3,
    ease: Power4.easeOut,
    y: 0,
    opacity: 1,
    onComplete: function() {
      $("#playButton").addClass('transition');
    },
  })
  TweenMax.from(h_line, 1,{
    width: "0",
    delay: .5,
    ease: Power2.easeOut
  });

  var mySplitText = new SplitText(h_dropText, {type:"chars,words, lines"}),
    tl = new TimelineMax({repeatDelay:0.5});
  var numChars = mySplitText.chars.length;
  tl.staggerFrom(mySplitText.chars, 0.04, {opacity:0}, 0.04);
};

// VIMEO CONTROLS ---------------------------------------
var iframeDemo = document.getElementById('video');
var playerDemo = $f(iframeDemo);
var iframeProject = document.getElementById('videoProject');
var playerProject = $f(iframeProject);

$(".playDemo").click(function(){
	$("#video").removeAttr("hidden");
	$("#videoProject").attr("hidden","true");
  $(".videoDiv").addClass("active");
  $(".videoDiv").fadeIn(600);
  playerDemo.api("play");
	$('.slick').slick('slickPause');

	if( $("#navMobile").hasClass("active") === true ) {
		$(".menuMobile").removeClass("active");
		$("#navMobile").removeClass("active");
	}
});
$(".playProject").click(function(){
	var projectSelect = $("#section-02 .slick .slick-slide.slick-active .videoBack").attr("data-url");
	$("#videoProject").attr("src", projectSelect);
	$("#video").attr("hidden","true");
	$("#videoProject").removeAttr("hidden");
  $(".videoDiv").addClass("active");
  $(".videoDiv").fadeIn(600);
  playerProject.api("play");
	$('.slick').slick('slickPause');
});
$(".closeVideo").click(function(){
  $(".videoDiv").removeClass("active");
  $(".videoDiv").fadeOut(600);
  playerDemo.api("pause");
	playerProject.api("pause");
	$('.slick').slick('slickPlay');
});


s1_buttonPlay.addEventListener("click", function() {
  playerDemo.api("play");
});

var pauseButton = document.getElementById("pauseButton");
pauseButton.addEventListener("click", function() {
  playerDemo.api("pause");
});
