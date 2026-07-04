import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container, Section } from "@/components/ui/Section";
import { PageHero } from "@/components/marketing/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terma Perkhidmatan",
  description: "Terma dan syarat penggunaan laman web dan pembelian dari Benefigs.",
  path: "/terms",
});

const crumbs = [
  { name: "Laman utama", href: "/" },
  { name: "Terma perkhidmatan", href: "/terms" },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Undang-undang" title="Terma perkhidmatan" crumbs={crumbs} size="prose" />
      <Section space="lg">
        <Container size="prose">
          <div className="longform">
            <p>
              Dengan menggunakan laman web ini dan membuat pembelian daripada {site.legalName}, anda bersetuju
              dengan terma berikut. Sila baca dengan teliti.
            </p>

            <h2>Produk &amp; harga</h2>
            <p>
              Kami berusaha memaparkan produk dan harga dengan tepat. Sebagai produk pertanian semula jadi, buah
              tin segar mungkin sedikit berbeza dari segi saiz, warna dan rupa. Harga dalam Ringgit Malaysia (RM)
              dan boleh berubah tanpa notis awal.
            </p>

            <h2>Pesanan &amp; pembayaran</h2>
            <p>
              Semua pesanan tertakluk kepada ketersediaan dan pengesahan. Pembayaran diproses dengan selamat
              melalui Lean.X. Kami berhak menolak atau membatalkan sebarang pesanan atas budi bicara kami.
            </p>

            <h2>Penghantaran &amp; risiko</h2>
            <p>
              Anggaran masa penghantaran adalah panduan sahaja. Risiko kerosakan berpindah kepada anda apabila
              pesanan diserahkan kepada anda, tertakluk kepada{" "}
              <a href="/returns">jaminan kesegaran</a> kami.
            </p>

            <h2>Harta intelek</h2>
            <p>
              Semua kandungan di laman ini — termasuk teks, reka bentuk, logo dan imej — adalah milik{" "}
              {site.legalName} dan tidak boleh digunakan tanpa kebenaran.
            </p>

            <h2>Had liabiliti</h2>
            <p>
              Setakat yang dibenarkan undang-undang, {site.legalName} tidak bertanggungjawab atas sebarang
              kerugian tidak langsung yang timbul daripada penggunaan laman atau produk kami. Produk kami ialah
              makanan semula jadi dan bukan pengganti nasihat perubatan.
            </p>

            <h2>Undang-undang yang mentadbir</h2>
            <p>Terma ini ditadbir oleh undang-undang Malaysia.</p>

            <h2>Hubungi kami</h2>
            <p>
              Soalan tentang terma ini? E-mel <a href={`mailto:${site.salesEmail}`}>{site.salesEmail}</a>.
            </p>

            <p>
              <em>[PLACEHOLDER — semak dengan penasihat undang-undang; masukkan nombor pendaftaran SSM dan bidang kuasa sebelum dilancarkan.]</em>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
