import { IconTruck, IconLeaf, IconShield } from "@/components/ui/icons";

/**
 * Slim trust bar above the header. Static + server-rendered (no layout shift).
 * On tablet/desktop all three reassurances fit and sit centred. On mobile —
 * where only one would fit — they scroll as a gentle continuous ticker so every
 * message is seen (paused entirely under prefers-reduced-motion). Texts are kept
 * short so nothing clips mid-word.
 */
const items = [
  { Icon: IconTruck, text: "Penghantaran seluruh Malaysia" },
  { Icon: IconLeaf, text: "Bertauliah MyGAP" },
  { Icon: IconShield, text: "Jaminan segar 7 hari" },
];

function Item({ Icon, text }: (typeof items)[number]) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <Icon width={18} height={18} className="text-honey-300" />
      {text}
    </span>
  );
}

export function AnnouncementBar() {
  return (
    <div className="bg-aubergine text-paper text-[0.95rem]">
      {/* Tablet & up: static, centred — all three fit on one line */}
      <div className="container-page hidden sm:block">
        <ul className="flex items-center justify-center gap-x-10 py-2.5">
          {items.map((it, i) => (
            <li key={i}>
              <Item {...it} />
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile: continuous ticker (two identical groups; -50% loop is seamless) */}
      <div className="overflow-hidden py-2.5 sm:hidden">
        <div className="flex w-max animate-marquee">
          <ul className="flex shrink-0 items-center gap-x-9 pr-9 pl-5">
            {items.map((it, i) => (
              <li key={i}>
                <Item {...it} />
              </li>
            ))}
          </ul>
          <ul className="flex shrink-0 items-center gap-x-9 pr-9 pl-5" aria-hidden="true">
            {items.map((it, i) => (
              <li key={i}>
                <Item {...it} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
