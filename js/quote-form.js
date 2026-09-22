/**
 * Prime Leaf Processing — Quote Form (RFQ)
 * quote-form.js
 *
 * Prepared for backend integration:
 *   - Supabase: use supabase.from('rfq_submissions').insert()
 *   - PHP: POST to api/rfq.php
 *   - Node.js: POST to /api/rfq
 *   - Email API: Resend / SendGrid
 *   - Webhook: POST to CRM / Zapier / Make
 *
 * NEVER expose API keys in frontend code.
 * Use a backend proxy or serverless function.
 */

(function () {
  'use strict';

  const form = document.getElementById('rfq-form');
  if (!form) return;

  const submitBtn = form.querySelector('[data-rfq-submit]');
  const statusEl = document.getElementById('rfq-status');

  // ── Pre-fill from URL params ────────────────────────────────
  (function prefillFromURL() {
    const params = new URLSearchParams(window.location.search);
    params.forEach((value, key) => {
      const el = form.querySelector(`[name="${key}"], [data-rfq-field="${key}"]`);
      if (el) el.value = decodeURIComponent(value);
    });
  })();

  // ── Validation ─────────────────────────────────────────────
  const RULES = {
    'rfq-name':        { required: true, minLength: 2, label: 'Full Name' },
    'rfq-company':     { required: true, minLength: 2, label: 'Company Name' },
    'rfq-country':     { required: true, label: 'Country' },
    'rfq-email':       { required: true, type: 'email', label: 'Email' },
    'rfq-phone':       { required: false, type: 'phone', label: 'Phone' },
    'rfq-product':     { required: true, label: 'Product' },
    'rfq-quantity':    { required: true, label: 'Quantity' },
    'rfq-destination': { required: false, label: 'Destination Country' }
  };

  function validateEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  }

  function validatePhone(val) {
    if (!val) return true; // optional
    return /^[\+\d\s\-\(\)]{7,20}$/.test(val.trim());
  }

  function validateField(id) {
    const rule = RULES[id];
    if (!rule) return true;
    const el = document.getElementById(id);
    if (!el) return true;
    const group = el.closest('.form-group');
    const errorEl = group ? group.querySelector('.form-error') : null;
    const val = el.value.trim();

    let error = '';
    if (rule.required && !val) error = `${rule.label} is required.`;
    else if (rule.type === 'email' && val && !validateEmail(val)) error = 'Please enter a valid email address.';
    else if (rule.type === 'phone' && val && !validatePhone(val)) error = 'Please enter a valid phone number.';
    else if (rule.minLength && val.length < rule.minLength) error = `${rule.label} must be at least ${rule.minLength} characters.`;

    if (group) group.classList.toggle('has-error', !!error);
    if (errorEl) errorEl.textContent = error;
    return !error;
  }

  function validateAll() {
    let valid = true;
    Object.keys(RULES).forEach(id => { if (!validateField(id)) valid = false; });
    return valid;
  }

  // Live validation
  Object.keys(RULES).forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('blur', () => validateField(id));
      el.addEventListener('input', () => {
        if (document.getElementById(id).closest('.form-group')?.classList.contains('has-error')) {
          validateField(id);
        }
      });
    }
  });

  // ── File validation ────────────────────────────────────────
  const fileInput = document.getElementById('rfq-file');
  if (fileInput) {
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      const maxSize = 5 * 1024 * 1024; // 5MB
      const allowed = ['application/pdf', 'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'image/jpeg', 'image/png'];
      const label = document.getElementById('rfq-file-label');
      if (file) {
        if (file.size > maxSize) {
          showFileError('File must be smaller than 5MB.');
          fileInput.value = '';
        } else if (!allowed.includes(file.type)) {
          showFileError('Allowed: PDF, DOC, DOCX, JPG, PNG.');
          fileInput.value = '';
        } else {
          if (label) label.textContent = file.name;
          clearFileError();
        }
      }
    });
  }
  function showFileError(msg) {
    const err = document.getElementById('rfq-file-error');
    if (err) { err.textContent = msg; err.style.display = 'block'; }
  }
  function clearFileError() {
    const err = document.getElementById('rfq-file-error');
    if (err) { err.textContent = ''; err.style.display = 'none'; }
  }

  // ── Submit ─────────────────────────────────────────────────
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateAll()) {
      form.querySelector('.has-error')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    submitRFQ();
  });

  /**
   * submitRFQ()
   * Collects form data and sends to backend.
   * Replace the fetch URL / headers to connect your backend.
   * Schema matches: rfq_submissions DB table.
   */
  async function submitRFQ() {
    setLoading(true);
    hideStatus();

    const payload = {
      full_name:              getVal('rfq-name'),
      company_name:           getVal('rfq-company'),
      country:                getVal('rfq-country'),
      email:                  getVal('rfq-email'),
      phone:                  getVal('rfq-phone'),
      whatsapp:               getVal('rfq-whatsapp'),
      product:                getVal('rfq-product'),
      tobacco_type:           getVal('rfq-tobacco-type'),
      quantity:               getVal('rfq-quantity'),
      cut_specification:      getVal('rfq-cut-specification'),
      moisture_requirement:   getVal('rfq-moisture'),
      packaging_requirement:  getVal('rfq-packaging'),
      destination_country:    getVal('rfq-destination'),
      delivery_date:          getVal('rfq-delivery-date'),
      additional_requirements:getVal('rfq-additional'),
      source:                 'website-rfq-form',
      submitted_at:           new Date().toISOString()
    };

    try {
      /**
       * ─────────────────────────────────────────────────────
       * BACKEND INTEGRATION POINT
       * Uncomment and configure one of the following:
       *
       * A) Supabase:
       *    const { error } = await supabaseClient
       *      .from('rfq_submissions')
       *      .insert([payload]);
       *    if (error) throw error;
       *
       * B) REST API (PHP / Node):
       *    const res = await fetch('/api/rfq', {
       *      method: 'POST',
       *      headers: { 'Content-Type': 'application/json' },
       *      body: JSON.stringify(payload)
       *    });
       *    if (!res.ok) throw new Error('Server error');
       *
       * C) Email API (Resend / SendGrid):
       *    // Call your serverless function, not client-side API key
       * ─────────────────────────────────────────────────────
       */

      // TEMPORARY: Simulate successful submission (remove when backend connected)
      await new Promise(resolve => setTimeout(resolve, 1200));
      console.log('[RFQ] Payload ready for backend:', payload);

      showSuccess();
      form.reset();
    } catch (err) {
      console.error('[RFQ] Submission error:', err);
      showError();
    } finally {
      setLoading(false);
    }
  }

  function getVal(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  function setLoading(loading) {
    if (submitBtn) {
      submitBtn.disabled = loading;
      submitBtn.textContent = loading ? 'Submitting…' : 'Submit RFQ';
    }
  }

  function showSuccess() {
    if (statusEl) {
      statusEl.className = 'form-status form-status--success visible';
      statusEl.innerHTML = '✓ Thank you. Our commercial team will review your requirements and contact you shortly.';
      statusEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function showError() {
    if (statusEl) {
      statusEl.className = 'form-status form-status--error visible';
      statusEl.textContent = 'There was a problem submitting your request. Please try again or contact us directly by email.';
    }
  }

  function hideStatus() {
    if (statusEl) statusEl.className = 'form-status';
  }

})();
