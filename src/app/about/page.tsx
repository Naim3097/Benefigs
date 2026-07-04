import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Container, Section, Eyebrow, SectionHeading } from "@/components/ui/Section";
import { PageHero } from "@/components/marketing/PageHero";
import { Media } from "@/components/media/Media";
import { Reveal } from "@/components/ui/Reveal";
import { TrustStats } from "@/components/home/TrustStats";
import { CtaBand } from "@/components/home/CtaBand";
import { IconLeaf, IconShield, IconSprout, IconHeart } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata({
  title: "Kisah Kami",
  description:
    "Daripada satu ladang kecil di Janda Baik kepada enam ladang di seluruh negara — kisah Benefigs, peneraju industri buah tin Malaysia yang bertauliah MyGAP.",
  path: "/about",
});

const crumbs = [
  { name: "Laman utama", href: "/" },
  { name: "Kisah kami", href: "/about" },
];

const values = [
  { icon: IconSprout, title: "Pertanian moden", body: "Sistem rumah hijau dan fertigasi yang membolehkan buah tin berbuah sepanjang tahun." },
  { icon: IconShield, title: "Kualiti terjamin", body: "Ladang bertauliah MyGAP, ditanam tanpa pemasak buatan." },
  { icon: IconHeart, title: "Memperkasa komuniti", body: "Menyokong ekonomi FELDA dan usahawan tempatan, 100% tenaga kerja tempatan." },
  { icon: IconLeaf, title: "Lestari & bertanggungjawab", body: "Amalan mesra alam untuk generasi akan datang." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Kisah kami"
        title="Daripada satu ladang kecil kepada peneraju buah tin Malaysia"
        lead="Kami percaya Malaysia mampu menanam buah tin bertaraf dunia. Inilah perjalanan kami untuk membuktikannya."
        crumbs={crumbs}
      />

      <Section space="lg">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Media
              image={{ alt: "Barisan pokok tin di ladang Benefigs di bawah cahaya matahari Malaysia", motif: "farm" }}
              ratio="4 / 3"
              rounded="2xl"
              accent="leaf"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="longform">
              <p>
                Pada tahun {site.founded}, pengasas kami {site.founder} meninggalkan kerjaya kejuruteraan global
                bersama Petronas Carigali untuk mengejar satu impian yang mudah namun berani: menanam buah tin
                bertaraf dunia di tanah air sendiri.
              </p>
              <p>
                Bermula daripada satu ladang kecil di Janda Baik, Benefigs kini menjaga enam ladang di seluruh
                negara — merentasi Selangor, Pahang, Melaka dan Kelantan — serta keluarga buah, pokok dan makanan
                artisan yang semakin berkembang.
              </p>
              <p>
                Namun sepanjang pertumbuhan itu, satu perkara tidak pernah berubah: ketelitian yang kami curahkan
                pada setiap pokok, dan kebanggaan pada setiap buah tin yang kami bawa ke meja anda.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <TrustStats />

      <Section space="lg">
        <Container>
          <SectionHeading
            eyebrow="Nilai kami"
            title="Apa yang mendorong kami"
            description="Prinsip yang membimbing setiap keputusan, daripada ladang hingga ke pintu anda."
            align="center"
          />
          <Reveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line-200 bg-surface p-7 text-center">
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-berry-50 text-berry-700">
                  <v.icon width={28} height={28} />
                </span>
                <h3 className="mt-5 text-[1.3rem] font-medium text-ink-900">{v.title}</h3>
                <p className="mt-2 text-ink-700">{v.body}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      <Section tone="surface" space="lg">
        <Container>
          <SectionHeading eyebrow="Rangkaian ladang kami" title="Enam ladang di seluruh Malaysia" align="center" />
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {site.farms.map((farm) => (
              <li key={`${farm.name}-${farm.state}`} className="rounded-xl border border-line-200 bg-paper p-5">
                <p className="text-[1.15rem] font-medium text-ink-900">{farm.name}</p>
                <p className="text-ink-500">{farm.state}</p>
                <p className="mt-2 text-small text-ink-500">{farm.company}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section space="lg">
        <Container size="prose" className="text-center">
          <Eyebrow>Falsafah kami</Eyebrow>
          <blockquote className="mt-4 font-display text-h2 leading-tight text-ink-900">
            “Pertanian bukan sekadar tanaman — ia amanah, inovasi dan warisan untuk masa depan.”
          </blockquote>
          <p className="mt-5 font-medium text-ink-700">
            {site.founder}
            <span className="block font-normal text-ink-500">Pengasas &amp; Ketua Pegawai Eksekutif, {site.legalName}</span>
          </p>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
