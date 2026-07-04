# Benefigs — Premium Fig E-commerce

A production-grade, conversion-focused e-commerce storefront for **Benefigs**, Malaysia's
premium fig ("buah tin") grower. Built older-adult-first, in **Bahasa Malaysia**, with an
architecture ready for the Lean.X payment gateway.

Brand: _"Benefits + Figs = Benefigs" · Good Figs, Good Life._

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 16** (App Router, React Server Components, TypeScript) |
| Styling | **Tailwind CSS v4** (CSS-first design tokens in `src/app/globals.css`) |
| Fonts | `next/font` — Fraunces (display) + Figtree (body), self-hosted |
| Motion | Framer Motion (installed) + CSS scroll-reveals, all reduced-motion safe |
| State | Custom React Context (cart, wishlist) + `localStorage` — no heavy deps |
| Payments | Lean.X provider abstraction (`src/lib/payments.ts`) — simulated until UUID is set |
| Images | Optimised `next/image` (AVIF/WebP); on-brand SVG art placeholders until photography |

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also runs types)
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
```

Node 20+ recommended (developed on Node 24).

---

## Environment variables

Copy `.env.example` → `.env.local`. **All are optional** — the app degrades gracefully:
analytics and live payments simply stay off until IDs/keys are provided.

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (metadata, sitemap, schema) |
| `NEXT_PUBLIC_GA4_ID` / `NEXT_PUBLIC_GTM_ID` | Google Analytics 4 / Tag Manager |
| `NEXT_PUBLIC_META_PIXEL_ID` / `NEXT_PUBLIC_TIKTOK_PIXEL_ID` | Meta / TikTok pixels |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console meta tag |
| `LEANX_UUID`, `LEANX_AUTH_TOKEN`, `LEANX_ENV`, `LEANX_WEBHOOK_SECRET` | **Lean.X (server-only)** |

---

## Project structure

```
src/
  app/                      # routes (App Router)
    layout.tsx              # fonts, providers, org+website schema, analytics
    page.tsx                # homepage
    products/[slug]/        # PDP (SSG)
    categories/[slug]/      # category / PLP (SSG)
    shop/  search/          # all-products + search
    cart/  checkout/        # cart, 3-step checkout, /checkout/selesai (confirmation)
    account/                # dashboard, login, register, forgot-password, orders, profile
    journal/[slug]/         # SEO content cluster (SSG)
    about/ farm-visit/ contact/ faq/ shipping/ returns/ privacy/ terms/
    api/checkout/ api/contact/   # server routes (+ /checkout/webhook)
    sitemap.ts  robots.ts   # generated
    not-found / loading / error
  components/               # ui/ product/ cart/ checkout/ account/ layout/ home/ marketing/ media/ journal/ brand/ seo/ analytics/
  context/                  # cart.tsx, wishlist.tsx
  lib/                      # site.ts, catalog.ts, copy.ts (BM microcopy), types, seo, schema,
                            # analytics, payments, pricing, coupons, availability, journal, utils
  hooks/                    # useDialogBehaviour
reference/                  # original company profile PDF
```

---

## How-to

### Add / edit a product
Edit `src/lib/catalog.ts`. Each `Product` carries copy, price, SKU, variants, images, reviews,
specs and SEO. New products are picked up automatically by the PLP, sitemap and `generateStaticParams`.

### Swap placeholder art for real photos
Set `ImageAsset.src` to an uploaded `/images/...` path or an approved remote URL (add the host to
`next.config.ts → images.remotePatterns`). The SVG motif renders only while `src` is empty — no code
changes needed. Alt text is already written for accessibility/SEO.

### Connect Lean.X (when the UUID arrives)
1. Put `LEANX_UUID` + `LEANX_AUTH_TOKEN` (+ `LEANX_ENV`, `LEANX_WEBHOOK_SECRET`) in `.env.local`.
2. In `src/lib/payments.ts`, fill the marked `TODO(Lean.X)` block with the real create-payment call.
3. Implement signature verification + order status update in `src/app/api/checkout/webhook/route.ts`.
Checkout automatically switches from simulated to live once the credentials are present.

### Turn on analytics
Add the IDs above. `src/components/analytics/Analytics.tsx` loads only the tags you configure.
Enhanced-ecommerce events (`view_item`, `add_to_cart`, `begin_checkout`, `purchase`, …) fire from
`src/lib/analytics.ts` across GA4, Meta and TikTok.

### Add English (or another locale)
UI microcopy lives in `src/lib/copy.ts`. Create a parallel `copy.en.ts` with the same shape, add
locale routing (`/en`), and translate product content — no component changes required.

---

## Accessibility & performance

- Older-adult-first: 18px base type, high contrast (AAA-leaning), 48px+ targets, always-visible focus,
  simple nav, `prefers-reduced-motion` honoured globally.
- Semantic HTML + one `<h1>` per page + full schema.org coverage.
- SSG/SSR everywhere sensible; `next/image` AVIF/WebP + lazy loading; minimal client JS.
- Security headers set in `next.config.ts`. **Add a strict CSP with nonces at the edge before launch**
  (see DELIVERABLES.md).

---

## Deployment

Deploy to any Node host or **Vercel** (recommended for Next.js). Set the env vars in the host,
point the domain (`benefigs.com`), and **fix the expired SSL certificate** noted for the current domain.
