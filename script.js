const canvas = document.getElementById("p-canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
    x : undefined,
    y: undefined
}

const particles = [];
let hue = 0;

window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

canvas.addEventListener("click", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

canvas.addEventListener("mousemove", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    createParticles();
})

class Particle{
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 15 + 1;
        this.speedx = Math.random() * 3 - 1.5;
        this.speedy = Math.random() * 3 - 1.5;
        this.color = `hsl(${hue}, 100%, 50%)`;
    }

    update(){
        this.x += this.speedx;
        this.y += this.speedy;

        if(this.size > 0.2) this.size -= 0.1;
    }

    draw(){
        context.fillStyle = this.color;
        context.beginPath ();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();        
    }
}

function createParticles(){
    for(let i = 0; i < 5; i++){
         particles.push(new Particle())
    }
}

function handleParticles(){
    for(let i = 0; i < particles.length; i++){
        let particle = particles[i];
        particle.draw();
        particle.update();

        for(let j = i; j < particles.length; j++){
            const nextParticle = particles[j];
            const dx = particle.x - nextParticle.x;
            const dy = particle.y - nextParticle.y;
            const distance = Math.sqrt(dx * dx + dy*dy);

            if(distance < 100){
                context.beginPath();
                context.strokeStyle = particle.color;
                context.lineWidth = 0.2;
                context.moveTo(particle.x, particle.y);
                context.lineTo(nextParticle.x, nextParticle.y);
                context.stroke();
                context.closePath();
            }
        }

        if(particle.size <= 0.3){
            particles.splice(i, 1);
            i--;
        }
   }
}

function animate(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    hue+=2;
    requestAnimationFrame(animate);
}

animate();