# Star Executive Travel — site redesign

A Next.js redesign concept for [starexecutivetravel.co.uk](https://starexecutivetravel.co.uk),
built around scroll-triggered section reveals.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## ⚠️ Copy is placeholder

The live site could not be reached from the build environment (blocked by
network policy), so its wording, fleet, prices, and reviews could not be read.
**All copy lives in [`src/content/site.ts`](src/content/site.ts)** and is
illustrative — written to size the layout, not transcribed from the client.

Only these details are sourced: the company name and "Luxury Car Hire &
Chauffeur Services" strapline, the freephone number 0800 772 3183, a Bradford /
West Yorkshire base, and the weddings + self-drive + chauffeur service mix.

The **testimonials are invented** and must be replaced with real attributable
reviews or deleted before launch. Fleet entries are generic vehicle *classes*,
not confirmed stock, and the fleet cards render photograph placeholders.

## Motion system

Two files do the work:

- [`src/lib/motion.ts`](src/lib/motion.ts) — easing, durations, and variants
- [`src/components/FadeInSection.tsx`](src/components/FadeInSection.tsx) —
  `<FadeInSection>` and `<FadeInItem>`

Every section on the page is wrapped in `<FadeInSection>` and passed its
position as `index`:

```tsx
const SECTIONS = [Hero, Services, Fleet, WhyUs, Coverage, Testimonials, CallToAction];

{SECTIONS.map((Section, index) => <Section key={Section.name} index={index} />)}
```

Sections fade and rise 24px when they scroll into view, once (`viewport.once`),
firing slightly before they are fully on screen so the animation finishes by
the time the content is read. Two stagger layers run:

| Layer | Control | Effect |
|-------|---------|--------|
| Between sections | `index * SECTION_STAGGER` (0.12s), capped at 2 steps | Sections sharing a viewport cascade rather than appearing together |
| Within a section | `staggerChildren` (0.08s) | Cards, list chips, and quotes reveal in DOM order |

**The cap matters.** Uncapped, the CTA at index 6 would wait 0.72s before
starting — long enough to read as broken. Capping at 2 steps keeps the cascade
where it is actually visible (the first screenful) and costs nothing below it.
Measured: the CTA starts at 262ms and is fully visible at 645ms.

To reorder the page, move entries in the `SECTIONS` array — the stagger follows.

### Reduced motion

`useReducedMotion()` swaps in variants that fade without travel or delay, so
content resolves to its final state instead of being cut off mid-flight. A CSS
`prefers-reduced-motion` block covers any transitions added later. Verified:
all six service cards reach opacity 1 within 61ms with the preference set.

## Design decisions

Style, palette, and type came from the `ui-ux-pro-max` skill in
[`.claude/skills/`](.claude/skills/README.md), which matched this brief to a
premium-dark base with Cormorant/Montserrat. Its generic red accent was swapped
for champagne gold — red reads as urgency and error, wrong for weddings and
executive travel. Contrast against the background: foreground 16.8:1,
muted text 8.1:1, accent 7.4:1, all clear of WCAG AA.

Icons are inline SVG, never emoji.

## MCP servers

[`.mcp.json`](.mcp.json) registers the [21st.dev](https://21st.dev) component
registry. Set the key before starting Claude Code — the config references
`${API_KEY_21ST}` so no secret is committed:

```bash
export API_KEY_21ST="your-key-here"
```

> `21st.dev` is unreachable from remote sessions whose egress policy does not
> allow it (the proxy answers `403` to `CONNECT`). Works from local sessions.
