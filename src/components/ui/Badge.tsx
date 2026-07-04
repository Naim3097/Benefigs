import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "berry" | "leaf" | "honey" | "neutral" | "success";

const tones: Record<Tone, string> = {
  berry: "bg-berry-100 text-berry-800",
  leaf: "bg-leaf-100 text-leaf-800",
  honey: "bg-honey-100 text-honey-600",
  neutral: "bg-paper-deep text-ink-700",
  success: "bg-success-50 text-success-700",
};

/** Pick a sensible tone from a badge label (recognises EN + BM keywords). */
export function badgeTone(label: string): Tone {
  const l = label.toLowerCase();
  if (/(best|laris|new|baru|limited|terhad|collector|kolektor)/.test(l)) return "berry";
  if (/(mygap|halal|caffeine|kafein|wellness|kesihatan|pemula)/.test(l)) return "leaf";
  if (/(save|jimat|value|nilai|refresh|segar|menyegarkan|gift|hadiah|original|asli|kegemaran|keluarga)/.test(l)) return "honey";
  return "neutral";
}

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[0.85rem] font-semibold leading-none tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
