import type { ImageAsset } from "./types";

/**
 * Central photography registry. Verified Unsplash URLs live here; until a `url`
 * is filled, `photo()` returns null and the UI falls back to the on-brand SVG
 * motif — so the site never shows a broken image. Swapping in real photography
 * (or the client's own shoot) is a one-line change per key.
 */
type Photo = { url: string; alt: string; credit?: string };

// Cap the SOURCE Unsplash fetch (Next/Image then generates a tight srcset from
// this). Without this, the optimizer would fetch multi-MB full-res originals.
const P = (id: string) => `https://images.unsplash.com/photo-${id}?q=72&w=1400&auto=format&fit=crop`;

export const photos: Record<string, Photo> = {
  heroFigs: { url: P("1635341814161-d696d538542c"), alt: "Buah tin segar matang yang baru dipetik" },
  figsHalved: { url: P("1633932850276-4382027c868a"), alt: "Buah tin dibelah menampakkan isi merah pekat" },
  figsOnBranch: { url: P("1571337547740-a56ef4b5aa05"), alt: "Buah tin matang di dahan pokok" },
  figOrchard: { url: P("1537811465496-6c38a51d2d81"), alt: "Barisan pokok di ladang" },
  harvestHands: { url: P("1599678914948-8e0a39f42a31"), alt: "Tangan memetik buah segar" },
  figJam: { url: P("1645871317023-00ca188755de"), alt: "Balang jem buah tin artisan" },
  figTea: { url: P("1571934811356-5cc061b6821f"), alt: "Secawan teh herba yang menenangkan" },
  figsBowl: { url: P("1601379760591-1d89ae6ee1b7"), alt: "Semangkuk buah tin segar" },
  driedFigs: { url: P("1524593313283-1e092f06b2f0"), alt: "Buah tin kering" },
  farmPeople: { url: P("1568919518384-e24c9be895d0"), alt: "Menikmati lawatan ladang" },
  figLeaves: { url: P("1615447099572-367b9a26d3ff"), alt: "Daun hijau pokok tin" },
  giftHamper: { url: P("1497700003451-e1df943a194b"), alt: "Hamper hadiah premium" },
  saplingNursery: { url: P("1708796705570-33fd29ef67d0"), alt: "Anak pokok muda di nurseri" },
  figDrink: { url: P("1523677011781-c91d1bbe2f9e"), alt: "Minuman buah yang menyegarkan" },
};

export function photo(key: string): ImageAsset | null {
  const p = photos[key];
  return p && p.url ? { src: p.url, alt: p.alt, credit: p.credit } : null;
}

const categoryPhotoKey: Record<string, string> = {
  "fresh-figs": "figsBowl",
  "fig-trees": "saplingNursery",
  "fig-foods": "figJam",
  "fig-drinks": "figDrink",
  "growing-essentials": "figLeaves",
  "gift-hampers": "giftHamper",
  "farm-experience": "farmPeople",
};

const slugPhotoKey: Record<string, string> = {
  "masui-dauphine-fresh-figs": "figsHalved",
  "cda-fresh-figs": "figsBowl",
  "mixed-fig-box": "figsBowl",
  "dried-figs-100": "driedFigs",
  "fig-leaf-tea": "figTea",
  "fig-lemonade": "figDrink",
  "fig-juice": "figDrink",
  "fig-jam": "figJam",
  "fig-sambal": "figJam",
  "wellness-hamper": "giftHamper",
  "corporate-gift-set": "giftHamper",
  "masui-dauphine-sapling": "saplingNursery",
  "fig-sapling-medium": "saplingNursery",
  "fig-sapling-premium": "saplingNursery",
  "fig-cutting": "figLeaves",
  "starter-3-saplings": "saplingNursery",
  "farm-visit-ticket": "farmPeople",
};

/** Best photo for a product (specific slug first, then its category). */
export function photoForProduct(p: { slug: string; category: string }): ImageAsset | null {
  return photo(slugPhotoKey[p.slug]) ?? photo(categoryPhotoKey[p.category]);
}

export function photoForCategory(slug: string): ImageAsset | null {
  return photo(categoryPhotoKey[slug]);
}
