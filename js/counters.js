/**
 * Prime Leaf Processing — Animated Counters
 * counters.js
 */

(function () {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animateCounter(el, target, duration) {
    if (reducedMotion) { el.textContent = target; return; }
    const start = performance.now();
    const startVal = 0;

    function step(timestamp) {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startVal + (target - startVal) * eased);
      el.textContent = current.toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const statEl = entry.target;
      const valueEl = statEl.querySelector('[data-counter]');
      if (!valueEl || valueEl.dataset.animated) return;
      valueEl.dataset.animated = 'true';
      const target = parseInt(valueEl.dataset.counter, 10);
      const duration = 1800;
      animateCounter(valueEl, target, duration);
      counterObs.unobserve(statEl);
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.stat-item').forEach(el => counterObs.observe(el));

})();
