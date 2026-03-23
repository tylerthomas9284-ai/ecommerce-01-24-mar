// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // In a real application, you would send this data to a server
            console.log('Form submitted:', { name, email, subject, message });

            // Hide form and show success message
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';

            // Reset form
            contactForm.reset();

            // Show form again after 5 seconds
            setTimeout(() => {
                contactForm.style.display = 'block';
                formSuccess.style.display = 'none';
            }, 5000);
        });
    }
});
