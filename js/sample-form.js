/**
 * Prime Leaf Processing — Sample Request Form
 * sample-form.js
 *
 * Email delivery via Formspree (https://formspree.io)
 * Replace YOUR_FORM_ID_SAMPLE with the ID from your Formspree dashboard.
 * Sign up free at formspree.io → New Form → point it to info@primeleafp.com
 */

(function () {
  'use strict';

  // ── Formspree endpoint ──────────────────────────────────────
  // 1. Go to https://formspree.io and sign up free
  // 2. Create a new form, set the email to info@primeleafp.com
  // 3. Copy the form ID and paste below (create a SEPARATE form from contact/rfq)
  const FORMSPREE_ID = 'YOUR_FORM_ID_SAMPLE'; // ← replace this
  const ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;
  const form = document.getElementById('sample-form');
  if (!form) return;

  const submitBtn = form.querySelector('[data-sample-submit]');
  const statusEl = document.getElementById('sample-status');

  // ── Pre-fill from URL params ────────────────────────────────
  (function prefillFromURL() {
    const params = new URLSearchParams(window.location.search);
    const prod = params.get('product') || params.get('sample-product');
    if (prod) {
      const el = document.getElementById('sample-product');
      if (el) {
        let found = false;
        for (let opt of el.options) {
          if (opt.value.toLowerCase().includes(prod.toLowerCase()) || prod.toLowerCase().includes(opt.value.toLowerCase())) {
            opt.selected = true;
            found = true;
            break;
          }
        }
        if (!found) {
          const newOpt = new Option(prod, prod, true, true);
          el.add(newOpt);
        }
      }
    }
  })();

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
      const formData = new FormData();
      Object.entries(payload).forEach(([k, v]) => { if (v) formData.set(k, v); });
      formData.set('_replyto', payload.email);
      formData.set('_subject', `[PLP] Sample Request from ${payload.company || payload.full_name}`);

      const res = await fetch(ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.errors?.[0]?.message || 'Server error');
      }
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
