import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/lib/types";

type Motif = NonNullable<ImageAsset["motif"]>;

/**
 * On-brand SVG art placeholders. Rendered when a real photo `src` is absent.
 * Monoline, flat, warm — intentional editorial art, never a "broken image".
 * Swap for photography by setting `src` on the ImageAsset; no code change here.
 */

const accentMap = {
  berry: { line: "stroke-berry-700", soft: "fill-berry-100", seed: "fill-berry-600", bg: "bg-berry-50" },
  leaf: { line: "stroke-leaf-700", soft: "fill-leaf-100", seed: "fill-leaf-600", bg: "bg-leaf-50" },
  honey: { line: "stroke-honey-600", soft: "fill-honey-100", seed: "fill-honey-600", bg: "bg-honey-100/40" },
} as const;

export type MotifAccent = keyof typeof accentMap;

function Paths({ motif, c }: { motif: Motif; c: (typeof accentMap)[MotifAccent] }) {
  const line = cn(c.line, "fill-none");
  const sw = 3.4;
  const common = { strokeWidth: sw, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (motif) {
    case "fig-halved":
      return (
        <g>
          <path className={line} {...common} d="M100 42c-26 0-40 26-40 58 0 34 20 60 40 60s40-26 40-60c0-32-14-58-40-58Z" />
          <path className={line} {...common} d="M100 42v-14m0 14c-6-4-16-6-24-2m24 2c6-4 16-6 24-2" />
          <path className={cn(c.soft)} d="M100 66c-17 0-27 19-27 42 0 25 14 42 27 42s27-17 27-42c0-23-10-42-27-42Z" opacity={0.55} />
          <g className={c.seed}>
            <circle cx="100" cy="92" r="3" /><circle cx="88" cy="104" r="3" /><circle cx="112" cy="104" r="3" />
            <circle cx="94" cy="118" r="3" /><circle cx="106" cy="118" r="3" /><circle cx="100" cy="132" r="3" />
            <circle cx="83" cy="120" r="2.5" /><circle cx="117" cy="120" r="2.5" />
          </g>
        </g>
      );
    case "fig-whole":
      return (
        <g>
          <path className={line} {...common} d="M101 62c-28 0-44 26-44 56 0 30 20 52 44 52s44-22 44-52c0-30-16-56-44-56Z" />
          <path className={line} {...common} d="M101 62c-2-10 2-20 12-26m-12 26c-9-3-16-1-22 4" />
          <path className={cn(c.soft, "stroke-none")} d="M101 84c-15 0-24 15-24 34s10 30 24 30 24-11 24-30-9-34-24-34Z" opacity={0.4} />
        </g>
      );
    case "leaf":
      return (
        <g>
          <path className={line} {...common} d="M100 158V70" />
          <path className={line} {...common} d="M100 70c-14-20-40-24-52-14 2 22 18 40 38 44m14-30c14-20 40-24 52-14-2 22-18 40-38 44m-14-30c-8-16-6-30 0-40 6 10 8 24 0 40Z" />
          <path className={line} {...common} d="M100 112c-8-6-18-8-26-6m26 20c-6-4-14-5-20-3m20-31c8-6 18-8 26-6m-26 20c6-4 14-5 20-3" />
        </g>
      );
    case "tree":
      return (
        <g>
          <path className={line} {...common} d="M78 158h44l-6 26H84l-6-26Z" />
          <path className={line} {...common} d="M100 158v-44" />
          <path className={line} {...common} d="M100 122c-10-12-26-12-34-4 4 14 18 20 34 12m0-8c10-12 26-12 34-4-4 14-18 20-34 12" />
          <path className={line} {...common} d="M100 100c-6-10-4-22 2-30 6 8 8 20 2 30" />
        </g>
      );
    case "jar":
      return (
        <g>
          <path className={line} {...common} d="M70 78h60v6a10 10 0 0 1-4 8v0h-52v0a10 10 0 0 1-4-8v-6Z" />
          <path className={line} {...common} d="M74 100h52a8 8 0 0 1 8 8v58a8 8 0 0 1-8 8H74a8 8 0 0 1-8-8v-58a8 8 0 0 1 8-8Z" />
          <circle className={cn(c.soft, "stroke-none")} cx="100" cy="138" r="18" opacity={0.5} />
          <path className={line} {...common} d="M100 126c-6 0-10 6-10 14s5 12 10 12 10-4 10-12-4-14-10-14Z" />
        </g>
      );
    case "bottle":
      return (
        <g>
          <path className={line} {...common} d="M92 58h16v14c0 6 8 10 8 22v66a8 8 0 0 1-8 8H92a8 8 0 0 1-8-8v-66c0-12 8-16 8-22V58Z" />
          <path className={line} {...common} d="M84 118h32" />
          <path className={cn(c.soft, "stroke-none")} d="M86 122h28v40a6 6 0 0 1-6 6H92a6 6 0 0 1-6-6v-40Z" opacity={0.45} />
        </g>
      );
    case "tea":
      return (
        <g>
          <path className={line} {...common} d="M68 118h56v18a28 28 0 0 1-28 28h0a28 28 0 0 1-28-28v-18Z" />
          <path className={line} {...common} d="M124 124h8a12 12 0 0 1 0 24h-4" />
          <path className={line} {...common} d="M60 176h64" />
          <path className={line} {...common} d="M90 104c-6-6-6-14 0-20m14 20c-6-6-6-14 0-20" />
          <path className={line} {...common} d="M108 150c8-2 14-8 14-16-8 0-14 4-16 10" />
        </g>
      );
    case "hamper":
      return (
        <g>
          <path className={line} {...common} d="M62 120h76l-8 50a8 8 0 0 1-8 6H78a8 8 0 0 1-8-6l-8-50Z" />
          <path className={line} {...common} d="M74 120c0-16 12-28 26-28s26 12 26 28" />
          <path className={line} {...common} d="M78 138v34m22-34v34m22-34v34" />
          <path className={line} {...common} d="M84 96c-2-8 2-16 8-20m24 20c2-8-2-16-8-20" />
        </g>
      );
    case "farm":
      return (
        <g>
          <circle className={line} {...common} cx="150" cy="66" r="14" />
          <path className={line} {...common} d="M52 148c0-30 22-54 48-54s48 24 48 54" />
          <path className={line} {...common} d="M76 148V104m24 44V96m24 52v-44" />
          <path className={line} {...common} d="M40 168h120" />
          <path className={line} {...common} d="M48 182l24-14m80 14-24-14m-52 14v-12m0 12h0" />
        </g>
      );
    default:
      return null;
  }
}

export function FigMotif({
  motif = "fig-whole",
  accent = "berry",
  className,
}: {
  motif?: Motif;
  accent?: MotifAccent;
  className?: string;
}) {
  const c = accentMap[accent];
  return (
    <div
      className={cn("absolute inset-0 flex items-center justify-center", c.bg, className)}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
        className="h-[62%] w-[62%] max-h-[220px] max-w-[220px]"
        role="presentation"
      >
        <circle cx="100" cy="112" r="82" className={cn(c.line, "fill-none")} opacity={0.12} strokeWidth={2} />
        <Paths motif={motif} c={c} />
      </svg>
    </div>
  );
}
