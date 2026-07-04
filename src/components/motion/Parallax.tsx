"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Subtle scroll parallax — dependency-free (no framer-motion). Translates its
 * inner content on Y as it passes through the viewport. Fully disabled on
 * touch/small screens and for reduced motion, so mobile pays zero cost.
 */
export function Parallax({
  children,
  className,
  distance = 60,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    // Skip entirely on mobile/touch and for reduced motion.
    const disabled =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(max-width: 1024px)").matches ||
      window.matchMedia("(hover: none)").matches;
    if (disabled) return;

    let inView = false;
    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = outer.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const progress = (vh - rect.top) / (vh + rect.height); // 0..1 across viewport
      const y = (Math.min(Math.max(progress, 0), 1) - 0.5) * distance;
      inner.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      if (!inView || ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) update();
      },
      { threshold: 0 },
    );
    io.observe(outer);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [distance]);

  return (
    <div ref={outerRef} className={cn("will-change-transform", className)}>
      <div ref={innerRef} className="h-full w-full">
        {children}
      </div>
    </div>
  );
}
