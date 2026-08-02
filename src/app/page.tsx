import { CallToAction } from "@/components/sections/CallToAction";
import { Coverage } from "@/components/sections/Coverage";
import { Fleet } from "@/components/sections/Fleet";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";

/**
 * Every section is wrapped in <FadeInSection> and receives its position on the
 * page as `index`. The index becomes a delay (index * SECTION_STAGGER), so
 * sections that enter the viewport together — the hero and the top of the
 * services grid on a tall display, for instance — cascade instead of appearing
 * as one block. Sections further down are additionally sequenced by the scroll
 * itself, since each only animates once it reaches the viewport.
 *
 * To reorder the page, move entries in this array: the stagger follows.
 */
const SECTIONS = [
  Hero,
  Services,
  Fleet,
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
        {SECTIONS.map((Section, index) => (
          <Section key={Section.name} index={index} />
        ))}
      </main>
      <SiteFooter index={SECTIONS.length} />
    </>
  );
}
