import { FadeInItem, FadeInSection } from "@/components/FadeInSection";
import { RangeVisual } from "@/components/RangeVisual";
import { SlatReveal } from "@/components/SlatReveal";
import { ICONS } from "@/components/icons";
import { ranges } from "@/content/site";

/**
 * The catalogue. Every card's artwork is behind a closed blind that opens as
 * the card reaches the viewport, so scrolling this section looks like a room
 * being opened up one window at a time.
 *
 * The slat delay is keyed to the card's position within its row
 * (`i % 4`), not its index in the whole list. Keying it to the raw index would
 * make the eighth card wait half a second after the seventh even though they
 * arrive on screen together, and would put a visible lag on the bottom row.
 *
 * Hover lift is plain CSS `group-hover`, not Framer: there is no state to
 * coordinate, and eight more motion components on one screen buys nothing.
 */
export function Ranges({ index }: { index: number }) {
  return (
    <FadeInSection
      id="ranges"
      index={index}
      className="scroll-mt-24 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <FadeInItem>
            <p className="eyebrow text-accent">The ranges</p>
          </FadeInItem>
          <FadeInItem>
            <h2 className="mt-5 text-4xl leading-tight tracking-tight text-balance text-foreground sm:text-5xl">
              Eight ways to control a window
            </h2>
          </FadeInItem>
          <FadeInItem>
            <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
              Every one of them made to your measurements. Which is right
              depends on the room, the frame and the light — that is what the
              home visit is for.
            </p>
          </FadeInItem>
        </div>

        <ul className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {ranges.map((range, i) => {
            const Icon = ICONS[range.icon];
            return (
              <FadeInItem as="li" key={range.name} className="group">
                <SlatReveal
                  delay={(i % 4) * 0.08}
                  count={7}
                  className="aspect-4/5 w-full rounded-sm border border-border shadow-[0_18px_40px_-30px_rgba(26,21,18,0.6)] transition-shadow duration-300 group-hover:shadow-[0_26px_50px_-28px_rgba(26,21,18,0.55)]"
                >
                  <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                    <RangeVisual icon={range.icon} tone={range.tone} />
                  </div>
                </SlatReveal>

                <div className="mt-6">
                  <div className="flex items-center gap-2.5">
                    <Icon className="size-5 shrink-0 text-accent" />
                    <h3 className="text-xl tracking-tight text-foreground">
                      {range.name}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-pretty text-muted-foreground">
                    {range.body}
                  </p>
                  <p className="mt-4 text-xs tracking-wide text-muted-foreground/80">
                    {range.detail}
                  </p>
                </div>
              </FadeInItem>
            );
          })}
        </ul>
      </div>
    </FadeInSection>
  );
}
