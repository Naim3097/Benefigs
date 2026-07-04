"use client";

import { useRef, useState } from "react";
import type { Product, Variant } from "@/lib/types";
import { useCart } from "@/context/cart";
import { copy } from "@/lib/copy";
import { Button } from "@/components/ui/Button";
import { IconCheck } from "@/components/ui/icons";

export function AddToCartButton({
  product,
  variant,
  quantity = 1,
  full = false,
  size = "md",
  label = copy.product.addToCart,
  className,
}: {
  product: Product;
  variant?: Variant;
  quantity?: number;
  full?: boolean;
  size?: "md" | "lg";
  label?: string;
  className?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = () => {
    addItem(product, { variant, quantity });
    setAdded(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Button
      variant="primary"
      size={size}
      full={full}
      onClick={handleClick}
      className={className}
      aria-label={copy.product.addNamed(product.name)}
    >
      <span aria-live="polite" className="inline-flex items-center gap-2">
        {added ? (
          <>
            <IconCheck width={20} height={20} /> {copy.product.added}
          </>
        ) : (
          label
        )}
      </span>
    </Button>
  );
}
