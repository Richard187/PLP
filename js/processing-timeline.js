/**
 * Prime Leaf Processing — Processing Timeline
 * processing-timeline.js
 */

(function () {
  'use strict';

  const tabs = document.querySelectorAll('.timeline-tab');
  const panels = document.querySelectorAll('.timeline-panel');
  if (!tabs.length) return;

  function activateTab(index) {
    tabs.forEach((t, i) => {
      t.classList.toggle('active', i === index);
      t.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });
    panels.forEach((p, i) => {
      p.classList.toggle('active', i === index);
    });
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => activateTab(i));
    tab.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { e.preventDefault(); activateTab((i + 1) % tabs.length); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); activateTab((i - 1 + tabs.length) % tabs.length); }
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activateTab(i); }
    });
    tab.setAttribute('role', 'tab');
    tab.setAttribute('tabindex', i === 0 ? '0' : '-1');
  });

  // Auto-advance (pauses on hover/focus)
  let autoTimer;
  let currentIndex = 0;
  const AUTO_INTERVAL = 5000;

  function startAuto() {
    autoTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % tabs.length;
      activateTab(currentIndex);
      tabs[currentIndex].setAttribute('tabindex', '0');
      tabs.forEach((t, i) => { if (i !== currentIndex) t.setAttribute('tabindex', '-1'); });
    }, AUTO_INTERVAL);
  }

  function stopAuto() { clearInterval(autoTimer); }

  const timelineEl = document.querySelector('.processing-timeline');
  if (timelineEl) {
    timelineEl.addEventListener('mouseenter', stopAuto);
    timelineEl.addEventListener('focusin', stopAuto);
    timelineEl.addEventListener('mouseleave', startAuto);
    timelineEl.addEventListener('focusout', startAuto);
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      stopAuto();
      currentIndex = i;
    });
  });

  activateTab(0);
  startAuto();

})();
