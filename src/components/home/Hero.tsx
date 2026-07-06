import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Full-bleed hero. A single golden-hour orchard photograph fills the viewport
 * edge to edge; a brand-tinted scrim keeps the centered copy legible on both
 * desktop and mobile. The image is served via next/image (priority LCP,
 * per-device AVIF/WebP) and the symmetric composition crops cleanly to
 * portrait on phones.
 */
export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[max(34rem,82svh)] items-center justify-center overflow-hidden bg-aubergine"
      aria-labelledby="hero-heading"
    >
      {/* Full-bleed background photograph */}
      <Image
        src="/hero-orchard.jpg"
        alt="Ladang buah tin Benefigs pada waktu pagi — barisan pokok tin menghijau menuju banjaran berkabus"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Legibility scrim — flat brand tint guarantees contrast behind the
          centered copy; a gentle gradient adds depth without crushing the
          golden-hour foreground. */}
      <div aria-hidden className="absolute inset-0 bg-aubergine/40" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-aubergine/55 via-aubergine/15 to-aubergine/30"
      />

      {/* Centered copy */}
      <div className="relative z-10 mx-auto max-w-2xl px-5 py-28 text-center text-paper animate-rise-in">
        <p className="text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-honey-200 [text-shadow:0_1px_12px_rgba(0,0,0,0.4)]">
          Ladang buah tin premium Malaysia · Sejak 2018
        </p>
        <h1
          id="hero-heading"
          className="mt-5 text-hero text-white [text-shadow:0_2px_30px_rgba(20,8,16,0.5)]"
        >
          Buah tin segar, ditanam dengan teliti.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lead text-paper/90 [text-shadow:0_1px_18px_rgba(0,0,0,0.45)]">
          Dipetik masak, dihantar segar ke seluruh Malaysia.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/categories/fresh-figs" size="lg" variant="onDark">
            Beli buah tin segar
          </ButtonLink>
          <ButtonLink href="/shop" size="lg" variant="onDarkOutline">
            Terokai semua produk
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
