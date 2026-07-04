import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container, Section } from "@/components/ui/Section";
import { PageHero } from "@/components/marketing/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Dasar Privasi",
  description: "Bagaimana Benefigs mengumpul, menggunakan dan melindungi data peribadi anda.",
  path: "/privacy",
  noindex: false,
});

const crumbs = [
  { name: "Laman utama", href: "/" },
  { name: "Dasar privasi", href: "/privacy" },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Undang-undang" title="Dasar privasi" crumbs={crumbs} size="prose" />
      <Section space="lg">
        <Container size="prose">
          <div className="longform">
            <p>
              Privasi anda penting bagi {site.legalName}. Dasar ini menerangkan maklumat yang kami kumpul dan
              cara kami menggunakannya, selaras dengan Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia.
            </p>

            <h2>Maklumat yang kami kumpul</h2>
            <ul>
              <li>Butiran yang anda berikan: nama, e-mel, telefon dan alamat penghantaran semasa membuat pesanan.</li>
              <li>Butiran pesanan dan pembayaran (diproses dengan selamat oleh Lean.X — kami tidak menyimpan butiran kad penuh anda).</li>
              <li>Data penggunaan laman melalui kuki dan alat analitis, jika diaktifkan.</li>
            </ul>

            <h2>Cara kami menggunakan maklumat anda</h2>
            <ul>
              <li>Untuk memproses dan menghantar pesanan anda.</li>
              <li>Untuk memberikan sokongan pelanggan dan mengemas kini status pesanan.</li>
              <li>Untuk menghantar berita dan tawaran — hanya jika anda melanggan, dan anda boleh berhenti pada bila-bila masa.</li>
              <li>Untuk menambah baik laman dan pengalaman membeli-belah kami.</li>
            </ul>

            <h2>Perkongsian maklumat</h2>
            <p>
              Kami berkongsi maklumat hanya dengan pihak yang membantu kami menjalankan perniagaan — gerbang
              pembayaran (Lean.X) dan rakan kurier — dan hanya setakat yang diperlukan untuk melaksanakan pesanan
              anda. Kami tidak menjual data peribadi anda.
            </p>

            <h2>Kuki &amp; analitis</h2>
            <p>
              Kami mungkin menggunakan kuki dan alat analitis (cth. Google Analytics, Meta Pixel, TikTok Pixel)
              untuk memahami penggunaan laman. Anda boleh mengurus kuki melalui tetapan pelayar anda.
            </p>

            <h2>Hak anda</h2>
            <p>
              Anda berhak untuk mengakses, membetulkan atau meminta pemadaman data peribadi anda. Untuk berbuat
              demikian, hubungi kami di <a href={`mailto:${site.salesEmail}`}>{site.salesEmail}</a>.
            </p>

            <p>
              <em>[PLACEHOLDER — semak dengan penasihat undang-undang sebelum dilancarkan. Kemas kini butiran pegawai perlindungan data jika berkenaan.]</em>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
