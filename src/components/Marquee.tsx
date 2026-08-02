"use client";

import { motion, useReducedMotion } from "framer-motion";

import { useHasMounted } from "@/lib/useHasMounted";

type MarqueeProps = {
  items: readonly string[];
  /** Seconds for one full pass. Longer = slower. */
  duration?: number;
  className?: string;
};

/**
 * A slow, continuous ticker of place names.
 *
 * The list is rendered twice inside a row that translates from 0% to -50%.
 * Because the two copies are identical and the travel is exactly half the
 * track, the frame at -50% is pixel-identical to the frame at 0%, so the loop
 * restarts invisibly with no reset flicker.
 *
 * The second copy is decorative duplication, so it is hidden from screen
 * readers — otherwise every town is announced twice. Under reduced motion the
 * marquee is replaced by a plain wrapped list, not merely a paused one: a
 * stationary marquee still clips half its content off the side of the screen.
 *
 * That swap is gated behind `useHasMounted`. The motion preference is a client
 * media query, so the server always renders the ticker; without the gate, a
 * visitor with reduced motion enabled gets a first client render containing a
 * completely different element tree, which React rejects as a hydration
 * mismatch and re-renders from scratch. Deferring the swap by one commit keeps
 * hydration clean and costs one frame of the ticker nobody sees.
 */
export function Marquee({ items, duration = 44, className }: MarqueeProps) {
  const shouldReduceMotion = useReducedMotion();
  const hasMounted = useHasMounted();

  if (hasMounted && shouldReduceMotion) {
    return (
      <ul className={`flex flex-wrap justify-center gap-x-8 gap-y-3 ${className ?? ""}`}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <div
      className={`group relative flex overflow-hidden ${className ?? ""}`}
      // The track is wider than the viewport by design; nothing here should be
      // reachable by tab or announced as a list of links.
      role="presentation"
    >
      <motion.div
        className="flex shrink-0 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 || undefined}
            className="flex shrink-0 items-center"
          >
            {items.map((item) => (
              <li key={item} className="flex shrink-0 items-center">
                <span className="px-6 whitespace-nowrap">{item}</span>
                <span
                  aria-hidden
                  className="size-1 rounded-full bg-accent/40"
                />
              </li>
            ))}
          </ul>
        ))}
      </motion.div>

      {/* Feathered edges, so names enter and leave instead of being sliced. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent"
      />
    </div>
  );
}
