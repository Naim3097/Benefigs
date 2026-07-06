import { Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Media } from "@/components/media/Media";
import { Parallax } from "@/components/motion/Parallax";
import { Stars } from "@/components/ui/Stars";
import { photo } from "@/lib/images";
import { IconLeaf, IconTruck } from "@/components/ui/icons";

const heroImage = photo("heroFigs") ?? {
  alt: "Buah tin Malaysia yang masak, dibelah menampakkan isi merah pekatnya",
  motif: "fig-halved" as const,
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper" aria-labelledby="hero-heading">
      <Container className="grid grid-cols-1 items-center gap-12 py-14 lg:grid-cols-[1.02fr_1fr] lg:gap-16 lg:py-24">
        <div className="max-w-xl animate-rise-in">
          <p className="eyebrow">Ladang buah tin premium Malaysia · Sejak 2018</p>
          <h1 id="hero-heading" className="mt-5 text-hero text-ink-900">
            Buah tin segar,
            <br />
            ditanam dengan teliti.
          </h1>
          <p className="mt-6 text-lead text-ink-700">
            Buah tin masak di pokok, pokok tin yang sihat dan makanan tin artisan — ditanam di ladang
            bertauliah MyGAP kami sendiri dan dihantar segar ke seluruh Malaysia. Sedikit rasa syurga,
            sepanjang tahun.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/categories/fresh-figs" size="lg">
              Beli buah tin segar
            </ButtonLink>
            <ButtonLink href="/shop" size="lg" variant="outline">
              Terokai semua produk
            </ButtonLink>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <Stars rating={4.9} size={20} />
              <span className="text-ink-700">
                <strong className="text-ink-900">4.9</strong> daripada 900+ pelanggan gembira
              </span>
            </div>
            <span className="hidden h-5 w-px bg-line-300 sm:block" aria-hidden="true" />
            <div className="flex items-center gap-2 text-ink-700">
              <IconLeaf width={20} height={20} className="text-leaf-600" />
              Bertauliah MyGAP
            </div>
          </div>
        </div>

        {/* Layered image composition */}
        <div className="relative animate-rise-in [animation-delay:120ms]">
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -right-5 hidden h-[78%] w-[82%] rounded-[2rem] bg-leaf-100 sm:block"
          />
          <Parallax distance={46} className="relative overflow-hidden rounded-[1.75rem] shadow-lg">
            <Media
              image={heroImage}
              ratio="4 / 5"
              rounded="none"
              accent="berry"
              priority
              sizes="(max-width: 1024px) 90vw, 44vw"
              imgClassName="scale-[1.08]"
            />
          </Parallax>

          <div className="absolute -bottom-5 -left-3 hidden max-w-[15rem] rounded-xl border border-line-200 bg-surface p-4 shadow-md sm:block">
            <div className="flex items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-leaf-50 text-leaf-700">
                <IconTruck width={22} height={22} />
              </span>
              <p className="text-[1rem] leading-snug text-ink-800">
                <strong className="text-ink-900">Dibungkus sejuk &amp; dihantar</strong> segar ke seluruh negara.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
