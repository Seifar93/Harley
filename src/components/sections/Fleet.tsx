import { FadeInItem, FadeInSection } from "@/components/FadeInSection";
import { fleet } from "@/content/site";

export function Fleet({ index }: { index: number }) {
  return (
    <FadeInSection
      id="fleet"
      index={index}
      className="border-y border-border bg-surface px-6 py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <FadeInItem>
          <h2 className="rule-accent max-w-2xl text-balance text-4xl font-light tracking-tight text-foreground sm:text-5xl">
            The fleet
          </h2>
        </FadeInItem>

        <FadeInItem>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Chauffeur-driven or self-drive. Tell us the occasion and we will
            recommend the right class rather than the most expensive one.
          </p>
        </FadeInItem>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {fleet.map(({ name, seats, body }) => (
            <FadeInItem key={name} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-background p-8 transition-colors duration-300 hover:border-accent/50">
                {/*
                  Photography placeholder. Replace with the real vehicle images
                  — a fleet page without photographs will not convert.
                */}
                <div
                  aria-hidden
                  className="mb-7 flex h-40 items-center justify-center rounded-xl border border-dashed border-border bg-surface text-xs uppercase tracking-[0.2em] text-muted-foreground/60"
                >
                  Vehicle photograph
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-medium tracking-tight text-foreground">
                    {name}
                  </h3>
                  <span className="shrink-0 text-xs uppercase tracking-[0.15em] text-accent">
                    {seats}
                  </span>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </article>
            </FadeInItem>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
