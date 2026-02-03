/* ===================================
   CONTACT FORM JAVASCRIPT
   =================================== */

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showMessage('Por favor, preencha todos os campos.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showMessage('Por favor, insira um e-mail válido.', 'error');
        return;
    }
    
    // Simulate form submission
    // In a real application, you would send this data to a server
    console.log('Form data:', formData);
    
    // Show success message
    showMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
    
    // Reset form
    contactForm.reset();
});

function showMessage(message, type) {
    // Remove existing message if any
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;
    
    // Add styles
    messageDiv.style.cssText = `
        padding: 1rem 1.5rem;
        margin-top: 1rem;
        border-radius: var(--border-radius);
        font-size: 0.95rem;
        text-align: center;
        animation: fadeIn 0.3s ease;
        ${type === 'success' 
            ? 'background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb;'
            : 'background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
        }
    `;
    
    // Insert message after form
    contactForm.appendChild(messageDiv);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => {
            messageDiv.remove();
        }, 300);
    }, 5000);
}

// Input animation effects
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.parentElement.classList.remove('focused');
        }
    });
});
