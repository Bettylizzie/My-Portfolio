// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuBtn.innerHTML = mainNav.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (this.getAttribute('href') === '#') return;
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// CV Download
const downloadCv = document.getElementById('downloadCv');
downloadCv.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = 'file:///C:/Users/Betty%20Njuguna/Downloads/BETH%20NYAMBURA%20CURRICULUM%20VITAE.pdf';
    link.download = 'Beth_Njuguna_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // First show the confirmation to user (existing functionality)
    alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
    
    // Reset the form (existing functionality)
    contactForm.reset();
    
    // NEW: Send email using EmailJS (added functionality)
    // Step 1: Add this script to your HTML head:
    // <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3.2.0/dist/email.min.js"></script>
    // Step 2: Initialize with your user ID (replace 'YOUR_USER_ID')
    emailjs.init('YOUR_USER_ID');
    
    // Send the email
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    }).then(
        (response) => {
            console.log('Email sent!', response.status, response.text);
        },
        (error) => {
            console.log('Failed to send email:', error);
            // Optional: Show error message to user
            // alert('Failed to send message. Please try again later.');
        }
    );
});

// Animate skill bars on hover
document.querySelectorAll('.skill-category').forEach(category => {
    category.addEventListener('mouseenter', () => {
        const skillBars = category.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
                bar.style.transition = 'width 1s ease-in-out';
            }, 100);
        });
    });
});

// Optional: Reset animation when leaving the category
document.querySelectorAll('.skill-category').forEach(category => {
    category.addEventListener('mouseleave', () => {
        const skillBars = category.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            bar.style.transition = 'none';
            bar.style.width = '0';
        });
    });
});