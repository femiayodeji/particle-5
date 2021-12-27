const canvas = document.getElementById("p-canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.fillStyle = "white";
    context.fillRect(10, 20, 150, 50);
})

context.fillStyle = "white";
context.fillRect(10, 20, 150, 50);