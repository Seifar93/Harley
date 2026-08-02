import { FadeInItem, FadeInSection } from "@/components/FadeInSection";
import { PhoneIcon, StarIcon } from "@/components/icons";
import { footerGroups, site } from "@/content/site";

export function SiteFooter({ index }: { index: number }) {
  return (
    <FadeInSection
      as="footer"
      index={index}
      className="mt-auto border-t border-border bg-surface"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <FadeInItem>
            <div className="flex items-center gap-2.5">
              <StarIcon className="size-5 text-accent" />
              <span className="font-display text-lg font-semibold tracking-wide text-foreground">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.strapline} across {site.region}.
            </p>
            <a
              href={site.phoneHref}
              className="mt-5 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-accent transition-colors duration-200 hover:text-accent-soft"
            >
              <PhoneIcon className="size-4" />
              {site.phoneDisplay}
            </a>
          </FadeInItem>

          {footerGroups.map(({ title, links }) => (
            <FadeInItem key={title}>
              <h3 className="text-sm font-semibold tracking-wide text-foreground">
                {title}
              </h3>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="cursor-pointer text-sm text-muted-foreground transition-colors duration-200 hover:text-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeInItem>
          ))}
        </div>

        <FadeInItem>
          <p className="mt-14 border-t border-border pt-8 text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </FadeInItem>
      </div>
    </FadeInSection>
  );
}
