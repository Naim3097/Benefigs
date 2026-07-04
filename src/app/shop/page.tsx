import type { Metadata } from "next";
import { getAllProducts, getFeaturedCategories } from "@/lib/catalog";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { Container, Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProductListing } from "@/components/product/ProductListing";

export const metadata: Metadata = buildMetadata({
  title: "Kedai — Semua Produk Buah Tin",
  description:
    "Beli buah tin segar, pokok tin, jem, sambal, teh daun tin, minuman dan hamper hadiah dari Benefigs. Ditanam di Malaysia, dihantar ke seluruh negara.",
  path: "/shop",
});

export default function ShopPage() {
  const products = getAllProducts();
  const categories = getFeaturedCategories().filter((c) => c.slug !== "farm-experience");
  const crumbs = [
    { name: "Laman utama", href: "/" },
    { name: "Kedai", href: "/shop" },
  ];

  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs items={crumbs} />
      </Container>
      <Section space="md">
        <Container>
          <h1 className="text-h1">Kedai</h1>
          <p className="mt-3 max-w-2xl text-lead text-ink-700">
            Segala buah tin di satu tempat — buah segar, pokok, makanan artisan, minuman dan hadiah,
            dihantar segar ke seluruh Malaysia.
          </p>
          <div className="mt-10">
            <ProductListing products={products} categories={categories} />
          </div>
        </Container>
      </Section>
      <JsonLd data={[breadcrumbSchema(crumbs), itemListSchema(products, "Semua produk Benefigs")]} />
    </>
  );
}
