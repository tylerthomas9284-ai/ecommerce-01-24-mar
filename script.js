// Products Data
const products = [
  {
    id: 'w1',
    name: 'Classic Blue Jeans',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1565292334631-95d1dd9e2970?w=400',
    category: 'women',
    type: 'Jeans',
    description: 'Comfortable high-waisted denim jeans with a classic fit'
  },
  {
    id: 'w2',
    name: 'Elegant White Top',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1763935558903-b83c17bf3656?w=400',
    category: 'women',
    type: 'Top',
    description: 'Stylish and versatile white top perfect for any occasion'
  },
  {
    id: 'w3',
    name: 'Summer Crop Top',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1648322332223-2b772db71933?w=400',
    category: 'women',
    type: 'Crop Top',
    description: 'Trendy crop top for a modern, casual look'
  },
  {
    id: 'w4',
    name: 'Designer Handbag',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1760624294504-211e763ee0fb?w=400',
    category: 'women',
    type: 'Handbag',
    description: 'Luxury leather handbag with spacious interior'
  },
  {
    id: 'w5',
    name: 'Comfort Sandals',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1732708862549-714f7478ca31?w=400',
    category: 'women',
    type: 'Sandals',
    description: 'Stylish and comfortable summer sandals'
  },
  {
    id: 'w6',
    name: 'Skinny Fit Jeans',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400',
    category: 'women',
    type: 'Jeans',
    description: 'Modern skinny fit jeans in dark wash'
  },
  {
    id: 'w7',
    name: 'Floral Blouse',
    price: 55.99,
    image: 'https://images.unsplash.com/photo-1566206091558-7f218b696731?w=400',
    category: 'women',
    type: 'Top',
    description: 'Feminine floral print blouse for spring'
  },
  {
    id: 'w8',
    name: 'Athletic Crop Top',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1578342976795-062a1b744f37?w=400',
    category: 'women',
    type: 'Crop Top',
    description: 'Performance crop top for active lifestyle'
  },
  {
    id: 'w9',
    name: 'Crossbody Bag',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400',
    category: 'women',
    type: 'Handbag',
    description: 'Compact crossbody bag for everyday use'
  },
  {
    id: 'w10',
    name: 'Platform Sandals',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1603808033176-b1a8951ddeb1?w=400',
    category: 'women',
    type: 'Sandals',
    description: 'Trendy platform sandals with ankle strap'
  },
  {
    id: 'm1',
    name: 'Casual Shirt',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1651592440650-2c1dfddf3573?w=400',
    category: 'men',
    type: 'Shirt',
    description: 'Comfortable casual shirt for everyday wear'
  },
  {
    id: 'm2',
    name: 'Denim Jeans',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    category: 'men',
    type: 'Jeans',
    description: 'Classic fit denim jeans for men'
  },
  {
    id: 'm3',
    name: 'Polo T-Shirt',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400',
    category: 'men',
    type: 'T-Shirt',
    description: 'Premium cotton polo shirt'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Absolutely love the quality of the jeans! Perfect fit and super comfortable. Will definitely shop again.',
    product: 'Classic Blue Jeans',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
  },
  {
    id: 2,
    name: 'Emily Davis',
    rating: 5,
    comment: 'The crop top is exactly what I was looking for. Great material and true to size!',
    product: 'Summer Crop Top',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
  },
  {
    id: 3,
    name: 'Michael Brown',
    rating: 4,
    comment: 'Fast delivery and excellent customer service. The casual shirt fits perfectly!',
    product: 'Casual Shirt',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
  },
  {
    id: 4,
    name: 'Jessica Wilson',
    rating: 5,
    comment: 'Beautiful handbag! The quality exceeded my expectations. Highly recommend Everyday Attire!',
    product: 'Designer Handbag',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100'
  }
];

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountEl = document.getElementById('cartCount');
  if (cartCountEl) {
    cartCountEl.textContent = count;
    cartCountEl.style.display = count > 0 ? 'flex' : 'none';
  }
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  if (window.location.pathname.includes('cart.html')) {
    renderCart();
  }
}

