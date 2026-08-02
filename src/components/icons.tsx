import type { SVGProps } from "react";

/**
 * Inline SVG icons (Lucide-style, 24x24, 1.5 stroke). Emoji are deliberately
 * not used as icons — they render inconsistently across platforms and are
 * announced as literal text by screen readers.
 *
 * The product icons are drawn to be distinguishable from each other at 20px,
 * which is the size they actually render at in the range cards: a roller and a
 * Roman blind are the same silhouette until you show the fabric, so the roller
 * gets a tube and a straight hem while the Roman gets stacked folds.
 */

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

/* ─────────────────────────────── products ──────────────────────────────── */

export function RollerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
      <path d="M3.5 6.5h17" />
      <path d="M6.5 15.5h11" />
      <path d="M12 15.5v2" />
    </svg>
  );
}

export function RomanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
      <path d="M3.5 7h17" />
      <path d="M3.5 10.5h17" />
      <path d="M3.5 14h17" />
      <path d="M6 17.5h12" />
    </svg>
  );
}

export function VenetianIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
      <path d="M3.5 8h17" />
      <path d="M3.5 12h17" />
      <path d="M3.5 16h17" />
      <path d="M17 3.5v17" />
    </svg>
  );
}

export function ShutterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
      <path d="M12 3.5v17" />
      <path d="M7.75 6.5v11" />
      <path d="M16.25 6.5v11" />
    </svg>
  );
}

export function CurtainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 4h19" />
      <path d="M6.5 4v16c2.6 0 4-2.7 4-8s-1.4-8-4-8Z" />
      <path d="M17.5 4v16c-2.6 0-4-2.7-4-8s1.4-8 4-8Z" />
    </svg>
  );
}

export function VerticalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
      <path d="M3.5 6.5h17" />
      <path d="M8 6.5v14" />
      <path d="M12 6.5v14" />
      <path d="M16 6.5v14" />
    </svg>
  );
}

export function PerfectFitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="2" />
      <rect x="6.5" y="6.5" width="11" height="11" rx="1" />
      <path d="M9 10h6" />
      <path d="M9 13.5h6" />
    </svg>
  );
}

export function MotorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
      <path d="M3.5 7h17" />
      <path d="M9 12.5a4.2 4.2 0 0 1 6 0" />
      <path d="M11 15.4a1.4 1.4 0 0 1 2 0" />
      <path d="M6.8 9.9a7.4 7.4 0 0 1 10.4 0" />
    </svg>
  );
}

/* ──────────────────────────────── reasons ──────────────────────────────── */

export function RulerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M15.5 2.6 21.4 8.5a1.4 1.4 0 0 1 0 2L10.5 21.4a1.4 1.4 0 0 1-2 0L2.6 15.5a1.4 1.4 0 0 1 0-2L13.5 2.6a1.4 1.4 0 0 1 2 0Z" />
      <path d="m7.5 12 2 2" />
      <path d="m10.5 9 2 2" />
      <path d="m13.5 6 2 2" />
    </svg>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 4.5 6v5.5c0 4.4 3.1 8.1 7.5 9.5 4.4-1.4 7.5-5.1 7.5-9.5V6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20c0-8 4.5-14 16-14 0 9-5 14-11 14a5 5 0 0 1-5-5Z" />
      <path d="M11 20c0-5 2.5-8.5 6.5-11" />
    </svg>
  );
}

export function WalletIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h12A1.5 1.5 0 0 1 19 6.5V9" />
      <path d="M3 7.5v9A2.5 2.5 0 0 0 5.5 19h13a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 18.5 9h-13A2.5 2.5 0 0 1 3 7.5Z" />
      <circle cx="16.5" cy="14" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ──────────────────────────────── utility ──────────────────────────────── */

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M21 16.9v2.6a1.7 1.7 0 0 1-1.9 1.7 17 17 0 0 1-7.4-2.6 16.7 16.7 0 0 1-5.1-5.1A17 17 0 0 1 4 6.1 1.7 1.7 0 0 1 5.7 4.2h2.6a1.7 1.7 0 0 1 1.7 1.5c.1.9.3 1.7.6 2.5a1.7 1.7 0 0 1-.4 1.8l-1.1 1.1a13.6 13.6 0 0 0 5.1 5.1l1.1-1.1a1.7 1.7 0 0 1 1.8-.4c.8.3 1.6.5 2.5.6a1.7 1.7 0 0 1 1.4 1.6Z" />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6.5 9 6 9-6" />
    </svg>
  );
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 7h17" />
      <path d="M3.5 12h17" />
      <path d="M3.5 17h17" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}

/** Solid, not stroked — it sits behind quote text as a mark, not an outline. */
export function QuoteMarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable={false}
      {...props}
    >
      <path d="M9.6 5.5c-3.4 1.7-5.4 4.6-5.4 8.2 0 3 1.7 4.8 4 4.8 2 0 3.6-1.5 3.6-3.5s-1.4-3.4-3.3-3.4h-.5c.3-1.7 1.4-3.1 3-4.1l-1.4-2Zm9.3 0c-3.4 1.7-5.4 4.6-5.4 8.2 0 3 1.7 4.8 4 4.8 2 0 3.6-1.5 3.6-3.5s-1.4-3.4-3.3-3.4h-.5c.3-1.7 1.4-3.1 3-4.1l-1.4-2Z" />
    </svg>
  );
}

/** Maps the string keys used in content/site.ts to components. */
export const ICONS = {
  roller: RollerIcon,
  roman: RomanIcon,
  venetian: VenetianIcon,
  shutter: ShutterIcon,
  curtain: CurtainIcon,
  vertical: VerticalIcon,
  perfectfit: PerfectFitIcon,
  motor: MotorIcon,
  ruler: RulerIcon,
  shield: ShieldIcon,
  leaf: LeafIcon,
  wallet: WalletIcon,
} as const;

export type IconKey = keyof typeof ICONS;
