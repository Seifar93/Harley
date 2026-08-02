# Bespoke Blinds — site redesign

A Next.js redesign concept for [bespokeblinds.co.uk](https://bespokeblinds.co.uk),
built around a slat-reveal motion system: artwork sits behind a closed blind
that opens as you scroll.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## ⚠️ Copy is placeholder

**The live site could not be reached from the build environment.** The egress
proxy answers `403` to `CONNECT` for that host, and a web search surfaced only
unrelated blinds retailers. Its wording, product range, prices, coverage area,
contact details and reviews could not be read, and none of them are transcribed
here.

**All copy lives in [`src/content/site.ts`](src/content/site.ts)** and is
illustrative — a plausible made-to-measure blinds business written to size the
layout, not this one. Nothing on the page is sourced. Replace the whole file
before launch. In particular:

| Value | Status |
|-------|--------|
| Phone number | **Invented.** Uses Ofcom's `0117 496 xxxx` drama range, which is permanently unallocated, so it cannot ring a real person if it ships by accident |
| Email address | **Invented** |
| Testimonials | **Invented.** Every one is attributed to "Placeholder review" so an accidental launch is obvious on the page, not just in the source |
| Stats (24 years, 60,000 blinds, 10yr guarantee, 98%) | **Invented.** The kind of claim that attracts an ASA complaint if wrong |
| Coverage area | Plausible South West region — confirm the real one |
| Ranges | Generic categories every blinds firm sells, not a confirmed catalogue |
| Footer links | Point at `#`; the pages do not exist in this single-page build |

## Motion system

Three files do the work:

- [`src/lib/motion.ts`](src/lib/motion.ts) — easing, durations, variants
- [`src/components/FadeInSection.tsx`](src/components/FadeInSection.tsx) —
  `<FadeInSection>` and `<FadeInItem>`
- [`src/components/SlatReveal.tsx`](src/components/SlatReveal.tsx) — the
  signature reveal

### Section cascade

Every section is wrapped in `<FadeInSection>` and passed its position as
`index`:

```tsx
const SECTIONS = [Stats, Ranges, LightControl, Process, WhyUs, Coverage, Testimonials, CallToAction];

{SECTIONS.map((Section, index) => <Section key={Section.name} index={index + 1} />)}
```

Sections fade and rise 24px when they scroll into view, once (`viewport.once`),
firing slightly before they are fully on screen so the animation finishes by the
time the content is read. Two stagger layers run:

| Layer | Control | Effect |
|-------|---------|--------|
| Between sections | `index * SECTION_STAGGER` (0.12s), capped at 2 steps | Sections sharing a viewport cascade rather than appearing together |
| Within a section | `staggerChildren` (0.08s) | Cards, chips and quotes reveal in DOM order |

**The cap matters.** Uncapped, the CTA at index 8 would wait 0.96s before
starting — long enough to read as broken. Capping at 2 steps keeps the cascade
where it is actually visible (the first screenful) and costs nothing below it.

To reorder the page, move entries in the `SECTIONS` array — the stagger follows.

### The slat reveal

`<SlatReveal>` covers its children with horizontal louvres that tilt open in
sequence. Only `rotateX` and `opacity` animate, so the whole effect stays on the
compositor — which matters because the ranges grid puts eight of them on one
screen. The slats rotate past 90° so the face turns away from the viewer rather
than merely fading.

Slats are absolutely positioned and one pixel taller than their share of the
container: at fractional container heights, flex rounding leaves hairline gaps
that flash the artwork through a blind that is supposed to still be shut.

In the ranges grid the per-card delay is keyed to position *within its row*
(`i % 4`), not index in the list — keying it to the raw index would put a
visible half-second lag on the bottom row, which arrives on screen at the same
moment as the row above it.

### Light-control demo

[`LightControl.tsx`](src/components/sections/LightControl.tsx) is the one
section a visitor can operate, and it argues the product better than a paragraph
can. The angles are the real ones: a louvre rotates about its own long axis, so
~0° is shut, ~90° is edge-on and brightest, and past 90° it closes again the
other way. That is why "level" is 84° rather than 0°, and why the light curve
peaks in the middle of the range instead of running dark-to-bright.

Dimming is split across two layers, one either side of the slats. A single
overlay on top blacks out the blind along with the room — and a closed blind is
the one thing you can still see.

The control is a real `<input type="range">`. A custom drag handler would have
needed keyboard support, focus handling, touch targets and value announcement
rebuilt from scratch; `aria-valuetext` makes it announce "Level" rather than
"3 of 5". Verified by driving it with arrow keys.

### Reduced motion

`useReducedMotion()` swaps in variants that fade without travel or delay, so
content resolves to its final state instead of being cut off mid-flight. A CSS
`prefers-reduced-motion` block covers the marquee keyframes and any transitions
added later.

The marquee's fallback is a plain wrapped list, not a paused ticker — a
stationary marquee still clips half its content off the side of the screen.
That swap is gated behind
[`useHasMounted`](src/lib/useHasMounted.ts): the motion preference is a client
media query, so rendering a different element tree on the first client render
is a hydration mismatch. Deferring by one commit keeps hydration clean.

Verified in a headless browser with `reducedMotion: "reduce"`: the hero heading
reaches opacity 1, every slat reaches opacity 0 (artwork revealed), and the
console is clean.

## Design decisions

Style, palette and type came from the `ui-ux-pro-max` skill in
[`.claude/skills/`](.claude/skills/README.md), which matched this brief to a
premium light base with Playfair Display / Inter and a bronze accent. Two
changes were made to its output:

1. Its neutral stone background (`#FAFAF9`) was warmed to `#FAF8F5`. Window
   dressing is sold on how light falls in a room, so the page should read as
   daylight on linen, not as cool grey.
2. Its accent (`#A16207`) was darkened to `#8F5706`. The original clears AA on
   white but drops to 4.16:1 on the muted sand surface — exactly where the
   small-caps eyebrow labels sit. `#8F5706` holds AA on all three surfaces, so
   one accent token works everywhere instead of two.

Measured contrast: foreground 17.6:1, muted-foreground 5.5:1, accent 5.6:1 on
the page background; accent-soft 9.3:1 and muted-on-ink 8.1:1 on the dark
sections; white on accent 5.9:1 for filled buttons. All clear WCAG AA.

The ground alternates deliberately — linen, muted, linen, **ink**, linen, white,
linen, muted, **ink**. The two dark panels are the interactive demo and the
closing CTA, the two things a visitor should remember, and they sit far enough
apart that neither reads as a repeat of the other.

Icons are inline SVG, never emoji.

### No photography

There is no imagery of the client's work, and a stock interior shot would be
worse than none — it would show someone else's blinds. Two components stand in:

- [`WindowScene.tsx`](src/components/WindowScene.tsx) — the hero window, CSS
  gradients plus one inline SVG horizon
- [`RangeVisual.tsx`](src/components/RangeVisual.tsx) — per-product swatches,
  each a material colour plus a repeating gradient miming that product's
  geometry, so the eight cards are distinguishable at a glance

Both are self-contained and cost no network request. The card layout already
reserves a fixed aspect ratio, so dropping real photographs in will not shift
anything.

## Verified

Checked in headless Chromium at 1440px and 390px:

- `npm run build`, `npm run lint` and `tsc --noEmit` all clean
- No console errors or hydration warnings, including under reduced motion
- No horizontal overflow at 390px (`scrollWidth === clientWidth`)
- Light-control slider operable by keyboard, announcing position names
- Mobile menu opens and closes

## MCP servers

[`.mcp.json`](.mcp.json) registers the [21st.dev](https://21st.dev) component
registry. Set the key before starting Claude Code — the config references
`${API_KEY_21ST}` so no secret is committed:

```bash
export API_KEY_21ST="your-key-here"
```

> `21st.dev` is unreachable from remote sessions whose egress policy does not
> allow it (the proxy answers `403` to `CONNECT`). Works from local sessions.
