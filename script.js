/**
 * The Fake Shop — Main Script
 * Vanilla JavaScript: cart, interactions, animations
 */

/* ============================================================
   DATA — Products
   ============================================================ */
const PRODUCTS = [
  {
    id: 1,
    name: 'Velvet Rose Hydrating Serum',
    category: 'Serum',
    description: 'Infused with rose extract and hyaluronic acid for deep hydration and a radiant glow.',
    price: 68.00,
    salePrice: null,
    rating: 4.9,
    reviews: 214,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop',
    badge: 'Best Seller',
    badgeType: 'hot',
  },
  {
    id: 2,
    name: 'Luminous Silk Foundation',
    category: 'Makeup',
    description: 'Buildable, skin-like coverage with a satin finish. SPF 20. 36-shade range.',
    price: 52.00,
    salePrice: 38.00,
    rating: 4.7,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&auto=format&fit=crop',
    badge: 'Sale',
    badgeType: 'sale',
  },
  {
    id: 3,
    name: 'Midnight Bloom Eye Palette',
    category: 'Makeup',
    description: '12 richly pigmented shades from nude to dramatic. Vegan & cruelty-free.',
    price: 44.00,
    salePrice: null,
    rating: 4.8,
    reviews: 302,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop',
    badge: 'New',
    badgeType: 'new',
  },
  {
    id: 4,
    name: 'Golden Hour Lip Gloss',
    category: 'Lipstick',
    description: 'High-shine formula with vitamin E. Non-sticky, long-lasting lustre.',
    price: 24.00,
    salePrice: 18.00,
    rating: 4.6,
    reviews: 97,
    image: 'https://images.unsplash.com/photo-1586495777744-4e6232bf32a1?w=600&auto=format&fit=crop',
    badge: 'Sale',
    badgeType: 'sale',
  },
  {
    id: 5,
    name: 'Cloud Soft Cleanser',
    category: 'Cleanser',
    description: 'Gentle micellar gel that removes makeup and impurities without stripping moisture.',
    price: 32.00,
    salePrice: null,
    rating: 4.9,
    reviews: 451,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&auto=format&fit=crop',
    badge: 'Best Seller',
    badgeType: 'hot',
  },
  {
    id: 6,
    name: 'Dew Shield SPF 50 Sunscreen',
    category: 'Sunscreen',
    description: 'Invisible, lightweight broad-spectrum protection with a dewy, skin-loving finish.',
    price: 38.00,
    salePrice: null,
    rating: 4.8,
    reviews: 327,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&auto=format&fit=crop',
    badge: 'New',
    badgeType: 'new',
  },
  {
    id: 7,
    name: 'Satin Velvet Matte Lipstick',
    category: 'Lipstick',
    description: 'Intense colour, creamy matte texture with 8-hour wear. No feathering.',
    price: 28.00,
    salePrice: null,
    rating: 4.7,
    reviews: 163,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop',
    badge: null,
    badgeType: null,
  },
  {
    id: 8,
    name: 'Pearl Glow Vitamin C Cream',
    category: 'Skincare',
    description: 'Brightening day cream with 15% vitamin C complex and pearl extract.',
    price: 74.00,
    salePrice: 58.00,
    rating: 4.9,
    reviews: 278,
    image: 'https://images.unsplash.com/photo-1631390943871-4b75fae45e17?w=600&auto=format&fit=crop',
    badge: 'Sale',
    badgeType: 'sale',
  },
  {
    id: 9,
    name: 'Rose Petal Toning Mist',
    category: 'Skincare',
    description: 'Alcohol-free facial mist with real rose petals to refresh and tone skin anytime.',
    price: 26.00,
    salePrice: null,
    rating: 4.6,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop',
    badge: null,
    badgeType: null,
  },
  {
    id: 10,
    name: 'Luxe Complete Makeup Set',
    category: 'Makeup Set',
    description: '8-piece curated set: foundation, mascara, liner, blush, highlighter & more.',
    price: 148.00,
    salePrice: 99.00,
    rating: 4.9,
    reviews: 512,
    image: 'https://images.unsplash.com/photo-1596704017252-d6e0f470e1cd?w=600&auto=format&fit=crop',
    badge: 'Sale',
    badgeType: 'sale',
  },
  {
    id: 11,
    name: 'Charcoal Deep Pore Mask',
    category: 'Skincare',
    description: 'Activated charcoal draws out impurities and tightens pores for a smoother complexion.',
    price: 34.00,
    salePrice: null,
    rating: 4.5,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1601046668428-94ea13437736?w=600&auto=format&fit=crop',
    badge: 'New',
    badgeType: 'new',
  },
  {
    id: 12,
    name: 'Opal Highlight & Glow Powder',
    category: 'Makeup',
    description: 'Finely milled opal-infused powder for a multi-dimensional, lit-from-within glow.',
    price: 42.00,
    salePrice: null,
    rating: 4.8,
    reviews: 194,
    image: 'https://images.unsplash.com/photo-1583241800698-e8ab01830a22?w=600&auto=format&fit=crop',
    badge: 'Best Seller',
    badgeType: 'hot',
  },
];

