let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    } else {
        console.error("Cart count element not found.");
    }
}

function renderCartItems() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('cart-total-price');
    cartItemsElement.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="images/${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-controls">
                <button class="remove-item" data-index="${index}">Remove</button>
            </div>
        `;
        cartItemsElement.appendChild(cartItem);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
    updateCartCount();
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-item')) {
        removeItem(parseInt(event.target.dataset.index));
    }
});

updateCartCount();
renderCartItems();let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    } else {
        console.error("Cart count element not found.");
    }
}

function renderCartItems() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('cart-total-price');
    cartItemsElement.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="images/${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-controls">
                <button class="remove-item" data-index="${index}">Remove</button>
            </div>
        `;
        cartItemsElement.appendChild(cartItem);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
    updateCartCount();
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-item')) {
        removeItem(parseInt(event.target.dataset.index));
    }
});

updateCartCount();
renderCartItems();