import type { Metadata } from "next";
import { articles } from "@/lib/journal";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { Container, Section } from "@/components/ui/Section";
import { PageHero } from "@/components/marketing/PageHero";
import { ArticleCard } from "@/components/journal/ArticleCard";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Jurnal Benefigs",
  description:
    "Tip menanam, khasiat buah tin, resepi dan cerita dari ladang. Panduan dan inspirasi daripada peneraju buah tin Malaysia.",
  path: "/journal",
});

const crumbs = [
  { name: "Laman utama", href: "/" },
  { name: "Jurnal", href: "/journal" },
];

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Jurnal Benefigs"
        title="Panduan, khasiat & cerita dari ladang"
        lead="Tip menanam, khasiat buah tin dan inspirasi untuk menikmati buah tin dalam kehidupan seharian anda."
        crumbs={crumbs}
      />
      <Section space="lg">
        <Container>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a, i) => (
              <ArticleCard key={a.slug} article={a} priority={i < 3} />
            ))}
          </div>
        </Container>
      </Section>
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
