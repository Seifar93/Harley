import { FadeInItem, FadeInSection } from "@/components/FadeInSection";
import { ICONS } from "@/components/icons";
import { whyUs } from "@/content/site";

/**
 * Reasons to choose them. Laid out as a ruled grid rather than four floating
 * cards — hairlines suit the brand, and drop shadows on a warm background go
 * muddy rather than reading as elevation.
 */
export function WhyUs({ index }: { index: number }) {
  return (
    <FadeInSection
      index={index}
      className="border-y border-border bg-surface px-6 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <FadeInItem>
            <p className="eyebrow text-accent">Why us</p>
          </FadeInItem>
          <FadeInItem>
            <h2 className="mt-5 text-4xl leading-tight tracking-tight text-balance text-foreground sm:text-5xl">
              The parts other people leave out
            </h2>
          </FadeInItem>
        </div>

        <ul className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((reason) => {
            const Icon = ICONS[reason.icon];
            return (
              <FadeInItem
                as="li"
                key={reason.title}
                className="group bg-surface p-8 transition-colors duration-300 hover:bg-surface-muted/60"
              >
                <Icon className="size-6 text-accent transition-transform duration-300 group-hover:-translate-y-0.5" />
                <h3 className="mt-6 text-xl leading-snug tracking-tight text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-pretty text-muted-foreground">
                  {reason.body}
                </p>
              </FadeInItem>
            );
          })}
        </ul>
      </div>
    </FadeInSection>
  );
}
