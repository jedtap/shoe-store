function resetCart() {
    counter = 0;
    localStorage.setItem('cartCounter', counter);
    console.log(counter);

    const cartIndicator = document.getElementById('cart-indicator');
    cartIndicator.classList.add('hidden');
}

window.onload = function() {
    const savedCounter = localStorage.getItem('cartCounter');
    if (savedCounter) {
        counter = parseInt(savedCounter, 10);
        if (counter > 0) {
            document.getElementById('cart-indicator').classList.remove('hidden');
        }
    }
};
