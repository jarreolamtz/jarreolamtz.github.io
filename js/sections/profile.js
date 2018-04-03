// START ANIMATIONS GSAP ---------------------------------------
var s1_buttonPlay = document.getElementsByClassName('playDemo');
function animationsGsap() {

};

// VIMEO CONTROLS ---------------------------------------
var iframeDemo = document.getElementById('video');
var playerDemo = $f(iframeDemo);
var iframeProject = document.getElementById('videoProject');
var playerProject = $f(iframeProject);


$(".playProject").click(function(){
	var projectSelect = $(this).attr("data-url");
	$("#videoProject").attr("src", projectSelect);
	$("#video").attr("hidden","true");
	$("#videoProject").removeAttr("hidden");
  $(".videoDiv").addClass("active");
  $(".videoDiv").fadeIn(600);
  playerProject.api("play");
});
