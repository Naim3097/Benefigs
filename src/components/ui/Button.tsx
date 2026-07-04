import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "onDark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-md font-semibold text-center " +
  "transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-soft " +
  "active:translate-y-px disabled:opacity-50 disabled:pointer-events-none select-none";

const variants: Record<Variant, string> = {
  // Large, obvious, high-contrast — the clear primary action.
  primary: "bg-berry-700 text-white hover:bg-berry-800 shadow-sm hover:shadow-md",
  secondary: "bg-leaf-700 text-white hover:bg-leaf-800 shadow-sm hover:shadow-md",
  outline: "border-2 border-berry-700 text-berry-800 hover:bg-berry-50",
  ghost: "text-berry-800 hover:bg-berry-50",
  onDark: "bg-white text-berry-800 hover:bg-paper shadow-sm",
};

const sizes: Record<Size, string> = {
  md: "min-h-12 px-6 text-[1.05rem]",
  lg: "min-h-14 px-8 text-[1.15rem]",
};

export function buttonClasses(opts?: { variant?: Variant; size?: Size; full?: boolean }) {
  const { variant = "primary", size = "md", full } = opts ?? {};
  return cn(base, variants[variant], sizes[size], full && "w-full");
}

export function Button({
  variant,
  size,
  full,
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"button"> & { variant?: Variant; size?: Size; full?: boolean }) {
  return (
    <button className={cn(buttonClasses({ variant, size, full }), className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant,
  size,
  full,
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof Link> & { variant?: Variant; size?: Size; full?: boolean }) {
  return (
    <Link className={cn(buttonClasses({ variant, size, full }), className)} {...props}>
      {children}
    </Link>
  );
}
