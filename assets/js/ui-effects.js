/* =========================================================
   UI EFFECTS MODULE — Visual effects, animations, and interactions
   =========================================================
   Contains: particle background, header state, scroll reveal,
   typed text, tilt cards, parallax, and mobile menu.
   ========================================================= */

/* ---------- Ambient background dust (quiet, no connecting lines) ---------- */
export function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, dots;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = document.documentElement.scrollHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const count = Math.min(36, Math.floor(window.innerWidth / 40));
  dots = Array.from({ length: count }, () => ({
    x: Math.random() * w, y: Math.random() * h,
    vy: -(Math.random() * 0.12 + 0.03),
    r: Math.random() * 1.3 + 0.5
  }));

  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(255,212,59,0.28)';
    dots.forEach(p => {
      p.y += p.vy;
      if (p.y < -10) p.y = h + 10;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* ---------- Hash-based portfolio pages ---------- */
const portfolioPages = new Set(['home', 'about', 'projects', 'learn', 'community', 'contact']);

function normalizePage(page) {
  if (page === 'course') return 'learn';
  return portfolioPages.has(page) ? page : null;
}

let currentPortfolioPage = 'home';

function renderPortfolioPage(page, { scrollToTop = true } = {}) {
  currentPortfolioPage = page;
  document.querySelectorAll('section[data-page]').forEach((section) => {
    const isShared = section.hasAttribute('data-page-shared');
    section.classList.toggle('page-hidden', !isShared && section.dataset.page !== page);
  });

  document.querySelectorAll('#nav a[data-page-link]').forEach((link) => {
    const isActive = link.dataset.pageLink === page;
    link.classList.toggle('is-current', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  if (scrollToTop) window.scrollTo(0, 0);
}

export function activateSection(sectionId) {
  const route = String(sectionId || '').replace(/^#/, '');
  if (route === 'community') {
    window.location.assign('/community/index.html');
    return;
  }
  const target = normalizePage(route);
  if (!target) {
    const anchor = document.getElementById(route);
    const owningPage = normalizePage(anchor?.closest('section[data-page]')?.dataset.page);
    if (!anchor) return;
    if (owningPage && owningPage !== currentPortfolioPage) {
      renderPortfolioPage(owningPage, { scrollToTop: false });
    }
    requestAnimationFrame(() => anchor.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    return;
  }
  if (window.location.hash !== `#${target}`) window.location.hash = target;
  renderPortfolioPage(target);
}

function bindSingleSectionNavigation() {
  let initialized = false;
  const updatePage = () => {
    const route = decodeURIComponent(window.location.hash.slice(1));
    if (route.startsWith('project/')) {
      renderPortfolioPage('projects');
      initialized = true;
      return;
    }
    if (route === 'community') {
      window.location.replace('/community/index.html');
      return;
    }
    if (!route) {
      if (initialized) return;
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#home`);
      renderPortfolioPage('home');
      initialized = true;
      return;
    }

    const page = normalizePage(route);
    if (page) {
      renderPortfolioPage(page);
      initialized = true;
      return;
    }

    const anchor = document.getElementById(route);
    if (anchor) {
      const owningPage = normalizePage(anchor.closest('section[data-page]')?.dataset.page);
      if (owningPage) renderPortfolioPage(owningPage, { scrollToTop: false });
      requestAnimationFrame(() => anchor.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    } else if (!initialized) {
      renderPortfolioPage('home');
    }
    initialized = true;
  };

  window.addEventListener('hashchange', updatePage);
  updatePage();

  document.querySelectorAll('a[data-page-link]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      activateSection(link.dataset.pageLink);
      document.getElementById('nav')?.classList.remove('open');
    });
  });
}

function bindNavActiveObserver() {
  const navLinks = [...document.querySelectorAll('#nav a[href^="#"]')];
  const sections = navLinks
    .map(link => link.getAttribute('href')?.replace('#', ''))
    .filter(Boolean)
    .map(id => document.getElementById(id))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    const targetId = visible.target.id;
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('is-current', href === `#${targetId}`);
    });
  }, {
    threshold: [0.2, 0.4, 0.7],
    rootMargin: '-10% 0px -45% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

/* ---------- Header scroll state + smooth nav ---------- */
export function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  });

  document.querySelectorAll('#nav a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('nav')?.classList.remove('open');
    });
  });
  bindSingleSectionNavigation();
}

/* ---------- Mobile menu toggle ---------- */
export function initMobileMenu() {
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  btn?.addEventListener('click', () => nav?.classList.toggle('open'));
}

/* ---------- Typed hero text effect ---------- */
export function initTypedText() {
  const el = document.getElementById('typed-text');
  if (!el) return;
  const phrases = [
    'AI Engineer', 'Data Scientist', 'Python Developer',
    'ML Researcher', 'Computer Vision Enthusiast'
  ];
  let pIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const phrase = phrases[pIdx];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++charIdx);
      if (charIdx === phrase.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      el.textContent = phrase.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        pIdx = (pIdx + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 45 : 85);
  }
  tick();
}

/* ---------- Scroll reveal animation ---------- */
export function initRevealOnScroll() {
  const items = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(i => obs.observe(i));
}

/* ---------- 3D tilt on cards with mouse move ---------- */
export function initTiltCards() {
  const cards = document.querySelectorAll('.tilt-card');
  const canTilt = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!canTilt || reduceMotion) return;

  const maxTilt = 7;

  cards.forEach(card => {
    if (card.dataset.tiltInitialized === 'true') return;
    card.dataset.tiltInitialized = 'true';

    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotX = ((y / rect.height) * 2 - 1) * -maxTilt;
      const rotY = ((x / rect.width) * 2 - 1) * maxTilt;
      card.classList.add('is-tilting');
      card.style.setProperty('--pointer-x', `${(x / rect.width) * 100}%`);
      card.style.setProperty('--pointer-y', `${(y / rect.height) * 100}%`);
      card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    });
    card.addEventListener('pointerleave', () => {
      card.classList.remove('is-tilting');
      card.style.transform = '';
      card.style.setProperty('--pointer-x', '50%');
      card.style.setProperty('--pointer-y', '50%');
    });
  });
}

/* ---------- Hero 3D parallax (mouse-follow) ---------- */
export function initHero3dParallax() {
  document.addEventListener('mousemove', (e) => {
    const stage = document.getElementById('hero3d');
    if (!stage) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 14;
    const y = (e.clientY / window.innerHeight - 0.5) * 14;
    stage.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  });
}

/* ---------- Skill bars (static, no animation needed) ---------- */
export function initSkillBars() {
  // Skill tags are static; no animation needed
  // See .skill-tag in style.css for styling
}
