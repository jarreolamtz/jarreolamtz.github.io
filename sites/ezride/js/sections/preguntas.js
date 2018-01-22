var viewPort = $(window).width();
// SELECTORS:--------------------------------------
//section-01 ---------------------
var s1_fillBlue = ("#section-01 .fill-dots-blue");
var s1_centerXY = ("#section-01 .center-y");
var s1_fillBack = ("#section-01 .fill-dots-black");

var s1_array = (".preguntaMod");



$(window).load(function(){
  if( viewPort > 767 ) {
    TweenMax.from($(".fillSide"), 1.2, {
      opacity: 0,
      y: "+=40",
      ease:Power1. easeInOut,
      delay: 1.6
    });
    TweenMax.staggerFrom($(".preguntaMod"), 1.2, {
      opacity: 0,
      y: "+=40",
      ease:Power1. easeInOut,
      delay: 1.8
    },0.2);
  }
  else {
    //NOT USE FULLPAGE
  }
});


if( viewPort > 767 ) {

}
else {
  //NOT USE FULLPAGE
}
