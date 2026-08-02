"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";

import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/icons";
import { nav, site } from "@/content/site";
import { EASE } from "@/lib/motion";

/**
 * Sticky header that condenses once the page has been scrolled.
 *
 * Over the hero it is transparent and roomy; past the first 32px it picks up a
 * blurred linen background, a hairline rule, and tighter padding. The state is
 * driven by `useMotionValueEvent` on the scroll position rather than a React
 * scroll listener, so reads happen inside Framer's rAF loop instead of firing
 * a re-render on every scroll event — the boolean itself only flips at the
 * threshold, so the header re-renders twice per page rather than continuously.
 */
export function SiteHeader() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 32);
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
    >
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-border bg-background/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 transition-all duration-300 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          <motion.a
            href="#top"
            className="group flex items-center gap-3"
            aria-label={`${site.name} — home`}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            {/* Slats that tilt on hover: the logo does the same thing the
                product does. Five thin ones rather than three thick — three
                bars in a rounded box is a hamburger menu, and putting one next
                to a wordmark invites people to click it expecting navigation. */}
            <span
              aria-hidden
              className="flex size-9 flex-col justify-center gap-[2px] rounded-sm border border-border-strong bg-surface px-1.5"
              style={{ perspective: "120px" }}
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  className="block h-[1.5px] origin-center rounded-full bg-accent"
                  variants={{
                    rest: { rotateX: 0, opacity: 1 },
                    hover: { rotateX: -58, opacity: 0.5 },
                  }}
                  transition={{ duration: 0.4, ease: EASE, delay: i * 0.05 }}
                />
              ))}
            </span>
            <span className="font-display text-lg leading-none tracking-tight text-foreground">
              {site.name}
            </span>
          </motion.a>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative cursor-pointer py-1 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {item.label}
                {/* Underline grows from the left rather than fading in — it
                    reads as a line being drawn, which suits the brand. */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="hidden cursor-pointer items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition-colors duration-200 hover:bg-foreground sm:inline-flex"
            >
              <PhoneIcon className="size-4" />
              {site.phoneDisplay}
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-border text-foreground transition-colors duration-200 hover:border-accent hover:text-accent lg:hidden"
            >
              {menuOpen ? (
                <CloseIcon className="size-5" />
              ) : (
                <MenuIcon className="size-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/*
        This panel animates height, normally the thing to avoid — but it is a
        one-shot on a four-item list with nothing below it in the stacking
        context, and `height: auto` is the only way to let the content size
        itself. AnimatePresence keeps the node mounted long enough for the exit
        to play instead of the panel disappearing the instant it is dismissed.
      */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-md lg:hidden"
          >
            <nav aria-label="Mobile" className="mx-auto max-w-7xl px-6 py-4">
              <ul className="flex flex-col">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block cursor-pointer border-b border-border py-4 font-display text-2xl text-foreground transition-colors duration-200 hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={site.phoneHref}
                onClick={() => setMenuOpen(false)}
                className="mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-on-accent"
              >
                <PhoneIcon className="size-4" />
                {site.phoneDisplay}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
