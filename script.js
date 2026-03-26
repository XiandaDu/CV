// Navbar scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Scroll-triggered fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply fade-in to sections and cards
document.querySelectorAll(
  '.timeline-item, .pub-card, .skill-category, .highlight-card, .contact-card, .about-text'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Stagger animation for timeline items within each section
document.querySelectorAll('.timeline').forEach(timeline => {
  timeline.querySelectorAll('.timeline-item').forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.1}s`;
  });
});

// Stagger for skill categories
document.querySelectorAll('.skill-category').forEach((cat, i) => {
  cat.style.transitionDelay = `${i * 0.08}s`;
});

// Stagger for highlight cards
document.querySelectorAll('.highlight-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.08}s`;
});
