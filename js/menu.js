/* ===================================
   MENU JAVASCRIPT
   =================================== */

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mainNav.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (mainNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
        if (mainNav.classList.contains('active')) {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        document.body.style.overflow = '';
    }
});
