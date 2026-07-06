import Link from "next/link";
import type { Product } from "@/lib/types";
import { getProductBySlug } from "@/lib/catalog";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema";

import { Hero } from "@/components/home/Hero";
import { TrustStats } from "@/components/home/TrustStats";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { StorySection } from "@/components/home/StorySection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { FarmVisitSection } from "@/components/home/FarmVisitSection";
import { Testimonials } from "@/components/home/Testimonials";
import { Guarantees } from "@/components/home/Guarantees";
import { CtaBand } from "@/components/home/CtaBand";
import { FaqSection } from "@/components/marketing/FaqSection";

const bestsellerSlugs = [
  "masui-dauphine-fresh-figs",
  "cda-fresh-figs",
  "masui-dauphine-sapling",
  "fig-jam",
  "fig-leaf-tea",
  "wellness-hamper",
  "fig-lemonade",
  "dried-figs-100",
];

const homeFaqs = [
  {
    question: "Bagaimana anda memastikan buah tin kekal segar semasa penghantaran?",
    answer:
      "Buah tin segar dipetik masak, kemudian dibungkus sejuk dengan pelapik penebat dan dihantar pada hari sama atau keesokannya melalui kurier ekspres. Kami sarankan anda menyimpannya dalam peti sejuk sebaik sampai dan menikmatinya dalam beberapa hari.",
  },
  {
    question: "Ke mana anda menghantar?",
    answer:
      "Kami menghantar ke seluruh Semenanjung dan Malaysia Timur. Item segar yang mudah rosak dihantar pada awal minggu bagi mengelakkan hujung minggu dalam transit; pokok, teh dan jeruk boleh dihantar pada bila-bila hari.",
  },
  {
    question: "Betulkah buah tin boleh ditanam di Malaysia?",
    answer:
      "Sudah tentu. Ladang kami menanam buah tin sepanjang tahun menggunakan sistem rumah hijau dan fertigasi yang sesuai untuk tropika — sebab itu kami mampu menawarkan buah tin segar jauh selepas musim pendek luar negara berakhir. Anak pokok kami dipilih supaya subur dalam iklim tempatan.",
  },
  {
    question: "Bagaimana pokok tin dihantar?",
    answer:
      "Anak pokok dibungkus rapi untuk melindungi akar dan daun, dan dihantar ke seluruh negara bersama panduan menanam ringkas. Jika ada yang rosak semasa sampai, hubungi kami dalam 48 jam dan kami akan betulkan.",
  },
  {
    question: "Apakah kaedah pembayaran yang diterima?",
    answer:
      "Pembayaran dilindungi oleh Lean.X dan menyokong kad debit dan kredit, Online Banking (FPX) serta E-Wallet popular seperti GrabPay dan Touch ’n Go. Butiran pembayaran anda tidak pernah disimpan di pelayan kami.",
  },
  {
    question: "Perlukah saya menempah lawatan ladang lebih awal?",
    answer:
      "Pelawat tanpa tempahan dialu-alukan pada waktu operasi, tetapi kami amat menggalakkan tempahan awal — terutamanya untuk kumpulan, sekolah dan hujung minggu — supaya kami dapat memberi pengalaman terbaik.",
  },
];

export default function HomePage() {
  const bestsellers = bestsellerSlugs
    .map((s) => getProductBySlug(s))
    .filter((p): p is Product => Boolean(p));

  return (
    <>
      <Hero />
      <TrustStats />
      <CategoryShowcase />

      <FeaturedProducts
        eyebrow="Kegemaran pelanggan"
        title="Paling laris kami"
        description="Buah tin, pokok dan hidangan yang dipilih pelanggan kami berulang kali."
        products={bestsellers}
        viewAllHref="/shop"
        viewAllLabel="Beli semua produk"
        tone="deep"
      />

      <StorySection />
      <BenefitsSection />
      <FarmVisitSection />
      <Testimonials />
      <Guarantees />

      <Section space="lg" ariaLabel="Soalan lazim">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Eyebrow>Baik untuk diketahui</Eyebrow>
            <h2 className="mt-3 text-h2">Soalan, dijawab</h2>
            <p className="mt-4 text-ink-700">
              Semua yang anda perlu tahu untuk shopping dengan yakin. Masih tertanya-tanya?{" "}
              <Link href="/contact" className="link-underline font-semibold text-berry-700">
                Hubungi pasukan kami
              </Link>
              .
            </p>
          </div>
          <div>
            <FaqSection faqs={homeFaqs} />
          </div>
        </Container>
      </Section>

      <CtaBand />

      <JsonLd data={localBusinessSchema()} />
    </>
  );
}
