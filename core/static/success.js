resetCart();

let countdown = 10;
const countdownElement = document.getElementById('countdown');

const countdownInterval = setInterval(() => {
    countdown -= 1;
    countdownElement.textContent = countdown;
    if (countdown === 0) {
        clearInterval(countdownInterval);
        window.location.href = '/';
    }
}, 1000);
