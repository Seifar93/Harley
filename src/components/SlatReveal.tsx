"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import {
  SLAT_COUNT,
  reducedSlatVariants,
  slatContainerVariants,
  slatVariants,
  viewportConfig,
} from "@/lib/motion";

type SlatRevealProps = {
  /** The artwork the slats uncover. */
  children: ReactNode;
  /** Seconds to wait after the element enters view before the first slat tilts. */
  delay?: number;
  className?: string;
  /**
   * Tailwind classes for the slat faces themselves. Defaults to the linen
   * page colour so the closed state looks like an unbroken blind rather than
   * a set of bars sitting on top of a picture.
   */
  slatClassName?: string;
  /** Fewer, chunkier slats read better in small cards than in a tall hero. */
  count?: number;
};

/**
 * The house animation: the artwork starts hidden behind a closed blind, and
 * the slats tilt open one after another to reveal it.
 *
 * Only `rotateX` and `opacity` are animated. Nothing here touches height,
 * width, or layout position, so the whole effect runs on the compositor —
 * which matters because the ranges grid puts eight of these on one screen.
 *
 * Each slat is absolutely positioned rather than flex-sized, and is one pixel
 * taller than its share of the container: at fractional container heights,
 * flex rounding leaves hairline gaps that flash the artwork through a blind
 * that is supposed to still be shut.
 */
export function SlatReveal({
  children,
  delay = 0,
  className,
  slatClassName = "bg-background",
  count = SLAT_COUNT,
}: SlatRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {children}

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        // Without perspective, rotateX is an orthographic squash and the slat
        // looks like it is being scaled rather than turned.
        style={{ perspective: "900px" }}
        custom={delay}
        variants={slatContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {Array.from({ length: count }, (_, i) => (
          <motion.div
            key={i}
            className={slatClassName}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: `${(i * 100) / count}%`,
              height: `calc(${100 / count}% + 1px)`,
              // Hinged along its top edge, like a real louvre on its ladder tape.
              transformOrigin: "center top",
              backfaceVisibility: "hidden",
            }}
            variants={shouldReduceMotion ? reducedSlatVariants : slatVariants}
          />
        ))}
      </motion.div>
    </div>
  );
}
