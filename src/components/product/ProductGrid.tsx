import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Stagger } from "@/components/motion/Stagger";
import { ProductCard } from "./ProductCard";

const colClasses: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
};

const sizesFor: Record<number, string> = {
  2: "(max-width: 640px) 45vw, 40vw",
  3: "(max-width: 640px) 45vw, (max-width: 1024px) 45vw, 30vw",
  4: "(max-width: 640px) 45vw, (max-width: 1024px) 45vw, 22vw",
};

export function ProductGrid({
  products,
  columns = 4,
  priorityCount = 0,
  className,
}: {
  products: Product[];
  columns?: 2 | 3 | 4;
  priorityCount?: number;
  className?: string;
}) {
  return (
    <Stagger as="ul" gap={70} className={cn("grid gap-x-5 gap-y-10 sm:gap-x-6", colClasses[columns], className)}>
      {products.map((p, i) => (
        <li key={p.id} className="flex">
          <ProductCard
            product={p}
            priority={i < priorityCount}
            sizes={sizesFor[columns]}
            className="w-full"
          />
        </li>
      ))}
    </Stagger>
  );
}
