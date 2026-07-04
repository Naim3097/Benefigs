import { cn, formatMYR, discountPercent } from "@/lib/utils";
import { copy } from "@/lib/copy";

/** Price display with optional compare-at + unit. `price <= 0` -> quote CTA. */
export function Price({
  price,
  compareAt,
  unit,
  size = "md",
  className,
}: {
  price: number;
  compareAt?: number;
  unit?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClass = size === "lg" ? "text-[1.75rem]" : size === "sm" ? "text-[1.05rem]" : "text-[1.3rem]";

  if (price <= 0) {
    return (
      <span className={cn("font-semibold text-berry-800", sizeClass, className)}>
        {copy.product.requestQuote}
      </span>
    );
  }

  const off = discountPercent(price, compareAt);

  return (
    <span className={cn("inline-flex flex-wrap items-baseline gap-x-2 gap-y-0.5", className)}>
      <span className={cn("font-semibold text-ink-900", sizeClass)}>{formatMYR(price)}</span>
      {compareAt && compareAt > price ? (
        <>
          <s className="text-ink-500 text-small">{formatMYR(compareAt)}</s>
          {off > 0 ? (
            <span className="rounded-full bg-berry-100 px-2 py-0.5 text-[0.85rem] font-semibold text-berry-800">
              {copy.product.save(off)}
            </span>
          ) : null}
        </>
      ) : null}
      {unit ? <span className="text-small text-ink-500">{unit}</span> : null}
    </span>
  );
}
