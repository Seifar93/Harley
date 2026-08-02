import { CallToAction } from "@/components/sections/CallToAction";
import { Coverage } from "@/components/sections/Coverage";
import { Hero } from "@/components/sections/Hero";
import { LightControl } from "@/components/sections/LightControl";
import { Process } from "@/components/sections/Process";
import { Ranges } from "@/components/sections/Ranges";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";

/**
 * Section order and rhythm.
 *
 * Every section below the hero is wrapped in <FadeInSection> and receives its
 * position as `index`. The index becomes a delay (index * SECTION_STAGGER,
 * capped at 2 steps), so sections that enter the viewport together — the hero
 * and the stats band on a tall display — cascade instead of appearing as one
 * block. Below the fold the scroll itself does the sequencing, since each
 * section only animates once it reaches the viewport.
 *
 * The ground alternates deliberately: linen, muted, linen, INK, linen, white,
 * linen, muted, INK. The two dark panels are the interactive demo and the
 * closing CTA — the two things a visitor should remember — and they are far
 * enough apart that neither reads as a repeat of the other.
 *
 * The Hero is excluded from this array because it animates on mount rather
 * than on scroll, and owns its own parallax.
 *
 * To reorder the page, move entries in this array: the stagger follows.
 */
const SECTIONS = [
  Stats,
  Ranges,
  LightControl,
  Process,
  WhyUs,
  Coverage,
  Testimonials,
  CallToAction,
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        {SECTIONS.map((Section, index) => (
          // +1 so the hero counts as index 0 in the cascade.
          <Section key={Section.name} index={index + 1} />
        ))}
      </main>
      <SiteFooter index={SECTIONS.length + 1} />
    </>
  );
}
