document.querySelector('.valentines_card').addEventListener('mouseover', function() {
    const audio = document.getElementById('loveAudio');
    audio.play();
});

const petalContainer = document.querySelector('.falling-petals');

for (let i = 0; i < 50; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.animationDuration = `${Math.random() * 5 + 4}s`;
    petal.style.left = `${Math.random() * 100}%`;
    petalContainer.appendChild(petal);
}
