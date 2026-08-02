import type { Transition, Variants } from "framer-motion";

/**
 * Shared motion tokens. Keeping easing and duration in one place stops the
 * page from drifting into a dozen slightly-different entrance animations.
 */

/** easeOutExpo-ish: fast start, long soft landing. Reads as "settling". */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Slower, heavier curve for the signature slat animations. Real slats have
 * mass; the standard EASE arrives too abruptly to read as a physical louvre.
 */
export const EASE_SLAT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Entrance duration. Long enough to register, short enough not to block reading. */
export const DURATION = 0.55;

/** Delay added per section index, so sections in the same viewport cascade. */
export const SECTION_STAGGER = 0.12;

/**
 * Ceiling on the index-based delay, in steps.
 *
 * The index delay exists for sections that share a viewport — realistically
 * only the first screenful. Applying it uncapped punishes the rest of the
 * page: at index 6 a raw delay is already 0.72s, so a visitor who scrolls to
 * the footer stares at blank space long enough to think the page is broken.
 * Capping at 2 keeps the cascade where it is visible and costs nothing below.
 */
export const MAX_STAGGER_STEPS = 2;

/** Index → delay, capped. */
export const sectionDelay = (index: number) =>
  Math.min(index, MAX_STAGGER_STEPS) * SECTION_STAGGER;

/** Delay between children inside one section (cards, list chips, etc.). */
export const CHILD_STAGGER = 0.08;

/** Distance travelled on entry. Small — large offsets feel sluggish. */
export const TRAVEL = 24;

export const baseTransition: Transition = {
  duration: DURATION,
  ease: EASE,
};

/**
 * Variants for a whole section. `custom` is the section's index on the page:
 * it converts to a delay so that sections which enter the viewport together
 * reveal one after another instead of all at once.
 */
export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: TRAVEL },
  visible: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...baseTransition,
      delay: sectionDelay(index),
      staggerChildren: CHILD_STAGGER,
      // Children start once the section itself is most of the way in, so the
      // container and its contents do not race each other.
      delayChildren: sectionDelay(index) + DURATION * 0.35,
    },
  }),
};

/** Variants for an individual item within a staggered section. */
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: TRAVEL * 0.75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

/**
 * Reduced-motion equivalents. The element still fades, but nothing travels
 * and nothing is delayed — the content is simply there.
 */
export const reducedSectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.01, staggerChildren: 0, delayChildren: 0 },
  },
};

export const reducedItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.01 } },
};

/**
 * Shared viewport config. `once` stops sections re-animating on every scroll
 * pass, and the negative bottom margin fires the animation slightly before
 * the element is fully on screen so it is finished by the time it is read.
 */
export const viewportConfig = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -10% 0px",
} as const;

/* ───────────────────────────── slat motion ──────────────────────────────── */

/**
 * The signature animation: a panel is covered by horizontal louvres that tilt
 * open, like a Venetian blind being drawn. Used for the hero and for every
 * range card image.
 *
 * `rotateX` on the slat plus `opacity` is deliberately the whole animation —
 * no height or width is touched, so it stays on the compositor and does not
 * force layout on a page that has one of these per card.
 */
export const SLAT_COUNT = 9;

/** Time between one slat opening and the next. */
export const SLAT_STAGGER = 0.055;

export const slatContainerVariants: Variants = {
  hidden: {},
  visible: (delay: number = 0) => ({
    transition: { staggerChildren: SLAT_STAGGER, delayChildren: delay },
  }),
};

export const slatVariants: Variants = {
  hidden: { rotateX: 0, opacity: 1 },
  visible: {
    // Tilting past 90° is what makes it read as a slat turning rather than a
    // bar fading: the face rotates away from the viewer and catches no light.
    rotateX: -94,
    opacity: 0,
    transition: { duration: 0.85, ease: EASE_SLAT },
  },
};

export const reducedSlatVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 0, transition: { duration: 0.01 } },
};

/* ──────────────────────────── heading motion ────────────────────────────── */

/**
 * Word-by-word headline reveal. Framer has no text splitter, and GSAP's
 * SplitText is a paid plugin, so headings are split on whitespace in the
 * component and each word animates as its own span.
 *
 * Words, not characters: character splitting on a display serif at hero size
 * produces 40+ animated nodes and reads as a gimmick. Word-level keeps the
 * line legible while it moves.
 */
export const WORD_STAGGER = 0.045;

export const headingContainerVariants: Variants = {
  hidden: {},
  visible: (delay: number = 0) => ({
    transition: { staggerChildren: WORD_STAGGER, delayChildren: delay },
  }),
};

export const wordVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.75, ease: EASE_SLAT },
  },
};

export const reducedWordVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.01 } },
};
