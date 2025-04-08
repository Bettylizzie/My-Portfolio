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
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1Kbkp0g1PdHs2OMMjftwlb1Mt4AuxX_kI/view?usp=sharing';
    link.download = 'Beth_Njuguna_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Contact Form Submission (UPDATED ONLY EmailJS INITIALIZATION)
emailjs.init('SGwmq8sFRyK3KCREy'); // Replace with your real public key (already looks fine)

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Existing alert
    alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
    contactForm.reset();
    
    // ONLY UPDATED SECTION: EmailJS implementation
    emailjs.send('Betty94', 'template_dc0i4ty', {
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
        }
    );
});


// Animate skill bars 
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

// Optional reset 
document.querySelectorAll('.skill-category').forEach(category => {
    category.addEventListener('mouseleave', () => {
        const skillBars = category.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            bar.style.transition = 'none';
            bar.style.width = '0';
        });
    });
});