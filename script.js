const canvas = document.getElementById("p-canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

const mouse = {
    x : undefined,
    y: undefined
}

const particles = [];

canvas.addEventListener("click", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

canvas.addEventListener("mousemove", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

class Particle{
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedx = Math.random() * 3 - 1.5;
        this.speedy = Math.random() * 3 - 1.5;
    }

    update(){
        this.x += this.speedx;
        this.y += this.speedy;
    }

    draw(){
        context.fillStyle = "blue";
        context.beginPath ();
        context.arc(this.x, this.y, 50, 0, Math.PI * 2);
        context.fill();        
    }
}

function init(){
    for(let i = 0; i < 100; i++){
         particles.push(new Particle())
    }
}

init();

function handleParticles(){
    for(let i = 0; i < 100; i++){
        let particle = particles[i];
        particle.draw();
        particle.update();
   }
}


function animate(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}

animate();