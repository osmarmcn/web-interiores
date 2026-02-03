/* ===================================
   MAIN JAVASCRIPT
   =================================== */

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            const nav = document.getElementById('mainNav');
            const menuToggle = document.getElementById('menuToggle');
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });
});

// Active navigation on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function activateNavOnScroll() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', activateNavOnScroll);

// Header scroll effect
const header = document.querySelector('.header');

function headerScrollEffect() {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', headerScrollEffect);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully!');
    activateNavOnScroll();
    headerScrollEffect();
});
