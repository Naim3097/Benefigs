"use client";

import { Container, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <Section space="lg">
      <Container size="prose" className="py-10 text-center">
        <p className="eyebrow">Ada sesuatu yang tidak kena</p>
        <h1 className="mt-2 text-h1">Maaf, berlaku ralat</h1>
        <p className="mt-3 text-lead text-ink-700">
          Kami menghadapi masalah yang tidak dijangka. Sila cuba lagi — jika masalah berterusan, hubungi kami.
        </p>
        <div className="mt-7">
          <Button size="lg" onClick={reset}>
            Cuba lagi
          </Button>
        </div>
      </Container>
    </Section>
  );
}
