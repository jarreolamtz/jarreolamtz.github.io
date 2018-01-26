function animationsGsap() {
  var h_dropText = document.getElementsByClassName("text-drop-gsap");
  var s1_buttonPlay = document.getElementById("playButton");
  TweenMax.fromTo(s1_buttonPlay, 3,{
    y: "-=10",
    opacity: 0,
  }, {
    delay: 2,
    ease: Power4.easeOut,
    y: 0,
    opacity: 1,
  })

  var mySplitText = new SplitText(h_dropText, {type:"chars,words, lines"}),
    tl = new TimelineMax({repeatDelay:0.5});
  var numChars = mySplitText.chars.length;
  tl.staggerFrom(mySplitText.chars, 0.04, {opacity:0}, 0.04);
};

$("#playButton").click(function(){
  $(".videoDiv").addClass("active");
  $(".videoDiv").fadeIn(600);
});
$(".closeVideo").click(function(){
  $(".videoDiv").removeClass("active");
  $(".videoDiv").fadeOut(600);
});



var iframe = document.getElementById('video');
// $f == Froogaloop
var player = $f(iframe);

var playButton = document.getElementById("playButton");
playButton.addEventListener("click", function() {
  player.api("play");
});

var pauseButton = document.getElementById("pauseButton");
pauseButton.addEventListener("click", function() {
  player.api("pause");
});






$(function(){
  /*
    :glitchBoy
  */

  var bodyW = document.body.clientWidth;
  var bodyH = document.body.clientHeight;

  function glitchBoy(canvas, options){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.origCanvas = document.createElement('canvas');
    this.origContext = this.origCanvas.getContext('2d');
    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;
    this.options = options;
  }
  if( $(window).width() > 991) {
    glitchBoy.prototype.drawImage = function(img, x, y, w, h){
      this.canvas.getContext("2d").drawImage(img, x, y, bodyW, bodyH);
    };
  }
  else if( $(window).width() < 991 && $(window).width() > 767 ) {
    glitchBoy.prototype.drawImage = function(img, x, y, w, h){
      var bodyW = document.body.clientWidth*2;
      var bodyH = document.body.clientHeight;

      this.canvas.getContext("2d").drawImage(img, document.body.clientWidth / 3.5*(-1), y, bodyW, bodyH);
    };
  } else {
    glitchBoy.prototype.drawImage = function(img, x, y, w, h){
      var bodyW = document.body.clientWidth*3;
      var bodyH = document.body.clientHeight;
      this.canvas.getContext("2d").drawImage(img, document.body.clientWidth / 3.5*(-1), y, bodyW, bodyH);
    };
  }

  glitchBoy.prototype.glitchWave = function(renderLineHeight, cuttingHeight){
    var image = this.ctx.getImageData(0, renderLineHeight, bodyW, bodyH);
    this.ctx.putImageData(image, 0, renderLineHeight);
  };
  glitchBoy.prototype.glitchSlip = function(waveStrength, startHeight, endHeight){
    if(endHeight < startHeight){
      var temp = endHeight;
      endHeight = startHeight;
      startHeight = temp;
    }
    for(var h = startHeight; h < endHeight; h++){
      if(Math.random() < 0.1)h++;
      var image = this.ctx.getImageData(0, h, this.width, 1);
      this.ctx.putImageData(image, Math.random()*waveStrength-(waveStrength/2), h);
    }
  };
  glitchBoy.prototype.glitchFillRandom = function(fillCnt, cuttingMaxHeight){
    var cw = this.width;
    var ch = this.height;
    for(var i = 0; i< fillCnt; i++){
      var rndX = cw * Math.random();
      var rndY = ch * Math.random();
      var rndW = cw * Math.random();
      var rndH = cuttingMaxHeight * Math.random();
      var image = this.ctx.getImageData(rndX,rndY,rndW, rndH);
      this.ctx.putImageData(image, (rndX* Math.random())%cw, rndY);
    }
  }
  glitchBoy.prototype.process = function () {
  requestAnimationFrame(process);
 }

  /*
    :videoGirl
  */
  function videoGirl(options, callback){
    var options = $.extend({
      src:"",
      type:'video/ogg',
      controls:false,
      autoplay:true,
      loop:true,
      muted:true
    }, options);
    var video = document.createElement('video');
    video.crossOrigin = 'anonymous'; // important!!!!
    video.controls = options.controls;
    video.autoplay = options.autoplay;
    video.loop = options.loop;
    video.muted = options.muted;
    var source = document.createElement('source');
    source.src = options.src;
    source.type = options.type;
    video.appendChild(source);
    this.video = video;
    this.source = source;
    //video.play();
    // load
    if(callback !== null){
      video.addEventListener('loadeddata', callback);
    }
  };


  // sync
  var FPS = 15;
  var frm = 0;
  var vGirl = new videoGirl({
    src:'video/demito.mp4',
    type:'video/mp4'
  }, sync);
  function sync(){
    var canvas = document.getElementById("canvas");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    var glitch = new glitchBoy(canvas);
    setInterval(function(){
      frm++;
      glitch.drawImage(vGirl.video, 0, 0);
      glitch.glitchWave((frm * 3) % glitch.height, 10);
      if(frm %100 < 10){
        // fillCnt, cuttingMaxHeight
        glitch.glitchFillRandom(5, 40);
      }
      if(80 < frm%100){
        glitch.glitchSlip(10,200,300);
      }
      if(95 < frm%100){
        glitch.glitchSlip(10,100* Math.random(),400 * Math.random());
      }
    }, 1000/FPS);
  }
});
