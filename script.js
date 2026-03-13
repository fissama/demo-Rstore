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
    image: 'assets/images/product-serum.jpg',
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
    image: 'assets/images/product-foundation.jpg',
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
    image: 'assets/images/product-eye-palette.jpg',
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
    image: 'assets/images/product-lip-gloss.jpg',
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
    image: 'assets/images/product-cleanser.jpg',
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
    image: 'assets/images/product-sunscreen.jpg',
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
    image: 'assets/images/product-lipstick.jpg',
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
    image: 'assets/images/product-vitamin-c-cream.jpg',
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
    image: 'assets/images/product-toning-mist.jpg',
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
    image: 'assets/images/product-makeup-set.jpg',
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
    image: 'assets/images/product-charcoal-mask.jpg',
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
    image: 'assets/images/product-highlight.jpg',
    badge: 'Best Seller',
    badgeType: 'hot',
  },
  // ── Moisturizer (13–20) ──────────────────────────────────────────────────
  {
    id: 13, name: 'Aqua Burst Daily Moisturizer', category: 'Moisturizer',
    description: 'Lightweight water-gel formula for instant, all-day hydration. Fragrance-free.',
    price: 36.00, salePrice: null, rating: 4.7, reviews: 183,
    image: 'assets/images/product-aqua-moisturizer.jpg', badge: null, badgeType: null,
  },
  {
    id: 14, name: 'Shea Butter Rich Cream', category: 'Moisturizer',
    description: 'Ultra-nourishing shea butter cream for dry and very dry skin types.',
    price: 42.00, salePrice: null, rating: 4.8, reviews: 241,
    image: 'assets/images/product-shea-cream.jpg', badge: 'Best Seller', badgeType: 'hot',
  },
  {
    id: 15, name: 'Oil-Free Mattifying Gel', category: 'Moisturizer',
    description: 'Pore-minimising, oil-free gel moisturiser that keeps shine at bay all day.',
    price: 34.00, salePrice: 28.00, rating: 4.6, reviews: 156,
    image: 'assets/images/product-mattifying-gel.jpg', badge: 'Sale', badgeType: 'sale',
  },
  {
    id: 16, name: 'Hydra Plump 72h Cream', category: 'Moisturizer',
    description: '72-hour moisture lock powered by 5 types of hyaluronic acid and ceramides.',
    price: 56.00, salePrice: null, rating: 4.9, reviews: 319,
    image: 'assets/images/product-hydra-plump.jpg', badge: 'New', badgeType: 'new',
  },
  {
    id: 17, name: 'Calm & Soothe Moisturizer', category: 'Moisturizer',
    description: 'Centella and oat extract calm redness and sensitivity for a balanced complexion.',
    price: 38.00, salePrice: null, rating: 4.7, reviews: 127,
    image: 'assets/images/product-calm-moisturizer.jpg', badge: null, badgeType: null,
  },
  {
    id: 18, name: 'Anti-Aging Renewal Cream', category: 'Moisturizer',
    description: 'Retinyl palmitate and peptides visibly reduce fine lines and restore firmness.',
    price: 72.00, salePrice: 58.00, rating: 4.8, reviews: 204,
    image: 'assets/images/product-anti-aging-cream.jpg', badge: 'Sale', badgeType: 'sale',
  },
  {
    id: 19, name: 'Overnight Recovery Cream', category: 'Moisturizer',
    description: 'Restorative night cream with bakuchiol and squalane for a plump morning glow.',
    price: 64.00, salePrice: null, rating: 4.9, reviews: 287,
    image: 'assets/images/product-overnight-cream.jpg', badge: 'Best Seller', badgeType: 'hot',
  },
  {
    id: 20, name: 'SPF 30 Day Defence Moisturizer', category: 'Moisturizer',
    description: 'Tinted SPF 30 moisturiser — sun protection, hydration and a hint of coverage.',
    price: 44.00, salePrice: null, rating: 4.7, reviews: 162,
    image: 'assets/images/product-spf-moisturizer.jpg', badge: 'New', badgeType: 'new',
  },
  // ── Eye Cream (21–24) ────────────────────────────────────────────────────
  {
    id: 21, name: 'Peptide Eye Revival Cream', category: 'Eye Cream',
    description: "Targets crow's feet, puffiness and dark circles with a peptide-rich formula.",
    price: 58.00, salePrice: null, rating: 4.8, reviews: 142,
    image: 'assets/images/product-eye-revival.jpg', badge: null, badgeType: null,
  },
  {
    id: 22, name: 'Dark Circle Eraser Eye Gel', category: 'Eye Cream',
    description: 'Vitamin K and caffeine visibly brightens under-eye darkness overnight.',
    price: 46.00, salePrice: 36.00, rating: 4.6, reviews: 98,
    image: 'assets/images/product-dark-circle-gel.jpg', badge: 'Sale', badgeType: 'sale',
  },
  {
    id: 23, name: 'DePuff & Hydrate Eye Gel', category: 'Eye Cream',
    description: 'Cooling gel stick with green tea extract deflates puffiness on contact.',
    price: 38.00, salePrice: null, rating: 4.7, reviews: 114,
    image: 'assets/images/product-depuff-eye.jpg', badge: null, badgeType: null,
  },
  {
    id: 24, name: 'Retinol Firm Eye Cream', category: 'Eye Cream',
    description: 'Low-dose retinol eye cream that firms and smooths the delicate eye zone.',
    price: 62.00, salePrice: null, rating: 4.9, reviews: 189,
    image: 'assets/images/product-retinol-eye.jpg', badge: 'New', badgeType: 'new',
  },
  // ── Toner (25–28) ────────────────────────────────────────────────────────
  {
    id: 25, name: 'Pore Minimising Toner', category: 'Toner',
    description: 'Niacinamide + witch-hazel toner tightens pores and refines skin texture.',
    price: 28.00, salePrice: null, rating: 4.7, reviews: 203,
    image: 'assets/images/product-pore-toner.jpg', badge: null, badgeType: null,
  },
  {
    id: 26, name: 'AHA Glow Toner', category: 'Toner',
    description: '10% AHA blend gently exfoliates, revealing visibly brighter, smoother skin.',
    price: 32.00, salePrice: null, rating: 4.8, reviews: 261,
    image: 'assets/images/product-aha-toner.jpg', badge: 'Best Seller', badgeType: 'hot',
  },
  {
    id: 27, name: 'Hydrating Essence Toner', category: 'Toner',
    description: 'Fermented rice water and ceramides drench skin in instant, lasting hydration.',
    price: 30.00, salePrice: 24.00, rating: 4.7, reviews: 178,
    image: 'assets/images/product-hydrating-toner.jpg', badge: 'Sale', badgeType: 'sale',
  },
  {
    id: 28, name: 'Balancing Floral Mist Toner', category: 'Toner',
    description: 'Rosewater and aloe vera toning mist that balances pH and refreshes anytime.',
    price: 24.00, salePrice: null, rating: 4.5, reviews: 93,
    image: 'assets/images/product-floral-toner.jpg', badge: null, badgeType: null,
  },
  // ── Blush (29–32) ────────────────────────────────────────────────────────
  {
    id: 29, name: 'Berry Flush Powder Blush', category: 'Blush',
    description: 'Buildable berry-toned blush with a silky-smooth, long-wear formula.',
    price: 26.00, salePrice: null, rating: 4.7, reviews: 134,
    image: 'assets/images/product-berry-blush.jpg', badge: null, badgeType: null,
  },
  {
    id: 30, name: 'Peach Dream Blush', category: 'Blush',
    description: 'Warm peachy blush with a satin finish for a natural, sun-kissed flush.',
    price: 26.00, salePrice: null, rating: 4.8, reviews: 172,
    image: 'assets/images/product-peach-blush.jpg', badge: 'Best Seller', badgeType: 'hot',
  },
  {
    id: 31, name: 'Rose Quartz Blush', category: 'Blush',
    description: 'Soft rose-pink blush with micro-shimmer for a romantic, dewy cheek look.',
    price: 28.00, salePrice: 22.00, rating: 4.6, reviews: 89,
    image: 'assets/images/product-rose-blush.jpg', badge: 'Sale', badgeType: 'sale',
  },
  {
    id: 32, name: 'Coral Sunset Blush', category: 'Blush',
    description: 'Vibrant coral blush with a finely milled texture and all-day staying power.',
    price: 26.00, salePrice: null, rating: 4.7, reviews: 111,
    image: 'assets/images/product-coral-blush.jpg', badge: 'New', badgeType: 'new',
  },
  // ── Mascara (33–36) ──────────────────────────────────────────────────────
  {
    id: 33, name: 'Volume Boost Mascara', category: 'Mascara',
    description: 'Intense black volumising mascara adds dramatic thickness without clumping.',
    price: 22.00, salePrice: null, rating: 4.8, reviews: 367,
    image: 'assets/images/product-volume-mascara.jpg', badge: 'Best Seller', badgeType: 'hot',
  },
  {
    id: 34, name: 'Lengthening Serum Mascara', category: 'Mascara',
    description: 'Lash-extending mascara with a keratin serum to condition as you wear it.',
    price: 24.00, salePrice: null, rating: 4.7, reviews: 218,
    image: 'assets/images/product-lengthening-mascara.jpg', badge: null, badgeType: null,
  },
  {
    id: 35, name: 'Waterproof Drama Mascara', category: 'Mascara',
    description: '24-hour waterproof formula survives humidity, rain and tears. Buildable.',
    price: 24.00, salePrice: 19.00, rating: 4.6, reviews: 293,
    image: 'assets/images/product-waterproof-mascara.jpg', badge: 'Sale', badgeType: 'sale',
  },
  {
    id: 36, name: 'Lash Paradise Mascara', category: 'Mascara',
    description: 'Feathery, full-fan effect with a rose-infused conditioning formula.',
    price: 26.00, salePrice: null, rating: 4.9, reviews: 445,
    image: 'assets/images/product-lash-paradise.jpg', badge: 'New', badgeType: 'new',
  },
  // ── Perfume (37–40) ──────────────────────────────────────────────────────
  {
    id: 37, name: 'Bloom & Musk Eau de Parfum', category: 'Perfume',
    description: 'A sensual floral musk — fresh peony top notes fade to warm amber and musk.',
    price: 88.00, salePrice: null, rating: 4.9, reviews: 312,
    image: 'assets/images/product-bloom-perfume.jpg', badge: 'Best Seller', badgeType: 'hot',
  },
  {
    id: 38, name: 'Midnight Oud Eau de Parfum', category: 'Perfume',
    description: 'Rich and mysterious — dark oud, patchouli and black rose. Lasts 12+ hours.',
    price: 98.00, salePrice: null, rating: 4.8, reviews: 176,
    image: 'assets/images/product-midnight-oud.jpg', badge: null, badgeType: null,
  },
  {
    id: 39, name: 'Fresh Citrus Cologne', category: 'Perfume',
    description: 'Crisp grapefruit and yuzu open to a cedarwood base. Perfect for daywear.',
    price: 72.00, salePrice: 58.00, rating: 4.7, reviews: 143,
    image: 'assets/images/product-citrus-cologne.jpg', badge: 'Sale', badgeType: 'sale',
  },
  {
    id: 40, name: 'Rose & Jasmine Parfum', category: 'Perfume',
    description: 'Timeless Bulgarian rose and jasmine attar. A soft, feminine signature scent.',
    price: 84.00, salePrice: null, rating: 4.8, reviews: 228,
    image: 'assets/images/product-rose-parfum.jpg', badge: 'New', badgeType: 'new',
  },
  // ── Body Care (41–48) ────────────────────────────────────────────────────
  {
    id: 41, name: 'Luminous Body Lotion', category: 'Body Care',
    description: 'Light-diffusing shimmer lotion leaves skin glowing and soft for 24 hours.',
    price: 36.00, salePrice: null, rating: 4.7, reviews: 198,
    image: 'assets/images/product-body-lotion.jpg', badge: null, badgeType: null,
  },
  {
    id: 42, name: 'Exfoliating Sugar Scrub', category: 'Body Care',
    description: 'Brown sugar and sweet almond oil polish away dead skin for satin softness.',
    price: 28.00, salePrice: null, rating: 4.8, reviews: 254,
    image: 'assets/images/product-sugar-scrub.jpg', badge: 'Best Seller', badgeType: 'hot',
  },
  {
    id: 43, name: 'Whipped Shea Body Butter', category: 'Body Care',
    description: 'Whipped, fast-absorbing shea and cocoa butter intensely nourishes dry skin.',
    price: 32.00, salePrice: 26.00, rating: 4.9, reviews: 341,
    image: 'assets/images/product-body-butter.jpg', badge: 'Sale', badgeType: 'sale',
  },
  {
    id: 44, name: 'Firming Body Serum', category: 'Body Care',
    description: 'Caffeine and collagen-boosting peptides firm and smooth the look of skin.',
    price: 46.00, salePrice: null, rating: 4.6, reviews: 129,
    image: 'assets/images/product-firming-serum.jpg', badge: null, badgeType: null,
  },
  {
    id: 45, name: 'Relaxing Lavender Bath Salts', category: 'Body Care',
    description: 'Himalayan pink salts and lavender essential oil for a stress-melting soak.',
    price: 24.00, salePrice: null, rating: 4.7, reviews: 167,
    image: 'assets/images/product-bath-salts.jpg', badge: null, badgeType: null,
  },
  {
    id: 46, name: 'Glow Dry Body Oil', category: 'Body Care',
    description: 'Fast-dry, non-greasy blend of rosehip and argan oil for radiant skin.',
    price: 42.00, salePrice: null, rating: 4.8, reviews: 213,
    image: 'assets/images/product-body-oil.jpg', badge: 'New', badgeType: 'new',
  },
  {
    id: 47, name: 'Stretch Mark Repair Cream', category: 'Body Care',
    description: 'Centella, retinol and vitamin E work together to fade and prevent stretch marks.',
    price: 38.00, salePrice: 30.00, rating: 4.5, reviews: 87,
    image: 'assets/images/product-stretch-cream.jpg', badge: 'Sale', badgeType: 'sale',
  },
  {
    id: 48, name: 'Cooling Peppermint Leg Gel', category: 'Body Care',
    description: 'Peppermint and aloe vera gel instantly cools tired legs and soothes swelling.',
    price: 26.00, salePrice: null, rating: 4.6, reviews: 118,
    image: 'assets/images/product-leg-gel.jpg', badge: null, badgeType: null,
  },
  // ── Hair Care (49–56) ────────────────────────────────────────────────────
  {
    id: 49, name: 'Repair & Shine Shampoo', category: 'Hair Care',
    description: 'Keratin-enriched shampoo repairs damage and adds mirror-like shine.',
    price: 28.00, salePrice: null, rating: 4.7, reviews: 234,
    image: 'assets/images/product-repair-shampoo.jpg', badge: null, badgeType: null,
  },
  {
    id: 50, name: 'Deep Moisture Conditioner', category: 'Hair Care',
    description: 'Argan oil and shea butter conditioner detangles and deeply conditions.',
    price: 28.00, salePrice: null, rating: 4.8, reviews: 201,
    image: 'assets/images/product-deep-conditioner.jpg', badge: 'Best Seller', badgeType: 'hot',
  },
  {
    id: 51, name: 'Keratin Smoothing Hair Mask', category: 'Hair Care',
    description: 'Weekly treatment mask with Brazilian keratin for silky, frizz-free hair.',
    price: 36.00, salePrice: 28.00, rating: 4.9, reviews: 287,
    image: 'assets/images/product-hair-mask.jpg', badge: 'Sale', badgeType: 'sale',
  },
  {
    id: 52, name: 'Heat Protectant Spray', category: 'Hair Care',
    description: 'Shields up to 230°C. Lightweight mist adds shine without weighing hair down.',
    price: 24.00, salePrice: null, rating: 4.7, reviews: 312,
    image: 'assets/images/product-heat-protectant.jpg', badge: null, badgeType: null,
  },
  {
    id: 53, name: 'Pure Argan Oil Serum', category: 'Hair Care',
    description: '100% Moroccan argan oil serum tames frizz and boosts brilliance.',
    price: 34.00, salePrice: null, rating: 4.8, reviews: 178,
    image: 'assets/images/product-argan-serum.jpg', badge: 'New', badgeType: 'new',
  },
  {
    id: 54, name: 'Volumising Dry Shampoo', category: 'Hair Care',
    description: 'Rice starch dry shampoo absorbs oil and adds lift and body to hair.',
    price: 18.00, salePrice: null, rating: 4.6, reviews: 389,
    image: 'assets/images/product-dry-shampoo.jpg', badge: 'Best Seller', badgeType: 'hot',
  },
  {
    id: 55, name: 'Scalp Revival Serum', category: 'Hair Care',
    description: 'Niacinamide and peppermint serum soothes scalp and promotes healthy growth.',
    price: 42.00, salePrice: null, rating: 4.7, reviews: 143,
    image: 'assets/images/product-scalp-serum.jpg', badge: null, badgeType: null,
  },
  {
    id: 56, name: 'Frizz Control Smoothing Cream', category: 'Hair Care',
    description: 'Humidity-resistant cream smooths and defines without stiffness or crunch.',
    price: 26.00, salePrice: 20.00, rating: 4.8, reviews: 224,
    image: 'assets/images/product-frizz-cream.jpg', badge: 'Sale', badgeType: 'sale',
  },
  // ── Nail Polish (57–62) ──────────────────────────────────────────────────
  {
    id: 57, name: 'Classic Red Nail Polish', category: 'Nail Polish',
    description: 'Iconic cherry red with a glossy chip-resistant formula. Up to 10-day wear.',
    price: 14.00, salePrice: null, rating: 4.8, reviews: 412,
    image: 'assets/images/product-red-nail.jpg', badge: 'Best Seller', badgeType: 'hot',
  },
  {
    id: 58, name: 'Nude Blush Nail Polish', category: 'Nail Polish',
    description: 'Everyday nude-blush tone that flatters all skin tones. Self-levelling.',
    price: 14.00, salePrice: null, rating: 4.7, reviews: 267,
    image: 'assets/images/product-nude-nail.jpg', badge: null, badgeType: null,
  },
  {
    id: 59, name: 'Midnight Navy Nail Polish', category: 'Nail Polish',
    description: 'Luxurious deep navy with micro-glitter particles for an evening-ready look.',
    price: 14.00, salePrice: 11.00, rating: 4.6, reviews: 189,
    image: 'assets/images/product-navy-nail.jpg', badge: 'Sale', badgeType: 'sale',
  },
  {
    id: 60, name: 'Coral Sunset Nail Polish', category: 'Nail Polish',
    description: 'A bright coral-orange perfect for summer. Streakless in two coats.',
    price: 14.00, salePrice: null, rating: 4.7, reviews: 143,
    image: 'assets/images/product-coral-nail.jpg', badge: null, badgeType: null,
  },
  {
    id: 61, name: 'Lavender Dream Nail Polish', category: 'Nail Polish',
    description: 'Soft lavender with a creamy, opaque finish. Vegan and 5-free formula.',
    price: 14.00, salePrice: null, rating: 4.8, reviews: 198,
    image: 'assets/images/product-lavender-nail.jpg', badge: 'New', badgeType: 'new',
  },
  {
    id: 62, name: 'Forest Green Nail Polish', category: 'Nail Polish',
    description: 'Rich forest green packed with colour — perfect for autumn looks.',
    price: 14.00, salePrice: null, rating: 4.7, reviews: 162,
    image: 'assets/images/product-green-nail.jpg', badge: null, badgeType: null,
  },
  // ── Concealer (63–66) ────────────────────────────────────────────────────
  {
    id: 63, name: 'Full Coverage Concealer', category: 'Concealer',
    description: "High-coverage concealer with a natural finish that won't crease. 40 shades.",
    price: 26.00, salePrice: null, rating: 4.8, reviews: 348,
    image: 'assets/images/product-full-concealer.jpg', badge: 'Best Seller', badgeType: 'hot',
  },
  {
    id: 64, name: 'Color Corrector Palette', category: 'Concealer',
    description: '4-shade color corrector covers redness, dark circles, sallowness and spots.',
    price: 32.00, salePrice: null, rating: 4.7, reviews: 176,
    image: 'assets/images/product-color-corrector.jpg', badge: null, badgeType: null,
  },
  {
    id: 65, name: 'Under Eye Brightener Pen', category: 'Concealer',
    description: 'Lightweight, brightening concealer pen lifts and illuminates the eye area.',
    price: 22.00, salePrice: 18.00, rating: 4.6, reviews: 134,
    image: 'assets/images/product-brightener-pen.jpg', badge: 'Sale', badgeType: 'sale',
  },
  {
    id: 66, name: 'Stick Concealer', category: 'Concealer',
    description: 'Twist-up stick for spot concealing on the go. Full coverage, no brush needed.',
    price: 18.00, salePrice: null, rating: 4.7, reviews: 214,
    image: 'assets/images/product-stick-concealer.jpg', badge: null, badgeType: null,
  },
  // ── Bronzer (67–69) ──────────────────────────────────────────────────────
  {
    id: 67, name: 'Sun-Kissed Bronzer', category: 'Bronzer',
    description: 'Warm bronze powder with a natural radiance for an effortless holiday glow.',
    price: 32.00, salePrice: null, rating: 4.8, reviews: 267,
    image: 'assets/images/product-sunkissed-bronzer.jpg', badge: 'Best Seller', badgeType: 'hot',
  },
  {
    id: 68, name: 'Matte Contour Bronzer', category: 'Bronzer',
    description: 'Deep matte bronzer sculpts cheekbones without any shimmer. Buildable.',
    price: 30.00, salePrice: 24.00, rating: 4.7, reviews: 189,
    image: 'assets/images/product-matte-bronzer.jpg', badge: 'Sale', badgeType: 'sale',
  },
  {
    id: 69, name: 'Shimmer Bronze Glow Duo', category: 'Bronzer',
    description: 'Duo compact with matte contour and golden shimmer — one brush, two finishes.',
    price: 36.00, salePrice: null, rating: 4.9, reviews: 312,
    image: 'assets/images/product-shimmer-bronzer.jpg', badge: 'New', badgeType: 'new',
  },
  // ── Setting Spray (70–72) ────────────────────────────────────────────────
  {
    id: 70, name: 'All-Day Hold Setting Spray', category: 'Setting Spray',
    description: 'Lock makeup for up to 16 hours with this featherweight, smudge-proof mist.',
    price: 22.00, salePrice: null, rating: 4.8, reviews: 423,
    image: 'assets/images/product-hold-setting-spray.jpg', badge: 'Best Seller', badgeType: 'hot',
  },
  {
    id: 71, name: 'Dewy Glow Setting Spray', category: 'Setting Spray',
    description: 'Hyaluronic acid mist gives a dewy, glass-skin finish and extends makeup wear.',
    price: 24.00, salePrice: null, rating: 4.7, reviews: 278,
    image: 'assets/images/product-dewy-setting-spray.jpg', badge: null, badgeType: null,
  },
  {
    id: 72, name: 'Matte Finish Setting Spray', category: 'Setting Spray',
    description: 'Oil-control mist blurs pores and keeps shine away for 12+ hours.',
    price: 22.00, salePrice: 18.00, rating: 4.6, reviews: 192,
    image: 'assets/images/product-matte-setting-spray.jpg', badge: 'Sale', badgeType: 'sale',
  },
  // ── Lip Liner (73–75) ────────────────────────────────────────────────────
  {
    id: 73, name: 'Classic Nude Lip Liner', category: 'Lip Liner',
    description: 'Smooth, creamy nude pencil defines lips and prevents feathering all day.',
    price: 16.00, salePrice: null, rating: 4.7, reviews: 198,
    image: 'assets/images/product-nude-liner.jpg', badge: null, badgeType: null,
  },
  {
    id: 74, name: 'Deep Berry Lip Liner', category: 'Lip Liner',
    description: 'Rich berry-stained liner that doubles as a base for intense lip colour.',
    price: 16.00, salePrice: null, rating: 4.8, reviews: 143,
    image: 'assets/images/product-berry-liner.jpg', badge: 'New', badgeType: 'new',
  },
  {
    id: 75, name: 'My-Lips-But-Better Liner', category: 'Lip Liner',
    description: 'Your perfect MLBB shade — universally flattering, natural-finish liner.',
    price: 16.00, salePrice: 12.00, rating: 4.9, reviews: 267,
    image: 'assets/images/product-mlbb-liner.jpg', badge: 'Sale', badgeType: 'sale',
  },
  // ── BB Cream (76–78) ─────────────────────────────────────────────────────
  {
    id: 76, name: 'Tinted Moisturizer BB Cream', category: 'BB Cream',
    description: 'Lightweight tinted moisturiser with SPF 20 and skin-matching pigments.',
    price: 32.00, salePrice: null, rating: 4.7, reviews: 234,
    image: 'assets/images/product-tinted-bb.jpg', badge: null, badgeType: null,
  },
  {
    id: 77, name: 'SPF 25 BB Cream', category: 'BB Cream',
    description: '5-in-1 BB cream: primers, corrects, covers, moisturises and protects.',
    price: 30.00, salePrice: 24.00, rating: 4.6, reviews: 178,
    image: 'assets/images/product-spf-bb.jpg', badge: 'Sale', badgeType: 'sale',
  },
  {
    id: 78, name: 'Anti-Aging BB Cream', category: 'BB Cream',
    description: 'Peptide-enriched BB cream plumps fine lines while evening skin tone.',
    price: 36.00, salePrice: null, rating: 4.8, reviews: 156,
    image: 'assets/images/product-antiage-bb.jpg', badge: 'New', badgeType: 'new',
  },
  // ── Face Mask (79–82) ────────────────────────────────────────────────────
  {
    id: 79, name: 'Brightening Sheet Mask', category: 'Face Mask',
    description: 'Vitamin C and niacinamide sheet mask for an instant lit-from-within glow.',
    price: 6.00, salePrice: null, rating: 4.8, reviews: 534,
    image: 'assets/images/product-sheet-mask.jpg', badge: 'Best Seller', badgeType: 'hot',
  },
  {
    id: 80, name: 'Clay Detox Face Mask', category: 'Face Mask',
    description: 'Kaolin and bentonite clay draw out impurities and shrink visible pores.',
    price: 26.00, salePrice: null, rating: 4.7, reviews: 312,
    image: 'assets/images/product-clay-mask.jpg', badge: null, badgeType: null,
  },
  {
    id: 81, name: 'Overnight Honey Repair Mask', category: 'Face Mask',
    description: 'Sleep-in honey and ceramide mask repairs the skin barrier by morning.',
    price: 32.00, salePrice: 26.00, rating: 4.9, reviews: 267,
    image: 'assets/images/product-honey-mask.jpg', badge: 'Sale', badgeType: 'sale',
  },
  {
    id: 82, name: 'Collagen Boost Gel Mask', category: 'Face Mask',
    description: 'Marine collagen and hyaluronic acid gel mask for deep plumping hydration.',
    price: 8.00, salePrice: null, rating: 4.7, reviews: 189,
    image: 'assets/images/product-collagen-mask.jpg', badge: 'New', badgeType: 'new',
  },
  // ── Exfoliator (83–85) ───────────────────────────────────────────────────
  {
    id: 83, name: 'Gentle Enzyme Exfoliator', category: 'Exfoliator',
    description: 'Papaya and pineapple enzymes dissolve dead cells without any harsh scrubbing.',
    price: 34.00, salePrice: null, rating: 4.7, reviews: 198,
    image: 'assets/images/product-enzyme-exfoliator.jpg', badge: null, badgeType: null,
  },
  {
    id: 84, name: 'AHA/BHA Exfoliant Pads', category: 'Exfoliator',
    description: 'Pre-soaked cotton pads with glycolic and salicylic acid for clear, smooth skin.',
    price: 38.00, salePrice: 30.00, rating: 4.8, reviews: 243,
    image: 'assets/images/product-exfoliant-pads.jpg', badge: 'Sale', badgeType: 'sale',
  },
  {
    id: 85, name: 'Microderm Polish Exfoliator', category: 'Exfoliator',
    description: 'Micro-crystal exfoliating paste polishes and brightens for salon-smooth skin.',
    price: 32.00, salePrice: null, rating: 4.6, reviews: 134,
    image: 'assets/images/product-microderm.jpg', badge: null, badgeType: null,
  },
  // ── Night Cream (86–88) ──────────────────────────────────────────────────
  {
    id: 86, name: 'Retinol Overnight Cream', category: 'Night Cream',
    description: '0.3% encapsulated retinol renews skin cell turnover as you sleep.',
    price: 68.00, salePrice: null, rating: 4.9, reviews: 356,
    image: 'assets/images/product-retinol-night.jpg', badge: 'Best Seller', badgeType: 'hot',
  },
  {
    id: 87, name: 'Repair & Restore Night Cream', category: 'Night Cream',
    description: 'Rich oat and squalane night cream repairs the moisture barrier overnight.',
    price: 56.00, salePrice: 44.00, rating: 4.8, reviews: 214,
    image: 'assets/images/product-repair-night.jpg', badge: 'Sale', badgeType: 'sale',
  },
  {
    id: 88, name: 'Sleeping Beauty Night Mask', category: 'Night Cream',
    description: 'Overnight sleeping mask with elderflower and collagen for a plump morning glow.',
    price: 62.00, salePrice: null, rating: 4.9, reviews: 289,
    image: 'assets/images/product-sleeping-mask.jpg', badge: 'New', badgeType: 'new',
  },
  // ── Eyeliner (89–92) ─────────────────────────────────────────────────────
  {
    id: 89, name: 'Precision Liquid Eyeliner', category: 'Eyeliner',
    description: 'Ink-black liquid liner with a 0.1mm brush tip for surgical precision.',
    price: 20.00, salePrice: null, rating: 4.9, reviews: 478,
    image: 'assets/images/product-liquid-liner.jpg', badge: 'Best Seller', badgeType: 'hot',
  },
  {
    id: 90, name: 'Kohl Kajal Pencil', category: 'Eyeliner',
    description: 'Creamy kohl kajal for smudgy, smoky eyes. Retractable, no sharpening needed.',
    price: 16.00, salePrice: null, rating: 4.7, reviews: 289,
    image: 'assets/images/product-kajal-pencil.jpg', badge: null, badgeType: null,
  },
  {
    id: 91, name: 'Felt-Tip Eyeliner', category: 'Eyeliner',
    description: 'Flexible felt-tip pen for both thin liner and bold graphic looks.',
    price: 18.00, salePrice: 14.00, rating: 4.7, reviews: 234,
    image: 'assets/images/product-felt-liner.jpg', badge: 'Sale', badgeType: 'sale',
  },
  {
    id: 92, name: 'Smudge-Proof Gel Liner', category: 'Eyeliner',
    description: 'Intense gel pot liner with an included flat brush — budgeproof for 24 hours.',
    price: 22.00, salePrice: null, rating: 4.8, reviews: 167,
    image: 'assets/images/product-gel-liner.jpg', badge: null, badgeType: null,
  },
  // ── Brow (93–96) ─────────────────────────────────────────────────────────
  {
    id: 93, name: 'Brow Sculpting Pomade', category: 'Brow',
    description: 'Waterproof brow pomade for defined, architectural brows that last all day.',
    price: 22.00, salePrice: null, rating: 4.8, reviews: 312,
    image: 'assets/images/product-brow-pomade.jpg', badge: null, badgeType: null,
  },
  {
    id: 94, name: 'Feather Brow Pencil', category: 'Brow',
    description: 'Micro-precision pencil mimics real hair strokes for naturally full brows.',
    price: 18.00, salePrice: null, rating: 4.9, reviews: 389,
    image: 'assets/images/product-brow-pencil.jpg', badge: 'Best Seller', badgeType: 'hot',
  },
  {
    id: 95, name: 'Clear Brow & Lash Gel', category: 'Brow',
    description: 'Crystal-clear gel sets brows and lashes in place with a light-hold finish.',
    price: 14.00, salePrice: 11.00, rating: 4.6, reviews: 178,
    image: 'assets/images/product-brow-gel.jpg', badge: 'Sale', badgeType: 'sale',
  },
  {
    id: 96, name: 'Tinted Brow Serum', category: 'Brow',
    description: 'Growth-boosting tinted serum fills sparse brows while promoting density.',
    price: 28.00, salePrice: null, rating: 4.7, reviews: 134,
    image: 'assets/images/product-brow-serum.jpg', badge: 'New', badgeType: 'new',
  },
  // ── Serum — extended range (97–100) ──────────────────────────────────────
  {
    id: 97, name: 'Niacinamide Pore Serum', category: 'Serum',
    description: '10% niacinamide + zinc serum minimises pores and controls excess sebum.',
    price: 28.00, salePrice: null, rating: 4.9, reviews: 612,
    image: 'assets/images/product-niacinamide-serum.jpg', badge: 'Best Seller', badgeType: 'hot',
  },
  {
    id: 98, name: 'Retinol Youth Serum', category: 'Serum',
    description: '1% retinol and squalane serum accelerates cell turnover for ageless-looking skin.',
    price: 56.00, salePrice: null, rating: 4.8, reviews: 298,
    image: 'assets/images/product-retinol-serum.jpg', badge: null, badgeType: null,
  },
  {
    id: 99, name: 'Bakuchiol Renew Serum', category: 'Serum',
    description: 'Plant-based retinol alternative — smooths, firms and brightens without irritation.',
    price: 48.00, salePrice: 38.00, rating: 4.7, reviews: 187,
    image: 'assets/images/product-bakuchiol-serum.jpg', badge: 'Sale', badgeType: 'sale',
  },
  {
    id: 100, name: 'AHA Brightening Serum', category: 'Serum',
    description: '5% glycolic acid serum fades dark spots and evens skin tone with continued use.',
    price: 36.00, salePrice: null, rating: 4.8, reviews: 243,
    image: 'assets/images/product-aha-serum.jpg', badge: 'New', badgeType: 'new',
  },
];

