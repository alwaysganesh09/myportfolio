// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling


// Navbar scroll effect
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        // Scrolling down
        nav.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        nav.style.transform = 'translateY(0)';
        nav.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-links a"); // Select all menu links
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = themeToggle.querySelector(".theme-icon");

    // Toggle mobile menu
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close mobile menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener("click", function () {
            navLinks.classList.remove("active"); // Close menu
        });
    });

    // Toggle Dark Mode
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        themeIcon.textContent = document.body.classList.contains("dark-theme") ? "🌙" : "🌞";
    });

    // Fade-in effect for sections
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll("section").forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "all 0.5s ease-out";
        observer.observe(section);
    });
});
