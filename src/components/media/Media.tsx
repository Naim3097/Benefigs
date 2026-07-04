import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/lib/types";
import { FigMotif, type MotifAccent } from "./FigMotif";

const radiusMap = {
  none: "",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
} as const;

/**
 * Aspect-ratio-locked image with graceful placeholder art.
 * - Real `src` -> optimized next/image (AVIF/WebP, responsive `sizes`).
 * - No `src`  -> on-brand SVG motif (never a broken image).
 */
export function Media({
  image,
  ratio = "4 / 5",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
  accent = "berry",
  rounded = "lg",
  className,
  imgClassName,
}: {
  image: ImageAsset;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  accent?: MotifAccent;
  rounded?: keyof typeof radiusMap;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={cn("relative overflow-hidden bg-paper-deep", radiusMap[rounded], className)}
      style={{ aspectRatio: ratio }}
    >
      {image.src ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
      ) : (
        <FigMotif motif={image.motif ?? "fig-whole"} accent={accent} />
      )}
    </div>
  );
}

/** Choose a placeholder accent that varies pleasantly by category. */
export function accentForCategory(category: string): MotifAccent {
  switch (category) {
    case "fig-trees":
    case "growing-essentials":
      return "leaf";
    case "fig-drinks":
    case "gift-hampers":
      return "honey";
    default:
      return "berry";
  }
}
