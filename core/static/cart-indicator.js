function resetCart() {
    counter = 0;
    localStorage.setItem('cartCounter', counter);
    console.log(counter);

    const cartIndicator = document.getElementById('cart-indicator');
    cartIndicator.classList.add('hidden');

    cartItems = [];
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

window.onload = function() {
    const savedCounter = localStorage.getItem('cartCounter');
    if (savedCounter && parseInt(savedCounter, 10) > 0) {
        document.getElementById('cart-indicator').classList.remove('hidden');
    }
};
