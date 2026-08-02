"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  headingContainerVariants,
  reducedWordVariants,
  viewportConfig,
  wordVariants,
} from "@/lib/motion";

const TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
} as const;

type AnimatedHeadingProps = {
  /** Plain string — it is split on whitespace, so no markup inside. */
  text: string;
  as?: keyof typeof TAGS;
  className?: string;
  /** Seconds to wait after entering view. */
  delay?: number;
};

/**
 * Reveals a heading word by word, each word rising out of its own clipping
 * box like type being set.
 *
 * Accessibility: the words are split across many elements, which a screen
 * reader would otherwise announce as separate fragments with pauses. The
 * whole string is put back on the heading as `aria-label` and every visual
 * fragment is hidden from the accessibility tree, so it is announced once,
 * intact.
 *
 * The clipping span carries equal `padding-bottom` and negative `margin-bottom`
 * because `overflow: hidden` on a text box crops descenders — without it the
 * tails of "g" and "y" are shaved off once the animation settles.
 */
export function AnimatedHeading({
  text,
  as = "h2",
  className,
  delay = 0,
}: AnimatedHeadingProps) {
  const shouldReduceMotion = useReducedMotion();
  const Tag = TAGS[as];
  const words = text.split(" ");

  return (
    <Tag
      className={className}
      aria-label={text}
      custom={delay}
      variants={headingContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          className="mr-[0.25em] -mb-[0.18em] inline-block overflow-hidden pb-[0.18em] align-bottom"
        >
          <motion.span
            className="inline-block"
            variants={shouldReduceMotion ? reducedWordVariants : wordVariants}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