/* Best Sellers (subset) */
const BEST_SELLERS = [
  { id: 1,  rank: '#1', name: 'Velvet Rose Hydrating Serum',  price: '$68',  image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&auto=format&fit=crop' },
  { id: 5,  rank: '#2', name: 'Cloud Soft Cleanser',           price: '$32',  image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&auto=format&fit=crop' },
  { id: 8,  rank: '#3', name: 'Pearl Glow Vitamin C Cream',    price: '$58',  image: 'https://images.unsplash.com/photo-1631390943871-4b75fae45e17?w=400&auto=format&fit=crop' },
  { id: 10, rank: '#4', name: 'Luxe Complete Makeup Set',      price: '$99',  image: 'https://images.unsplash.com/photo-1596704017252-d6e0f470e1cd?w=400&auto=format&fit=crop' },
];

/* Categories */
const CATEGORIES = [
  { name: 'Skincare',    icon: '🌿', filter: 'Skincare' },
  { name: 'Serums',      icon: '💧', filter: 'Serum' },
  { name: 'Lipstick',    icon: '💄', filter: 'Lipstick' },
  { name: 'Cleanser',    icon: '✨', filter: 'Cleanser' },
  { name: 'Sunscreen',   icon: '☀️', filter: 'Sunscreen' },
  { name: 'Makeup',      icon: '🪞', filter: 'Makeup' },
  { name: 'Makeup Sets', icon: '🎁', filter: 'Makeup Set' },
  { name: 'All',         icon: '🛍️', filter: 'All' },
];

/* Testimonials */
const TESTIMONIALS = [
  {
    text: `"The Velvet Rose Serum completely transformed my skin. I've tried so many luxury brands and nothing comes close to the glow this gives me. My friends keep asking what I'm doing differently!"`,
    name: 'Amelia Chen',
    title: 'Skincare Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&auto=format&fit=crop',
    stars: 5,
  },
  {
    text: `"I was skeptical about buying makeup online but The Fake Shop's descriptions are spot on. The Luminous Silk Foundation matches my shade perfectly and lasts all day — no touch-ups needed."`,
    name: 'Sofia Rossi',
    title: 'Beauty Blogger',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop',
    stars: 5,
  },
  {
    text: '"Dew Shield SPF50 is the only sunscreen I\'ve found that doesn\'t leave a white cast on my deeper skin tone. Lightweight, no stickiness, blends beautifully under makeup. A permanent staple."',
    name: 'Priya Nair',
    title: 'Dermatology Nurse',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop',
    stars: 5,
  },
  {
    text: '"Ordered the Luxe Complete Makeup Set as a gift for my sister and she was blown away by the quality and presentation. Everything arrived beautifully packaged. Will definitely order again!"',
    name: 'Marcus Owens',
    title: 'Verified Buyer',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&auto=format&fit=crop',
    stars: 5,
  },
];

/* ============================================================
   STATE
   ============================================================ */
let cart = [];
let activeFilter = 'All';
let currentQuickViewProduct = null;

/* ============================================================
   UTILITY
   ============================================================ */
const fmt = (n) => `$${Number(n).toFixed(2)}`;

function generateStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2600);
}

