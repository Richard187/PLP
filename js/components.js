/**
 * Prime Leaf Processing — Shared HTML Components
 * Injects the navigation and footer into every page.
 */

(function () {
  'use strict';

  const NAV_HTML = `
<a class="skip-to-content" href="#main-content">Skip to main content</a>
<div id="scroll-progress" aria-hidden="true"></div>

<nav id="main-nav" class="nav transparent" role="navigation" aria-label="Main navigation">
  <div class="nav__inner">
    <a href="index.html" class="nav__logo" aria-label="Prime Leaf Processing — Home">
      <img src="assets/images/logo.png" alt="Prime Leaf Processing" height="100" style="width:auto;height:100px;object-fit:contain;">
    </a>

    <ul class="nav__links" role="list">
      <li><a href="index.html"          class="nav__link" data-page="index">Home</a></li>
      <li><a href="about.html"          class="nav__link" data-page="about">About Us</a></li>
      <li><a href="processing.html"     class="nav__link" data-page="processing">Processing</a></li>
      <li><a href="products.html"       class="nav__link" data-page="products">Products</a></li>
      <li><a href="quality.html"        class="nav__link" data-page="quality">Quality</a></li>
      <li><a href="facilities.html"     class="nav__link" data-page="facilities">Facilities</a></li>
      <li><a href="markets.html"        class="nav__link" data-page="markets">Markets</a></li>
      <li><a href="contact.html"        class="nav__link" data-page="contact">Contact</a></li>
    </ul>

    <a href="quote.html" class="nav__cta desktop-only" aria-label="Request a Quote">Request a Quote</a>

    <button class="nav__toggle" id="nav-toggle"
            aria-controls="nav-mobile" aria-expanded="false" aria-label="Toggle mobile menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div id="nav-mobile" class="nav__mobile" role="dialog" aria-modal="true" aria-label="Mobile navigation">
  <ul class="nav__mobile-links" role="list">
    <li><a href="index.html"      class="nav__mobile-link">Home</a></li>
    <li><a href="about.html"      class="nav__mobile-link">About Us</a></li>
    <li><a href="processing.html" class="nav__mobile-link">Processing</a></li>
    <li><a href="products.html"   class="nav__mobile-link">Products</a></li>
    <li><a href="quality.html"    class="nav__mobile-link">Quality</a></li>
    <li><a href="facilities.html" class="nav__mobile-link">Facilities</a></li>
    <li><a href="sourcing.html"   class="nav__mobile-link">Sourcing</a></li>
    <li><a href="sustainability.html" class="nav__mobile-link">Sustainability</a></li>
    <li><a href="markets.html"    class="nav__mobile-link">Markets</a></li>
    <li><a href="logistics.html"  class="nav__mobile-link">Logistics</a></li>
    <li><a href="insights.html"   class="nav__mobile-link">Insights</a></li>
    <li><a href="contact.html"    class="nav__mobile-link">Contact</a></li>
  </ul>
  <a href="quote.html" class="nav__mobile-cta">Request a Quote</a>
  <a href="sample-request.html" class="nav__mobile-link" style="margin-top:1rem;font-size:1rem;text-align:center;opacity:0.6;">Request a Sample</a>
</div>
`;

  const FOOTER_HTML = `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer__grid">

      <!-- Brand -->
      <div class="footer__brand">
        <img src="assets/images/logo.png" alt="Prime Leaf Processing" style="height:60px;width:auto;object-fit:contain;margin-bottom:var(--space-5);filter:brightness(0) invert(1);">
        <p class="footer__brand-desc">
          Bangladesh-based tobacco leaf processing and cut-rag manufacturing company.
          Delivering specification-driven processing solutions for international B2B customers.
        </p>
        <div class="footer__social" aria-label="Social media links">
          <a href="#" class="footer__social-link" aria-label="LinkedIn" rel="noopener">
            <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="#" class="footer__social-link" aria-label="Facebook" rel="noopener">
            <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="#" class="footer__social-link" aria-label="Instagram" rel="noopener">
            <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="#" class="footer__social-link" aria-label="YouTube" rel="noopener">
            <svg viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <nav aria-label="Quick links">
        <p class="footer__col-title">Quick Links</p>
        <ul class="footer__links" role="list">
          <li><a href="about.html"          class="footer__link">About Us</a></li>
          <li><a href="processing.html"     class="footer__link">Processing</a></li>
          <li><a href="products.html"       class="footer__link">Products</a></li>
          <li><a href="quality.html"        class="footer__link">Quality</a></li>
          <li><a href="facilities.html"     class="footer__link">Facilities</a></li>
          <li><a href="sourcing.html"       class="footer__link">Sourcing</a></li>
          <li><a href="sustainability.html" class="footer__link">Sustainability</a></li>
          <li><a href="markets.html"        class="footer__link">Markets</a></li>
          <li><a href="insights.html"       class="footer__link">Insights</a></li>
        </ul>
      </nav>

      <!-- Business -->
      <nav aria-label="Business links">
        <p class="footer__col-title">Business</p>
        <ul class="footer__links" role="list">
          <li><a href="quote.html"          class="footer__link">Request a Quote</a></li>
          <li><a href="sample-request.html" class="footer__link">Request a Sample</a></li>
          <li><a href="contact.html"        class="footer__link">Product Information</a></li>
          <li><a href="contact.html"        class="footer__link">Export Enquiries</a></li>
          <li><a href="contact.html"        class="footer__link">Contact Us</a></li>
        </ul>
      </nav>

      <!-- Contact -->
      <div>
        <p class="footer__col-title">Contact</p>
        <div class="footer__contact-item">
          <span class="footer__contact-icon">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </span>
          <span class="footer__contact-text">Plot # 528A, BEPZA EZ,<br>Chattogram, Bangladesh</span>
        </div>
        <div class="footer__contact-item">
          <span class="footer__contact-icon">
            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </span>
          <span class="footer__contact-text">
            <a href="mailto:info@primeleafp.com">info@primeleafp.com</a>
          </span>
        </div>
        <div class="footer__contact-item">
          <span class="footer__contact-icon">
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          </span>
          <span class="footer__contact-text">[To be provided]</span>
        </div>
        <div class="footer__contact-item">
          <span class="footer__contact-icon">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
          </span>
          <span class="footer__contact-text">www.primeleafp.com</span>
        </div>
      </div>

    </div><!-- /.footer__grid -->

    <div class="footer__bottom">
      <p class="footer__copy">&copy; 2026 Prime Leaf Processing. All rights reserved.</p>
      <nav class="footer__legal" aria-label="Legal links">
        <a href="privacy.html">Privacy Policy</a>
        <a href="terms.html">Terms &amp; Conditions</a>
        <a href="cookie-policy.html">Cookie Policy</a>
        <a href="responsible-business.html">Responsible Business</a>
      </nav>
    </div>

  </div>
</footer>
`;

  // Inject nav before body content
  const navContainer = document.getElementById('site-nav');
  if (navContainer) navContainer.innerHTML = NAV_HTML;

  // Inject footer
  const footerContainer = document.getElementById('site-footer');
  if (footerContainer) footerContainer.innerHTML = FOOTER_HTML;

  // Set page-nav class if not homepage
  const nav = document.getElementById('main-nav');
  if (nav && !document.body.classList.contains('homepage')) {
    nav.classList.remove('transparent');
    nav.classList.add('page-nav');
  }

})();
