import { cn, clamp } from "@/lib/utils";
import { copy } from "@/lib/copy";

function Star({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.2l2.95 6.32 6.85.72-5.1 4.62 1.42 6.74L12 17.9l-6.12 3.7 1.42-6.74-5.1-4.62 6.85-.72L12 2.2Z" />
    </svg>
  );
}

/** Accessible star rating with fractional fill via a clipped overlay. */
export function Stars({
  rating,
  count,
  size = 18,
  showValue = false,
  className,
}: {
  rating: number;
  count?: number;
  size?: number;
  showValue?: boolean;
  className?: string;
}) {
  const pct = clamp((rating / 5) * 100, 0, 100);
  const row = (
    <span className="inline-flex gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={size} />
      ))}
    </span>
  );
  return (
    <span
      className={cn("inline-flex items-center gap-2", className)}
      role="img"
      aria-label={copy.product.ratedOutOf(rating, count)}
    >
      <span className="relative inline-flex align-middle">
        <span className="inline-flex text-line-300">{row}</span>
        <span
          className="absolute inset-0 inline-flex overflow-hidden text-honey-500"
          style={{ width: `${pct}%` }}
        >
          {row}
        </span>
      </span>
      {showValue ? <span className="font-semibold text-ink-900">{rating.toFixed(1)}</span> : null}
      {count != null ? <span className="text-small text-ink-500">({count.toLocaleString("en-MY")})</span> : null}
    </span>
  );
}