function ripple(btn, e) {
  const r = document.createElement('span');
  r.className = 'ripple';
  const d = Math.max(btn.clientWidth, btn.clientHeight);
  const rect = btn.getBoundingClientRect();
  r.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - rect.left - d/2}px;top:${e.clientY - rect.top - d/2}px`;
  btn.appendChild(r);
  r.addEventListener('animationend', () => r.remove());
}

/* ============================================================
   CART (localStorage)
   ============================================================ */
function loadCart() {
  try {
    const saved = localStorage.getItem('tfs_cart');
    cart = saved ? JSON.parse(saved) : [];
  } catch (err) {
    console.warn('Cart data could not be parsed, resetting.', err);
    cart = [];
  }
}

function saveCart() {
  localStorage.setItem('tfs_cart', JSON.stringify(cart));
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      image: product.image,
      qty: 1,
    });
  }
  saveCart();
  updateCartUI();
  showToast(`"${product.name}" added to cart`);

  /* Feedback animation on the button */
  const btn = document.querySelector(`[data-add-id="${productId}"]`);
  if (btn) {
    btn.classList.add('added');
    btn.textContent = '✓ Added';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = '<span class="btn-icon">🛒</span> Add to Cart';
    }, 1400);
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

/* ============================================================
   CART UI
   ============================================================ */
function updateCartUI() {
  const count = getCartCount();

  /* Badge */
  const badge = document.getElementById('cart-badge');
  badge.textContent = count;
  badge.classList.toggle('show', count > 0);

  /* Drawer items */
  const container = document.getElementById('cart-items');
  const emptyDiv  = document.getElementById('cart-empty');
  const footer    = document.getElementById('cart-footer');

  if (cart.length === 0) {
    container.innerHTML = '';
    emptyDiv.style.display = 'flex';
    footer.style.display   = 'none';
    return;
  }

  emptyDiv.style.display = 'none';
  footer.style.display   = 'block';

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" loading="lazy">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${fmt(item.price)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">✕</button>
    </div>
  `).join('');

  /* Totals */
  const total = getCartTotal();
  document.getElementById('cart-subtotal').textContent = fmt(total);
  document.getElementById('cart-total').textContent    = fmt(total);
  document.getElementById('cart-count-text').textContent = `${count} item${count !== 1 ? 's' : ''}`;
}

/* ============================================================
   CART DRAWER
   ============================================================ */
function openCart() {
  document.getElementById('cart-overlay').classList.add('open');
  document.getElementById('cart-drawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-overlay').classList.remove('open');
  document.getElementById('cart-drawer').classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   RENDER — Categories
   ============================================================ */
function renderCategories() {
  const grid = document.getElementById('categories-grid');
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map(cat => `
    <div class="category-card reveal" role="button" tabindex="0"
         onclick="filterProducts('${cat.filter}')"
         onkeydown="if(event.key==='Enter')filterProducts('${cat.filter}')">
      <div class="cat-icon">${cat.icon}</div>
      <div class="cat-name">${cat.name}</div>
    </div>
  `).join('');
  observeReveal();
}

/* ============================================================
   RENDER — Products
   ============================================================ */
function renderProducts(filter = 'All') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const list = filter === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === filter);

  grid.innerHTML = list.map(p => {
    const displayPrice = p.salePrice || p.price;
    const discount = p.salePrice
      ? Math.round((1 - p.salePrice / p.price) * 100)
      : null;

    return `
      <article class="product-card reveal" data-category="${p.category}">
        <div class="product-img-wrap">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          <div class="product-badges">
            ${p.badge ? `<span class="badge-${p.badgeType}">${p.badge}</span>` : ''}
          </div>
          <button class="product-wish" data-wish-id="${p.id}" aria-label="Wishlist"
            onclick="toggleWishlist(this)">♡</button>
          <div class="product-quick-view" onclick="openQuickView(${p.id})">
            Quick View
          </div>
        </div>
        <div class="product-info">
          <div class="product-category">${p.category}</div>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.description}</p>
          <div class="product-rating">
            <span class="stars">${generateStars(p.rating)}</span>
            <span class="rating-count">(${p.reviews})</span>
          </div>
          <div class="product-price-row">
            <span class="price-current">${fmt(displayPrice)}</span>
            ${p.salePrice ? `<span class="price-original">${fmt(p.price)}</span>` : ''}
            ${discount    ? `<span class="price-discount">−${discount}%</span>` : ''}
          </div>
          <button class="add-to-cart-btn" data-add-id="${p.id}"
            onclick="handleAddToCart(${p.id}, event)">
            <span class="btn-icon">🛒</span> Add to Cart
          </button>
        </div>
      </article>
    `;
  }).join('');

  observeReveal();
}

