/**
 * Prime Leaf Processing — Contact Form
 * contact-form.js
 *
 * Email delivery via Formspree (https://formspree.io)
 * Replace YOUR_FORM_ID with the ID from your Formspree dashboard.
 * Sign up free at formspree.io → New Form → point it to info@primeleafp.com
 */

(function () {
  'use strict';

  // ── Formspree endpoint ──────────────────────────────────────
  // 1. Go to https://formspree.io and sign up free
  // 2. Create a new form, set the email to info@primeleafp.com
  // 3. Copy the form ID (looks like "xpwzgkbn") and paste below
  const FORMSPREE_ID = 'YOUR_FORM_ID'; // ← replace this
  const ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

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

    const formData = new FormData(form);
    // Ensure all key fields are included
    formData.set('_replyto', document.getElementById('contact-email')?.value.trim());
    formData.set('_subject', `[PLP Website] ${document.getElementById('contact-subject')?.value.trim() || 'New Contact Enquiry'}`);
    formData.set('source', 'website-contact-form');

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        if (statusEl) {
          statusEl.className = 'form-status form-status--success visible';
          statusEl.innerHTML = '&#10003; Thank you for your message. We will respond as soon as possible.';
          statusEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.errors?.[0]?.message || 'Server error');
      }
    } catch (err) {
      console.error('[Contact] Form error:', err);
      if (statusEl) {
        statusEl.className = 'form-status form-status--error visible';
        statusEl.innerHTML = 'Message could not be sent. Please email us directly at <a href="mailto:info@primeleafp.com">info@primeleafp.com</a>';
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
