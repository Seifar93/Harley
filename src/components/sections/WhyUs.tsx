import { FadeInItem, FadeInSection } from "@/components/FadeInSection";
import { ICONS } from "@/components/icons";
import { whyUs } from "@/content/site";

export function WhyUs({ index }: { index: number }) {
  return (
    <FadeInSection
      id="why-us"
      index={index}
      className="mx-auto w-full max-w-6xl px-6 py-24"
    >
      <FadeInItem>
        <h2 className="rule-accent max-w-2xl text-balance text-4xl font-light tracking-tight text-foreground sm:text-5xl">
          What you are actually paying for
        </h2>
      </FadeInItem>

      <dl className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2">
        {whyUs.map(({ icon, title, body }) => {
          const Icon = ICONS[icon];
          return (
            <FadeInItem key={title}>
              <div className="flex gap-5">
                <Icon className="mt-0.5 size-6 shrink-0 text-accent" />
                <div>
                  <dt className="font-display text-xl font-medium tracking-tight text-foreground">
                    {title}
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {body}
                  </dd>
                </div>
              </div>
            </FadeInItem>
          );
        })}
      </dl>
    </FadeInSection>
  );
}
