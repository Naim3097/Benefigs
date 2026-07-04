# Benefigs — Deliverables & Handover

This maps the build to the project brief, documents the design system, and lists every
placeholder to replace before launch.

---

## 1. Sitemap / Information architecture

```
/                         Homepage
/shop                     All products (category filter + sort)
/categories/[slug]        Category / PLP  ×7  (fresh-figs, fig-trees, fig-foods,
                          fig-drinks, growing-essentials, gift-hampers, farm-experience)
/products/[slug]          Product detail  ×20  (SSG)
/search                   Search results
/cart                     Cart
/checkout                 3-step checkout (delivery → payment → review)
/checkout/selesai         Order confirmation
/wishlist                 Wishlist
/account                  Dashboard
  /account/login  /register  /forgot-password  /orders  /profile
/journal                  Content hub
/journal/[slug]           Articles ×3 (khasiat-buah-tin, menanam-pokok-tin, resepi-buah-tin)
/about  /farm-visit  /contact  /faq
/shipping  /returns  /privacy  /terms
sitemap.xml  robots.txt
api/checkout  api/checkout/webhook  api/contact
Global: 404 (not-found), loading skeletons, error boundary
```

**User flow (purchase):** Home/PLP → PDP → Add to cart (drawer) → Cart → Checkout
(delivery → payment → review) → Lean.X → Confirmation (cart cleared, `purchase` event).

---

## 2. Brief → build checklist

**Ecommerce features:** Homepage ✓ · Category pages ✓ · PLP ✓ · PDP ✓ · Cart ✓ · Checkout ✓ ·
Order confirmation ✓ · Search ✓ · Wishlist ✓ · Account/Login/Register/Forgot ✓ · Order history ✓ ·
Profile ✓ · Reviews ✓ · Related products ✓ · Recently viewed ✓ · Featured/Bestsellers ✓ ·
Promotions/Coupons ✓ (`BENEFIGS10`, `RAYA25`, `POSPERCUMA`) · Inventory states ✓ (in/low/preorder/
seasonal/out) · Empty/Error/Loading states ✓.

**SEO:** heading hierarchy ✓ · semantic HTML ✓ · schema (Product, Breadcrumb, Organization, FAQ,
LocalBusiness, WebSite+SearchAction, BlogPosting, ItemList) ✓ · unique meta titles/descriptions ✓ ·
canonicals ✓ · Open Graph + Twitter ✓ · sitemap.xml + robots.txt ✓ · image optimisation (AVIF/WebP) ✓ ·
internal linking + topic clustering (journal) ✓ · SEO-friendly URLs ✓ · SSG/SSR ✓ · lazy loading ✓.

**Payment:** Lean.X provider abstraction + API route + webhook stub, behind `LEANX_UUID` ✓.

**Analytics:** GA4, GTM, Meta Pixel, TikTok Pixel + enhanced-ecommerce events, gated on IDs ✓.

**Accessibility (exceeds WCAG AA):** keyboard nav ✓ · visible focus ✓ · ARIA/landmarks ✓ ·
high contrast ✓ · large type + tap targets ✓ · accessible forms with inline errors ✓ ·
reduced-motion ✓ · skip link ✓.

**Responsive:** layouts recomposed per breakpoint (mobile / tablet / desktop) ✓.

**Content:** full professional Bahasa Malaysia copy on every page — no lorem ipsum ✓.

---

## 3. Design system (summary)

- **Colour** — Fig Berry (primary `#7c1d3f`), Fig Leaf (secondary), Fig Honey (accent, sparing),
  warm paper neutrals, deep aubergine; state colours. Full ramps in `globals.css @theme`. AAA-leaning.
- **Type** — Fraunces (display) + Figtree (body). Fluid scale: `text-hero/h1/h2/h3/lead/body/small`,
  18px base, generous line-height.
- **Spacing/radius/shadow** — 8px rhythm; radius sm–2xl; soft warm elevations only (no heavy shadows).
- **Motion** — `--ease-soft`, gentle fade/slide/reveal; disabled under `prefers-reduced-motion`.
- **Components** — Button, Section/Container, Badge, Stars, Price, Accordion, Breadcrumbs,
  QuantityStepper, FormField, Media (+FigMotif art), ProductCard/Grid/Listing, OrderSummary, etc.

---

## 4. Placeholders to replace before launch

All are clearly marked in code (`PLACEHOLDER` / `TODO_CONFIRM` / `TODO(Lean.X)`).

| Where | What |
|---|---|
| `src/lib/site.ts` | Full address, postcode, geo-coordinates, SSM reg no., canonical email/phone, map URL |
| `.env.local` | `LEANX_UUID` + Lean.X keys; GA4/GTM/Meta/TikTok IDs; Search Console token |
| `src/lib/payments.ts` | Real Lean.X create-payment call (marked TODO) |
| `api/checkout/webhook` | Signature verification + order status update |
| `api/contact` | Forward messages to inbox/CRM |
| `src/lib/pricing.ts` | Confirm shipping rates + free-ship threshold |
| Catalog | Corporate hamper price (quote-only), confirm any prices marked PLACEHOLDER |
| Images | Replace SVG motifs with real photography (set `ImageAsset.src`) |
| `/contact` | Embed real Google Map |
| Policies | Legal review of shipping/returns/privacy/terms; halal certification status |
| Auth/orders | Wire a real backend (Auth.js/Clerk/Supabase) — current account is a front-end demo |

---

## 5. Recommended follow-ups

1. **Fix the expired SSL** on the current `benefigs.com` domain before pointing DNS.
2. **Strict Content-Security-Policy** with per-request nonces at the edge (Best-Practices = 100).
3. **Real photography** — the single biggest visual upgrade; pipeline is ready.
4. **Backend** for auth, real order history, inventory and the newsletter/contact ESP.
5. **Optional:** add the English locale (`copy.en.ts` + `/en`) for bilingual reach.
6. Run Lighthouse on the deployed build and tune any last CWV items.
