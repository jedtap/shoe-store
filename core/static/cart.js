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
    cartContainer.innerHTML = '';

    shoes.forEach(shoe => {
        const shoeElement = document.createElement('div');
        shoeElement.className = 'flex flex-row items-start space-x-4 space-y-4 md:items-center';
        shoeElement.innerHTML = `
            <a href="${shoe.url}">
                <img src="${shoe.image_url}" alt="${shoe.name}" class="w-40 md:w-48">
            </a>
            <div>
                <a href="${shoe.url}">
                    <h3 class="text-2xl font-bold">${shoe.name}</h3>
                </a>
                <p class="text-gray-600 md:text-xl">${shoe.shoe_type}</p>
                <p class="text-gray-800 md:text-xl">$${shoe.price_usd}</p>
                <span class="mt-4 material-symbols-outlined delete-btn cursor-pointer">delete</span>
            </div>
        `;
        cartContainer.appendChild(shoeElement);

        shoeElement.querySelector('.delete-btn').addEventListener('click', function() {
            cartContainer.removeChild(shoeElement);
            cartItems = cartItems.filter(id => id !== shoe.pk);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        });
    });
}
