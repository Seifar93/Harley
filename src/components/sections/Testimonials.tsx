import { FadeInItem, FadeInSection } from "@/components/FadeInSection";
import { StarIcon } from "@/components/icons";
import { testimonials } from "@/content/site";

/**
 * NOTE: the quotes in content/site.ts are invented placeholders sized to the
 * layout. Replace them with real, attributable reviews (or delete the section)
 * before this goes live — publishing fabricated testimonials for a trading
 * business is both misleading and, under the CPRs, unlawful in the UK.
 */
export function Testimonials({ index }: { index: number }) {
  return (
    <FadeInSection
      index={index}
      className="mx-auto w-full max-w-6xl px-6 py-24"
      aria-labelledby="testimonials-heading"
    >
      <FadeInItem>
        <h2
          id="testimonials-heading"
          className="rule-accent max-w-2xl text-balance text-4xl font-light tracking-tight text-foreground sm:text-5xl"
        >
          In their words
        </h2>
      </FadeInItem>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {testimonials.map(({ quote, name, context }) => (
          <FadeInItem key={context} className="h-full">
            <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-8">
              <div>
                <div className="flex gap-1" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="size-4 text-accent" />
                  ))}
                </div>
                <blockquote className="mt-6 text-[15px] leading-relaxed text-foreground/90">
                  &ldquo;{quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-8 border-t border-border pt-5">
                <span className="block text-sm font-medium text-foreground">
                  {name}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {context}
                </span>
              </figcaption>
            </figure>
          </FadeInItem>
        ))}
      </div>
    </FadeInSection>
  );
}
