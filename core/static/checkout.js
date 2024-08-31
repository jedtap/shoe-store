const cartIcon = document.getElementById('cart-icon');
cartIcon.classList.add('hidden');

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

fetch('/cart/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCSRF('csrftoken')
    },
    body: JSON.stringify({ cartItems: cartItems })
})
.then(response => response.json())
.then(data => updateCart(data.shoes))

function getCSRF(name) {
    let csrf = null;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
            csrf = decodeURIComponent(cookie.substring(name.length + 1));
            break;
        }
    }
    return csrf;
}

function updateCart(shoes) {
    const cartContainer = document.getElementById('cart-items-container');
    const totalElement = document.getElementById('cart-total');
    cartContainer.innerHTML = '';

    let totalAmount = 0;

    shoes.forEach(shoe => {
        const shoeElement = document.createElement('div');
        shoeElement.className = 'flex flex-row items-start space-x-4 space-y-4 md:items-center';
        shoeElement.innerHTML = `
            <img src="${shoe.image_url}" alt="${shoe.name}" class="w-24">
            <div>
                <h3 class="text-lg font-bold">${shoe.name}</h3>
                <p class="text-gray-600">${shoe.shoe_type}</p>
                <p class="text-gray-800">$${shoe.price_usd}</p>
            </div>
        `;
        cartContainer.appendChild(shoeElement);
        totalAmount += parseFloat(shoe.price_usd);
    });

    updateTotal(totalAmount);
}

function updateTotal(totalAmount) {
    const totalElement = document.getElementById('cart-total');
    totalElement.textContent = `Total: $${totalAmount} (${cartItems.length} items)`;
}
