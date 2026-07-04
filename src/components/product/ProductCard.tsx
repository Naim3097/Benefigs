import Link from "next/link";
import type { Product } from "@/lib/types";
import { Media, accentForCategory } from "@/components/media/Media";
import { Price } from "@/components/ui/Price";
import { Stars } from "@/components/ui/Stars";
import { Badge, badgeTone } from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";
import { AddToCartButton } from "./AddToCartButton";
import { WishlistButton } from "./WishlistButton";
import { availabilityLabel } from "@/lib/availability";
import { photoForProduct } from "@/lib/images";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  priority = false,
  sizes = "(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw",
  className,
}: {
  product: Product;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const href = `/products/${product.slug}`;
  const hasOptions = (product.variants?.length ?? 0) > 0 || product.price <= 0;
  const avail = availabilityLabel(product.availability);

  const base = product.images[0];
  const ph = base.src ? null : photoForProduct(product);
  const image = ph ? { ...base, src: ph.src } : base;

  return (
    <article className={cn("group flex flex-col", className)}>
      <div className="relative">
        <Link href={href} aria-hidden="true" tabIndex={-1} className="block">
          <Media
            image={image}
            ratio="4 / 5"
            accent={accentForCategory(product.category)}
            sizes={sizes}
            priority={priority}
            className="shadow-sm transition-shadow duration-500 group-hover:shadow-md"
            imgClassName="transition-transform duration-[900ms] ease-soft group-hover:scale-[1.06]"
          />
        </Link>

        {product.badges?.length ? (
          <div className="pointer-events-none absolute left-3 top-3 flex flex-col items-start gap-1.5">
            {product.badges.slice(0, 2).map((b) => (
              <Badge key={b} tone={badgeTone(b)}>
                {b}
              </Badge>
            ))}
          </div>
        ) : null}

        {avail.tone !== "success" ? (
          <div className="absolute bottom-3 left-3">
            <span className="rounded-full bg-surface/95 px-3 py-1 text-[0.8rem] font-semibold text-ink-700 shadow-sm">
              {avail.label}
            </span>
          </div>
        ) : null}

        <div className="absolute right-3 top-3">
          <WishlistButton product={product} />
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="text-[1.2rem] font-medium leading-snug text-ink-900">
          <Link href={href} className="transition-colors hover:text-berry-700">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-small text-ink-500">{product.subtitle}</p>

        {product.reviewCount > 0 ? (
          <div className="mt-2">
            <Stars rating={product.rating} count={product.reviewCount} size={16} />
          </div>
        ) : null}

        <div className="mt-auto pt-4">
          <Price price={product.price} compareAt={product.compareAtPrice} unit={product.unit} />
        </div>

        <div className="mt-3">
          {hasOptions ? (
            <Link href={href} className={buttonClasses({ variant: "outline", full: true })}>
              {product.price <= 0 ? copy.product.enquire : copy.product.chooseOptions}
            </Link>
          ) : product.availability === "out_of_stock" ? (
            <Link href={href} className={buttonClasses({ variant: "outline", full: true })}>
              {copy.product.viewProduct}
            </Link>
          ) : (
            <AddToCartButton product={product} full />
          )}
        </div>
      </div>
    </article>
  );
}
