"use client";

import { cn } from "@/lib/utils";
import { copy } from "@/lib/copy";
import { IconMinus, IconPlus } from "@/components/ui/icons";

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 99,
  label = copy.product.quantity,
  size = "md",
  block = false,
  className,
}: {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  max?: number;
  label?: string;
  size?: "sm" | "md";
  /** Fill the container width, spreading controls to the edges. */
  block?: boolean;
  className?: string;
}) {
  const btn = size === "sm" ? "size-10" : "size-12";
  const icon = size === "sm" ? 18 : 20;
  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        "items-center rounded-md border border-line-300 bg-surface",
        block ? "flex w-full justify-between" : "inline-flex",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label={`${label}: kurang`}
        className={cn("grid shrink-0 place-items-center rounded-l-md text-ink-800 hover:bg-berry-50 disabled:opacity-40", btn)}
      >
        <IconMinus width={icon} height={icon} />
      </button>
      <span
        className={cn(
          "text-center font-semibold",
          block && "flex-1",
          size === "sm" ? "min-w-10 text-[1rem]" : "min-w-12 text-[1.1rem]",
        )}
        aria-live="polite"
      >
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label={`${label}: tambah`}
        className={cn("grid shrink-0 place-items-center rounded-r-md text-ink-800 hover:bg-berry-50 disabled:opacity-40", btn)}
      >
        <IconPlus width={icon} height={icon} />
      </button>
    </div>
  );
}
