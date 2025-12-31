// ===== Fade-in effect on scroll =====
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.fade-in');
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;
    if(sectionTop < screenPos) {
      section.classList.add('appear');
    }
  });
});

// ===== Hamburger toggle =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // toggles menu visibility
});