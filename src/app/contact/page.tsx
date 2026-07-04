import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { Container, Section } from "@/components/ui/Section";
import { PageHero } from "@/components/marketing/PageHero";
import { ContactForm } from "@/components/marketing/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { IconMapPin, IconClock, IconPhone, IconMail, IconWhatsApp } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata({
  title: "Hubungi Kami",
  description:
    "Hubungi Benefigs — soalan tentang buah tin, pesanan, tempahan lawatan ladang atau pertanyaan borong & korporat. Kami di sini untuk membantu.",
  path: "/contact",
});

const crumbs = [
  { name: "Laman utama", href: "/" },
  { name: "Hubungi kami", href: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Hubungi kami"
        title="Kami sedia membantu"
        lead="Ada soalan tentang buah tin, pesanan atau lawatan ladang? Hubungi kami — kami balas dengan pantas."
        crumbs={crumbs}
      />
      <Section space="lg">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="text-h3">Butiran perhubungan</h2>
            <ul className="mt-6 flex flex-col gap-5 text-ink-700">
              <li className="flex gap-4">
                <IconMapPin width={24} height={24} className="mt-0.5 shrink-0 text-berry-700" />
                <span>
                  <span className="block font-medium text-ink-900">{site.address.label}</span>
                  {site.address.line1}, {site.address.city}, {site.address.state}
                </span>
              </li>
              <li className="flex gap-4">
                <IconClock width={24} height={24} className="mt-0.5 shrink-0 text-berry-700" />
                <span>
                  <span className="block font-medium text-ink-900">Waktu operasi</span>
                  {site.hours.display}
                </span>
              </li>
              <li className="flex gap-4">
                <IconPhone width={24} height={24} className="mt-0.5 shrink-0 text-berry-700" />
                <span>
                  <span className="block font-medium text-ink-900">Telefon</span>
                  <a href={`tel:${site.phoneHref}`} className="link-underline">
                    {site.phoneDisplay}
                  </a>
                </span>
              </li>
              <li className="flex gap-4">
                <IconMail width={24} height={24} className="mt-0.5 shrink-0 text-berry-700" />
                <span>
                  <span className="block font-medium text-ink-900">E-mel</span>
                  <a href={`mailto:${site.salesEmail}`} className="link-underline">
                    {site.salesEmail}
                  </a>
                </span>
              </li>
              <li className="flex gap-4">
                <IconWhatsApp width={24} height={24} className="mt-0.5 shrink-0 text-berry-700" />
                <span>
                  <span className="block font-medium text-ink-900">WhatsApp</span>
                  <a href={`https://wa.me/${site.whatsapp}`} className="link-underline">
                    {site.whatsappDisplay}
                  </a>
                </span>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-2xl border border-line-200">
              <div className="grid aspect-[16/10] place-items-center bg-paper-deep text-center text-ink-500">
                <span className="px-6">
                  [PLACEHOLDER — peta lokasi ladang]
                  <br />
                  <span className="text-small">Benamkan Google Map di sini</span>
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-h3">Hantar mesej kepada kami</h2>
            <p className="mt-2 text-ink-700">Isi borang di bawah dan kami akan menghubungi anda semula.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(crumbs)]} />
    </>
  );
}
