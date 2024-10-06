// Mobile Navigation Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
    });
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
}

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item h3');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.parentElement.classList.toggle('active');
    });
});

// Modal for Calendar Integration
const modal = document.getElementById('calendar-modal');
const btns = document.querySelectorAll('.btn');
const span = document.getElementsByClassName('close-btn')[0];

btns.forEach(btn => {
    if (btn.textContent.includes('Book')) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
        });
    }
});

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Advanced Validation
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value.trim()) {
        alert('Please enter your name.');
        name.focus();
        return;
    }

    if (!validateEmail(email.value.trim())) {
        alert('Please enter a valid email address.');
        email.focus();
        return;
    }

    if (!message.value.trim()) {
        alert('Please enter your message.');
        message.focus();
        return;
    }

    // TODO: Implement form submission logic (e.g., send data to a server)

    alert('Thank you for your message!');
    contactForm.reset();
});

function validateEmail(email) {
    // Simple email validation regex
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Google Analytics Tracking
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-XXXXXX-X');
