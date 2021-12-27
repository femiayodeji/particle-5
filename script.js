const canvas = document.getElementById("p-canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

context.fillStyle = "blue";
context.beginPath ();
context.arc(100,100, 50, 0, Math.PI * 2);
context.fill();
