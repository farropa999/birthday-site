const canvas = document.getElementById('fallingCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let flowers = [];

function createFlower() {
    flowers.push({
        x: Math.random() * canvas.width,
        y: 0,
        size: 30 + Math.random() * 20,
        speed: 1 + Math.random() * 2,
    });
}

function drawFlower(f) {
    let img = new Image();
    img.src = 'assets/flower.png';
    ctx.drawImage(img, f.x, f.y, f.size, f.size);
}

function animateFlowers() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    flowers.forEach((f, index) => {
        f.y += f.speed;
        drawFlower(f);
        if (f.y > canvas.height) {
            flowers.splice(index, 1);
        }
    });
    requestAnimationFrame(animateFlowers);
}

setInterval(createFlower, 300);
animateFlowers();

function showHearts() {
    for(let i=0; i<20; i++) {
        createHeart();
    }
}

function showMoreHearts() {
    for(let i=0; i<50; i++) {
        createHeart();
    }
}

function createHeart() {
    let heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = `translateY(-${window.innerHeight + 100}px)`;
        heart.style.opacity = 0;
    }, 50);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

window.addEventListener('scroll', () => {
    createFlower();
}

particlesJS.load('particles-js', 'particles-config.json', function() {
  console.log('Particles loaded!');
});

