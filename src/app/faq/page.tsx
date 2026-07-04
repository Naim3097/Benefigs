import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { Container, Section } from "@/components/ui/Section";
import { PageHero } from "@/components/marketing/PageHero";
import { FaqSection } from "@/components/marketing/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Soalan Lazim",
  description:
    "Jawapan kepada soalan lazim tentang buah tin segar, pokok tin, penghantaran, pembayaran, pemulangan dan lawatan ladang Benefigs.",
  path: "/faq",
});

const crumbs = [
  { name: "Laman utama", href: "/" },
  { name: "Soalan lazim", href: "/faq" },
];

const faqs = [
  {
    question: "Bagaimana anda memastikan buah tin kekal segar semasa penghantaran?",
    answer:
      "Buah tin segar dipetik masak, dibungkus sejuk dengan pelapik penebat dan dihantar pada hari sama atau keesokannya melalui kurier ekspres. Sila simpan dalam peti sejuk sebaik sampai dan nikmati dalam beberapa hari.",
  },
  {
    question: "Ke mana anda menghantar dan berapa lama masanya?",
    answer:
      "Kami menghantar ke seluruh Semenanjung Malaysia (anggaran 2–4 hari bekerja) serta Sabah & Sarawak (3–6 hari bekerja). Buah segar dihantar pada awal minggu untuk mengelakkan hujung minggu dalam transit.",
  },
  {
    question: "Adakah penghantaran percuma?",
    answer:
      "Ya — pesanan melebihi RM150 layak untuk penghantaran percuma ke Semenanjung Malaysia. Di bawah itu, kadar rata RM10 dikenakan. (Kadar akhir akan disahkan.)",
  },
  {
    question: "Betulkah buah tin boleh ditanam di Malaysia?",
    answer:
      "Sudah tentu. Ladang kami menanam buah tin sepanjang tahun menggunakan sistem rumah hijau dan fertigasi yang sesuai untuk tropika. Anak pokok kami dipilih supaya subur dalam iklim tempatan.",
  },
  {
    question: "Bagaimana pokok tin dihantar?",
    answer:
      "Anak pokok dibungkus rapi untuk melindungi akar dan daun, dan dihantar bersama panduan menanam ringkas. Jika ada yang rosak semasa sampai, hubungi kami dalam 48 jam dan kami akan menggantikannya.",
  },
  {
    question: "Adakah produk anda halal?",
    answer:
      "Ladang kami bertauliah MyGAP dan produk kami menggunakan bahan yang halal. (Status pensijilan halal rasmi akan disahkan.)",
  },
  {
    question: "Apakah kaedah pembayaran yang diterima?",
    answer:
      "Pembayaran dilindungi oleh Lean.X dan menyokong kad debit dan kredit, perbankan dalam talian FPX serta e-dompet popular seperti GrabPay dan Touch ’n Go.",
  },
  {
    question: "Bolehkah saya memulangkan pesanan?",
    answer:
      "Ya. Kami menawarkan jaminan kesegaran 7 hari untuk buah tin segar, dan item tidak mudah rosak yang belum dibuka boleh dipulangkan dalam masa 7 hari. Lihat halaman Pemulangan kami untuk butiran.",
  },
  {
    question: "Perlukah saya menempah lawatan ladang lebih awal?",
    answer:
      "Pelawat tanpa tempahan dialu-alukan pada waktu operasi, tetapi kami menggalakkan tempahan awal — terutamanya untuk kumpulan, sekolah dan hujung minggu.",
  },
  {
    question: "Adakah buah tin baik untuk kesihatan?",
    answer:
      "Buah tin kaya dengan serat, potasium dan antioksidan secara semula jadi, dan menjadi sebahagian yang baik dalam diet seimbang. Produk kami ialah makanan semula jadi, bukan ubat, dan tidak bertujuan mendiagnos, merawat atau mencegah sebarang penyakit.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Bantuan"
        title="Soalan lazim"
        lead="Semua yang anda perlu tahu untuk membeli-belah dengan yakin."
        crumbs={crumbs}
        size="prose"
      />
      <Section space="lg">
        <Container size="prose">
          <FaqSection faqs={faqs} />
          <p className="mt-8 text-ink-700">
            Masih ada soalan?{" "}
            <Link href="/contact" className="link-underline font-semibold text-berry-700">
              Hubungi pasukan kami
            </Link>{" "}
            — kami dengan senang hati membantu.
          </p>
        </Container>
      </Section>
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
