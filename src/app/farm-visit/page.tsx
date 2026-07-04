import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { PageHero } from "@/components/marketing/PageHero";
import { Media } from "@/components/media/Media";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { FaqSection } from "@/components/marketing/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { IconSprout, IconLeaf, IconHeart, IconMapPin, IconClock, IconWhatsApp } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata({
  title: "Lawati Ladang — Petik Buah Tin Sendiri",
  description:
    "Lawati ladang buah tin Benefigs. Petik buah tin sendiri, rasa lebih 20 varieti dan belajar cara ia tumbuh. Hari keluar yang menyeronokkan untuk keluarga, sekolah dan kumpulan.",
  path: "/farm-visit",
});

const crumbs = [
  { name: "Laman utama", href: "/" },
  { name: "Lawati ladang", href: "/farm-visit" },
];

const activities = [
  { icon: IconSprout, title: "Petik & makan", body: "Petik buah tin segar terus dari pokok dan nikmati kemanisannya." },
  { icon: IconLeaf, title: "Lawatan ladang", body: "Terokai ladang moden kami dengan sistem canggih dan mesra alam." },
  { icon: IconHeart, title: "Rasa 20+ varieti", body: "Cuba pelbagai jenis buah tin dengan rasa, warna dan tekstur tersendiri." },
];

const farmFaqs = [
  {
    question: "Berapa harga masuk?",
    answer: "Tiket masuk RM5 untuk dewasa dan RM3 untuk kanak-kanak serta warga emas. Buah yang anda petik ditimbang dan dibayar berasingan pada akhir lawatan.",
  },
  {
    question: "Perlukah saya menempah lebih awal?",
    answer: "Pelawat tanpa tempahan dialu-alukan pada waktu operasi, tetapi kami amat menggalakkan tempahan awal untuk kumpulan, sekolah dan lawatan hujung minggu.",
  },
  {
    question: "Sesuai untuk kanak-kanak?",
    answer: "Sudah tentu! Memetik buah tin ialah pengalaman yang menyeronokkan dan mendidik untuk kanak-kanak dan keluarga.",
  },
  {
    question: "Apa yang perlu saya bawa?",
    answer: "Pakai kasut yang selesa dan bawa topi — ini ladang yang beroperasi. Kami sediakan bakul, sarung tangan dan beg untuk hasil petikan anda.",
  },
];

export default function FarmVisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Pengalaman Benefigs"
        title="Lawati ladang buah tin kami"
        lead="Meredah barisan pokok, petik buah tin yang masih hangat dengan mentari, dan rasa lebih 20 varieti. Hari keluar yang tidak dilupakan."
        crumbs={crumbs}
      />

      <Section space="md">
        <Container>
          <Reveal>
            <Media
              image={{ alt: "Keluarga memetik buah tin bersama di ladang Benefigs", motif: "farm" }}
              ratio="16 / 9"
              rounded="2xl"
              accent="leaf"
              sizes="100vw"
            />
          </Reveal>
        </Container>
      </Section>

      <Section space="lg">
        <Container>
          <SectionHeading eyebrow="Apa yang menanti anda" title="Satu destinasi, 20+ rasa tak terlupakan" align="center" />
          <Reveal className="mt-12 grid gap-6 md:grid-cols-3">
            {activities.map((a) => (
              <div key={a.title} className="rounded-2xl border border-line-200 bg-surface p-7 text-center">
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-leaf-50 text-leaf-700">
                  <a.icon width={28} height={28} />
                </span>
                <h3 className="mt-5 text-[1.3rem] font-medium text-ink-900">{a.title}</h3>
                <p className="mt-2 text-ink-700">{a.body}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Visit info + booking */}
      <Section tone="deep" space="lg">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-h2">Rancang lawatan anda</h2>
            <ul className="mt-6 flex flex-col gap-4 text-ink-700">
              <li className="flex items-start gap-3">
                <IconClock width={24} height={24} className="mt-0.5 shrink-0 text-berry-700" />
                <span>
                  <span className="block font-medium text-ink-900">Waktu operasi</span>
                  {site.hours.display}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <IconMapPin width={24} height={24} className="mt-0.5 shrink-0 text-berry-700" />
                <span>
                  <span className="block font-medium text-ink-900">Lokasi ladang</span>
                  Ladang di Selangor, Pahang, Melaka &amp; Kelantan. Hubungi kami untuk lokasi terdekat.
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`https://wa.me/${site.whatsapp}`} size="lg">
                <IconWhatsApp width={20} height={20} />
                Tempah melalui WhatsApp
              </ButtonLink>
              <ButtonLink href="/contact" size="lg" variant="outline">
                Hubungi kami
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-2xl border border-line-200 bg-surface p-8">
            <h3 className="text-h3">Tiket masuk</h3>
            <ul className="mt-5 divide-y divide-line-200">
              <li className="flex items-center justify-between py-3">
                <span className="text-ink-800">Dewasa</span>
                <span className="text-[1.3rem] font-semibold text-ink-900">RM5</span>
              </li>
              <li className="flex items-center justify-between py-3">
                <span className="text-ink-800">Kanak-kanak &amp; warga emas</span>
                <span className="text-[1.3rem] font-semibold text-ink-900">RM3</span>
              </li>
            </ul>
            <p className="mt-4 text-small text-ink-500">
              Buah tin yang anda petik ditimbang dan dibayar berasingan pada akhir lawatan.
            </p>
          </div>
        </Container>
      </Section>

      <Section space="lg" ariaLabel="Soalan lazim">
        <Container size="prose">
          <h2 className="text-h2">Soalan lazim</h2>
          <div className="mt-6">
            <FaqSection faqs={farmFaqs} />
          </div>
        </Container>
      </Section>

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
