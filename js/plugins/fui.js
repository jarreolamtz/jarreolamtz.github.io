// FUI -----------------------------------------------------
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