/* Best Sellers (subset) */
const BEST_SELLERS = [
  { id: 1,  rank: '#1', name: 'Velvet Rose Hydrating Serum',  price: '$68',  image: 'assets/images/product-serum.jpg' },
  { id: 5,  rank: '#2', name: 'Cloud Soft Cleanser',           price: '$32',  image: 'assets/images/product-cleanser.jpg' },
  { id: 8,  rank: '#3', name: 'Pearl Glow Vitamin C Cream',    price: '$58',  image: 'assets/images/product-vitamin-c-cream.jpg' },
  { id: 10, rank: '#4', name: 'Luxe Complete Makeup Set',      price: '$99',  image: 'assets/images/product-makeup-set.jpg' },
];

/* Categories */
const CATEGORIES = [
  { name: 'All',            icon: '🛍️', filter: 'All' },
  { name: 'Skincare',       icon: '🌿', filter: 'Skincare' },
  { name: 'Serums',         icon: '💧', filter: 'Serum' },
  { name: 'Moisturizer',    icon: '🫙', filter: 'Moisturizer' },
  { name: 'Eye Cream',      icon: '👁️', filter: 'Eye Cream' },
  { name: 'Toner',          icon: '🌊', filter: 'Toner' },
  { name: 'Night Cream',    icon: '🌙', filter: 'Night Cream' },
  { name: 'Face Mask',      icon: '🎭', filter: 'Face Mask' },
  { name: 'Exfoliator',     icon: '✨', filter: 'Exfoliator' },
  { name: 'Cleanser',       icon: '🫧', filter: 'Cleanser' },
  { name: 'Sunscreen',      icon: '☀️', filter: 'Sunscreen' },
  { name: 'Makeup',         icon: '🪞', filter: 'Makeup' },
  { name: 'Foundation',     icon: '🫗', filter: 'Foundation' },
  { name: 'Concealer',      icon: '🖌️', filter: 'Concealer' },
  { name: 'Blush',          icon: '🌸', filter: 'Blush' },
  { name: 'Bronzer',        icon: '🌅', filter: 'Bronzer' },
  { name: 'BB Cream',       icon: '🧴', filter: 'BB Cream' },
  { name: 'Setting Spray',  icon: '💨', filter: 'Setting Spray' },
  { name: 'Eye Palette',    icon: '🎨', filter: 'Eye Palette' },
  { name: 'Mascara',        icon: '🖊️', filter: 'Mascara' },
  { name: 'Eyeliner',       icon: '✏️', filter: 'Eyeliner' },
  { name: 'Brow',           icon: '〰️', filter: 'Brow' },
  { name: 'Lipstick',       icon: '💄', filter: 'Lipstick' },
  { name: 'Lip Liner',      icon: '🖍️', filter: 'Lip Liner' },
  { name: 'Makeup Sets',    icon: '🎁', filter: 'Makeup Set' },
  { name: 'Perfume',        icon: '🌺', filter: 'Perfume' },
  { name: 'Body Care',      icon: '🛁', filter: 'Body Care' },
  { name: 'Hair Care',      icon: '💆', filter: 'Hair Care' },
  { name: 'Nail Polish',    icon: '💅', filter: 'Nail Polish' },
];

