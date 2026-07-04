import type { SVGProps } from "react";

/**
 * Functional UI icons only (cart, search, nav, form affordances, contact,
 * social). Used to aid usability — never as decoration. Every icon is
 * aria-hidden; the surrounding control carries the accessible label.
 */

type P = SVGProps<SVGSVGElement>;

function Svg({ children, strokeWidth = 1.8, ...props }: P) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconCart = (p: P) => (
  <Svg {...p}>
    <path d="M5.5 6.5h15l-1.6 9.2a2 2 0 0 1-2 1.7H9.1a2 2 0 0 1-2-1.7L5.2 4.6a1 1 0 0 0-1-.8H3" />
    <circle cx="9.5" cy="20" r="1.3" />
    <circle cx="17.5" cy="20" r="1.3" />
  </Svg>
);

export const IconSearch = (p: P) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </Svg>
);

export const IconUser = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
  </Svg>
);

export const IconHeart = (p: P) => (
  <Svg {...p}>
    <path d="M12 20.5 4.4 13a4.6 4.6 0 0 1 6.5-6.5l1.1 1 1.1-1A4.6 4.6 0 1 1 19.6 13Z" />
  </Svg>
);

export const IconMenu = (p: P) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const IconClose = (p: P) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);

export const IconChevronDown = (p: P) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

export const IconChevronRight = (p: P) => (
  <Svg {...p}>
    <path d="m9 6 6 6-6 6" />
  </Svg>
);

export const IconArrowRight = (p: P) => (
  <Svg {...p}>
    <path d="M4 12h16m-6-6 6 6-6 6" />
  </Svg>
);

export const IconCheck = (p: P) => (
  <Svg {...p}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </Svg>
);

export const IconPlus = (p: P) => (
  <Svg {...p}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);

export const IconMinus = (p: P) => (
  <Svg {...p}>
    <path d="M5 12h14" />
  </Svg>
);

export const IconTruck = (p: P) => (
  <Svg {...p}>
    <path d="M3 6.5h11v9H3z" />
    <path d="M14 9.5h4l3 3v3h-7z" />
    <circle cx="7" cy="18" r="1.6" />
    <circle cx="17.5" cy="18" r="1.6" />
  </Svg>
);

export const IconShield = (p: P) => (
  <Svg {...p}>
    <path d="M12 3.5 5 6v5.5c0 4.3 3 7.4 7 9 4-1.6 7-4.7 7-9V6Z" />
    <path d="m9 12 2 2 4-4.5" />
  </Svg>
);

export const IconLeaf = (p: P) => (
  <Svg {...p}>
    <path d="M20 4C9 4 4 10 4 20c10 0 16-5 16-16Z" />
    <path d="M4 20C8 14 12 11 17 9" />
  </Svg>
);

export const IconSprout = (p: P) => (
  <Svg {...p}>
    <path d="M12 20v-7" />
    <path d="M12 13c-4 0-7-3-7-7 4 0 7 3 7 7Z" />
    <path d="M12 11c0-3 3-6 7-6 0 3-3 6-7 6Z" />
  </Svg>
);

export const IconPhone = (p: P) => (
  <Svg {...p}>
    <path d="M6 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 4 5.5a2 2 0 0 1 2-2Z" />
  </Svg>
);

export const IconMail = (p: P) => (
  <Svg {...p}>
    <path d="M3.5 6h17v12h-17z" />
    <path d="m4 7 8 6 8-6" />
  </Svg>
);

export const IconMapPin = (p: P) => (
  <Svg {...p}>
    <path d="M12 21c5-5 7-8.3 7-11a7 7 0 1 0-14 0c0 2.7 2 6 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </Svg>
);

export const IconClock = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Svg>
);

/* -- Brand / social (filled glyphs for recognisability) -------------------- */

export const IconFacebook = (p: P) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.6V13h2.7v8Z" />
  </svg>
);

export const IconInstagram = (p: P) => (
  <Svg {...p}>
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.6" cy="7.4" r="1" fill="currentColor" stroke="none" />
  </Svg>
);

export const IconTikTok = (p: P) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M16.5 3c.3 2 1.5 3.5 3.5 3.9v2.6c-1.4 0-2.6-.4-3.7-1.1v5.7a5.4 5.4 0 1 1-5.4-5.4c.3 0 .6 0 .9.1v2.7a2.7 2.7 0 1 0 1.9 2.6V3Z" />
  </svg>
);

export const IconWhatsApp = (p: P) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm5.2 12.7c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .3-3.2-.7-2.7-1.2-4.4-4-4.5-4.2-.1-.2-1-1.4-1-2.6s.6-1.8.9-2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.1 2 1.3 2.3 1.1.2-.1.5-.6.7-.9.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.2.1.7-.1 1.2Z" />
  </svg>
);
