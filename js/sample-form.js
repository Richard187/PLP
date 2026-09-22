/**
 * Prime Leaf Processing — Sample Request Form
 * sample-form.js
 */

(function () {
  'use strict';

  const form = document.getElementById('sample-form');
  if (!form) return;

  const submitBtn = form.querySelector('[data-sample-submit]');
  const statusEl = document.getElementById('sample-status');

  const RULES = {
    'sample-name':    { required: true, label: 'Full Name' },
    'sample-company': { required: true, label: 'Company Name' },
    'sample-country': { required: true, label: 'Country' },
    'sample-email':   { required: true, type: 'email', label: 'Email' },
    'sample-product': { required: true, label: 'Product / Tobacco Type' }
  };

  function validateEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

  function validateField(id) {
    const rule = RULES[id];
    if (!rule) return true;
    const el = document.getElementById(id);
    if (!el) return true;
    const group = el.closest('.form-group');
    const errEl = group?.querySelector('.form-error');
    const val = el.value.trim();
    let error = '';
    if (rule.required && !val) error = `${rule.label} is required.`;
    else if (rule.type === 'email' && val && !validateEmail(val)) error = 'Please enter a valid email.';
    if (group) group.classList.toggle('has-error', !!error);
    if (errEl) errEl.textContent = error;
    return !error;
  }

  function validateAll() {
    let valid = true;
    Object.keys(RULES).forEach(id => { if (!validateField(id)) valid = false; });
    return valid;
  }

  Object.keys(RULES).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('blur', () => validateField(id));
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!validateAll()) return;

    setLoading(true);
    const payload = {
      full_name:   document.getElementById('sample-name')?.value.trim(),
      company:     document.getElementById('sample-company')?.value.trim(),
      country:     document.getElementById('sample-country')?.value.trim(),
      email:       document.getElementById('sample-email')?.value.trim(),
      phone:       document.getElementById('sample-phone')?.value.trim(),
      product:     document.getElementById('sample-product')?.value.trim(),
      tobacco_type:document.getElementById('sample-tobacco')?.value.trim(),
      specification:document.getElementById('sample-specification')?.value.trim(),
      quantity:    document.getElementById('sample-quantity')?.value.trim(),
      application: document.getElementById('sample-application')?.value.trim(),
      destination: document.getElementById('sample-destination')?.value.trim(),
      notes:       document.getElementById('sample-notes')?.value.trim(),
      source:      'website-sample-request',
      submitted_at: new Date().toISOString()
    };

    try {
      // BACKEND INTEGRATION POINT — see quote-form.js for patterns
      await new Promise(r => setTimeout(r, 1000));
      console.log('[Sample] Payload ready for backend:', payload);
      if (statusEl) {
        statusEl.className = 'form-status form-status--success visible';
        statusEl.innerHTML = '✓ Thank you for your sample request. Our team will be in touch shortly.';
        statusEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    } catch {
      if (statusEl) {
        statusEl.className = 'form-status form-status--error visible';
        statusEl.textContent = 'Submission failed. Please contact us directly by email.';
      }
    } finally {
      setLoading(false);
    }
  });

  function setLoading(v) {
    if (submitBtn) {
      submitBtn.disabled = v;
      submitBtn.textContent = v ? 'Submitting…' : 'Submit Sample Request';
    }
  }

})();
