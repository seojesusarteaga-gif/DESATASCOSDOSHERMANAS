// === SCROLL REVEAL ===
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// === NAVBAR SHADOW ON SCROLL ===
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });
}

// === MOBILE MENU TOGGLE ===
const toggle = document.querySelector('.navbar-menu-toggle');
const links = document.querySelector('.navbar-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.querySelector('i').className = links.classList.contains('open')
      ? 'fas fa-times'
      : 'fas fa-bars';
  });
}

// === ACTIVE NAV STATE ===
const path = window.location.pathname;
document.querySelectorAll('.navbar-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (!href) return;
  // Normalize comparison
  const aPath = href.replace(/\/index\.html$/, '/').replace(/^\.\.\//, '/').replace(/^\.\//, '/');
  const curPath = path.replace(/\/index\.html$/, '/');
  if (aPath !== '/' && (curPath.includes(aPath) || (href.includes('#') && false))) {
    a.classList.add('active');
  }
});

// === FORM SUBMIT (fake confirmation) ===
document.querySelectorAll('form.contact-form-js').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.innerHTML = '<i class="fas fa-check"></i> ¡Mensaje enviado! Te llamamos pronto.';
    btn.style.background = '#10b981';
    btn.disabled = true;
  });
});

// === SCROLL TO TOP ON LOAD ===
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
