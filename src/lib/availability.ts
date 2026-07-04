import type { Availability } from "./types";
import { copy } from "./copy";

type Tone = "success" | "warning" | "info" | "danger";

/** Human-friendly stock label (Bahasa Malaysia) + tone for badges and PDP. */
export function availabilityLabel(a: Availability): { label: string; tone: Tone } {
  switch (a) {
    case "in_stock":
      return { label: copy.availability.in_stock, tone: "success" };
    case "low_stock":
      return { label: copy.availability.low_stock, tone: "warning" };
    case "preorder":
      return { label: copy.availability.preorder, tone: "info" };
    case "seasonal":
      return { label: copy.availability.seasonal, tone: "info" };
    case "out_of_stock":
      return { label: copy.availability.out_of_stock, tone: "danger" };
    default:
      return { label: copy.availability.in_stock, tone: "success" };
  }
}

/** Map availability tone to schema.org ItemAvailability URL. */
export function schemaAvailability(a: Availability): string {
  switch (a) {
    case "out_of_stock":
      return "https://schema.org/OutOfStock";
    case "preorder":
      return "https://schema.org/PreOrder";
    case "seasonal":
    case "low_stock":
    case "in_stock":
    default:
      return "https://schema.org/InStock";
  }
}
