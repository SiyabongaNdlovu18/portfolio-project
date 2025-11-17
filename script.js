const cube = document.getElementById('cube');

let rotateX = -20;
let rotateY = 20;

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    rotateY = 20 + deltaX * 30;
    rotateX = -20 + deltaY * 30;

    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
