let counter = 0;

function handleButtonClick() {
    counter += 1;
    localStorage.setItem('cartCounter', counter);
    console.log(counter);
    document.getElementById('cart-indicator').classList.remove('hidden');

    showNotification();
}

function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('hidden');

    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

function closeNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('hidden');
}


document.getElementById('addToCartButton').addEventListener('click', handleButtonClick);
document.getElementById('closeNotifButton').addEventListener('click', closeNotification);
