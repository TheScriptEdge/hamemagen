// app.js

const homeButton = document.getElementById('homeButton');
const blockScreen = document.getElementById('blockScreen');
const shieldIcon = document.getElementById('shieldIcon');

shieldIcon.addEventListener('click', () => {
    window.location.href = 'home.html'; // Redirecting to home page
});

homeButton.addEventListener('click', () => {
    window.location.href = 'https://www.google.com'; // Redirecting to Google
});

blockScreen.addEventListener('click', (e) => {
    if (e.target !== shieldIcon && e.target !== homeButton) {
        const collision = document.createElement('div');
        collision.classList.add('collision');
        collision.style.left = `${e.clientX - collision.offsetWidth / 2}px`;
        collision.style.top = `${e.clientY - collision.offsetHeight / 2}px`;
        blockScreen.appendChild(collision);
        setTimeout(() => {
            collision.remove();
        }, 500);
    }
});
