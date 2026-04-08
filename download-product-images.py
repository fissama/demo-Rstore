#!/usr/bin/env python3
"""
download-product-images.py
==========================
Downloads real-world cosmetic product photos from Pexels and saves them
into assets/images/ replacing the current placeholder JPEG files.

Usage
-----
1. Get a free Pexels API key at https://www.pexels.com/api/
2. Run:
       pip install requests pillow
       PEXELS_API_KEY=your_key_here python download-product-images.py

Options (environment variables)
--------------------------------
PEXELS_API_KEY  (required) Your Pexels API key.
IMAGES_DIR      Path to the images directory.
                Default: assets/images  (relative to this script)
SKIP_THRESHOLD  Skip a file if it is already this many bytes or larger.
                Default: 51200  (50 KB — placeholder files are ~8-12 KB)
SIZE            Pixel size used for both width and height of saved images.
                Default: 600
"""

import io
import os
import sys
import time

import requests
from PIL import Image

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------
API_KEY = os.environ.get("PEXELS_API_KEY", "")
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
IMAGES_DIR = os.environ.get(
    "IMAGES_DIR", os.path.join(SCRIPT_DIR, "assets", "images")
)
SKIP_THRESHOLD = int(os.environ.get("SKIP_THRESHOLD", 51200))  # 50 KB
SIZE = int(os.environ.get("SIZE", 600))
PEXELS_SEARCH_URL = "https://api.pexels.com/v1/search"

