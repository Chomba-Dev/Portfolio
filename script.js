function scrollToContact() {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const response = document.getElementById('form-response');

  if (!name || !email || !phone || !message) {
    response.style.color = 'red';
    response.textContent = 'Please fill in all fields.';
    return;
  }

  const phonePattern = /^[\d\s+\-()]{7,20}$/;
  if (!phonePattern.test(phone)) {
    response.style.color = 'red';
    response.textContent = 'Please enter a valid phone number.';
    return;
  }

  response.style.color = 'green';
  response.textContent = 'Thank you for your message! We will get back to you soon.';
  this.reset();
});

document.getElementById('theme-toggle').addEventListener('click', function () {
  document.body.classList.toggle('light');

  const icon = this.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});
