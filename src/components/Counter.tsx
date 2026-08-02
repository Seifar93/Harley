"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import { EASE } from "@/lib/motion";

type CounterProps = {
  value: number;
  suffix?: string;
  className?: string;
};

const format = (n: number) =>
  Math.round(n).toLocaleString("en-GB", { maximumFractionDigits: 0 });

/**
 * Counts a figure up from zero the first time it scrolls into view.
 *
 * The animated digits are written straight to the DOM node instead of going
 * through React state: at 60fps a `setState` per frame would re-render the
 * stats row about a hundred times per counter, for text that no other part of
 * the tree depends on.
 *
 * The server renders the *final* value, so the real number is in the HTML for
 * crawlers and for anyone without JavaScript. The count only resets to zero at
 * the instant the animation starts, by which time the element is on screen.
 */
export function Counter({ value, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !isInView || shouldReduceMotion) return;

    const controls = animate(0, value, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (latest) => {
        node.textContent = format(latest);
      },
    });

    return () => controls.stop();
  }, [isInView, shouldReduceMotion, value]);

  return (
    <span className={className}>
      <span ref={ref}>{format(value)}</span>
      {suffix}
    </span>
  );
}
