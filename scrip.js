document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  // Toggle mobile menu
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuBtn.classList.toggle('active', isOpen);
    menuBtn.textContent = isOpen ? '✖' : '☰';
  });

  // Close menu on link click + smooth scroll
  document.querySelectorAll('.nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
      nav.classList.remove('open');
      menuBtn.classList.remove('active');
      menuBtn.textContent = '☰';
    });
  });

  // Back to top
  const backBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Form validation
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      msg.textContent = 'Please fill in all fields.';
      msg.style.color = 'crimson';
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      msg.textContent = 'Enter a valid email address.';
      msg.style.color = 'crimson';
      return;
    }
    msg.textContent = 'Message sent successfully! We’ll get back to you soon.';
    msg.style.color = 'green';
    form.reset();
  });
});
