/**
 * Prime Leaf Processing — FAQ Accordion
 * faq.js
 */

(function () {
  'use strict';

  document.querySelectorAll('.faq-item').forEach((item, i) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!question || !answer) return;

    const id = `faq-answer-${i}`;
    answer.id = id;
    question.setAttribute('aria-controls', id);
    question.setAttribute('aria-expanded', 'false');
    question.setAttribute('role', 'button');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
      });

      // Open this one (if it was closed)
      if (!isOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    });

    question.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });

})();
