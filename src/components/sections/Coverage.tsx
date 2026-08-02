import { FadeInItem, FadeInSection } from "@/components/FadeInSection";
import { PinIcon } from "@/components/icons";
import { coverage } from "@/content/site";

export function Coverage({ index }: { index: number }) {
  return (
    <FadeInSection
      id="coverage"
      index={index}
      className="border-y border-border bg-surface px-6 py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
        <div>
          <FadeInItem>
            <h2 className="rule-accent text-balance text-4xl font-light tracking-tight text-foreground sm:text-5xl">
              {coverage.heading}
            </h2>
          </FadeInItem>

          <FadeInItem>
            <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              {coverage.body}
            </p>
          </FadeInItem>
        </div>

        <ul className="flex flex-wrap gap-3 lg:pt-4">
          {coverage.places.map((place) => (
            <FadeInItem
              key={place}
              as="li"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:border-accent/50 hover:text-foreground"
            >
              <PinIcon className="size-3.5 text-accent" />
              {place}
            </FadeInItem>
          ))}
        </ul>
      </div>
    </FadeInSection>
  );
}
