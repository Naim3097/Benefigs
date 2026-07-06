import Link from "next/link";
import type { CSSProperties } from "react";
import type { Category } from "@/lib/types";
import { Media, accentForCategory } from "@/components/media/Media";
import { photoForCategory } from "@/lib/images";
import { IconArrowRight } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function CategoryCard({
  category,
  featured = false,
  priority = false,
  sizes = "(max-width: 640px) 90vw, 30vw",
  className,
  style,
}: {
  category: Category;
  featured?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const catPhoto = photoForCategory(category.slug);
  const image = category.image.src
    ? category.image
    : catPhoto
      ? { ...category.image, src: catPhoto.src }
      : category.image;

  return (
    <Link
      href={`/categories/${category.slug}`}
      style={style}
      aria-label={`Beli ${category.shortName ?? category.name}`}
      className={cn(
        "group relative block overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-berry-600 focus-visible:ring-offset-2",
        className,
      )}
    >
      <Media
        image={image}
        ratio={featured ? "4 / 3" : "4 / 5"}
        rounded="none"
        accent={accentForCategory(category.slug)}
        sizes={sizes}
        priority={priority}
        className="h-full"
        imgClassName="transition-transform duration-[1200ms] ease-soft group-hover:scale-[1.05]"
      />
      {/* Lighter legibility scrim — enough to hold the label, lets the photo breathe */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-aubergine/80 via-aubergine/10 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
        <div className="min-w-0">
          <h3
            className={cn(
              "font-medium leading-tight tracking-[-0.01em] text-white",
              featured ? "text-[1.5rem]" : "text-[1.2rem] sm:text-[1.35rem]",
            )}
          >
            {category.name}
          </h3>
          {featured && category.tagline ? (
            <p className="mt-1.5 text-[0.95rem] leading-snug text-white/75">{category.tagline}</p>
          ) : null}
        </div>
        <span
          aria-hidden="true"
          className="mb-0.5 grid size-9 shrink-0 translate-y-0 place-items-center rounded-full border border-white/35 text-white transition-colors duration-300 group-hover:border-white/80 group-hover:bg-white/10 sm:size-10"
        >
          <IconArrowRight
            width={18}
            height={18}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
