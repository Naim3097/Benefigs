import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container, Section } from "@/components/ui/Section";
import { PageHero } from "@/components/marketing/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Penghantaran & Penghantaran",
  description:
    "Maklumat penghantaran Benefigs — kawasan, kadar, masa penghantaran dan cara kami memastikan buah tin segar sampai dalam keadaan terbaik.",
  path: "/shipping",
});

const crumbs = [
  { name: "Laman utama", href: "/" },
  { name: "Penghantaran", href: "/shipping" },
];

export default function ShippingPage() {
  return (
    <>
      <PageHero
        eyebrow="Bantuan"
        title="Penghantaran & penghantaran"
        lead="Kami menghantar ke seluruh Malaysia dan mengambil berat tentang setiap bungkusan — terutamanya buah tin segar."
        crumbs={crumbs}
        size="prose"
      />
      <Section space="lg">
        <Container size="prose">
          <div className="longform">
            <h2>Kawasan penghantaran</h2>
            <p>
              Kami menghantar ke seluruh Semenanjung Malaysia serta Sabah dan Sarawak. Sesetengah lokasi
              pedalaman mungkin mengambil masa lebih lama.
            </p>

            <h2>Kadar &amp; masa penghantaran</h2>
            <ul>
              <li>
                <strong>Semenanjung Malaysia:</strong> kadar rata <strong>RM10</strong>, atau{" "}
                <strong>penghantaran percuma</strong> untuk pesanan melebihi{" "}
                {site.currencySymbol}
                {site.policy.freeShippingThreshold}. Anggaran 2–4 hari bekerja. <em>[PLACEHOLDER — sahkan kadar sebenar]</em>
              </li>
              <li>
                <strong>Sabah &amp; Sarawak:</strong> kadar dikira semasa pembayaran. Anggaran 3–6 hari bekerja.
                <em> [PLACEHOLDER]</em>
              </li>
            </ul>

            <h2>Buah tin segar</h2>
            <p>
              Kesegaran ialah keutamaan kami. Buah tin segar dipetik masak, dibungkus sejuk dengan pelapik
              penebat dan dihantar pada hari sama atau keesokannya melalui kurier ekspres. Untuk mengelakkan
              hujung minggu dalam transit, pesanan buah segar biasanya dihantar pada awal minggu (Isnin–Rabu).
              Sila simpan dalam peti sejuk sebaik sampai.
            </p>

            <h2>Pokok &amp; anak pokok</h2>
            <p>
              Anak pokok dibungkus rapi untuk melindungi akar dan daun semasa transit, dan boleh dihantar pada
              bila-bila hari bekerja. Teh, jem dan produk tidak mudah rosak yang lain juga dihantar sepanjang minggu.
            </p>

            <h2>Menjejak pesanan anda</h2>
            <p>
              Sebaik pesanan anda dihantar, kami akan e-melkan nombor penjejakan. Anda juga boleh menyemak status
              pesanan dalam <a href="/account/orders">akaun anda</a>.
            </p>

            <h2>Soalan?</h2>
            <p>
              Hubungi kami di <a href={`mailto:${site.salesEmail}`}>{site.salesEmail}</a> atau{" "}
              <a href={`https://wa.me/${site.whatsapp}`}>WhatsApp {site.whatsappDisplay}</a> dan kami dengan senang hati membantu.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
