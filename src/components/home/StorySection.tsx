import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Media } from "@/components/media/Media";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { photo } from "@/lib/images";

const storyImage = photo("figOrchard") ?? {
  alt: "Barisan pokok tin membesar di bawah cahaya matahari Malaysia di ladang Benefigs",
  motif: "farm" as const,
};

export function StorySection() {
  return (
    <Section tone="surface" space="lg" ariaLabel="Kisah kami">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Parallax distance={40} className="overflow-hidden rounded-2xl shadow-sm">
            <Media
              image={storyImage}
              ratio="4 / 3"
              rounded="none"
              accent="leaf"
              sizes="(max-width: 1024px) 90vw, 45vw"
              imgClassName="scale-[1.08]"
            />
          </Parallax>
        </Reveal>
        <Reveal delay={80}>
          <Eyebrow>Kisah kami</Eyebrow>
          <h2 className="mt-3 text-h2">Daripada satu ladang kecil kepada peneraju buah tin Malaysia</h2>
          <p className="mt-5 text-lead text-ink-700">
            Pada 2018, pengasas kami meninggalkan kerjaya kejuruteraan global untuk menanam satu ladang
            buah tin di Janda Baik — didorong keyakinan mudah bahawa Malaysia mampu menanam buah tin
            bertaraf dunia.
          </p>
          <p className="mt-4 text-ink-700">
            Hari ini, Benefigs menjaga enam ladang di seluruh negara serta keluarga buah, pokok dan
            makanan artisan yang semakin berkembang — semuanya masih dipandu oleh ketelitian yang sama
            sejak mula. Setiap buah tin yang kami jual ialah buah yang kami banggakan untuk dibawa ke
            meja anda.
          </p>
          <div className="mt-8">
            <ButtonLink href="/about" variant="outline" size="lg">
              Baca kisah kami
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