function handleAddToCart(id, e) {
  ripple(e.currentTarget, e);
  addToCart(id);
}

/* ============================================================
   FILTER
   ============================================================ */
function filterProducts(cat) {
  activeFilter = cat;
  /* Update filter bar buttons */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === cat);
  });
  renderProducts(cat);
  /* Scroll to products section */
  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ============================================================
   RENDER — Best Sellers
   ============================================================ */
function renderBestSellers() {
  const grid = document.getElementById('best-sellers-grid');
  if (!grid) return;
  grid.innerHTML = BEST_SELLERS.map(bs => `
    <div class="bs-card reveal">
      <div class="bs-img">
        <img src="${bs.image}" alt="${bs.name}" loading="lazy">
      </div>
      <div class="bs-body">
        <div class="bs-rank">${bs.rank} Best Seller</div>
        <div class="bs-name">${bs.name}</div>
        <div class="bs-price">${bs.price}</div>
      </div>
    </div>
  `).join('');
  observeReveal();
}

/* ============================================================
   RENDER — Testimonials
   ============================================================ */
function renderTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;
  grid.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card reveal">
      <div class="testimonial-quote">"</div>
      <div class="testimonial-stars">${'★'.repeat(t.stars)}</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <img class="author-avatar" src="${t.avatar}" alt="${t.name}" loading="lazy">
        <div>
          <div class="author-name">${t.name}</div>
          <div class="author-title">${t.title}</div>
        </div>
      </div>
    </div>
  `).join('');
  observeReveal();
}

/* ============================================================
   QUICK VIEW MODAL
   ============================================================ */
function openQuickView(productId) {
  const p = PRODUCTS.find(pr => pr.id === productId);
  if (!p) return;
  currentQuickViewProduct = p;

  const displayPrice = p.salePrice || p.price;

  document.getElementById('modal-img').src     = p.image;
  document.getElementById('modal-img').alt     = p.name;
  document.getElementById('modal-cat').textContent  = p.category;
  document.getElementById('modal-name').textContent = p.name;
  document.getElementById('modal-stars').innerHTML  = `<span class="stars">${generateStars(p.rating)}</span><span class="rating-count">(${p.reviews} reviews)</span>`;
  document.getElementById('modal-desc').textContent = p.description;
  document.getElementById('modal-price').innerHTML  =
    `${fmt(displayPrice)}${p.salePrice ? `<span class="orig">${fmt(p.price)}</span>` : ''}`;

  document.getElementById('modal-add-btn').dataset.modalAddId = productId;

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
  currentQuickViewProduct = null;
}

/* ============================================================
   HEADER — sticky, search, mobile nav
   ============================================================ */
function initHeader() {
  const header = document.getElementById('site-header');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const searchToggle = document.getElementById('search-toggle');
  const searchBar    = document.getElementById('search-bar');
  const searchClose  = document.getElementById('search-bar-close');
  const searchInput  = document.getElementById('search-input');

  /* Sticky */
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* Mobile nav */
  hamburger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', open);
  });

  /* Close mobile nav when a link is clicked */
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  /* Search */
  searchToggle.addEventListener('click', () => {
    const active = searchBar.classList.toggle('active');
    if (active) searchInput.focus();
  });
  searchClose.addEventListener('click', () => {
    searchBar.classList.remove('active');
  });

  /* Live search filter */
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) { renderProducts(activeFilter); return; }
    const filtered = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
    const grid = document.getElementById('products-grid');
    grid.innerHTML = filtered.map(p => {
      const displayPrice = p.salePrice || p.price;
      const discount = p.salePrice ? Math.round((1 - p.salePrice / p.price) * 100) : null;
      return `
        <article class="product-card" data-category="${p.category}">
          <div class="product-img-wrap">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <div class="product-badges">${p.badge ? `<span class="badge-${p.badgeType}">${p.badge}</span>` : ''}</div>
            <button class="product-wish" data-wish-id="${p.id}" onclick="toggleWishlist(this)">♡</button>
            <div class="product-quick-view" onclick="openQuickView(${p.id})">Quick View</div>
          </div>
          <div class="product-info">
            <div class="product-category">${p.category}</div>
            <h3 class="product-name">${p.name}</h3>
            <p class="product-desc">${p.description}</p>
            <div class="product-rating">
              <span class="stars">${generateStars(p.rating)}</span>
              <span class="rating-count">(${p.reviews})</span>
            </div>
            <div class="product-price-row">
              <span class="price-current">${fmt(displayPrice)}</span>
              ${p.salePrice ? `<span class="price-original">${fmt(p.price)}</span>` : ''}
              ${discount    ? `<span class="price-discount">−${discount}%</span>` : ''}
            </div>
            <button class="add-to-cart-btn" data-add-id="${p.id}" onclick="handleAddToCart(${p.id}, event)">
              <span class="btn-icon">🛒</span> Add to Cart
            </button>
          </div>
        </article>
      `;
    }).join('');
    /* Scroll to products */
    document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/* ============================================================
   WISHLIST (visual only, no persistence)
   ============================================================ */
function toggleWishlist(btn) {
  btn.classList.toggle('active');
  btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
}

/* ============================================================
   COUNTDOWN TIMER (Promo section)
   ============================================================ */
const padTwo = n => String(n).padStart(2, '0');

function initCountdown() {
  /* Target: 3 days from now */
  const target = Date.now() + 3 * 24 * 60 * 60 * 1000;

  function tick() {
    const diff = Math.max(0, target - Date.now());
    const days    = Math.floor(diff / 86400000);
    const hours   = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000)  / 60000);
    const seconds = Math.floor((diff % 60000)    / 1000);

    const el = id => document.getElementById(id);
    if (el('cd-days'))    el('cd-days').textContent    = padTwo(days);
    if (el('cd-hours'))   el('cd-hours').textContent   = padTwo(hours);
    if (el('cd-minutes')) el('cd-minutes').textContent = padTwo(minutes);
    if (el('cd-seconds')) el('cd-seconds').textContent = padTwo(seconds);
  }
  tick();
  setInterval(tick, 1000);
}

/* ============================================================
   NEWSLETTER FORM
   ============================================================ */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('.newsletter-input');
    if (!input.value.trim()) return;
    showToast('🎉 You\'re subscribed! Welcome to The Fake Shop.');
    input.value = '';
  });
}

/* ============================================================
   SCROLL REVEAL (Intersection Observer)
   ============================================================ */
function observeReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => io.observe(el));
}

/* ============================================================
   LOADING SCREEN
   ============================================================ */
function hideLoader() {
  const loader = document.getElementById('loading-screen');
  if (loader) {
    loader.classList.add('hidden');
    setTimeout(() => loader.remove(), 700);
  }
}

/* ============================================================
   FILTER BAR — build dynamically
   ============================================================ */
function buildFilterBar() {
  const bar = document.getElementById('filter-bar');
  if (!bar) return;
  const cats = ['All', ...new Set(PRODUCTS.map(p => p.category))];
  bar.innerHTML = cats.map(c => `
    <button class="filter-btn${c === 'All' ? ' active' : ''}" data-filter="${c}"
      onclick="filterProducts('${c}')">${c}</button>
  `).join('');
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  loadCart();

  /* Build dynamic sections */
  renderCategories();
  buildFilterBar();
  renderProducts('All');
  renderBestSellers();
  renderTestimonials();

  /* Update cart UI from localStorage */
  updateCartUI();

  /* Header */
  initHeader();

  /* Countdown */
  initCountdown();

  /* Newsletter */
  initNewsletter();

  /* Cart button */
  document.getElementById('cart-btn').addEventListener('click', openCart);
  document.getElementById('mobile-cart-btn').addEventListener('click', openCart);
  document.getElementById('cart-overlay').addEventListener('click', closeCart);
  document.getElementById('cart-close').addEventListener('click', closeCart);

  /* Modal close */
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeQuickView();
  });
  document.getElementById('modal-close').addEventListener('click', closeQuickView);
  document.getElementById('modal-add-btn').addEventListener('click', (e) => {
    const id = parseInt(e.currentTarget.dataset.modalAddId, 10);
    addToCart(id);
    closeQuickView();
    openCart();
  });

  /* Escape key */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeQuickView();
    }
  });

  /* Initial reveal observation */
  observeReveal();

  /* Hide loader after everything renders */
  requestAnimationFrame(() => requestAnimationFrame(hideLoader));
});
