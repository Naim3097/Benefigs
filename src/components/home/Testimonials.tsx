import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { Stagger } from "@/components/motion/Stagger";
import { Stars } from "@/components/ui/Stars";

const testimonials = [
  {
    quote:
      "Buah tin paling segar pernah saya rasa — sampai dalam keadaan sejuk dan cukup masak, manis macam madu. Sekeluarga habiskan sekotak dalam satu duduk.",
    author: "Faridah A.",
    location: "Shah Alam",
    rating: 5,
  },
  {
    quote:
      "Anak pokok Masui Dauphine saya sampai sihat dan berakar baik, dan sudah berbuah di balkoni. Layanan yang hebat dari mula hingga akhir.",
    author: "Zul H.",
    location: "Rawang",
    rating: 5,
  },
  {
    quote:
      "Kami melawat ladang bersama anak-anak dan mereka seronok memetik buah tin sendiri. Hari keluar yang menyenangkan — kami pasti akan datang lagi.",
    author: "Keluarga Tan",
    location: "Lembah Klang",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <Section tone="surface" space="lg" ariaLabel="Ulasan pelanggan">
      <Container>
        <SectionHeading
          eyebrow="Disukai pelanggan"
          title="Rakyat Malaysia sayangkan Benefigs"
          description="Beribu keluarga di seluruh negara telah menjadikan buah tin segar tempatan sebahagian daripada minggu mereka."
          align="center"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="flex flex-col rounded-2xl border border-line-200 bg-paper p-7">
              <Stars rating={t.rating} size={20} />
              <blockquote className="mt-4 flex-1 text-[1.15rem] leading-relaxed text-ink-800">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 font-semibold text-ink-900">
                {t.author}
                <span className="font-normal text-ink-500"> · {t.location}</span>
              </figcaption>
            </figure>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
