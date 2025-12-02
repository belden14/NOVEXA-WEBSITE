document.addEventListener('DOMContentLoaded', function() {
    // 1. Interactive Menu/Dropdown (Mobile Navigation Toggle)
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', function() {
            navLinks.classList.toggle('open');
        });
    }

    // 2. & 3. Form Validation and Alert/Confirmation Message
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');

            // Simple validation checks
            if (name.value.trim() === '') {
                alert('Please enter your name.');
                name.focus();
                isValid = false;
            } else if (email.value.trim() === '' || !validateEmail(email.value.trim())) {
                alert('Please enter a valid email address.');
                email.focus();
                isValid = false;
            } else if (subject.value.trim() === '') {
                alert('Please enter a subject.');
                subject.focus();
                isValid = false;
            } else if (message.value.trim() === '') {
                alert('Please enter your message.');
                message.focus();
                isValid = false;
            }

            if (isValid) {
                // Simulate form submission success
                console.log('Form Data:', {
                    name: name.value.trim(),
                    email: email.value.trim(),
                    subject: subject.value.trim(),
                    message: message.value.trim()
                });

                // Confirmation message (Feature 3)
                alert('Thank you for your message! We have received your inquiry and will get back to you shortly.');
                
                // Reset the form
                contactForm.reset();
            }
        });
    }

    // Helper function for basic email validation (Part of Feature 2: Form Validation)
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
