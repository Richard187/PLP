/**
 * Prime Leaf Processing — Navigation
 * navigation.js
 */

(function () {
  'use strict';

  const nav = document.getElementById('main-nav');
  const toggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('nav-mobile');
  const body = document.body;

  if (!nav) return;

  // ── Scroll behavior ────────────────────────────────────────
  const isHomepage = nav.classList.contains('transparent');

  function handleScroll() {
    const scrolled = window.scrollY > 60;
    if (isHomepage) {
      nav.classList.toggle('scrolled', scrolled);
      nav.classList.toggle('transparent', !scrolled);
    }
    // Scroll progress bar
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = winHeight > 0 ? (window.scrollY / winHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ── Active link ────────────────────────────────────────────
  function setActiveLink() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link').forEach(link => {
      const href = link.getAttribute('href') || '';
      const isActive = href === filename || (filename === '' && href === 'index.html');
      link.classList.toggle('active', isActive);
    });
  }
  setActiveLink();

  // ── Mobile menu ────────────────────────────────────────────
  function openMenu() {
    mobileNav.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileNav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
  }

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('open');
      isOpen ? closeMenu() : openMenu();
    });

    // Close on link click
    mobileNav.querySelectorAll('.nav__mobile-link, .nav__mobile-cta').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close on escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) closeMenu();
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (
        mobileNav.classList.contains('open') &&
        !mobileNav.contains(e.target) &&
        !toggle.contains(e.target)
      ) closeMenu();
    });
  }

  // ── Smooth scroll for anchor links ─────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        closeMenu();
        const top = target.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

})();
