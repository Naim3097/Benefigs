import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Fig mark + wordmark lockup. This is a refined typographic placeholder for the
 * client's real logo — drop the supplied SVG/PNG into <FigMark> / swap the
 * wordmark and nothing else needs to change.
 */
export function FigMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 34" className={className} aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M16.6 9.2c6 .2 9 5.6 8 11.4-.9 5-4.3 8.4-8.6 8.4s-7.7-3.4-8.6-8.4c-1-5.8 2-11.2 8-11.4.4-2.8 2-5 4.7-6.2-.2 2.7-1.5 4.8-3.5 6.2Z"
      />
      <path
        fill="currentColor"
        opacity="0.55"
        d="M16 3c2.7 1.2 4.3 3.4 4.7 6.2-2.7-1.2-4.3-3.4-4.7-6.2Z"
      />
    </svg>
  );
}

export function Logo({
  onDark = false,
  className,
  markClassName,
}: {
  onDark?: boolean;
  className?: string;
  markClassName?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Benefigs — laman utama"
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <FigMark className={cn("h-8 w-auto", onDark ? "text-honey-300" : "text-berry-700", markClassName)} />
      <span
        className={cn(
          "font-display text-[1.7rem] font-medium leading-none tracking-tight",
          onDark ? "text-white" : "text-berry-800",
        )}
      >
        Benefigs
      </span>
    </Link>
  );
}
