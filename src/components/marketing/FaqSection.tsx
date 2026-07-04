import type { FAQ } from "@/lib/types";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";

/** Reusable FAQ block with built-in FAQPage structured data. */
export function FaqSection({ faqs, includeSchema = true }: { faqs: FAQ[]; includeSchema?: boolean }) {
  if (!faqs.length) return null;
  return (
    <>
      <Accordion items={faqs} />
      {includeSchema ? <JsonLd data={faqSchema(faqs)} /> : null}
    </>
  );
}
