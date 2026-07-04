import type { Coupon } from "./types";

/** Demo coupons. Replace with your promotions engine / backend validation. */
export const coupons: Coupon[] = [
  {
    code: "BENEFIGS10",
    label: "10% diskaun",
    kind: "percent",
    value: 10,
    description: "Nikmati 10% diskaun untuk pesanan pertama anda.",
  },
  {
    code: "RAYA25",
    label: "RM25 diskaun",
    kind: "fixed",
    value: 25,
    minSpend: 150,
    description: "RM25 diskaun untuk pesanan RM150 ke atas.",
  },
  {
    code: "POSPERCUMA",
    label: "Penghantaran percuma",
    kind: "free_shipping",
    value: 0,
    description: "Penghantaran percuma untuk pesanan anda.",
  },
];

export function findCoupon(code: string): Coupon | undefined {
  const c = code.trim().toUpperCase();
  return coupons.find((x) => x.code === c);
}
