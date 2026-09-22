/**
 * Prime Leaf Processing — Animations (IntersectionObserver)
 * animations.js
 */

(function () {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion) {
    // Immediately show all reveal elements
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .img-reveal').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  // ── IntersectionObserver for scroll reveals ─────────────────
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .img-reveal').forEach(el => {
    revealObs.observe(el);
  });

  // ── Staggered children ─────────────────────────────────────
  const staggerObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = entry.target.querySelectorAll(':scope > *');
        children.forEach((child, i) => {
          child.style.transitionDelay = `${i * 0.08}s`;
          child.classList.add('visible');
        });
        staggerObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.stagger').forEach(el => {
    el.querySelectorAll(':scope > *').forEach(child => {
      child.classList.add('reveal');
    });
    staggerObs.observe(el);
  });

})();
