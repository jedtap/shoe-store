let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function handleButtonClick() {
    const shoePk = parseInt(document.getElementById('addToCartButton').getAttribute('data-shoe-pk'), 10);
    cartItems.push(shoePk);    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
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
