/**
 * Prime Leaf Processing — Contact Form
 * contact-form.js
 */

(function () {
  'use strict';

  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = form.querySelector('[data-contact-submit]');
  const statusEl = document.getElementById('contact-status');

  const RULES = {
    'contact-name':    { required: true, label: 'Name' },
    'contact-email':   { required: true, type: 'email', label: 'Email' },
    'contact-subject': { required: true, label: 'Subject' },
    'contact-message': { required: true, minLength: 10, label: 'Message' }
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
    else if (rule.minLength && val.length < rule.minLength) error = `${rule.label} is too short.`;
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
      name:    document.getElementById('contact-name')?.value.trim(),
      company: document.getElementById('contact-company')?.value.trim(),
      email:   document.getElementById('contact-email')?.value.trim(),
      phone:   document.getElementById('contact-phone')?.value.trim(),
      subject: document.getElementById('contact-subject')?.value.trim(),
      message: document.getElementById('contact-message')?.value.trim(),
      source:  'website-contact-form',
      submitted_at: new Date().toISOString()
    };

    try {
      // BACKEND INTEGRATION POINT
      await new Promise(r => setTimeout(r, 900));
      console.log('[Contact] Payload ready for backend:', payload);
      if (statusEl) {
        statusEl.className = 'form-status form-status--success visible';
        statusEl.innerHTML = '✓ Thank you for your message. We will respond as soon as possible.';
        statusEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    } catch {
      if (statusEl) {
        statusEl.className = 'form-status form-status--error visible';
        statusEl.textContent = 'Message failed to send. Please email us directly.';
      }
    } finally {
      setLoading(false);
    }
  });

  function setLoading(v) {
    if (submitBtn) {
      submitBtn.disabled = v;
      submitBtn.textContent = v ? 'Sending…' : 'Send Message';
    }
  }

})();
