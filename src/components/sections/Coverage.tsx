import { FadeInItem, FadeInSection } from "@/components/FadeInSection";
import { Marquee } from "@/components/Marquee";
import { PinIcon } from "@/components/icons";
import { coverage } from "@/content/site";

/**
 * Service area. The towns run as a slow ticker rather than a static list of
 * sixteen chips: it fits a long list into one line, and the movement is the
 * only ambient motion on the page — everything else waits to be scrolled to.
 *
 * The Marquee component falls back to a plain wrapped list under reduced
 * motion, so no name is ever unreachable.
 */
export function Coverage({ index }: { index: number }) {
  return (
    <FadeInSection
      id="coverage"
      index={index}
      className="scroll-mt-24 overflow-hidden px-0 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-3xl px-6 text-center">
        <FadeInItem>
          <p className="eyebrow text-accent">{coverage.eyebrow}</p>
        </FadeInItem>
        <FadeInItem>
          <h2 className="mt-5 text-4xl leading-tight tracking-tight text-balance text-foreground sm:text-5xl">
            {coverage.heading}
          </h2>
        </FadeInItem>
        <FadeInItem>
          <p className="mt-6 leading-relaxed text-pretty text-muted-foreground">
            {coverage.body}
          </p>
        </FadeInItem>
      </div>

      <FadeInItem className="mt-14">
        <Marquee
          items={coverage.places}
          className="font-display text-2xl text-foreground sm:text-3xl"
        />
      </FadeInItem>

      <FadeInItem className="mt-14 flex justify-center px-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground">
          <PinIcon className="size-4 text-accent" />
          Not on the list? Call and ask — we usually still cover it.
        </p>
      </FadeInItem>
    </FadeInSection>
  );
}
