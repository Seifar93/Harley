import { FadeInItem, FadeInSection } from "@/components/FadeInSection";
import { ArrowRightIcon, PhoneIcon } from "@/components/icons";
import { hero, site } from "@/content/site";

export function Hero({ index }: { index: number }) {
  return (
    <FadeInSection
      id="top"
      index={index}
      className="relative overflow-hidden px-6 pb-28 pt-20 sm:pt-28"
    >
      {/* Soft gold wash behind the headline. Pure CSS — no image, no layout cost. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-[32rem] max-w-4xl rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <FadeInItem>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {hero.eyebrow}
          </p>
        </FadeInItem>

        <FadeInItem>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-light leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {hero.heading}
          </h1>
        </FadeInItem>

        <FadeInItem>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {hero.body}
          </p>
        </FadeInItem>

        <FadeInItem>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={site.phoneHref}
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-on-accent transition-colors duration-200 hover:bg-accent-soft"
            >
              <PhoneIcon className="size-4" />
              {hero.primaryCta}
            </a>
            <a
              href="#fleet"
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold tracking-wide text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              {hero.secondaryCta}
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </FadeInItem>

        <FadeInItem>
          <p className="mt-8 text-sm text-muted-foreground">
            {hero.reassurance}
          </p>
        </FadeInItem>
      </div>
    </FadeInSection>
  );
}
