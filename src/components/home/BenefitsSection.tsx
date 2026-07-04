import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { Stagger } from "@/components/motion/Stagger";
import { Media } from "@/components/media/Media";
import { photo } from "@/lib/images";
import { IconHeart, IconLeaf, IconSprout, IconShield } from "@/components/ui/icons";

const benefits = [
  {
    icon: IconHeart,
    title: "Jantung & kesejahteraan",
    body: "Kaya potasium dan antioksidan secara semula jadi — sebahagian daripada diet seimbang yang menyihatkan.",
  },
  {
    icon: IconLeaf,
    title: "Pencernaan yang baik",
    body: "Sumber serat pemakanan yang baik secara semula jadi untuk bantu anda rasa cergas setiap hari.",
  },
  {
    icon: IconSprout,
    title: "Tenaga semula jadi",
    body: "Manis dan mengenyangkan — snek semula jadi, tanpa apa-apa bahan tiruan.",
  },
  {
    icon: IconShield,
    title: "Ditanam bersih",
    body: "Bertauliah MyGAP dan ditanam tanpa pemasak buatan. Kebaikan yang boleh dipercayai.",
  },
];

const featureImage = photo("figsBowl") ?? { alt: "Buah tin segar dalam mangkuk", motif: "fig-halved" as const };

export function BenefitsSection() {
  return (
    <Section space="lg" ariaLabel="Mengapa buah tin">
      <Container className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <Eyebrow>Mengapa buah tin</Eyebrow>
          <h2 className="mt-3 text-h2">Buah kecil dengan kebaikan yang luar biasa</h2>
          <p className="mt-5 text-lead text-ink-700">
            Dihargai pelbagai budaya sejak berkurun — dan disebut dalam Al-Quran (Surah At-Tin) — buah
            tin sememangnya seberkhasiat rasanya.
          </p>
          <div className="mt-8">
            <Media
              image={featureImage}
              ratio="16 / 11"
              rounded="2xl"
              accent="berry"
              sizes="(max-width: 1024px) 92vw, 44vw"
              imgClassName="transition-transform duration-[1200ms] ease-soft hover:scale-[1.04]"
            />
          </div>
        </div>

        <div>
          <Stagger as="ul" gap={90} className="flex flex-col border-t border-line-200">
            {benefits.map((b) => (
              <li key={b.title} className="flex gap-5 border-b border-line-200 py-7">
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-berry-50 text-berry-700">
                  <b.icon width={28} height={28} />
                </span>
                <div>
                  <h3 className="text-[1.35rem] font-medium text-ink-900">{b.title}</h3>
                  <p className="mt-2 text-ink-700">{b.body}</p>
                </div>
              </li>
            ))}
          </Stagger>
          <p className="mt-6 text-small text-ink-500">
            Produk Benefigs ialah makanan semula jadi, bukan ubat, dan tidak bertujuan untuk mendiagnos,
            merawat atau mencegah sebarang penyakit.
          </p>
        </div>
      </Container>
    </Section>
  );
}
