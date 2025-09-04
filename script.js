document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    const navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      hamburger.classList.remove('active');
    }
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

const cvButtons = document.querySelectorAll('#cv .btn');
cvButtons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.05)';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
});

document.querySelectorAll('.core-skill').forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.transform = 'translateY(-5px)';
    skill.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
  });
  skill.addEventListener('mouseleave', () => {
    skill.style.transform = 'translateY(0)';
    skill.style.boxShadow = 'none';
  });
});


const contactForm = document.getElementById('contactForm');
const formResponse = document.querySelector('.form-response');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  formResponse.textContent = "Thank you! Your message has been sent.";
  contactForm.reset();
});


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('active');
});


const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 70) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) {
      a.classList.add('active');
    }
  });
});