function updateQuantity(productId, quantity) {
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
  }
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    background: #10b981;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    animation: slideIn 0.3s ease-out;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-in';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Product Rendering
function createProductCard(product) {
  return `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-footer">
          <span class="product-price">$${product.price.toFixed(2)}</span>
          <button class="add-to-cart" onclick="addToCart('${product.id}')">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderProducts() {
  const featuredEl = document.getElementById('featuredProducts');
  const newArrivalsEl = document.getElementById('newArrivals');
  
  if (featuredEl) {
    const featured = products.filter(p => p.category === 'women').slice(0, 10);
    featuredEl.innerHTML = featured.map(createProductCard).join('');
  }
  
  if (newArrivalsEl) {
    const shuffled = [...products].sort(() => 0.5 - Math.random()).slice(0, 6);
    newArrivalsEl.innerHTML = shuffled.map(createProductCard).join('');
  }
}

function renderTestimonials() {
  const testimonialsEl = document.getElementById('testimonials');
  if (!testimonialsEl) return;
  
  testimonialsEl.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-header">
        <img src="${t.image}" alt="${t.name}" class="testimonial-avatar">
        <div class="testimonial-info">
          <h4>${t.name}</h4>
          <div class="stars">${'★'.repeat(t.rating)}</div>
        </div>
      </div>
      <p class="testimonial-comment">${t.comment}</p>
      <p class="testimonial-product">${t.product}</p>
    </div>
  `).join('');
}

// Cart Page
function renderCart() {
  const cartItemsEl = document.getElementById('cartItems');
  const subtotalEl = document.getElementById('subtotal');
  const totalEl = document.getElementById('total');
  const emptyCartEl = document.getElementById('emptyCart');
  const cartContentEl = document.getElementById('cartContent');
  
  if (!cartItemsEl) return;
  
  if (cart.length === 0) {
    if (emptyCartEl) emptyCartEl.style.display = 'block';
    if (cartContentEl) cartContentEl.style.display = 'none';
    return;
  }
  
  if (emptyCartEl) emptyCartEl.style.display = 'none';
  if (cartContentEl) cartContentEl.style.display = 'grid';
  
  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-details">
        <div class="cart-item-header">
          <div>
            <h3>${item.name}</h3>
            <p style="color: #666; font-size: 0.875rem;">${item.description}</p>
            <p style="font-weight: bold; font-size: 1.125rem; margin-top: 0.5rem;">$${item.price.toFixed(2)}</p>
          </div>
          <button class="remove-btn" onclick="removeFromCart('${item.id}')" title="Remove from cart">×</button>
        </div>
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">−</button>
          <span style="width: 2rem; text-align: center;">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
        </div>
      </div>
    </div>
  `).join('');
  
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${subtotal.toFixed(2)}`;
}

function checkout() {
  const paymentMethod = document.querySelector('input[name="payment"]:checked');
  if (!paymentMethod) {
    alert('Please select a payment method');
    return;
  }
  
  if (cart.length === 0) {
    alert('Your cart is empty');
    return;
  }
  
  // Show success message
  document.getElementById('cartContent').style.display = 'none';
  document.getElementById('emptyCart').style.display = 'none';
  document.getElementById('successMessage').style.display = 'block';
  
  // Clear cart
  setTimeout(() => {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    window.location.href = 'index.html';
  }, 3000);
}

// Hero Slider
let currentSlideIndex = 0;

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  
  if (!slides.length) return;
  
  if (n >= slides.length) currentSlideIndex = 0;
  if (n < 0) currentSlideIndex = slides.length - 1;
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  slides[currentSlideIndex].classList.add('active');
  if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.add('active');
}

function changeSlide(n) {
  currentSlideIndex += n;
  showSlide(currentSlideIndex);
}

function currentSlide(n) {
  currentSlideIndex = n;
  showSlide(currentSlideIndex);
}

// Auto slide
setInterval(() => {
  if (document.querySelector('.hero-slider')) {
    changeSlide(1);
  }
}, 5000);

// Contact Form
function handleContactSubmit(e) {
  e.preventDefault();
  showNotification('Thank you for your message! We\'ll get back to you soon.');
  e.target.reset();
}

// CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderProducts();
  renderTestimonials();
  renderCart();
  
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }
});
