var box = document.getElementById("animate2");
var boxx = document.getElementById("animate1");
var xpos = 0;
var ypos = 0;
var xstep = 1;
var ystep = 1;
var id = setInterval(frame, Infinity);

function frame() {
     if (xpos > 1000 || xpos < 0) {
        xstep = -xstep;
    }
    xpos = xpos + xstep;
    box.style.left = xpos + 'px';
}
window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft"){
        boxx.style.background = "lightpink";
    } else if (event.key === "ArrowRight") {
         boxx.style.background = "PaleGreen";
    } else {
         boxx.style.background = "rebeccapurple";
    }
});
