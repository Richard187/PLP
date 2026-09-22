/**
 * Prime Leaf Processing — Main Bootstrap
 * main.js
 * Initializes all modules after DOM ready.
 */

(function () {
  'use strict';

  // ── DOM Ready ───────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {

    // Scroll progress bar
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    document.body.prepend(progressBar);

    // Cookie banner (simple)
    initCookieBanner();

    // Populate CMS-driven content
    if (window.PLP) populateCMSContent();

    // WhatsApp float button (if phone available)
    initWhatsAppFloat();

    // Back to top
    initBackToTop();

    // Apply page class
    document.body.classList.add('page-enter');
  });

  // ── CMS Content Population ─────────────────────────────────
  function populateCMSContent() {
    const cfg = window.PLP.COMPANY;
    // Swap any [data-cms] elements
    document.querySelectorAll('[data-cms]').forEach(el => {
      const key = el.dataset.cms;
      const val = getNestedValue(cfg, key);
      if (val && typeof val === 'string') {
        if (el.tagName === 'A') el.href = key.includes('email') ? 'mailto:' + val : key.includes('whatsapp') ? 'https://wa.me/' + val.replace(/\D/g,'') : val;
        else el.textContent = val;
      }
    });

    // Update page title/meta from SEO config
    const page = document.body.dataset.page;
    if (page && window.PLP.SEO.pages[page]) {
      const seo = window.PLP.SEO.pages[page];
      if (seo.title) document.title = seo.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && seo.description) metaDesc.setAttribute('content', seo.description);
    }
  }

  function getNestedValue(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
  }

  // ── Cookie Banner ──────────────────────────────────────────
  function initCookieBanner() {
    if (localStorage.getItem('plp-cookies-accepted')) return;
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Cookie Notice');
    banner.innerHTML = `
      <div class="cookie-banner__inner">
        <p>We use cookies to improve your experience on our website.
           <a href="cookie-policy.html">Cookie Policy</a></p>
        <button id="cookie-accept" class="btn btn--primary btn--sm">Accept</button>
      </div>
    `;
    banner.style.cssText = `
      position:fixed;bottom:0;left:0;right:0;background:var(--charcoal);
      color:rgba(245,243,237,0.85);padding:var(--space-4) var(--space-8);
      z-index:8000;border-top:1px solid rgba(255,255,255,0.08);
      transform:translateY(100%);transition:transform 0.4s ease;
    `;
    const inner = banner.querySelector('.cookie-banner__inner');
    inner.style.cssText = `display:flex;align-items:center;gap:var(--space-6);max-width:var(--container-max);margin:0 auto;justify-content:space-between;flex-wrap:wrap;`;
    document.body.appendChild(banner);

    setTimeout(() => { banner.style.transform = 'translateY(0)'; }, 800);

    document.getElementById('cookie-accept')?.addEventListener('click', () => {
      localStorage.setItem('plp-cookies-accepted', '1');
      banner.style.transform = 'translateY(100%)';
      setTimeout(() => banner.remove(), 400);
    });
  }

  // ── WhatsApp Float ──────────────────────────────────────────
  function initWhatsAppFloat() {
    const phone = window.PLP?.COMPANY?.whatsapp;
    if (!phone || phone.includes('TO BE PROVIDED')) return;
    const btn = document.createElement('a');
    btn.href = `https://wa.me/${phone.replace(/\D/g, '')}`;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.setAttribute('aria-label', 'Contact us on WhatsApp');
    btn.style.cssText = `
      position:fixed;bottom:var(--space-8);right:var(--space-8);
      width:56px;height:56px;border-radius:50%;
      background:#25D366;color:#fff;display:flex;align-items:center;justify-content:center;
      box-shadow:0 4px 20px rgba(37,211,102,0.4);z-index:7000;
      transition:transform 0.2s ease,box-shadow 0.2s ease;text-decoration:none;
    `;
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
    btn.addEventListener('mouseenter', () => { btn.style.transform = 'scale(1.1)'; btn.style.boxShadow = '0 6px 28px rgba(37,211,102,0.5)'; });
    btn.addEventListener('mouseleave', () => { btn.style.transform = 'scale(1)'; btn.style.boxShadow = '0 4px 20px rgba(37,211,102,0.4)'; });
    document.body.appendChild(btn);
  }

  // ── Back to Top ────────────────────────────────────────────
  function initBackToTop() {
    const btn = document.createElement('button');
    btn.setAttribute('aria-label', 'Back to top');
    btn.style.cssText = `
      position:fixed;bottom:var(--space-8);left:var(--space-8);
      width:44px;height:44px;border-radius:50%;border:2px solid rgba(255,255,255,0.12);
      background:rgba(28,36,33,0.9);color:#fff;cursor:pointer;
      display:none;align-items:center;justify-content:center;
      z-index:7000;transition:all 0.2s ease;
      font-size:1.1rem;backdrop-filter:blur(8px);
    `;
    btn.innerHTML = '↑';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      btn.style.display = window.scrollY > 600 ? 'flex' : 'none';
    }, { passive: true });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    btn.addEventListener('mouseenter', () => { btn.style.background = 'var(--brass)'; btn.style.borderColor = 'var(--brass)'; });
    btn.addEventListener('mouseleave', () => { btn.style.background = 'rgba(28,36,33,0.9)'; btn.style.borderColor = 'rgba(255,255,255,0.12)'; });
  }

})();
