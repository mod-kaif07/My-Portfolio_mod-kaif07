// ===== PROJECTS DATA =====
// To add a new project, simply add a new object to this array following the same structure
const projectsData = [
    {
        title: "UBER CLONE",
        description: "Built a full-stack Uber clone using React, Node.js, and Express with JWT authentication, real-time ride booking, dynamic fare calculation, and modular UI components.",
        technologies: ["React", "Node.js", "Express", "JWT", "MongoDB"],
        githubLink: "https://github.com/mod-kaif07/Uber_MERN_PROJECT.git",
        liveLink: null,
        icon: "fas fa-car",
        status: "In Progress"
    },
    {
        title: "Room Rental Platform",
        description: "Full-stack rental platform built with MVC architecture. Features user authentication, property management, and responsive design for seamless experience.",
        technologies: ["JavaScript", "Node.js", "MongoDB", "Express", "EJS"],
        githubLink: "https://github.com/mod-kaif07/Room-Radner-R-R.git",
        liveLink: "https://room-radner.onrender.com/",
        icon: "fas fa-home",
        status: "Completed"
    },
     {
        title: "NEWS HUB",
        description: "A real-time news app with React frontend and Node.js + Express backend, fetching global headlines via public API.",
        technologies: ["React", "Node.js", "Express", "API"],
        githubLink: "https://github.com/mod-kaif07/NEWS-HUB.git",
        liveLink: null,
        icon: "fas fa-newspaper",
        status: "In Progress"
    },
    {
        title: "Voice Assistant - SOFIA",
        description: "A personal voice assistant that fetches weather, performs math, tells jokes, and responds to voice commands.",
        technologies: ["JavaScript", "HTML", "CSS", "API"],
        githubLink: "https://github.com/mod-kaif07/SOFIA---Voice-Assistant.git",
        liveLink: "https://sofia-voice-assistant.vercel.app/",
        icon: "fas fa-microphone",
        status: "Completed"
    },
   
    {
        title: "Note app",
        description: "A frontend Project Where we can add Note Intreactive UI and responsive Design",
        technologies: ["React"],
        githubLink: "https://github.com/mod-kaif07/Note_porject.git",
        liveLink: "https://note-porject.vercel.app/",
        icon: "fas fa-pen-nib",
        status: "Completed"
    },
    {
        title: "Weather App",
        description: "A weather application that fetches real-time weather data based on user input using a public API.",
        technologies: ["React", "CSS", "API"],
        githubLink: "https://github.com/mod-kaif07/Weather_app_react.git",
        liveLink: "https://weather-app-react-phi-mauve.vercel.app/",
        icon: "fas fa-cloud-sun",
        status: "Completed"
    },
    {
        title: "Dictionary App",
        description: "A web-based dictionary application that provides definitions, synonyms, and translations for words.",
        technologies: ["React", "CSS", "API"],
        githubLink: "https://github.com/mod-kaif07/dictoinary_web_app.git",
        liveLink: "https://dictoinarywebapp.vercel.app/",
        icon: "fas fa-book",
        status: "Completed"
    },
        {
        title: "BIM Calculator ",
        description: "This is a simple and responsive web application that calculates the Body Mass Index (BMI) based on user input (height and weight). It provides an interpretation of the BMI result to help users understand whether they fall under underweight, normal, or overweight categories.",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/mod-kaif07/BMI_calculator.git",
        liveLink: "http://bmi-calculator-ashen-five.vercel.app/",
        icon: "fas fa-key",
        status: "Completed"
    },
    {
        title: "Password Generator",
        description: "A tool that generates strong, customizable passwords using user-defined criteria like length and character types.",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/mod-kaif07/-Password-Generator-.git",
        liveLink: "https://passbolt-delta.vercel.app/",
        icon: "fas fa-key",
        status: "Completed"
    },
    {
        title: "Guess the Number",
        description: "A number guessing game where users try to guess a randomly generated number with feedback on each attempt.",
        technologies: ["JavaScript", "HTML", "CSS"],
        githubLink: "https://github.com/mod-kaif07/Guess-The-Number-Game.git",
        liveLink: "https://guessit-game.vercel.app/",
        icon: "fas fa-gamepad",
        status: "Completed"
    }
];

// ===== DOM ELEMENTS =====
const navbar = document.querySelector('.navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const typedText = document.getElementById('typedText');
const contactForm = document.getElementById('contactForm');
const projectsGrid = document.getElementById('projectsGrid');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initTypingEffect();
    initScrollAnimations();
    initCounters();
    renderProjects();
    initContactForm();
});

// ===== NAVBAR =====
function initNavbar() {
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll
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
}

// ===== TYPING EFFECT =====
function initTypingEffect() {
    const texts = [
        'Backend Enthusiast',
        'Full Stack Developer',
        'Problem Solver',
        'DSA Expert',
        'MERN Developer'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typedText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typedText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    setTimeout(type, 1000);
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Add animation to elements
    const animateElements = document.querySelectorAll('.skill-card, .project-card, .stat-box, .internship-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== COUNTER ANIMATION =====
function initCounters() {
    const counters = document.querySelectorAll('.stat-value');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(current);
        }
    }, 16);
}

// ===== RENDER PROJECTS =====
function renderProjects() {
    const projectsHTML = projectsData.map(project => `
        <div class="project-card">
            <div class="project-icon">
                <i class="${project.icon}"></i>
            </div>
            <div class="project-header-content">
                <h3 class="project-title">${project.title}</h3>
                <span class="project-status">${project.status}</span>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.githubLink}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i> GitHub
                </a>
                ${project.liveLink ? `
                    <a href="${project.liveLink}" target="_blank" class="project-link">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                ` : ''}
            </div>
        </div>
    `).join('');
    
    projectsGrid.innerHTML = projectsHTML;
}

// ===== CONTACT FORM =====
function initContactForm() {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Submit button loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            showNotification('Message sent successfully! I will get back to you soon.', 'success');
            contactForm.reset();
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled = false;
        }, 2000);
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'rgba(74, 222, 128, 0.1)' : 'rgba(248, 113, 113, 0.1)'};
            color: ${type === 'success' ? '#4ade80' : '#f87171'};
            padding: 1rem 1.5rem;
            border-radius: 12px;
            border: 1px solid ${type === 'success' ? 'rgba(74, 222, 128, 0.2)' : 'rgba(248, 113, 113, 0.2)'};
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 1rem;
            animation: slideIn 0.3s ease;
            max-width: 400px;
        ">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: none;
                border: none;
                color: inherit;
                font-size: 1.2rem;
                cursor: pointer;
                margin-left: auto;
            ">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Add animation styles
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(animationStyles);

// ===== CONSOLE MESSAGE =====
console.log(`
╔════════════════════════════════════╗
║   MOHAMMAD KAIF - Portfolio 2025   ║
║                                    ║
║  "I solve DSA problems for fun...  ║
║   and sometimes dream in JS"       ║
║                                    ║
║  📧 mohammadkaif6660@gmail.com    ║
╚════════════════════════════════════╝
`);

document.querySelectorAll('.certificate-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        btn.style.setProperty('--x', `${x}px`);
    });
});
