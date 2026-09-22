/**
 * Prime Leaf Processing — Products JS
 * Renders product catalogue from cms-config.js data
 */

(function () {
  'use strict';

  const grid = document.getElementById('products-grid');
  if (!grid || !window.PLP) return;

  window.PLP.PRODUCTS.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card reveal';

    const apps = product.applications.map(a => `<li>${a}</li>`).join('');
    const specs = product.specifications.map(s => `<li>${s}</li>`).join('');

    card.innerHTML = `
      <div class="product-card__img">
        <img src="${product.image}" alt="${product.title}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy" onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,var(--forest-dark),var(--charcoal))'">
        ${product.featured ? '<span class="product-card__badge">Featured</span>' : ''}
        ${product.coming_soon ? '<span class="product-card__badge product-card__badge--soon">Coming Soon</span>' : ''}
      </div>
      <div class="product-card__body">
        <h3 class="product-card__title">${product.title}</h3>
        <p class="product-card__subtitle">${product.subtitle}</p>
        <p class="product-card__desc">${product.description}</p>
        <div class="product-card__meta">
          <div class="product-card__meta-item">
            <strong>Type</strong> ${product.tobacco_type}
          </div>
          <div class="product-card__meta-item">
            <strong>Processing</strong> ${product.processing}
          </div>
          <div class="product-card__meta-item">
            <strong>Availability</strong> ${product.availability}
          </div>
          <div class="product-card__meta-item">
            <strong>MOQ</strong> ${product.moq}
          </div>
        </div>
        <div class="product-card__actions">
          <a href="quote.html?product=${encodeURIComponent(product.title)}" class="btn btn--primary btn--sm">Request Quote</a>
          <a href="contact.html" class="btn btn--outline btn--sm">More Information</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

})();
