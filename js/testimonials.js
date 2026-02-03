/* ===================================
   TESTIMONIALS SLIDER JAVASCRIPT
   =================================== */

const testimonialItems = document.querySelectorAll('.testimonial-item');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');

let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialItems.forEach(item => {
        item.classList.remove('active');
    });
    
    testimonialItems[index].classList.add('active');
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialItems.length) % testimonialItems.length;
    showTestimonial(currentTestimonial);
}

// Event listeners
if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextTestimonial);
    prevBtn.addEventListener('click', prevTestimonial);
}

// Auto-slide every 5 seconds
let testimonialInterval = setInterval(nextTestimonial, 5000);

// Pause auto-slide on hover
const testimonialsSlider = document.querySelector('.testimonials-slider');
if (testimonialsSlider) {
    testimonialsSlider.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });
    
    testimonialsSlider.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(nextTestimonial, 5000);
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevTestimonial();
    } else if (e.key === 'ArrowRight') {
        nextTestimonial();
    }
});

// Touch swipe support
let touchStartX = 0;
let touchEndX = 0;

if (testimonialsSlider) {
    testimonialsSlider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    testimonialsSlider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        nextTestimonial();
    }
    if (touchEndX > touchStartX + 50) {
        prevTestimonial();
    }
}
