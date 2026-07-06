"use client";

import Link from "next/link";
import type { Product } from "@/lib/types";
import { useWishlist } from "@/context/wishlist";
import { getProductBySlug } from "@/lib/catalog";
import { Container, Section } from "@/components/ui/Section";
import { ProductGrid } from "@/components/product/ProductGrid";
import { FigMotif } from "@/components/media/FigMotif";
import { buttonClasses } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function WishlistView() {
  const { slugs, hydrated } = useWishlist();
  const products = slugs
    .map((s) => getProductBySlug(s))
    .filter((p): p is Product => Boolean(p));

  if (hydrated && products.length === 0) {
    return (
      <Section space="lg">
        <Container className="flex flex-col items-center py-10 text-center">
          <div className="relative size-32 overflow-hidden rounded-full">
            <FigMotif motif="fig-whole" accent="berry" />
          </div>
          <h1 className="mt-6 text-h1">Wishlist anda masih kosong</h1>
          <p className="mt-3 max-w-md text-lead text-ink-700">
            Simpan produk kegemaran anda dengan menekan ikon hati — ia akan muncul di sini.
          </p>
          <Link href="/shop" className={cn(buttonClasses({ variant: "primary", size: "lg" }), "mt-7")}>
            Terokai kedai
          </Link>
        </Container>
      </Section>
    );
  }

  return (
    <Section space="lg">
      <Container>
        <h1 className="text-h1">Wishlist anda</h1>
        <p className="mt-3 text-lead text-ink-700">Produk yang anda simpan untuk nanti.</p>
        <div className="mt-10">
          {!hydrated ? (
            <p className="text-ink-500">Sekejap ya…</p>
          ) : (
            <ProductGrid products={products} columns={4} />
          )}
        </div>
      </Container>
    </Section>
  );
}
