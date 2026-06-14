/* ═══ MAIN.JS — Servicios Generales La Paz ═══ */

// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  updateActiveLink();
});

// ── Mobile hamburger ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// ── Active nav link on scroll ──
function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY  = window.scrollY + 100;
  sections.forEach(sec => {
    const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
    if (!link) return;
    const top = sec.offsetTop, h = sec.offsetHeight;
    link.classList.toggle('active', scrollY >= top && scrollY < top + h);
  });
}

// ── Reveal on scroll ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Counter animation ──
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat-number').forEach(animateCounter);
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

// ── Smooth scroll for all anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── Form submission handler (Netlify AJAX) ──
const form = document.getElementById('contacto-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('form-submit-btn');
    btn.innerHTML = '<span>Enviando...</span>';
    btn.disabled = true;

    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });
      
      btn.innerHTML = '<span>✓ Solicitud enviada</span>';
      btn.style.background = '#16a34a';
      form.reset();
    } catch (error) {
      btn.innerHTML = '<span>Error al enviar</span>';
      btn.style.background = '#dc2626';
    }

    setTimeout(() => {
      btn.innerHTML = '<span>Enviar Solicitud</span><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M10 4L16 10L10 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      btn.style.background = '';
      btn.disabled = false;
    }, 4000);
  });
}

// ── Stagger animation for grid items ──
document.querySelectorAll('.servicios-grid .servicio-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 60}ms`;
});
document.querySelectorAll('.clientes-grid .cliente-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 60}ms`;
});
document.querySelectorAll('.dif-grid .dif-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 60}ms`;
});

// ── Gallery lightbox simple ──
document.querySelectorAll('.proyectos-gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;inset:0;background:rgba(0,0,0,0.9);
      display:flex;align-items:center;justify-content:center;
      z-index:9999;cursor:zoom-out;padding:24px;
    `;
    const clone = document.createElement('img');
    clone.src = img.src;
    clone.alt = img.alt;
    clone.style.cssText = 'max-width:90vw;max-height:90vh;object-fit:contain;border-radius:12px;';
    overlay.appendChild(clone);
    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});

// ── Parallax hero grid ──
window.addEventListener('scroll', () => {
  const heroGrid = document.querySelector('.hero-grid');
  if (heroGrid) {
    heroGrid.style.transform = `translateY(${window.scrollY * 0.15}px)`;
  }
});

console.log('✦ Servicios Generales La Paz — sglapaz.com — Desarrollado por Gregory Pereira');