/* Testimonials */
const TESTIMONIALS = [
  {
    text: `"The Velvet Rose Serum completely transformed my skin. I've tried so many luxury brands and nothing comes close to the glow this gives me. My friends keep asking what I'm doing differently!"`,
    name: 'Amelia Chen',
    title: 'Skincare Enthusiast',
    avatar: 'assets/images/avatar-amelia.jpg',
    stars: 5,
  },
  {
    text: `"I was skeptical about buying makeup online but The Fake Shop's descriptions are spot on. The Luminous Silk Foundation matches my shade perfectly and lasts all day — no touch-ups needed."`,
    name: 'Sofia Rossi',
    title: 'Beauty Blogger',
    avatar: 'assets/images/avatar-sofia.jpg',
    stars: 5,
  },
  {
    text: '"Dew Shield SPF50 is the only sunscreen I\'ve found that doesn\'t leave a white cast on my deeper skin tone. Lightweight, no stickiness, blends beautifully under makeup. A permanent staple."',
    name: 'Priya Nair',
    title: 'Dermatology Nurse',
    avatar: 'assets/images/avatar-priya.jpg',
    stars: 5,
  },
  {
    text: '"Ordered the Luxe Complete Makeup Set as a gift for my sister and she was blown away by the quality and presentation. Everything arrived beautifully packaged. Will definitely order again!"',
    name: 'Marcus Owens',
    title: 'Verified Buyer',
    avatar: 'assets/images/avatar-marcus.jpg',
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
