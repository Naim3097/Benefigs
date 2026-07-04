import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug, getProductsByCategory } from "@/lib/catalog";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { Container, Section } from "@/components/ui/Section";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProductListing } from "@/components/product/ProductListing";
import { FaqSection } from "@/components/marketing/FaqSection";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return buildMetadata({
    title: category.name,
    description: category.description,
    path: `/categories/${slug}`,
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const products = getProductsByCategory(slug);
  const crumbs: Crumb[] = [
    { name: "Laman utama", href: "/" },
    { name: "Kedai", href: "/shop" },
    { name: category.name, href: `/categories/${slug}` },
  ];

  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs items={crumbs} />
      </Container>
      <Section space="md">
        <Container>
          <p className="eyebrow">{category.tagline}</p>
          <h1 className="mt-3 text-h1">{category.name}</h1>
          <p className="mt-3 max-w-2xl text-lead text-ink-700">{category.description}</p>
          <div className="mt-10">
            <ProductListing products={products} />
          </div>
        </Container>
      </Section>

      {category.faqs?.length ? (
        <Section tone="surface" space="lg" ariaLabel="Soalan lazim">
          <Container size="prose">
            <h2 className="text-h2">Soalan lazim</h2>
            <div className="mt-6">
              <FaqSection faqs={category.faqs} />
            </div>
          </Container>
        </Section>
      ) : null}

      <JsonLd data={[breadcrumbSchema(crumbs), itemListSchema(products, category.name)]} />
    </>
  );
}
