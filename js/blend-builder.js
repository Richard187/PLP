/**
 * Prime Leaf Processing — Blend Builder (7-step wizard)
 * blend-builder.js
 */

(function () {
  'use strict';

  const builder = document.getElementById('blend-builder');
  if (!builder) return;

  const panels = builder.querySelectorAll('.blend-panel');
  const indicators = builder.querySelectorAll('.blend-step-indicator');
  const totalSteps = panels.length;
  let currentStep = 0;

  // Accumulated blend data
  const blendData = {};

  function goTo(step) {
    if (step < 0 || step >= totalSteps) return;

    panels.forEach((p, i) => p.classList.toggle('active', i === step));
    indicators.forEach((ind, i) => {
      ind.classList.remove('active', 'completed');
      if (i < step) ind.classList.add('completed');
      if (i === step) ind.classList.add('active');
    });
    currentStep = step;

    // Update nav buttons
    const prevBtn = builder.querySelector('[data-blend-prev]');
    const nextBtn = builder.querySelector('[data-blend-next]');
    const submitBtn = builder.querySelector('[data-blend-submit]');

    if (prevBtn) prevBtn.style.display = step === 0 ? 'none' : '';
    if (nextBtn) nextBtn.style.display = step === totalSteps - 1 ? 'none' : '';
    if (submitBtn) submitBtn.style.display = step === totalSteps - 1 ? '' : 'none';
  }

  function collectStepData(stepIndex) {
    const panel = panels[stepIndex];
    panel.querySelectorAll('[data-blend-field]').forEach(field => {
      blendData[field.dataset.blendField] = field.value;
    });
  }

  // Navigation buttons
  builder.addEventListener('click', e => {
    if (e.target.matches('[data-blend-next]')) {
      collectStepData(currentStep);
      goTo(currentStep + 1);
    }
    if (e.target.matches('[data-blend-prev]')) {
      collectStepData(currentStep);
      goTo(currentStep - 1);
    }
    if (e.target.matches('[data-blend-submit]')) {
      collectStepData(currentStep);
      submitBlend();
    }
  });

  function submitBlend() {
    // Pass blend data to RFQ form
    const rfqFields = {
      'rfq-product': blendData['tobacco-types'] || '',
      'rfq-specification': buildSpecSummary(),
      'rfq-quantity': blendData['quantity'] || '',
      'rfq-packaging': blendData['packaging'] || '',
    };
    Object.entries(rfqFields).forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (el && val) el.value = val;
    });
    // Navigate to RFQ page with state
    const params = new URLSearchParams(blendData).toString();
    window.location.href = 'quote.html?' + params + '&source=blend-builder';
  }

  function buildSpecSummary() {
    const parts = [];
    if (blendData['tobacco-types']) parts.push('Types: ' + blendData['tobacco-types']);
    if (blendData['blend-requirements']) parts.push('Blend: ' + blendData['blend-requirements']);
    if (blendData['cut-specification']) parts.push('Cut: ' + blendData['cut-specification']);
    if (blendData['moisture']) parts.push('Moisture: ' + blendData['moisture']);
    return parts.join(' | ');
  }

  // Initialise
  goTo(0);

})();
