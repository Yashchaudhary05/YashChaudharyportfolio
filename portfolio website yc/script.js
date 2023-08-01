const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);

    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Toggle the menu on click
document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('show');
});

// Form submission handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  // Perform form validation and submission logic here

  // Clear form inputs after submission
  contactForm.reset();
});