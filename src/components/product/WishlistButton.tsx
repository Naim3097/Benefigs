"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";
import { useWishlist } from "@/context/wishlist";
import { ecommerce } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { IconHeart } from "@/components/ui/icons";

export function WishlistButton({
  product,
  withLabel = false,
  className,
}: {
  product: Product;
  withLabel?: boolean;
  className?: string;
}) {
  const { has, toggle, hydrated } = useWishlist();
  const saved = hydrated && has(product.slug);
  const [pulse, setPulse] = useState(false);

  const onClick = () => {
    const nowSaved = toggle(product.slug);
    if (nowSaved) {
      ecommerce.addToWishlist(product);
      setPulse(true);
      setTimeout(() => setPulse(false), 300);
    }
  };

  if (withLabel) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={saved}
        className={cn(
          "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border-2 px-6 font-semibold transition-colors",
          saved ? "border-berry-700 bg-berry-50 text-berry-800" : "border-line-300 text-ink-800 hover:border-berry-300",
          className,
        )}
      >
        <IconHeart width={20} height={20} className={cn(saved && "fill-berry-700", pulse && "scale-110 transition-transform")} />
        {saved ? "Disimpan dalam senarai hajat" : "Simpan ke senarai hajat"}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={saved}
      aria-label={saved ? `Buang ${product.name} daripada senarai hajat` : `Simpan ${product.name} ke senarai hajat`}
      className={cn(
        "grid size-11 place-items-center rounded-full bg-surface/95 text-ink-700 shadow-sm transition-colors hover:text-berry-700",
        saved && "text-berry-700",
        className,
      )}
    >
      <IconHeart width={22} height={22} className={cn(saved && "fill-berry-700", pulse && "scale-110 transition-transform")} />
    </button>
  );
}
