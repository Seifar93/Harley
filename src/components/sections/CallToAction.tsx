import { FadeInItem, FadeInSection } from "@/components/FadeInSection";
import { MailIcon, PhoneIcon } from "@/components/icons";
import { cta, site } from "@/content/site";

/**
 * Closing call to action, on the dark ink ground so it reads as the end of the
 * page rather than another band of content.
 *
 * The background is a repeating linear gradient of slat lines rather than an
 * image — one paint, no request, and it ties the closing panel back to the
 * blind that opened the page.
 */
export function CallToAction({ index }: { index: number }) {
  return (
    <FadeInSection
      index={index}
      className="on-ink relative overflow-hidden bg-ink px-6 py-24 text-on-ink sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(180deg,#fff_0_1px,transparent_1px_14px)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-[#e0b44a]/15 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-3xl text-center">
        <FadeInItem>
          <p className="eyebrow text-accent-soft">{cta.eyebrow}</p>
        </FadeInItem>
        <FadeInItem>
          <h2 className="mt-5 text-4xl leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {cta.heading}
          </h2>
        </FadeInItem>
        <FadeInItem>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-on-ink">
            {cta.body}
          </p>
        </FadeInItem>
        <FadeInItem>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-accent-soft px-7 py-4 text-sm font-medium tracking-wide text-ink transition-colors duration-200 hover:bg-on-ink"
            >
              <PhoneIcon className="size-4" />
              {cta.primary}
            </a>
            <a
              href={site.emailHref}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-medium tracking-wide text-on-ink transition-colors duration-200 hover:border-accent-soft hover:text-accent-soft"
            >
              <MailIcon className="size-4" />
              {cta.secondary}
            </a>
          </div>
        </FadeInItem>
        <FadeInItem>
          <p className="mt-8 text-sm text-muted-on-ink">
            {site.phoneDisplay} · {site.email}
          </p>
        </FadeInItem>
      </div>
    </FadeInSection>
  );
}