# ---------------------------------------------------------------------------
# Keyword map  filename (without .jpg) -> Pexels search query
# ---------------------------------------------------------------------------
KEYWORD_MAP = {
    # ── Serums ──────────────────────────────────────────────────────────────
    "product-serum":            "face serum bottle cosmetic",
    "product-aha-serum":        "AHA face serum bottle skincare",
    "product-argan-serum":      "argan oil serum bottle cosmetic",
    "product-bakuchiol-serum":  "bakuchiol facial serum skincare bottle",
    "product-firming-serum":    "firming face serum bottle",
    "product-niacinamide-serum":"niacinamide serum bottle skincare",
    "product-retinol-serum":    "retinol serum bottle skincare",
    "product-brow-serum":       "eyebrow serum cosmetic product",
    "product-scalp-serum":      "scalp serum hair care bottle",
    # ── Moisturisers & Creams ───────────────────────────────────────────────
    "product-aqua-moisturizer": "moisturizer cream jar cosmetic",
    "product-calm-moisturizer": "calming moisturizer face cream jar",
    "product-anti-aging-cream": "anti aging face cream jar skincare",
    "product-overnight-cream":  "overnight face cream jar skincare",
    "product-repair-night":     "night repair cream jar skincare",
    "product-retinol-night":    "retinol night cream jar skincare",
    "product-shea-cream":       "shea butter cream jar cosmetic",
    "product-spf-moisturizer":  "SPF moisturizer bottle skincare",
    "product-stretch-cream":    "stretch mark cream tube cosmetic",
    "product-vitamin-c-cream":  "vitamin C brightening cream jar",
    "product-mattifying-gel":   "mattifying face gel tube cosmetic",
    "product-hydra-plump":      "hydrating plumping face cream",
    # ── Eye Care ────────────────────────────────────────────────────────────
    "product-eye-revival":      "eye cream tube cosmetic product",
    "product-dark-circle-gel":  "dark circle eye gel cosmetic tube",
    "product-depuff-eye":       "depuffing eye cream product",
    "product-retinol-eye":      "retinol eye cream tube skincare",
    # ── Toners ──────────────────────────────────────────────────────────────
    "product-aha-toner":        "AHA toner bottle skincare",
    "product-floral-toner":     "floral face toner bottle",
    "product-hydrating-toner":  "hydrating toner bottle skincare",
    "product-pore-toner":       "pore toner bottle skincare",
    "product-toning-mist":      "facial toning mist spray bottle",
    # ── Cleansers & Exfoliants ──────────────────────────────────────────────
    "product-cleanser":         "face cleanser bottle cosmetic",
    "product-enzyme-exfoliator":"enzyme exfoliator cream tube skincare",
    "product-exfoliant-pads":   "exfoliating pads skincare package",
    "product-microderm":        "microdermabrasion cream tube cosmetic",
    "product-sugar-scrub":      "sugar scrub jar body cosmetic",
    # ── Masks ───────────────────────────────────────────────────────────────
    "product-charcoal-mask":    "charcoal face mask tube cosmetic",
    "product-clay-mask":        "clay face mask jar cosmetic",
    "product-collagen-mask":    "collagen sheet face mask skincare",
    "product-honey-mask":       "honey face mask jar cosmetic",
    "product-sheet-mask":       "sheet face mask cosmetic package",
    "product-sleeping-mask":    "sleeping face mask jar skincare",
    # ── Foundation, BB & Concealer ──────────────────────────────────────────
    "product-foundation":       "liquid foundation makeup bottle",
    "product-antiage-bb":       "BB cream anti-aging tube cosmetic",
    "product-spf-bb":           "BB cream SPF tube cosmetic",
    "product-tinted-bb":        "tinted BB cream tube makeup",
    "product-full-concealer":   "concealer makeup product bottle",
    "product-stick-concealer":  "concealer stick makeup product",
    "product-color-corrector":  "color corrector makeup palette",
    "product-brightener-pen":   "brightening pen highlighter makeup",
    # ── Blush & Bronzer ─────────────────────────────────────────────────────
    "product-berry-blush":      "berry blush makeup compact",
    "product-coral-blush":      "coral blush makeup compact",
    "product-peach-blush":      "peach blush makeup compact",
    "product-rose-blush":       "rose blush powder compact makeup",
    "product-matte-bronzer":    "matte bronzer makeup compact",
    "product-shimmer-bronzer":  "shimmer bronzer compact makeup",
    "product-sunkissed-bronzer":"bronzer makeup palette compact",
    "product-highlight":        "highlighter makeup powder compact",
    # ── Eye Makeup ──────────────────────────────────────────────────────────
    "product-eye-palette":      "eyeshadow palette makeup",
    "product-berry-liner":      "eye liner pencil makeup berry",
    "product-felt-liner":       "felt tip eyeliner pen makeup",
    "product-gel-liner":        "gel eyeliner pot makeup",
    "product-kajal-pencil":     "kajal pencil eyeliner makeup",
    "product-liquid-liner":     "liquid eyeliner pen makeup",
    "product-mlbb-liner":       "nude lip liner pencil makeup",
    "product-nude-liner":       "nude eyeliner pencil makeup",
    "product-lash-paradise":    "mascara wand tube makeup lashes",
    "product-lengthening-mascara":"lengthening mascara tube makeup",
    "product-volume-mascara":   "volumizing mascara tube makeup",
    "product-waterproof-mascara":"waterproof mascara tube makeup",
    # ── Brow Products ───────────────────────────────────────────────────────
    "product-brow-gel":         "eyebrow gel tube makeup",
    "product-brow-pencil":      "eyebrow pencil makeup product",
    "product-brow-pomade":      "eyebrow pomade pot makeup",
    # ── Lip Products ────────────────────────────────────────────────────────
    "product-lip-gloss":        "lip gloss tube makeup product",
    "product-lipstick":         "lipstick bullet makeup product",
    # ── Nail Polish ─────────────────────────────────────────────────────────
    "product-coral-nail":       "coral nail polish bottle",
    "product-green-nail":       "green nail polish bottle",
    "product-lavender-nail":    "lavender nail polish bottle",
    "product-navy-nail":        "navy nail polish bottle",
    "product-nude-nail":        "nude nail polish bottle",
    "product-red-nail":         "red nail polish bottle",
    # ── Setting Sprays ──────────────────────────────────────────────────────
    "product-dewy-setting-spray":"setting spray bottle makeup",
    "product-hold-setting-spray":"makeup setting spray bottle",
    "product-matte-setting-spray":"matte setting spray bottle makeup",
    # ── Makeup Sets ─────────────────────────────────────────────────────────
    "product-makeup-set":       "makeup collection set cosmetics",
    # ── Sunscreen ───────────────────────────────────────────────────────────
    "product-sunscreen":        "sunscreen SPF lotion tube cosmetic",
    # ── Perfume & Cologne ───────────────────────────────────────────────────
    "product-bloom-perfume":    "floral perfume bottle fragrance",
    "product-citrus-cologne":   "citrus cologne perfume bottle",
    "product-midnight-oud":     "oud perfume bottle luxury fragrance",
    "product-rose-parfum":      "rose parfum perfume bottle",
    # ── Body Care ───────────────────────────────────────────────────────────
    "product-bath-salts":       "bath salts jar cosmetic spa",
    "product-body-butter":      "body butter jar cosmetic",
    "product-body-lotion":      "body lotion bottle cosmetic",
    "product-body-oil":         "body oil bottle cosmetic",
    "product-leg-gel":          "leg gel tube cosmetic",
    # ── Hair Care ───────────────────────────────────────────────────────────
    "product-deep-conditioner": "hair conditioner tube cosmetic",
    "product-dry-shampoo":      "dry shampoo spray can hair",
    "product-frizz-cream":      "frizz control hair cream tube",
    "product-hair-mask":        "hair mask jar treatment cosmetic",
    "product-heat-protectant":  "heat protectant hair spray bottle",
    "product-repair-shampoo":   "repair shampoo bottle hair care",
    # ── Avatars ─────────────────────────────────────────────────────────────
    "avatar-amelia":  "woman portrait headshot smile",
    "avatar-marcus":  "man portrait headshot smile",
    "avatar-priya":   "south asian woman portrait headshot",
    "avatar-sofia":   "woman portrait headshot natural",
}


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def search_pexels(query: str, api_key: str) -> str | None:
    """Return the URL of the first landscape/square Pexels photo for *query*."""
    headers = {"Authorization": api_key}
    params = {"query": query, "per_page": 5, "orientation": "square"}
    try:
        resp = requests.get(
            PEXELS_SEARCH_URL, headers=headers, params=params, timeout=15
        )
        resp.raise_for_status()
    except requests.RequestException as exc:
        print(f"  [ERROR] Pexels request failed: {exc}")
        return None

    photos = resp.json().get("photos", [])
    if not photos:
        # Fall back to landscape if no square results
        params["orientation"] = "landscape"
        try:
            resp = requests.get(
                PEXELS_SEARCH_URL, headers=headers, params=params, timeout=15
            )
            resp.raise_for_status()
            photos = resp.json().get("photos", [])
        except requests.RequestException:
            pass

    if not photos:
        return None

    # Prefer 'large' src which is typically 940px — big enough to crop to 600
    src = photos[0].get("src", {})
    return src.get("large") or src.get("medium") or src.get("original")


