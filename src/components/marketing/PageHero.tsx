import type { ReactNode } from "react";
import { Container, Section } from "@/components/ui/Section";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  size = "page",
  tone = "paper",
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  crumbs?: Crumb[];
  size?: "page" | "prose";
  tone?: "paper" | "surface" | "deep";
  children?: ReactNode;
}) {
  return (
    <Section tone={tone} space="md">
      <Container size={size}>
        {crumbs?.length ? <Breadcrumbs items={crumbs} className="mb-6" /> : null}
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-3 text-h1">{title}</h1>
        {lead ? <p className="mt-4 max-w-2xl text-lead text-ink-700">{lead}</p> : null}
        {children}
      </Container>
    </Section>
  );
}
