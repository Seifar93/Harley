"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { AnimatedHeading } from "@/components/AnimatedHeading";
import { SlatReveal } from "@/components/SlatReveal";
import { WindowScene } from "@/components/WindowScene";
import { ArrowRightIcon, PhoneIcon } from "@/components/icons";
import { hero, site } from "@/content/site";
import { EASE } from "@/lib/motion";

/**
 * Above-the-fold panel: headline left, a window that opens itself on the right.
 *
 * The slats over the window run on a delay so the headline has finished
 * setting before the blind starts to move — two things arriving at once reads
 * as noise, and the blind is the thing worth watching.
 *
 * Scroll parallax is applied only to the window panel. Body copy is left
 * alone: text that drifts at a different rate to the scroll is measurably
 * harder to read and is a known motion-sickness trigger.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Small delta — enough to feel like depth, not enough to desync from the page.
  const sceneY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 80],
  );

  const fade = { duration: 0.8, ease: EASE };

  return (
    <section id="top" ref={ref} className="relative px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/*
        Warm wash behind the headline. Pure CSS — no image, no layout cost.

        The clipping wrapper is load-bearing: the blob is 34rem wide, so on a
        narrow viewport it runs several hundred pixels past the right edge and
        widens the document, which scrolls the whole page sideways and pushes
        the header's menu button off screen. Clipping it here rather than
        putting `overflow-hidden` on the section leaves the parallax panel
        below free to travel outside the section box.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/4 h-[34rem] w-[34rem] rounded-full bg-[#e8c98c]/25 blur-[130px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <motion.p
            className="eyebrow text-accent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...fade, delay: 0.15 }}
          >
            {hero.eyebrow}
          </motion.p>

          <AnimatedHeading
            as="h1"
            text={hero.heading}
            delay={0.3}
            className="mt-7 max-w-[15ch] text-5xl leading-[1.02] font-normal tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl"
          />

          <motion.p
            className="mt-8 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...fade, delay: 0.75 }}
          >
            {hero.body}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...fade, delay: 0.9 }}
          >
            <a
              href={site.phoneHref}
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-medium tracking-wide text-on-accent transition-colors duration-200 hover:bg-foreground"
            >
              <PhoneIcon className="size-4" />
              {hero.primaryCta}
            </a>
            <a
              href="#ranges"
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-border-strong px-7 py-4 text-sm font-medium tracking-wide text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              {hero.secondaryCta}
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.p
            className="mt-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...fade, delay: 1.05 }}
          >
            {hero.reassurance}
          </motion.p>
        </div>

        <motion.div style={{ y: sceneY }} className="relative">
          <SlatReveal
            // Starts after the headline has set, so the two do not compete.
            delay={0.55}
            count={11}
            className="aspect-4/5 w-full rounded-sm border border-border-strong shadow-[0_30px_80px_-40px_rgba(26,21,18,0.5)] sm:aspect-3/4"
          >
            <WindowScene />
          </SlatReveal>

          {/* Sill: gives the panel something to sit on instead of floating. */}
          <div
            aria-hidden
            className="mx-auto h-2 w-[108%] max-w-none -translate-x-[3.7%] rounded-b-sm bg-border-strong/70"
          />
        </motion.div>
      </div>
    </section>
  );
}
