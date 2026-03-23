// Cart Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    const emptyCart = document.getElementById('emptyCart');
    const orderSuccess = document.getElementById('orderSuccess');
    const cartGrid = document.getElementById('cartGrid');
    const cartItemsList = document.getElementById('cartItemsList');
    const subtotalAmount = document.getElementById('subtotalAmount');
    const totalAmount = document.getElementById('totalAmount');
    const checkoutBtn = document.getElementById('checkoutBtn');

    // Get cart from localStorage
    function getCart() {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    }

    // Save cart to localStorage
    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }

    // Update cart count in header
    function updateCartCount() {
        const cart = getCart();
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        const cartCountEl = document.getElementById('cartCount');
        if (cartCountEl) {
            cartCountEl.textContent = cartCount;
        }
    }

    // Calculate total
    function calculateTotal() {
        const cart = getCart();
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Render cart items
    function renderCart() {
        const cart = getCart();

        if (cart.length === 0) {
            emptyCart.style.display = 'block';
            cartGrid.style.display = 'none';
            return;
        }

        emptyCart.style.display = 'none';
        cartGrid.style.display = 'grid';

        cartItemsList.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}">
                <div style="flex: 1;">
                    <h3 style="font-size: 1.125rem; margin-bottom: 0.5rem;">${item.name}</h3>
                    <p style="color: #666; font-size: 0.875rem; margin-bottom: 0.5rem;">${item.description}</p>
                    <p style="font-weight: bold; font-size: 1.125rem; margin-bottom: 1rem;">$${item.price.toFixed(2)}</p>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                                </svg>
                            </button>
                            <span style="width: 2rem; text-align: center;">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                                </svg>
                            </button>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})" aria-label="Remove from cart">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        const total = calculateTotal();
        subtotalAmount.textContent = `$${total.toFixed(2)}`;
        totalAmount.textContent = `$${total.toFixed(2)}`;
    }

    // Update quantity
    window.updateQuantity = function(id, newQuantity) {
        if (newQuantity < 1) return;
        
        const cart = getCart();
        const itemIndex = cart.findIndex(item => item.id === id);
        
        if (itemIndex !== -1) {
            cart[itemIndex].quantity = newQuantity;
            saveCart(cart);
            renderCart();
        }
    };

    // Remove from cart
    window.removeFromCart = function(id) {
        const cart = getCart();
        const newCart = cart.filter(item => item.id !== id);
        saveCart(newCart);
        renderCart();
    };

    // Checkout
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            const cart = getCart();
            
            if (cart.length === 0) {
                alert('Your cart is empty');
                return;
            }

            // Show success message
            cartGrid.style.display = 'none';
            orderSuccess.style.display = 'block';

            // Clear cart after 2 seconds
            setTimeout(() => {
                localStorage.removeItem('cart');
                updateCartCount();
                
                // Redirect to home after another second
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            }, 2000);
        });
    }

    // Initialize
    renderCart();
    updateCartCount();
});
