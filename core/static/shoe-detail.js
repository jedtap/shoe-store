let counter = 0;
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function handleButtonClick() {
    const shoePk = document.getElementById('addToCartButton').getAttribute('data-shoe-pk');
    cartItems.push(shoePk);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    counter += 1;
    localStorage.setItem('cartCounter', counter);
    document.getElementById('cart-indicator').classList.remove('hidden');
    
    showNotification();

    console.log(counter);
    console.log(cartItems);
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
