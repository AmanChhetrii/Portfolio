// Responsive navigation menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

// Smooth scroll for navigation links
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
      navLinks.classList.remove('active');
      menuToggle.classList.remove('open');
    }
  });
});

// Animate sections on scroll
const sections = document.querySelectorAll('.section');
const animateOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    } else {
      section.style.opacity = 0;
      section.style.transform = 'translateY(40px)';
    }
  });
};
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Contact form animation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    contactForm.reset();
    alert('Thank you for reaching out! I will get back to you soon.');
  });
}