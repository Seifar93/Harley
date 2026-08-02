import type { SVGProps } from "react";

/**
 * Inline SVG icons (Lucide-style, 24x24, 1.5 stroke). Emoji are deliberately
 * not used as icons — they render inconsistently across platforms and are
 * announced as literal text by screen readers.
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

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3 2.6 5.6 6.4.8-4.7 4.3 1.2 6.3-5.5-3.1-5.5 3.1 1.2-6.3L3 9.4l6.4-.8L12 3Z" />
    </svg>
  );
}

export function RingsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="15" r="5" />
      <circle cx="15" cy="15" r="5" />
      <path d="m10.5 5.5 1.5-2 1.5 2" />
    </svg>
  );
}

export function PlaneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M10.2 12.5 3 10.3l1.6-1.6 3.4.6 2.6-2.6-6-3.3L6.9 2l8 2.8 2.6-2.6a2 2 0 1 1 2.8 2.8l-2.6 2.6 2.8 8-1.4 1.4-3.3-6-2.6 2.6.6 3.4L14 19l-2.2-7.2Z" />
    </svg>
  );
}

export function BriefcaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="7.5" width="19" height="13" rx="2" />
      <path d="M9 7.5V5.5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M2.5 13h19" />
    </svg>
  );
}

export function KeyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="7.5" cy="15.5" r="4" />
      <path d="m10.5 12.5 8-8" />
      <path d="m16 7 2.5 2.5" />
      <path d="M19 4.5 21.5 7" />
    </svg>
  );
}

export function SparkleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m6 6 2.5 2.5" />
      <path d="M15.5 15.5 18 18" />
      <path d="M18 6l-2.5 2.5" />
      <path d="M8.5 15.5 6 18" />
    </svg>
  );
}

export function RouteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="19" r="2.5" />
      <circle cx="18" cy="5" r="2.5" />
      <path d="M15.5 5H10a3.5 3.5 0 0 0 0 7h4a3.5 3.5 0 0 1 0 7H8.5" />
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

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 1.9" />
    </svg>
  );
}

export function TagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 11.4V4.5a1 1 0 0 1 1-1h6.9a2 2 0 0 1 1.4.6l7 7a2 2 0 0 1 0 2.8l-6.9 6.9a2 2 0 0 1-2.8 0l-7-7a2 2 0 0 1-.6-1.4Z" />
      <circle cx="7.8" cy="7.8" r="1.3" />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M21 16.9v2.6a1.7 1.7 0 0 1-1.9 1.7 17 17 0 0 1-7.4-2.6 16.7 16.7 0 0 1-5.1-5.1A17 17 0 0 1 4 6.1 1.7 1.7 0 0 1 5.7 4.2h2.6a1.7 1.7 0 0 1 1.7 1.5c.1.9.3 1.7.6 2.5a1.7 1.7 0 0 1-.4 1.8l-1.1 1.1a13.6 13.6 0 0 0 5.1 5.1l1.1-1.1a1.7 1.7 0 0 1 1.8-.4c.8.3 1.6.5 2.5.6a1.7 1.7 0 0 1 1.4 1.6Z" />
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

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6.5 9 6 9-6" />
    </svg>
  );
}

/** Maps the string keys used in content/site.ts to components. */
export const ICONS = {
  rings: RingsIcon,
  plane: PlaneIcon,
  briefcase: BriefcaseIcon,
  key: KeyIcon,
  sparkle: SparkleIcon,
  route: RouteIcon,
  shield: ShieldIcon,
  clock: ClockIcon,
  tag: TagIcon,
  phone: PhoneIcon,
} as const;

export type IconKey = keyof typeof ICONS;
