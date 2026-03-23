# Everyday Attire - HTML/CSS/JS Version

This folder contains the complete HTML/CSS/JavaScript version of the Everyday Attire ecommerce website.

## Files Included

### Core Files
- `index.html` - Home page with hero slider, featured products, new arrivals, testimonials
- `about.html` - About Us page with company story and values
- `contact.html` - Contact page with form and contact information
- `cart.html` - Shopping cart page with COD payment option
- `privacy.html` - Privacy Policy page
- `terms.html` - Terms and Conditions page
- `returns.html` - Return and Refund Policy page

### Assets
- `styles.css` - Complete stylesheet for all pages
- `script.js` - Main JavaScript for cart management, slider, and interactivity
- `cart.js` - Cart page specific functionality
- `contact.js` - Contact form handling

## Features

### Implemented Features:
1. **Hero Slider** - Auto-rotating banner with 3 slides and navigation
2. **Product Catalog** - 10 women's products, 3 men's products
3. **Shopping Cart** - Add/remove items, update quantities, localStorage persistence
4. **Payment Options** - Cash on Delivery (COD) and Card payment selection
5. **Checkout Flow** - Complete order placement with success confirmation
6. **Responsive Design** - Mobile-first, works on all screen sizes
7. **Customer Testimonials** - Product reviews section with ratings
8. **Complete Footer** - With policy links and contact information
9. **Policy Pages** - Privacy, Terms, Returns with detailed legal content
10. **Contact Form** - Functional contact form with validation and success message
11. **About Us Page** - Company information, values, and mission
12. **Navigation** - Sticky header with cart count indicator

### Product Categories:
- Women's Jeans
- Women's Tops
- Women's Crop Tops
- Women's Handbags
- Women's Sandals
- Men's Shirts
- Men's Jeans
- Men's T-Shirts

## How to Use

1. Open `index.html` in a web browser to view the homepage
2. Browse products and add items to cart using "Add to Cart" buttons
3. Navigate to other pages using the header menu links
4. Click the cart icon to view your shopping cart
5. Select payment method (COD or Card) and place order
6. Fill out the contact form to send a message
7. Read policy pages for terms, privacy, and return information
8. All cart data persists in localStorage across sessions

## Store Information

- **Name:** Everyday Attire
- **Location:** 123 Fashion Street, New York, NY 10001, USA
- **Email:** Care@attire.store
- **Phone:** +1-672-365-8854
- **Business Hours:** 
  - Monday - Friday: 9:00 AM - 6:00 PM EST
  - Saturday: 10:00 AM - 4:00 PM EST
  - Sunday: Closed

## Technical Details

### Cart Management
- Cart data stored in browser's localStorage
- Persistent across page reloads and browser sessions
- Real-time cart count updates in header
- Quantity adjustments and item removal
- Automatic total calculation

### Order Flow
1. Add products to cart
2. Navigate to cart page
3. Review items and adjust quantities
4. Select payment method (COD/Card)
5. Place order
6. See success confirmation
7. Cart clears and redirects to home

## Browser Compatibility

Works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Opera

## Deployment

To deploy this website:
1. Upload all HTML, CSS, and JS files to your web server
2. Ensure all files maintain their relative paths
3. No build process or dependencies required
4. Works immediately as static files

## Notes

- All images are loaded from Unsplash CDN
- Cart data persists using localStorage
- Fully responsive design with mobile-first approach
- No backend required - pure frontend implementation
- Forms show success messages (no actual email sending)
- All interactive features work client-side