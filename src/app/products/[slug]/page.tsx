import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, getCategoryBySlug, getRelatedProducts, products } from "@/lib/catalog";
import { photoForProduct } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { productSchema, breadcrumbSchema } from "@/lib/schema";
import { copy } from "@/lib/copy";
import { Container, Section } from "@/components/ui/Section";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductBuyBox } from "@/components/product/ProductBuyBox";
import { ProductReviews } from "@/components/product/ProductReviews";
import { ProductGrid } from "@/components/product/ProductGrid";
import { RecentlyViewed } from "@/components/product/RecentlyViewed";
import { FaqSection } from "@/components/marketing/FaqSection";
import { IconCheck } from "@/components/ui/icons";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return buildMetadata({
    title: product.seo?.title ?? product.name,
    description: product.seo?.description ?? product.shortDescription,
    path: `/products/${product.slug}`,
    type: "product",
  });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.category);
  const related = getRelatedProducts(product, 4);

  const ph = photoForProduct(product);
  const galleryImages = ph ? [{ ...product.images[0], src: ph.src }] : product.images;

  const crumbs: Crumb[] = [
    { name: "Laman utama", href: "/" },
    { name: "Kedai", href: "/shop" },
    ...(category ? [{ name: category.name, href: `/categories/${category.slug}` }] : []),
    { name: product.name, href: `/products/${product.slug}` },
  ];

  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs items={crumbs} />
      </Container>

      {/* Gallery + buy box */}
      <Section space="md">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <ProductGallery images={galleryImages} category={product.category} />
          <ProductBuyBox product={product} />
        </Container>
      </Section>

      {/* Details */}
      <Section tone="surface" space="lg" ariaLabel={copy.product.details}>
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <h2 className="text-h2">{copy.product.description}</h2>
            {product.description.map((para, i) => (
              <p key={i} className="mt-4 text-[1.15rem] leading-relaxed text-ink-700">
                {para}
              </p>
            ))}

            {product.highlights?.length ? (
              <>
                <h3 className="mt-10 text-h3">{copy.product.highlights}</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <IconCheck width={22} height={22} className="mt-0.5 shrink-0 text-leaf-600" />
                      <span className="text-ink-700">{h}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {product.usage?.length ? (
              <>
                <h3 className="mt-10 text-h3">{copy.product.howToUse}</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-700">
                  {product.usage.map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>

          {product.specs?.length ? (
            <aside>
              <div className="rounded-2xl border border-line-200 bg-paper p-6">
                <h3 className="text-h3">{copy.product.specifications}</h3>
                <dl className="mt-4 divide-y divide-line-200">
                  {product.specs.map((s) => (
                    <div key={s.label} className="flex justify-between gap-4 py-3">
                      <dt className="text-ink-500">{s.label}</dt>
                      <dd className="text-right font-medium text-ink-900">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          ) : null}
        </Container>
      </Section>

      <ProductReviews product={product} />

      {product.faqs?.length ? (
        <Section space="lg" ariaLabel="Soalan lazim">
          <Container size="prose">
            <h2 className="text-h2">Soalan lazim</h2>
            <div className="mt-6">
              <FaqSection faqs={product.faqs} />
            </div>
          </Container>
        </Section>
      ) : null}

      {related.length > 0 ? (
        <Section tone="deep" space="lg" ariaLabel={copy.product.related}>
          <Container>
            <h2 className="text-h2">{copy.product.related}</h2>
            <div className="mt-8">
              <ProductGrid products={related} columns={4} />
            </div>
          </Container>
        </Section>
      ) : null}

      <RecentlyViewed currentSlug={product.slug} />

      <JsonLd data={[productSchema(product), breadcrumbSchema(crumbs)]} />
    </>
  );
}
