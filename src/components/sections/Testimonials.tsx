import { FadeInItem, FadeInSection } from "@/components/FadeInSection";
import { QuoteMarkIcon } from "@/components/icons";
import { testimonials } from "@/content/site";

/**
 * Customer quotes.
 *
 * ⚠ The quotes in content/site.ts are INVENTED placeholders. They are written
 * in a plausible voice precisely so the layout is tested honestly, which makes
 * them dangerous to leave in — every one is attributed to "Placeholder review"
 * so that shipping them by accident is obvious on the page rather than only in
 * the source. Replace with real attributable reviews or delete the section.
 */
export function Testimonials({ index }: { index: number }) {
  return (
    <FadeInSection
      index={index}
      className="border-y border-border bg-surface-muted/50 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <FadeInItem>
            <p className="eyebrow text-accent">In their words</p>
          </FadeInItem>
          <FadeInItem>
            <h2 className="mt-5 text-4xl leading-tight tracking-tight text-balance text-foreground sm:text-5xl">
              Measured twice, said once
            </h2>
          </FadeInItem>
        </div>

        <ul className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <FadeInItem
              as="li"
              key={testimonial.quote}
              className="relative flex flex-col rounded-sm border border-border bg-surface p-8"
            >
              <QuoteMarkIcon
                className="size-8 text-accent/20"
                aria-hidden
              />
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-pretty text-foreground">
                {testimonial.quote}
              </blockquote>
              <footer className="mt-7 border-t border-border pt-5">
                <p className="text-sm font-medium text-foreground">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {testimonial.context}
                </p>
              </footer>
            </FadeInItem>
          ))}
        </ul>
      </div>
    </FadeInSection>
  );
}
