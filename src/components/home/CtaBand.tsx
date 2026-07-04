import { Container, Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand() {
  return (
    <Section tone="berry" space="lg" ariaLabel="Mula membeli-belah">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 text-white">Rasai perbezaan kesegaran</h2>
          <p className="mx-auto mt-4 max-w-xl text-lead text-white/90">
            Pesan hari ini dan kami akan petik, bungkus dan hantar buah tin anda pada tahap terbaiknya.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/categories/fresh-figs" size="lg" variant="onDark">
              Beli buah tin segar
            </ButtonLink>
            <ButtonLink
              href="/farm-visit"
              size="lg"
              className="border-2 border-white/70 text-white hover:bg-white/10"
            >
              Lawati ladang
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
