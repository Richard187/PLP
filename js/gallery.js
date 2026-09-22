/**
 * Prime Leaf Processing — Gallery (Lightbox, Filter, Swipe)
 * gallery.js
 */

(function () {
  'use strict';

  // ── Filter ─────────────────────────────────────────────────
  const filterBtns = document.querySelectorAll('.gallery-filter__btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      galleryItems.forEach(item => {
        if (cat === 'all' || item.dataset.category === cat) {
          item.style.display = '';
          setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => { item.style.display = 'none'; }, 300);
        }
      });
    });
  });

  // ── Lightbox ───────────────────────────────────────────────
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lbImg = lightbox.querySelector('.lightbox__img');
  const lbCaption = lightbox.querySelector('.lightbox__caption');
  const lbClose = lightbox.querySelector('.lightbox__close');
  const lbPrev = lightbox.querySelector('.lightbox__prev');
  const lbNext = lightbox.querySelector('.lightbox__next');

  let currentIndex = -1;
  const images = [];

  galleryItems.forEach((item, i) => {
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-item__caption');
    if (img) {
      images.push({ src: img.src, alt: img.alt, caption: caption ? caption.textContent : '' });
      item.addEventListener('click', () => openLightbox(i));
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', `View ${caption ? caption.textContent : 'image'}`);
      item.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(i); }
      });
    }
  });

  function openLightbox(index) {
    currentIndex = index;
    showImage(index);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (currentIndex >= 0 && galleryItems[currentIndex]) {
      galleryItems[currentIndex].focus();
    }
  }

  function showImage(index) {
    const img = images[index];
    if (!img) return;
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    if (lbCaption) lbCaption.textContent = img.caption;
    currentIndex = index;
  }

  function prevImage() { showImage((currentIndex - 1 + images.length) % images.length); }
  function nextImage() { showImage((currentIndex + 1) % images.length); }

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbPrev) lbPrev.addEventListener('click', prevImage);
  if (lbNext) lbNext.addEventListener('click', nextImage);

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });

  // ── Touch swipe ────────────────────────────────────────────
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  lightbox.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? nextImage() : prevImage(); }
  });

  // ── Lazy loading ───────────────────────────────────────────
  if ('IntersectionObserver' in window) {
    const imgObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) { img.src = img.dataset.src; img.removeAttribute('data-src'); }
          imgObs.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });
    document.querySelectorAll('img[data-src]').forEach(img => imgObs.observe(img));
  }

})();
