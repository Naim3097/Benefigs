"use client";

import { useMemo, useState } from "react";
import type { Category, Product } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ProductGrid } from "./ProductGrid";

const SORTS = [
  { id: "featured", label: "Pilihan" },
  { id: "price-asc", label: "Harga: rendah ke tinggi" },
  { id: "price-desc", label: "Harga: tinggi ke rendah" },
  { id: "rating", label: "Penilaian tertinggi" },
] as const;

export function ProductListing({
  products,
  categories,
}: {
  products: Product[];
  categories?: Category[];
}) {
  const [sort, setSort] = useState<string>("featured");
  const [cat, setCat] = useState<string>("all");

  const filtered = useMemo(() => {
    let list = cat === "all" ? products : products.filter((p) => p.category === cat);
    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => (a.price || Infinity) - (b.price || Infinity));
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return list;
  }, [products, cat, sort]);

  return (
    <div>
      {categories?.length ? (
        <div className="flex flex-wrap gap-2" role="group" aria-label="Tapis mengikut kategori">
          <Pill active={cat === "all"} onClick={() => setCat("all")}>
            Semua
          </Pill>
          {categories.map((c) => (
            <Pill key={c.slug} active={cat === c.slug} onClick={() => setCat(c.slug)}>
              {c.shortName ?? c.name}
            </Pill>
          ))}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-line-200 pb-4">
        <p className="text-ink-500" aria-live="polite">
          {filtered.length} produk
        </p>
        <label className="flex items-center gap-2 text-ink-700">
          <span>Susun:</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="h-11 rounded-md border border-line-300 bg-surface px-3 text-ink-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-berry-500"
          >
            {SORTS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-8">
        {filtered.length ? (
          <ProductGrid products={filtered} columns={4} />
        ) : (
          <p className="py-16 text-center text-lead text-ink-500">
            Tiada produk ditemui dalam kategori ini.
          </p>
        )}
      </div>
    </div>
  );
}

function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "min-h-11 rounded-full border-2 px-4 font-medium transition-colors",
        active ? "border-berry-700 bg-berry-50 text-berry-800" : "border-line-300 text-ink-800 hover:border-berry-300",
      )}
    >
      {children}
    </button>
  );
}
