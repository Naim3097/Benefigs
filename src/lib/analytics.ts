import type { CartLine, Product } from "@/lib/types";

/**
 * ============================================================================
 * ANALYTICS LAYER  (GA4 / GTM dataLayer + Meta Pixel + TikTok Pixel)
 * ============================================================================
 * A single, typed façade over every tag. Every call is a safe no-op until the
 * corresponding script is loaded (i.e. until the client supplies IDs). This
 * keeps enhanced-ecommerce event names consistent across GA4, Meta and TikTok.
 * ============================================================================
 */

type Params = Record<string, unknown>;

interface Win {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
  ttq?: { track: (event: string, params?: Params) => void; page?: () => void };
}

function w(): Win | undefined {
  return typeof window === "undefined" ? undefined : (window as unknown as Win);
}

/** Low-level GA4 / GTM event push. */
export function track(event: string, params: Params = {}) {
  const win = w();
  if (!win) return;
  win.dataLayer?.push({ event, ...params });
  win.gtag?.("event", event, params);
}

function meta(event: string, params: Params = {}) {
  w()?.fbq?.("track", event, params);
}

function tiktok(event: string, params: Params = {}) {
  w()?.ttq?.track(event, params);
}

/** Map a product to a GA4 `items[]` entry. */
export function toItem(product: Product, quantity = 1, price?: number) {
  return {
    item_id: product.sku,
    item_name: product.name,
    item_category: product.category,
    price: price ?? product.price,
    quantity,
  };
}

function lineToItem(line: CartLine) {
  return {
    item_id: line.slug,
    item_name: line.name,
    item_variant: line.variantLabel,
    price: line.price,
    quantity: line.quantity,
  };
}

export const ecommerce = {
  viewItem(product: Product) {
    const item = toItem(product);
    track("view_item", { currency: "MYR", value: product.price, items: [item] });
    meta("ViewContent", { content_ids: [product.sku], content_type: "product", value: product.price, currency: "MYR" });
    tiktok("ViewContent", { content_id: product.sku, value: product.price, currency: "MYR" });
  },

  viewItemList(products: Product[], listName: string) {
    track("view_item_list", { item_list_name: listName, items: products.map((p) => toItem(p)) });
  },

  selectItem(product: Product, listName: string) {
    track("select_item", { item_list_name: listName, items: [toItem(product)] });
  },

  addToCart(line: CartLine) {
    const value = line.price * line.quantity;
    track("add_to_cart", { currency: "MYR", value, items: [lineToItem(line)] });
    meta("AddToCart", { content_ids: [line.slug], content_type: "product", value, currency: "MYR" });
    tiktok("AddToCart", { content_id: line.slug, value, currency: "MYR" });
  },

  removeFromCart(line: CartLine) {
    track("remove_from_cart", { currency: "MYR", value: line.price * line.quantity, items: [lineToItem(line)] });
  },

  beginCheckout(lines: CartLine[], value: number) {
    track("begin_checkout", { currency: "MYR", value, items: lines.map(lineToItem) });
    meta("InitiateCheckout", { value, currency: "MYR", num_items: lines.length });
    tiktok("InitiateCheckout", { value, currency: "MYR" });
  },

  addShippingInfo(lines: CartLine[], value: number, tier: string) {
    track("add_shipping_info", { currency: "MYR", value, shipping_tier: tier, items: lines.map(lineToItem) });
  },

  addPaymentInfo(lines: CartLine[], value: number, method: string) {
    track("add_payment_info", { currency: "MYR", value, payment_type: method, items: lines.map(lineToItem) });
    meta("AddPaymentInfo", { value, currency: "MYR" });
  },

  purchase(order: { id: string; value: number; shipping?: number; tax?: number; lines: CartLine[] }) {
    track("purchase", {
      transaction_id: order.id,
      currency: "MYR",
      value: order.value,
      shipping: order.shipping ?? 0,
      tax: order.tax ?? 0,
      items: order.lines.map(lineToItem),
    });
    meta("Purchase", { value: order.value, currency: "MYR" });
    tiktok("CompletePayment", { value: order.value, currency: "MYR" });
  },

  search(term: string) {
    track("search", { search_term: term });
    tiktok("Search", { query: term });
  },

  newsletterSignup(location: string) {
    track("generate_lead", { method: "newsletter", location });
    meta("Lead", { content_name: "newsletter" });
  },

  addToWishlist(product: Product) {
    track("add_to_wishlist", { currency: "MYR", value: product.price, items: [toItem(product)] });
    meta("AddToWishlist", { content_ids: [product.sku], value: product.price, currency: "MYR" });
  },
};
