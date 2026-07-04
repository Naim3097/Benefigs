"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/lib/types";
import { getProductBySlug } from "@/lib/catalog";
import { Container, Section } from "@/components/ui/Section";
import { ProductGrid } from "./ProductGrid";

const STORAGE_KEY = "benefigs.recent.v1";

/** Records the current product and shows previously-viewed products (client). */
export function RecentlyViewed({ currentSlug }: { currentSlug: string }) {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    let list: string[] = [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      if (Array.isArray(parsed)) list = parsed.filter((s) => typeof s === "string");
    } catch {
      /* ignore */
    }

    const others = list.filter((s) => s !== currentSlug);
    const products = others
      .map((s) => getProductBySlug(s))
      .filter((p): p is Product => Boolean(p))
      .slice(0, 4);
    setItems(products);

    const next = [currentSlug, ...others].slice(0, 8);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }, [currentSlug]);

  if (items.length === 0) return null;

  return (
    <Section space="lg" ariaLabel="Baru dilihat">
      <Container>
        <h2 className="text-h2">Baru dilihat</h2>
        <div className="mt-8">
          <ProductGrid products={items} columns={4} />
        </div>
      </Container>
    </Section>
  );
}
