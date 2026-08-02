"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import {
  itemVariants,
  reducedItemVariants,
  reducedSectionVariants,
  sectionVariants,
  viewportConfig,
} from "@/lib/motion";

const TAGS = {
  section: motion.section,
  div: motion.div,
  header: motion.header,
  footer: motion.footer,
} as const;

const ITEM_TAGS = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
  figure: motion.figure,
} as const;

type FadeInSectionProps = {
  children: ReactNode;
  /**
   * Position of this section on the page. Converted to a delay so sections
   * that share a viewport reveal sequentially rather than simultaneously.
   */
  index?: number;
  className?: string;
  id?: string;
  as?: keyof typeof TAGS;
};

/**
 * Wraps a page section in a scroll-triggered fade-and-rise.
 *
 * The animation runs once, when the section scrolls into view. Children
 * rendered with <FadeInItem> inherit the section's stagger, so a grid of
 * cards cascades instead of appearing as one block.
 */
export function FadeInSection({
  children,
  index = 0,
  className,
  id,
  as = "section",
}: FadeInSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const Tag = TAGS[as];

  return (
    <Tag
      id={id}
      className={className}
      custom={index}
      variants={shouldReduceMotion ? reducedSectionVariants : sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      {children}
    </Tag>
  );
}

type FadeInItemProps = {
  children: ReactNode;
  className?: string;
  /** Use "li" inside a list so the markup stays valid. */
  as?: keyof typeof ITEM_TAGS;
};

/**
 * A child of <FadeInSection>. Carries no delay of its own — the parent's
 * staggerChildren drives the sequencing, so items cascade in DOM order.
 */
export function FadeInItem({
  children,
  className,
  as = "div",
}: FadeInItemProps) {
  const shouldReduceMotion = useReducedMotion();
  const Tag = ITEM_TAGS[as];

  return (
    <Tag
      className={className}
      variants={shouldReduceMotion ? reducedItemVariants : itemVariants}
    >
      {children}
    </Tag>
  );
}
