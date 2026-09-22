/**
 * Prime Leaf Processing — Quote Form (RFQ)
 * quote-form.js
 *
 * Email delivery via Formspree (https://formspree.io)
 * Replace YOUR_FORM_ID_RFQ with the ID from your Formspree dashboard.
 * Sign up free at formspree.io → New Form → point it to info@primeleafp.com
 */

(function () {
  'use strict';

  // ── Formspree endpoint ──────────────────────────────────────
  // 1. Go to https://formspree.io and sign up free
  // 2. Create a new form, set the email to info@primeleafp.com
  // 3. Copy the form ID and paste below (create a SEPARATE form from contact)
  const FORMSPREE_ID = 'YOUR_FORM_ID_RFQ'; // ← replace this
  const ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;
  if (!form) return;

  const submitBtn = form.querySelector('[data-rfq-submit]');
  const statusEl = document.getElementById('rfq-status');

  // ── Pre-fill from URL params ────────────────────────────────
  (function prefillFromURL() {
    const params = new URLSearchParams(window.location.search);
    const keyMap = {
      'product': 'rfq-product',
      'type': 'rfq-tobacco-type',
      'tobacco-type': 'rfq-tobacco-type',
      'cut': 'rfq-cut-specification',
      'cut-width': 'rfq-cut-specification',
      'cut-specification': 'rfq-cut-specification',
      'moisture': 'rfq-moisture',
      'packaging': 'rfq-packaging',
      'quantity': 'rfq-quantity',
      'destination': 'rfq-destination',
      'additional': 'rfq-additional',
      'blend': 'rfq-additional',
      'notes': 'rfq-additional'
    };

    params.forEach((value, key) => {
      const decoded = decodeURIComponent(value);
      const targetName = keyMap[key] || key;
      const el = form.querySelector(`[name="${targetName}"], [name="rfq-${targetName}"], [data-rfq-field="${targetName}"]`);
      if (el) {
        if (el.tagName === 'SELECT') {
          // If select option doesn't exist exactly, try matching text or add option
          let found = false;
          for (let opt of el.options) {
            if (opt.value.toLowerCase().includes(decoded.toLowerCase()) || decoded.toLowerCase().includes(opt.value.toLowerCase())) {
              opt.selected = true;
              found = true;
              break;
            }
          }
          if (!found && decoded) {
            const newOpt = new Option(decoded, decoded, true, true);
            el.add(newOpt);
          }
        } else {
          el.value = decoded;
        }
      }
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

      const formData = new FormData();
      Object.entries(payload).forEach(([k, v]) => { if (v) formData.set(k, v); });
      formData.set('_replyto', payload.email);
      formData.set('_subject', `[PLP] New RFQ from ${payload.company_name || payload.full_name}`);

      const res = await fetch(ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.errors?.[0]?.message || 'Server error');
      }

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
