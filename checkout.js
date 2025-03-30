document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const payment = document.getElementById('payment').value;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    console.log("Order Details:", { name, address, phone, payment, cart });

    alert("Payment processed successfully!");
    localStorage.removeItem('cart');
    window.location.href = "index.html";
});