import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Brand logo. Uses the client's supplied SVG (public/benefigs-logo.svg), cropped
 * to its content and optimised. On dark surfaces it's rendered white via a filter.
 * next/image is intentionally not used — an SVG is already resolution-independent
 * and needs no optimisation.
 */
export function Logo({
  onDark = false,
  className,
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Benefigs — laman utama"
      className={cn("inline-flex items-center", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/benefigs-logo.svg"
        alt="Benefigs"
        width={762}
        height={332}
        className={cn("h-10 w-auto sm:h-11", onDark && "brightness-0 invert")}
      />
    </Link>
  );
}
