import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container, Section } from "@/components/ui/Section";
import { PageHero } from "@/components/marketing/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Pemulangan & Jaminan Kesegaran",
  description:
    "Jaminan kesegaran 7 hari Benefigs dan dasar pemulangan yang mudah. Kami mahu anda 100% berpuas hati dengan setiap pesanan.",
  path: "/returns",
});

const crumbs = [
  { name: "Laman utama", href: "/" },
  { name: "Pemulangan", href: "/returns" },
];

export default function ReturnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Bantuan"
        title="Pemulangan & jaminan kesegaran"
        lead="Kami mahu anda gembira dengan setiap pesanan. Jika ada yang tidak kena, kami akan betulkan."
        crumbs={crumbs}
        size="prose"
      />
      <Section space="lg">
        <Container size="prose">
          <div className="longform">
            <h2>Jaminan kesegaran 7 hari</h2>
            <p>
              Jika buah tin segar anda tiba dalam keadaan tidak sempurna, beritahu kami dalam masa{" "}
              <strong>48 jam</strong> selepas penerimaan dengan foto, dan kami akan menggantikannya atau
              memberikan bayaran balik penuh — tanpa kerumitan.
            </p>

            <h2>Anak pokok yang rosak</h2>
            <p>
              Kami membungkus anak pokok dengan teliti, tetapi jika ada yang tiba dalam keadaan rosak teruk,
              hubungi kami dalam masa <strong>48 jam</strong> dengan foto dan kami akan menggantikannya.
            </p>

            <h2>Item tidak mudah rosak</h2>
            <p>
              Jem, sambal, teh, minuman dan barangan bukan makanan boleh dipulangkan dalam masa{" "}
              <strong>7 hari</strong> jika belum dibuka dan dalam keadaan asal. Kos penghantaran pulangan
              ditanggung pembeli melainkan item tersebut rosak atau tersilap hantar.
            </p>

            <h2>Cara memulakan pemulangan</h2>
            <p>
              E-melkan kami di <a href={`mailto:${site.salesEmail}`}>{site.salesEmail}</a> dengan nombor pesanan
              anda dan penerangan ringkas (serta foto untuk item yang rosak). Kami akan membalas dalam satu hari
              bekerja dengan langkah seterusnya.
            </p>

            <h2>Bayaran balik</h2>
            <p>
              Bayaran balik yang diluluskan diproses ke kaedah pembayaran asal anda melalui Lean.X, biasanya
              dalam masa 5–10 hari bekerja bergantung pada bank anda.
            </p>

            <p>
              <em>
                [PLACEHOLDER — sahkan tempoh masa dan syarat pemulangan sebenar dengan pihak Benefigs sebelum
                dilancarkan.]
              </em>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
