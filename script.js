// Scroll smoothly to Contact section
function scrollToContact() {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Contact Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const phone   = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const responseElem = document.getElementById('form-response');

  if (!name || !email || !phone || !message) {
    responseElem.style.color = 'red';
    responseElem.textContent = 'Please fill in all fields.';
    return;
  }

  // Simple phone validation
  const phonePattern = /^[\d\s+\-()]{7,20}$/;
  if (!phonePattern.test(phone)) {
    responseElem.style.color = 'red';
    responseElem.textContent = 'Please enter a valid phone number.';
    return;
  }

  responseElem.style.color = 'green';
  responseElem.textContent = 'Thank you for your message! We will get back to you soon.';
  this.reset();
});

// Dark/Light Theme Toggle + Icon Swap
document.getElementById('theme-toggle').addEventListener('click', function () {
  document.body.classList.toggle('light');

  const icon = this.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

// Hamburger Menu Toggle (Mobile)
document.getElementById('hamburger').addEventListener('click', function () {
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('show');
});

// Scroll/Fade Animations using Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, {
  threshold: 0.1
});

// Observe all elements with data-animate attribute
document.querySelectorAll('[data-animate]').forEach(el => {
  observer.observe(el);
});
