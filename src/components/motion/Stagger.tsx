"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/**
 * Staggered scroll-reveal. Direct children fade-up in sequence when the group
 * enters the viewport. CSS-driven (see globals.css `.reveal-group`) so it is
 * no-JS safe (content visible without JS) and disabled for reduced motion.
 */
export function Stagger({
  children,
  className,
  gap = 90,
  as: Tag = "div",
  threshold = 0.12,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  as?: ElementType;
  threshold?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-in");
            io.unobserve(el);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <Tag ref={ref} className={cn("reveal-group", className)}>
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child;
        const el = child as ReactElement<{ style?: CSSProperties }>;
        return cloneElement(el, {
          style: { ...(el.props.style ?? {}), transitionDelay: `${i * gap}ms` },
        });
      })}
    </Tag>
  );
}
