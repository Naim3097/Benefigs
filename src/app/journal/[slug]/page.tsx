import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/journal";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { absoluteUrl, formatDate } from "@/lib/utils";
import { Container, Section } from "@/components/ui/Section";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { PageHero } from "@/components/marketing/PageHero";
import { Media } from "@/components/media/Media";
import { ArticleCard } from "@/components/journal/ArticleCard";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.seo?.title ?? article.title,
    description: article.seo?.description ?? article.excerpt,
    path: `/journal/${article.slug}`,
    type: "article",
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = (article.related ?? [])
    .map((s) => getArticleBySlug(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const crumbs: Crumb[] = [
    { name: "Laman utama", href: "/" },
    { name: "Jurnal", href: "/journal" },
    { name: article.title, href: `/journal/${article.slug}` },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: absoluteUrl(`/journal/${article.slug}`, site.url),
    articleSection: article.category,
  };

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        crumbs={crumbs}
        size="prose"
      >
        <p className="mt-4 text-ink-500">
          {formatDate(article.date)} · {article.readingMinutes} minit bacaan
        </p>
      </PageHero>

      <Section space="md">
        <Container size="prose">
          <Media image={article.image} ratio="16 / 9" rounded="2xl" accent="berry" priority sizes="(max-width: 768px) 100vw, 44rem" />
        </Container>
      </Section>

      <Section space="md">
        <Container size="prose">
          <div className="longform">
            {article.body.map((block, i) => {
              if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
              if (block.type === "ul")
                return (
                  <ul key={i}>
                    {block.items?.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                );
              return <p key={i}>{block.text}</p>;
            })}
          </div>
        </Container>
      </Section>

      {related.length > 0 ? (
        <Section tone="surface" space="lg" ariaLabel="Artikel berkaitan">
          <Container>
            <h2 className="text-h2">Baca seterusnya</h2>
            <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <JsonLd data={[articleSchema, breadcrumbSchema(crumbs)]} />
    </>
  );
}
