// Mobile Menu Toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Contact Form Submission
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent real submission
  alert("Thank you for contacting us! We'll get back to you soon.");
  form.reset();
});
