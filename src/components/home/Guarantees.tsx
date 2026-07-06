import { Container, Section } from "@/components/ui/Section";
import { Stagger } from "@/components/motion/Stagger";
import { IconSprout, IconLeaf, IconTruck, IconShield } from "@/components/ui/icons";

const items = [
  {
    icon: IconSprout,
    title: "Jaminan kesegaran 7 hari",
    body: "Jika buah tin segar anda tidak sempurna ketika sampai, kami akan gantikan atau kembalikan wang anda.",
  },
  {
    icon: IconLeaf,
    title: "Kualiti bertauliah MyGAP",
    body: "Ditanam di ladang bertauliah kami sendiri, tanpa pemasak buatan.",
  },
  {
    icon: IconTruck,
    title: "Penghantaran sejuk seluruh negara",
    body: "Dibungkus sejuk dan dihantar pantas ke seluruh Semenanjung & Malaysia Timur.",
  },
  {
    icon: IconShield,
    title: "Pembayaran selamat",
    body: "Bayaran anda dilindungi — kad, Online Banking (FPX) dan E-Wallet.",
  },
];

export function Guarantees() {
  return (
    <Section tone="deep" space="md" ariaLabel="Janji kami kepada anda">
      <Container>
        <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-surface text-berry-700 shadow-xs">
                <item.icon width={24} height={24} />
              </span>
              <div>
                <h3 className="text-[1.15rem] font-medium text-ink-900">{item.title}</h3>
                <p className="mt-1 text-[1.02rem] text-ink-700">{item.body}</p>
              </div>
            </div>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
