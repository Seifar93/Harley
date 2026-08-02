import { FadeInItem, FadeInSection } from "@/components/FadeInSection";
import { MailIcon, PhoneIcon } from "@/components/icons";
import { cta, site } from "@/content/site";

export function CallToAction({ index }: { index: number }) {
  return (
    <FadeInSection index={index} className="px-6 pb-24">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-border bg-surface px-6 py-20 text-center sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -bottom-32 mx-auto h-64 max-w-2xl rounded-full bg-accent/15 blur-[100px]"
        />

        <div className="relative">
          <FadeInItem>
            <h2 className="mx-auto max-w-2xl text-balance text-4xl font-light tracking-tight text-foreground sm:text-5xl">
              {cta.heading}
            </h2>
          </FadeInItem>

          <FadeInItem>
            <p className="mx-auto mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              {cta.body}
            </p>
          </FadeInItem>

          <FadeInItem>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-on-accent transition-colors duration-200 hover:bg-accent-soft"
              >
                <PhoneIcon className="size-4" />
                {cta.primary}
              </a>
              {/* TODO: swap for the real enquiries address. */}
              <a
                href="mailto:hello@starexecutivetravel.co.uk"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold tracking-wide text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                <MailIcon className="size-4" />
                {cta.secondary}
              </a>
            </div>
          </FadeInItem>
        </div>
      </div>
    </FadeInSection>
  );
}
