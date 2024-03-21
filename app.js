const homeButton = document.getElementById('homeButton');
const blockScreen = document.getElementById('blockScreen');
let lastRippleTime = 0;

homeButton.addEventListener('click', () => {
    window.location.href = 'https://www.google.com';
});

blockScreen.addEventListener('click', (e) => {
    const now = Date.now();
    if (now - lastRippleTime >= 500) {
        lastRippleTime = now;
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        blockScreen.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 500);
    }
});