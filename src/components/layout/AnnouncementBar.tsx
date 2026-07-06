import { cn } from "@/lib/utils";
import { IconTruck, IconLeaf, IconShield } from "@/components/ui/icons";

/**
 * Slim trust bar above the header. Static + server-rendered (no layout shift,
 * no JS). Communicates the three highest-value reassurances at a glance.
 * Texts are kept short so each fits on one line at every breakpoint — no
 * mid-word clipping on narrow phones.
 */
export function AnnouncementBar() {
  const items = [
    { icon: IconTruck, text: "Penghantaran seluruh Malaysia" },
    { icon: IconLeaf, text: "Bertauliah MyGAP" },
    { icon: IconShield, text: "Jaminan segar 7 hari" },
  ];

  return (
    <div className="bg-aubergine text-paper">
      <div className="container-page">
        <ul className="flex items-center justify-center gap-x-10 gap-y-1 overflow-hidden py-2.5 text-[0.95rem]">
          {items.map((item, i) => (
            <li
              key={i}
              className={cn(
                "flex items-center gap-2 whitespace-nowrap",
                i === 0 ? "flex" : "hidden sm:flex",
                i === 2 ? "lg:flex" : "",
              )}
            >
              <item.icon width={18} height={18} className="text-honey-300" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
