const petalContainer = document.querySelector('.falling-petals');

// Create 100 random petals
for (let i = 0; i < 100; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.animationDuration = `${Math.random() * 5 + 4}s`; // Randomize duration between 4 and 9 seconds
    petal.style.left = `${Math.random() * 100}%`; // Randomize starting X position
    petalContainer.appendChild(petal);
}
