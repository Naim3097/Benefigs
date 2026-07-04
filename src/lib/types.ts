/**
 * Domain models for the Benefigs storefront.
 * These are deliberately framework-agnostic so the data layer can later be
 * swapped for a real CMS / commerce backend (Shopify, Medusa, Sanity, etc.)
 * without touching the UI.
 */

export type ID = string;

export type Availability =
  | "in_stock"
  | "low_stock"
  | "preorder"
  | "seasonal"
  | "out_of_stock";

export interface ImageAsset {
  /**
   * Image source. When empty/undefined the UI renders an on-brand SVG art
   * placeholder driven by `motif`. Set this to a real Unsplash URL or an
   * uploaded `/images/...` path to swap in photography — no other change needed.
   */
  src?: string;
  /** Meaningful alt text — required for accessibility + SEO. */
  alt: string;
  /** Which branded placeholder illustration to draw when `src` is absent. */
  motif?: "fig-halved" | "fig-whole" | "leaf" | "tree" | "jar" | "bottle" | "tea" | "hamper" | "farm";
  width?: number;
  height?: number;
  /** Attribution for placeholder photography. */
  credit?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Spec {
  label: string;
  value: string;
}

export interface Review {
  id: ID;
  author: string;
  location?: string;
  rating: number; // 1..5
  title: string;
  body: string;
  date: string; // ISO
  verified: boolean;
}

export interface Variant {
  id: ID;
  label: string; // e.g. "Medium grade", "300g punnet"
  price: number;
  compareAtPrice?: number;
  sku: string;
  unit?: string;
  availability: Availability;
}

export interface Category {
  slug: string;
  name: string;
  shortName?: string;
  /** One-line positioning used in nav + hero. */
  tagline: string;
  /** SEO intro copy (2–4 sentences) shown on the category page. */
  description: string;
  image: ImageAsset;
  /** Sort order in navigation. */
  order: number;
  featured?: boolean;
  faqs?: FAQ[];
}

export interface Product {
  id: ID;
  slug: string;
  name: string;
  /** Category slug this product belongs to. */
  category: string;
  /** Short descriptor under the title. */
  subtitle: string;
  /** ~150–160 char summary for cards + meta descriptions. */
  shortDescription: string;
  /** Long-form body copy, one string per paragraph. */
  description: string[];
  /** Benefit-led bullet points. */
  highlights: string[];

  price: number;
  compareAtPrice?: number;
  /** Unit label, e.g. "per 300g punnet", "per tree". */
  unit: string;
  sku: string;
  variants?: Variant[];

  images: ImageAsset[];
  availability: Availability;
  /** Small labels: "Bestseller", "New", "MyGAP", "Limited". */
  badges?: string[];

  rating: number; // 0..5 (aggregate)
  reviewCount: number;
  reviews?: Review[];

  specs?: Spec[];
  /** How to use / storage / serving guidance. */
  usage?: string[];
  faqs?: FAQ[];

  /** Slugs of related products for cross-sell. */
  related?: string[];
  tags?: string[];
  /** Benefit tags used for filtering + internal linking. */
  benefitTags?: string[];

  seo?: { title?: string; description?: string };

  featured?: boolean;
  bestseller?: boolean;
  newArrival?: boolean;

  /** Variety-specific fields (fresh figs / trees). */
  origin?: string;
  flavour?: string;
  colour?: string;
}

export interface CartLine {
  productId: ID;
  slug: string;
  name: string;
  variantId?: ID;
  variantLabel?: string;
  unit: string;
  price: number;
  image: ImageAsset;
  quantity: number;
  availability: Availability;
}

export interface Coupon {
  code: string;
  label: string;
  kind: "percent" | "fixed" | "free_shipping";
  value: number; // percent (0-100) or fixed RM
  minSpend?: number;
  description: string;
}
