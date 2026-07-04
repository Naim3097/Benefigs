import { Container, Section } from "@/components/ui/Section";

const stats = [
  { value: "6", label: "Ladang di seluruh Malaysia" },
  { value: "28+", label: "Varieti buah tin premium" },
  { value: "Setiap hari", label: "Tuaian segar" },
  { value: "MyGAP", label: "Kualiti bertauliah" },
];

export function TrustStats() {
  return (
    <Section tone="deep" space="sm" ariaLabel="Benefigs dalam angka">
      <Container>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-8 text-center md:grid-cols-4">
          {stats.map((s) => (
            <li key={s.label}>
              <p className="font-display text-[2rem] font-medium leading-none text-berry-700 sm:text-[2.4rem]">
                {s.value}
              </p>
              <p className="mt-2 text-[1.02rem] text-ink-700">{s.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
