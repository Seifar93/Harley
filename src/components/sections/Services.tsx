import { FadeInItem, FadeInSection } from "@/components/FadeInSection";
import { ICONS } from "@/components/icons";
import { services } from "@/content/site";

export function Services({ index }: { index: number }) {
  return (
    <FadeInSection
      id="services"
      index={index}
      className="mx-auto w-full max-w-6xl px-6 py-24"
    >
      <FadeInItem>
        <h2 className="rule-accent max-w-2xl text-balance text-4xl font-light tracking-tight text-foreground sm:text-5xl">
          One operator, every kind of journey
        </h2>
      </FadeInItem>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon, title, body }) => {
          const Icon = ICONS[icon];
          return (
            <FadeInItem key={title} className="h-full">
              <article className="group h-full bg-surface p-8 transition-colors duration-300 hover:bg-surface-raised">
                <Icon className="size-7 text-accent" />
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </article>
            </FadeInItem>
          );
        })}
      </div>
    </FadeInSection>
  );
}
