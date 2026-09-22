/**
 * Prime Leaf Processing — Specification Builder
 * specification-builder.js
 */

(function () {
  'use strict';

  const form = document.getElementById('spec-builder-form');
  if (!form) return;

  const submitBtn = form.querySelector('[data-spec-submit]');

  // Live summary
  const summaryEl = document.getElementById('spec-summary');

  function updateSummary() {
    if (!summaryEl) return;
    const data = getFormData();
    const parts = Object.entries(data)
      .filter(([, v]) => v)
      .map(([k, v]) => `<span><strong>${formatKey(k)}:</strong> ${v}</span>`);
    summaryEl.innerHTML = parts.length
      ? parts.join('')
      : '<span class="text-muted">Fill in your requirements above to see a summary.</span>';
  }

  function formatKey(key) {
    return key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  function getFormData() {
    const data = {};
    form.querySelectorAll('[data-spec-field]').forEach(el => {
      if (el.value) data[el.dataset.specField] = el.value;
    });
    return data;
  }

  form.querySelectorAll('[data-spec-field]').forEach(el => {
    el.addEventListener('input', updateSummary);
    el.addEventListener('change', updateSummary);
  });

  // Transfer to RFQ
  if (submitBtn) {
    submitBtn.addEventListener('click', e => {
      e.preventDefault();
      const data = getFormData();
      const params = new URLSearchParams(data).toString();
      window.location.href = 'quote.html?' + params + '&source=spec-builder';
    });
  }

  updateSummary();

})();
