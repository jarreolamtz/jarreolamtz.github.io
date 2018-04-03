var context = document.getElementById('canvas').getContext("2d");

var img = new Image();
img.onload = function () {
    context.drawImage(img, 0, 0);
}
img.src = "img/assets/glitchPrev.png";
