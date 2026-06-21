// ===========================
// B FREE TRAVEL WEBSITE JS
// ===========================

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Form Submission Handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            destination: document.getElementById('destination').value,
            dates: document.getElementById('dates').value,
            message: document.getElementById('message').value
        };

        // Create email body
        const emailBody = `
New Vacation Inquiry from B Free Travel Website:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Destination: ${formData.destination}
Travel Dates: ${formData.dates}

Message:
${formData.message}
        `;

        // Send email via mailto
        const mailtoLink = `mailto:bfreetraveler@gmail.com?subject=New Vacation Inquiry from ${formData.name}&body=${encodeURIComponent(emailBody)}`;

        // Show confirmation message
        showConfirmation();

        // Reset form
        contactForm.reset();

        // Open email client (optional - user can choose to send)
        // window.location.href = mailtoLink;
    });
}

// Confirmation Message Function
function showConfirmation() {
    const confirmationDiv = document.createElement('div');
    confirmationDiv.className = 'confirmation-message';
    confirmationDiv.innerHTML = `
        <div class="confirmation-content">
            <h3>Thank You! 🎉</h3>
            <p>Your inquiry has been received! We'll be in touch with you very soon.</p>
            <p>Prepare for an amazing adventure!</p>
            <button onclick="this.parentElement.parentElement.remove()">Close</button>
        </div>
    `;
    document.body.appendChild(confirmationDiv);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (confirmationDiv.parentElement) {
            confirmationDiv.remove();
        }
    }, 5000);
}

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Add custom CSS for confirmation message
const style = document.createElement('style');
style.textContent = `
    .confirmation-message {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    }

    .confirmation-content {
        background: white;
        padding: 2rem;
        border-radius: 10px;
        text-align: center;
        max-width: 400px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        border-top: 4px solid #0ea5e9;
    }

    .confirmation-content h3 {
        color: #1e3a8a;
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }

    .confirmation-content p {
        color: #374151;
        margin-bottom: 1rem;
    }

    .confirmation-content button {
        background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%);
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
    }

    .confirmation-content button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

console.log('B Free Travel website loaded successfully! ✈️');