import { Container, Section } from "@/components/ui/Section";

export default function Loading() {
  return (
    <Section space="lg" aria-busy="true" aria-live="polite">
      <Container>
        <div className="h-10 w-2/3 max-w-md animate-pulse rounded-lg bg-paper-deep" />
        <div className="mt-4 h-5 w-full max-w-xl animate-pulse rounded bg-paper-deep" />
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i}>
              <div className="aspect-[4/5] w-full animate-pulse rounded-lg bg-paper-deep" />
              <div className="mt-4 h-5 w-3/4 animate-pulse rounded bg-paper-deep" />
              <div className="mt-2 h-4 w-1/2 animate-pulse rounded bg-paper-deep" />
            </div>
          ))}
        </div>
        <span className="sr-only">Memuatkan…</span>
      </Container>
    </Section>
  );
}
