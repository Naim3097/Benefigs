"use client";

import { useState } from "react";
import type { ImageAsset } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Media, accentForCategory } from "@/components/media/Media";

export function ProductGallery({
  images,
  category,
}: {
  images: ImageAsset[];
  category: string;
}) {
  const [active, setActive] = useState(0);
  const accent = accentForCategory(category);
  const main = images[active] ?? images[0];

  return (
    <div>
      <Media
        image={main}
        ratio="1 / 1"
        rounded="2xl"
        accent={accent}
        priority
        sizes="(max-width: 1024px) 100vw, 48vw"
      />
      {images.length > 1 ? (
        <ul className="mt-4 flex gap-3">
          {images.map((im, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Lihat imej ${i + 1}`}
                aria-current={i === active}
                className={cn(
                  "block w-20 overflow-hidden rounded-lg border-2 transition-colors",
                  i === active ? "border-berry-700" : "border-transparent hover:border-line-300",
                )}
              >
                <Media image={im} ratio="1 / 1" rounded="md" accent={accent} sizes="80px" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
