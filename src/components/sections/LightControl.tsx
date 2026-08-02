"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";

import { FadeInSection } from "@/components/FadeInSection";
import { lightControl } from "@/content/site";
import { EASE, EASE_SLAT } from "@/lib/motion";

/**
 * Interactive demonstration of slat angle.
 *
 * This is the one section on the page a visitor can operate, and it argues the
 * product better than a paragraph can: it shows that a blind is a dimmer, not
 * a switch.
 *
 * The physics are the point, so the angles are the real ones. A louvre rotates
 * about its own long axis through the centre of the slat, so:
 *
 *   ~0°   the face is square to the room and the blind is shut
 *   ~90°  the slat is edge-on, nearly invisible, and light is at maximum
 *   >90°  it closes again, but tilted the other way
 *
 * That is why "level" is 84° rather than 0°, and why the light curve peaks in
 * the middle of the range and falls off towards both ends instead of running
 * monotonically from dark to bright.
 *
 * The control is a real `<input type="range">`. A div with drag handlers would
 * have needed keyboard support, focus handling, touch targets and a value
 * announcement rebuilt from scratch; the native input has all of it, and
 * `aria-valuetext` makes it announce "Level" rather than "3 of 5".
 */

/** Slat rotation in degrees, per slider position. */
const ANGLES = [8, 45, 84, 125, 168];

/** How much light reaches the room at each position, 0–1. */
const LIGHT = [0.05, 0.42, 1, 0.5, 0.08];

const SLATS = 12;

export function LightControl({ index }: { index: number }) {
  const [position, setPosition] = useState(2);
  const shouldReduceMotion = useReducedMotion();
  const sliderId = useId();

  const angle = ANGLES[position];
  const light = LIGHT[position];
  const current = lightControl.positions[position];

  const transition = shouldReduceMotion
    ? { duration: 0.01 }
    : { duration: 0.7, ease: EASE_SLAT };

  return (
    <FadeInSection
      id="light"
      index={index}
      // `on-ink` re-tints the focus ring so it stays visible on the dark panel.
      className="on-ink scroll-mt-24 bg-ink px-6 py-24 text-on-ink sm:py-32"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* ── The window ─────────────────────────────────────────────────── */}
        <div className="relative">
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-sm border border-white/10 bg-[#0d0a08] sm:aspect-square">
            {/* Daylight outside the glass. */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#ffe7bb] via-[#f7dcae] to-[#e4c894]" />

            {/*
              Dimming is split across two layers, one either side of the slats,
              because a single overlay on top blacks out the blind as well as
              the room — and a closed blind is the one thing you can still see.
              This layer sits behind the louvres and kills the daylight coming
              through the gaps.
            */}
            <motion.div
              aria-hidden
              className="absolute inset-0 bg-[#0d0a08]"
              animate={{ opacity: 1 - light }}
              transition={transition}
            />

            {/* The louvres. */}
            <div className="absolute inset-0" style={{ perspective: "1100px" }}>
              {Array.from({ length: SLATS }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute right-0 left-0 bg-gradient-to-b from-[#f4efe7] via-[#e2dacd] to-[#c3b9a9]"
                  style={{
                    top: `${(i * 100) / SLATS}%`,
                    height: `calc(${100 / SLATS}% + 1px)`,
                    transformOrigin: "center center",
                    transformStyle: "preserve-3d",
                  }}
                  animate={{ rotateX: angle }}
                  transition={{
                    ...transition,
                    // A blind does not move as one rigid sheet; the tape drags
                    // the lower slats a fraction behind the upper ones.
                    delay: shouldReduceMotion ? 0 : i * 0.012,
                  }}
                />
              ))}
            </div>

            {/*
              The second dimming layer, over the louvres. Scaled to just over
              half so the slats darken with the room without disappearing into
              it — this is the ambient light in the room falling on the face of
              the blind, not the daylight behind it.
            */}
            <motion.div
              aria-hidden
              className="absolute inset-0 bg-[#0d0a08]"
              animate={{ opacity: (1 - light) * 0.55 }}
              transition={transition}
            />

            {/* Glow spilling off the blind into the room. */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,224,168,0.5),transparent_70%)]"
              animate={{ opacity: light }}
              transition={transition}
            />

            {/* Frame. */}
            <div
              aria-hidden
              className="absolute inset-0 border-8 border-[#1a1512]"
            />
          </div>

          {/* Live readout of the angle. Monospaced tabular figures so the
              number does not jitter as it changes width. */}
          <div className="mt-4 flex items-center justify-between text-xs text-muted-on-ink">
            <span className="eyebrow">Slat angle</span>
            <span className="tabular-nums">{angle}°</span>
          </div>
        </div>

        {/* ── The control ────────────────────────────────────────────────── */}
        <div>
          <p className="eyebrow text-accent-soft">{lightControl.eyebrow}</p>
          <h2 className="mt-5 text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
            {lightControl.heading}
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-pretty text-muted-on-ink">
            {lightControl.body}
          </p>

          {/* Fixed min-height: without it, swapping a two-line note for a
              one-line note reflows everything below on every drag. */}
          <div className="mt-10 min-h-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={position}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.25, ease: EASE }}
              >
                <p className="font-display text-2xl text-on-ink">
                  {current.label}
                </p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-on-ink">
                  {current.note}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <label htmlFor={sliderId} className="sr-only">
            Slat angle
          </label>
          <input
            id={sliderId}
            type="range"
            min={0}
            max={ANGLES.length - 1}
            step={1}
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            aria-valuetext={current.label}
            className="mt-4 h-11 w-full max-w-lg cursor-pointer appearance-none bg-transparent [&::-moz-range-thumb]:size-6 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-accent-soft [&::-moz-range-track]:h-px [&::-moz-range-track]:bg-white/25 [&::-webkit-slider-runnable-track]:h-px [&::-webkit-slider-runnable-track]:bg-white/25 [&::-webkit-slider-thumb]:-mt-3 [&::-webkit-slider-thumb]:size-6 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent-soft"
          />

          {/* Clickable tick labels — a slider alone hides where the stops are,
              and on a phone the tap target is easier than a 6px drag. */}
          <ul className="mt-3 flex max-w-lg justify-between">
            {lightControl.positions.map((item, i) => (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => setPosition(i)}
                  aria-pressed={i === position}
                  className={`cursor-pointer px-1 py-1 text-[0.7rem] tracking-wide transition-colors duration-200 ${
                    i === position
                      ? "text-accent-soft"
                      : "text-muted-on-ink hover:text-on-ink"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FadeInSection>
  );
}
