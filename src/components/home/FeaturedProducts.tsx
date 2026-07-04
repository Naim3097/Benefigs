import Link from "next/link";
import type { Product } from "@/lib/types";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProductGrid } from "@/components/product/ProductGrid";
import { buttonClasses } from "@/components/ui/Button";
import { IconArrowRight } from "@/components/ui/icons";

export function FeaturedProducts({
  eyebrow,
  title,
  description,
  products,
  viewAllHref = "/shop",
  viewAllLabel = "Shop all",
  tone = "paper",
  columns = 4,
  priorityCount = 0,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  products: Product[];
  viewAllHref?: string;
  viewAllLabel?: string;
  tone?: "paper" | "surface" | "deep";
  columns?: 2 | 3 | 4;
  priorityCount?: number;
}) {
  return (
    <Section tone={tone} space="lg" ariaLabel={title}>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <h2 className="mt-3 text-h2">{title}</h2>
            {description ? <p className="mt-3 text-lead text-ink-700">{description}</p> : null}
          </div>
          <Link
            href={viewAllHref}
            className="hidden items-center gap-1.5 font-semibold text-berry-700 hover:underline sm:inline-flex"
          >
            {viewAllLabel}
            <IconArrowRight width={20} height={20} />
          </Link>
        </div>

        <Reveal className="mt-10 lg:mt-12">
          <ProductGrid products={products} columns={columns} priorityCount={priorityCount} />
        </Reveal>

        <div className="mt-8 sm:hidden">
          <Link href={viewAllHref} className={buttonClasses({ variant: "outline", full: true })}>
            {viewAllLabel}
          </Link>
        </div>
      </Container>
    </Section>
  );
}
