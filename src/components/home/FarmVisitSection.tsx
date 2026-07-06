import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Media } from "@/components/media/Media";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { photo } from "@/lib/images";
import { IconClock, IconMapPin } from "@/components/ui/icons";

const farmImage = photo("farmPeople") ?? {
  alt: "Sebuah keluarga memetik buah tin segar bersama di ladang Benefigs",
  motif: "farm" as const,
};

export function FarmVisitSection() {
  return (
    <Section tone="dark" space="lg" ariaLabel="Lawati ladang">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow onDark>Pengalaman Benefigs</Eyebrow>
          <h2 className="mt-3 text-h2 text-white">Datang petik buah tin anda sendiri</h2>
          <p className="mt-5 text-lead text-paper/85">
            Meredah barisan pokok, petik buah tin yang masih hangat dengan cahaya matahari, dan rasa
            lebih 20 varieti. Hari keluar yang santai dan bermakna untuk keluarga, sekolah dan kumpulan.
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-paper/85">
            <li className="flex items-center gap-3">
              <IconClock width={22} height={22} className="shrink-0 text-honey-300" />
              Buka setiap hari, 9:00 pagi – 6:00 petang
            </li>
            <li className="flex items-center gap-3">
              <IconMapPin width={22} height={22} className="shrink-0 text-honey-300" />
              Ladang di Selangor, Pahang, Melaka &amp; Kelantan
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-x-5 gap-y-3 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink
              href="/farm-visit"
              size="lg"
              variant="onDark"
              className="shrink-0 whitespace-nowrap"
            >
              Rancang lawatan anda
            </ButtonLink>
            <span className="max-w-xs text-paper/80 sm:max-w-none">
              Masuk dari RM5 · kanak-kanak &amp; warga emas RM3
            </span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <Parallax distance={40} className="overflow-hidden rounded-2xl shadow-md">
            <Media
              image={farmImage}
              ratio="4 / 3"
              rounded="none"
              accent="honey"
              sizes="(max-width: 1024px) 90vw, 45vw"
              imgClassName="scale-[1.08]"
            />
          </Parallax>
        </Reveal>
      </Container>
    </Section>
  );
}
