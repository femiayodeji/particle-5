const canvas = document.getElementById("p-canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

const mouse = {
    x : null,
    y: null
}

canvas.addEventListener("click", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
});

function drawCircle(){
    context.fillStyle = "blue";
    context.beginPath ();
    context.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    context.fill();    
}

drawCircle();