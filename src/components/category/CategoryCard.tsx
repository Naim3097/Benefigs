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
        imgClassName="transition-transform duration-[1200ms] ease-soft group-hover:scale-[1.06]"
      />
      {/* Functional legibility scrim (works over photo or motif) */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-aubergine/90 via-aubergine/25 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <h3 className="text-[1.5rem] font-medium leading-tight text-white">{category.name}</h3>
        <p className="mt-1 text-white/85">{category.tagline}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 font-semibold text-white">
          Beli {category.shortName ?? category.name}
          <IconArrowRight
            width={20}
            height={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
