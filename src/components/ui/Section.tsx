import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "paper" | "surface" | "deep" | "dark" | "berry";

const toneClasses: Record<Tone, string> = {
  paper: "",
  surface: "bg-surface",
  deep: "bg-paper-deep",
  dark: "bg-aubergine text-paper",
  berry: "bg-berry-700 text-white",
};

const spacing = {
  none: "",
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20 lg:py-24",
  lg: "py-20 sm:py-28 lg:py-32",
} as const;

/** Full-bleed section band with vertical rhythm + tone. */
export function Section({
  children,
  className,
  tone = "paper",
  space = "md",
  id,
  as: Tag = "section",
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  space?: keyof typeof spacing;
  id?: string;
  as?: ElementType;
  ariaLabel?: string;
}) {
  return (
    <Tag id={id} aria-label={ariaLabel} className={cn(toneClasses[tone], spacing[space], className)}>
      {children}
    </Tag>
  );
}

/** Constrained content width with responsive gutters. */
export function Container({
  children,
  className,
  size = "page",
}: {
  children: ReactNode;
  className?: string;
  size?: "page" | "prose";
}) {
  return (
    <div className={cn(size === "prose" ? "mx-auto w-full max-w-[44rem] px-5 sm:px-6" : "container-page", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className,
  onDark = false,
}: {
  children: ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <p className={cn("eyebrow", onDark && "text-honey-300", className)}>{children}</p>
  );
}

/** Standard section header: eyebrow + title + optional description. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  as: Tag = "h2",
  className,
  headingClassName,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  as?: ElementType;
  className?: string;
  headingClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center mx-auto max-w-3xl",
        className,
      )}
    >
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <Tag className={cn("text-h2", onDark && "text-white", headingClassName)}>{title}</Tag>
      {description ? (
        <p className={cn("text-lead max-w-2xl", onDark ? "text-paper/85" : "text-ink-700")}>{description}</p>
      ) : null}
    </div>
  );
}
