"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

import { FadeInItem, FadeInSection } from "@/components/FadeInSection";
import { process } from "@/content/site";

/**
 * Vertical timeline whose rule fills as the section is scrolled.
 *
 * The fill is `scaleY` on a line pinned to `transformOrigin: top`, driven
 * straight from `scrollYProgress` — no scroll listener, no state, no re-render
 * per frame. A spring smooths it so a fast flick of the wheel does not snap
 * the line to the bottom.
 *
 * The offsets start the fill when the first step is around two-thirds up the
 * viewport and finish it as the last step clears the middle, so the line is
 * tracking the step you are actually reading rather than the section box.
 *
 * Under reduced motion the line is simply drawn in full: an empty rule that
 * never fills would read as a rendering fault.
 */
export function Process({ index }: { index: number }) {
  const ref = useRef<HTMLOListElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 60%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <FadeInSection
      id="process"
      index={index}
      className="scroll-mt-24 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <FadeInItem>
            <p className="eyebrow text-accent">{process.eyebrow}</p>
          </FadeInItem>
          <FadeInItem>
            <h2 className="mt-5 text-4xl leading-tight tracking-tight text-balance text-foreground sm:text-5xl">
              {process.heading}
            </h2>
          </FadeInItem>
          <FadeInItem>
            <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
              {process.body}
            </p>
          </FadeInItem>
        </div>

        <ol ref={ref} className="relative mt-16 ml-2 max-w-3xl">
          {/* Track and fill share a position so they overlay exactly. */}
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 w-px bg-border"
          />
          <motion.span
            aria-hidden
            className="absolute inset-y-0 left-0 w-px origin-top bg-accent"
            style={{ scaleY: shouldReduceMotion ? 1 : progress }}
          />

          {process.steps.map((step, i) => (
            <FadeInItem as="li" key={step.title} className="relative pb-14 pl-10 last:pb-0">
              <span
                aria-hidden
                className="absolute top-1.5 left-0 size-2.5 -translate-x-[calc(50%-0.5px)] rounded-full bg-accent ring-4 ring-background"
              />
              <span className="eyebrow text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-2xl tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-pretty text-muted-foreground">
                {step.body}
              </p>
            </FadeInItem>
          ))}
        </ol>
      </div>
    </FadeInSection>
  );
}
