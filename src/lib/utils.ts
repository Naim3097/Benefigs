/**
 * Small, dependency-free utilities. Kept intentionally tiny to honour the
 * "minimal JavaScript" performance goal (no clsx / tailwind-merge runtime).
 */

export type ClassValue =
  | string
  | number
  | null
  | boolean
  | undefined
  | ClassValue[];

/** Join conditional class names. */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  const walk = (v: ClassValue) => {
    if (v === null || v === undefined || v === false || v === true) return;
    if (Array.isArray(v)) {
      v.forEach(walk);
      return;
    }
    const s = String(v).trim();
    if (s) out.push(s);
  };
  inputs.forEach(walk);
  return out.join(" ");
}

/** Format a number as Malaysian Ringgit, e.g. 1234.5 -> "RM 1,234.50". */
export function formatMYR(amount: number): string {
  return (
    "RM " +
    amount.toLocaleString("en-MY", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

/** Percentage saved between a compare-at price and the current price. */
export function discountPercent(price: number, compareAt?: number): number {
  if (!compareAt || compareAt <= price) return 0;
  return Math.round(((compareAt - price) / compareAt) * 100);
}

/** URL-safe slug from an arbitrary string. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

/** Absolute URL for a site-relative path (for canonicals / OG / schema). */
export function absoluteUrl(path: string, base: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

/** Clamp a number into a range. */
export function clamp(n: number, min: number, max: number): number {
  return Math.min(Math.max(n, min), max);
}

/** Pluralise a count with a unit, e.g. pluralise(1,"review") -> "1 review". */
export function pluralise(count: number, singular: string, plural?: string) {
  const word = count === 1 ? singular : (plural ?? `${singular}s`);
  return `${count.toLocaleString("en-MY")} ${word}`;
}

/** Format an ISO date as a readable Malaysian date, e.g. "3 July 2026". */
export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-MY", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
