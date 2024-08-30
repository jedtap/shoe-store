function resetCart() {
    const cartIndicator = document.getElementById('cart-indicator');
    cartIndicator.classList.add('hidden');

    cartItems = [];
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

window.onload = function() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (cartItems.length > 0) {
        document.getElementById('cart-indicator').classList.remove('hidden');
    }
};
