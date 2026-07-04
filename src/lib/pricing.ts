import type { Coupon } from "./types";
import { site } from "./site";

/** Flat standard shipping rate (RM). PLACEHOLDER — confirm courier rates. */
export const STANDARD_SHIPPING = 10;

export interface OrderTotals {
  subtotal: number;
  discount: number;
  shipping: number;
  freeShipping: boolean;
  total: number;
}

const round2 = (n: number) => Math.round(n * 100) / 100;

/** Compute order totals from a subtotal + optional coupon + free-ship rule. */
export function computeTotals(subtotal: number, coupon: Coupon | null): OrderTotals {
  let discount = 0;
  let freeShipping = subtotal >= site.policy.freeShippingThreshold;

  if (coupon) {
    if (coupon.kind === "percent") discount = subtotal * (coupon.value / 100);
    else if (coupon.kind === "fixed") discount = Math.min(coupon.value, subtotal);
    else if (coupon.kind === "free_shipping") freeShipping = true;
  }

  const discountedSubtotal = Math.max(0, subtotal - discount);
  const shipping = discountedSubtotal > 0 ? (freeShipping ? 0 : STANDARD_SHIPPING) : 0;
  const total = discountedSubtotal + shipping;

  return {
    subtotal: round2(subtotal),
    discount: round2(discount),
    shipping: round2(shipping),
    freeShipping,
    total: round2(total),
  };
}
