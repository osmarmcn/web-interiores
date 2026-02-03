/* ===================================
   SCROLL REVEAL ANIMATIONS JAVASCRIPT
   =================================== */

// Elements to animate
const elementsToAnimate = [
    { selector: '.portfolio-item', delay: 100 },
    { selector: '.service-card', delay: 150 },
    { selector: '.step', delay: 100 },
    { selector: '.about-image', delay: 0 },
    { selector: '.about-text', delay: 200 }
];

// Intersection Observer options
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

// Create observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Function to add reveal styles
function addRevealStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .reveal-element {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .reveal-element.revealed {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

// Initialize reveal animations
function initScrollReveal() {
    addRevealStyles();
    
    elementsToAnimate.forEach(({ selector, delay }) => {
        const elements = document.querySelectorAll(selector);
        
        elements.forEach((element, index) => {
            element.classList.add('reveal-element');
            element.style.transitionDelay = `${index * delay}ms`;
            observer.observe(element);
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
    initScrollReveal();
}

// Parallax effect for hero section
const hero = document.querySelector('.hero');

if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        hero.style.backgroundPositionY = `${scrolled * parallaxSpeed}px`;
    });
}

// Fade in sections on load
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
        }, index * 100);
    });
});
