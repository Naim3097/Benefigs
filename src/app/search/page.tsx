import type { Metadata } from "next";
import Link from "next/link";
import { searchProducts } from "@/lib/catalog";
import { copy } from "@/lib/copy";
import { Container, Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProductGrid } from "@/components/product/ProductGrid";
import { IconSearch } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Carian",
  description: "Cari buah tin segar, pokok tin, makanan dan hadiah Benefigs.",
  robots: { index: false, follow: true },
};

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const results = query ? searchProducts(query) : [];
  const crumbs = [
    { name: "Laman utama", href: "/" },
    { name: "Carian", href: "/search" },
  ];

  return (
    <Section space="md">
      <Container>
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-6 text-h1">{query ? copy.search.resultsFor(query) : "Cari"}</h1>

        <form action="/search" method="get" role="search" className="mt-6 flex max-w-xl gap-2">
          <label htmlFor="q" className="sr-only">
            {copy.common.searchProducts}
          </label>
          <input
            id="q"
            name="q"
            type="search"
            defaultValue={query}
            placeholder={copy.search.placeholder}
            className="h-[52px] min-w-0 flex-1 rounded-md border border-line-300 bg-surface px-4 text-[1.05rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-berry-500"
          />
          <button
            type="submit"
            className="inline-flex min-h-[52px] shrink-0 items-center gap-2 rounded-md bg-berry-700 px-6 font-semibold text-white hover:bg-berry-800"
          >
            <IconSearch width={20} height={20} />
            <span className="hidden sm:inline">{copy.common.search}</span>
          </button>
        </form>

        <div className="mt-10">
          {!query ? (
            <p className="text-ink-500">Masukkan kata kunci untuk mula mencari.</p>
          ) : results.length ? (
            <>
              <p className="mb-6 text-ink-500">{results.length} hasil</p>
              <ProductGrid products={results} columns={4} />
            </>
          ) : (
            <div className="py-10 text-center">
              <p className="text-lead text-ink-700">{copy.search.noResults(query)}</p>
              <Link href="/shop" className="mt-3 inline-block font-semibold text-berry-700 hover:underline">
                {copy.search.browseAll}
              </Link>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
