let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    } else {
        console.error("Cart count element not found.");
    }
}

function addToCart(name, price, image) {
    if (typeof name !== 'string' || typeof price !== 'number' || typeof image !== 'string') {
        console.error("Invalid data types for item: ", { name, price, image });
        return;
    }
    if (price < 0) {
        console.error("Price cannot be negative for item: ", name);
        return;
    }
    cart.push({ name, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    console.log("Item added: ", { name, price, image });
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const name = this.dataset.name;
        const price = parseFloat(this.dataset.price);
        const image = this.dataset.image;
        if (isNaN(price)) {
            console.error("Invalid price data for item: ", name);
            return;
        }
        addToCart(name, price, image);
    });
});

updateCartCount();