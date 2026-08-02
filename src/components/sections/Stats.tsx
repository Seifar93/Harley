import { Counter } from "@/components/Counter";
import { FadeInItem, FadeInSection } from "@/components/FadeInSection";
import { stats } from "@/content/site";

/**
 * Trust band. Deliberately quiet — a thin rule top and bottom, no card, no
 * shadow — so it reads as a caption between the hero and the catalogue rather
 * than competing with either.
 *
 * NOTE: every figure here is placeholder. See content/site.ts.
 */
export function Stats({ index }: { index: number }) {
  return (
    <FadeInSection
      index={index}
      className="border-y border-border bg-surface-muted/50 px-6 py-14"
    >
      <dl className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {stats.map((stat) => (
          <FadeInItem key={stat.label} className="text-center">
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                className="block font-display text-4xl tracking-tight text-foreground tabular-nums sm:text-5xl"
              />
              <span className="mt-3 block text-sm text-muted-foreground">
                {stat.label}
              </span>
            </dd>
          </FadeInItem>
        ))}
      </dl>
    </FadeInSection>
  );
}