def download_and_save(url: str, dest_path: str, size: int) -> bool:
    """Download *url*, resize/crop to *size*×*size*, save as JPEG to *dest_path*."""
    try:
        resp = requests.get(url, timeout=30)
        resp.raise_for_status()
    except requests.RequestException as exc:
        print(f"  [ERROR] Download failed: {exc}")
        return False

    try:
        img = Image.open(io.BytesIO(resp.content)).convert("RGB")
        # Centre-crop to square then resize
        w, h = img.size
        min_side = min(w, h)
        left = (w - min_side) // 2
        top = (h - min_side) // 2
        img = img.crop((left, top, left + min_side, top + min_side))
        img = img.resize((size, size), Image.LANCZOS)
        img.save(dest_path, "JPEG", quality=85)
    except Exception as exc:
        print(f"  [ERROR] Image processing failed: {exc}")
        return False

    return True


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> int:
    if not API_KEY:
        print(
            "Error: PEXELS_API_KEY environment variable is not set.\n"
            "Get a free key at https://www.pexels.com/api/ and run:\n"
            "  PEXELS_API_KEY=your_key python download-product-images.py"
        )
        return 1

    if not os.path.isdir(IMAGES_DIR):
        print(f"Error: Images directory not found: {IMAGES_DIR}")
        return 1

    try:
        from PIL import Image  # noqa: F401 — confirm Pillow is installed
    except ImportError:
        print("Error: Pillow is not installed. Run:  pip install requests pillow")
        return 1

    total = len(KEYWORD_MAP)
    skipped = 0
    downloaded = 0
    failed = 0

    for idx, (stem, query) in enumerate(KEYWORD_MAP.items(), start=1):
        dest = os.path.join(IMAGES_DIR, f"{stem}.jpg")
        size_bytes = os.path.getsize(dest) if os.path.exists(dest) else 0

        print(f"[{idx:>3}/{total}] {stem}.jpg", end="")

        if size_bytes >= SKIP_THRESHOLD:
            print(f"  → skip ({size_bytes // 1024} KB, already looks real)")
            skipped += 1
            continue

        print(f"  → searching: '{query}'")
        url = search_pexels(query, API_KEY)
        if not url:
            print(f"  [WARN] No results found for '{query}', skipping.")
            failed += 1
            continue

        if download_and_save(url, dest, SIZE):
            new_size = os.path.getsize(dest)
            print(f"  ✓ saved {new_size // 1024} KB")
            downloaded += 1
        else:
            failed += 1

        # Be polite to the API (200 req/hr free tier → ~18 s between requests
        # is safe, but in practice bursts are fine; 0.5 s avoids hammering).
        time.sleep(0.5)

    print(
        f"\nDone. Downloaded: {downloaded}  Skipped: {skipped}  Failed: {failed}"
    )
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
