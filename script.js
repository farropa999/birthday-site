const canvas = document.getElementById('fallingCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let flowers = [];
const flowerImg = new Image();
flowerImg.src = 'assets/flower.png';

function createFlower() {
    flowers.push({
        x: Math.random() * canvas.width,
        y: 0,
        size: 30 + Math.random() * 20,
        speed: 1 + Math.random() * 2,
    });
}

function drawFlower(f) {
    ctx.drawImage(flowerImg, f.x, f.y, f.size, f.size);
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
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80
    },
    "color": {
      "value": ["#ff69b4", "#ffc0cb", "#fff0f5"]
    },
    "shape": {
      "type": "image",
      "image": [
        {
          "src": "assets/heart.png",
          "width": 20,
          "height": 20
        },
        {
          "src": "assets/flower.png",
          "width": 20,
          "height": 20
        }
      ]
    },
    "opacity": {
      "value": 0.7
    },
    "size": {
      "value": 10,
      "random": true
    },
    "move": {
      "enable": true,
      "speed": 2
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
});

