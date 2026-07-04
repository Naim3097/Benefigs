import Link from "next/link";
import { Container, Section } from "@/components/ui/Section";
import { buttonClasses } from "@/components/ui/Button";
import { FigMotif } from "@/components/media/FigMotif";

export default function NotFound() {
  return (
    <Section space="lg">
      <Container size="prose" className="py-10 text-center">
        <div className="relative mx-auto size-28 overflow-hidden rounded-full">
          <FigMotif motif="fig-halved" accent="berry" />
        </div>
        <p className="mt-6 eyebrow">Ralat 404</p>
        <h1 className="mt-2 text-h1">Halaman tidak ditemui</h1>
        <p className="mt-3 text-lead text-ink-700">
          Maaf, kami tidak dapat mencari halaman yang anda cari. Mungkin ia telah dialihkan.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className={buttonClasses({ variant: "primary", size: "lg" })}>
            Ke laman utama
          </Link>
          <Link href="/shop" className={buttonClasses({ variant: "outline", size: "lg" })}>
            Ke kedai
          </Link>
        </div>
      </Container>
    </Section>
  );
}
