import { FadeInItem, FadeInSection } from "@/components/FadeInSection";
import { MailIcon, PhoneIcon } from "@/components/icons";
import { footerGroups, site } from "@/content/site";

/**
 * Footer.
 *
 * The link columns are placeholders: they point at `#` because the pages they
 * describe do not exist in this single-page build. They are here to size the
 * footer honestly for the real site's information architecture — wire them to
 * real routes, or cut the columns, before launch.
 */
export function SiteFooter({ index }: { index: number }) {
  return (
    <FadeInSection
      as="footer"
      index={index}
      className="border-t border-border bg-background px-6 py-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <FadeInItem>
            <p className="font-display text-2xl tracking-tight text-foreground">
              {site.name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.strapline}. Measured, made and fitted across {site.region}.
            </p>

            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a
                href={site.phoneHref}
                className="inline-flex w-fit cursor-pointer items-center gap-2 text-foreground transition-colors duration-200 hover:text-accent"
              >
                <PhoneIcon className="size-4 text-accent" />
                {site.phoneDisplay}
              </a>
              <a
                href={site.emailHref}
                className="inline-flex w-fit cursor-pointer items-center gap-2 text-foreground transition-colors duration-200 hover:text-accent"
              >
                <MailIcon className="size-4 text-accent" />
                {site.email}
              </a>
            </div>
          </FadeInItem>

          {footerGroups.map((group) => (
            <FadeInItem key={group.title}>
              <h2 className="eyebrow font-sans text-muted-foreground">
                {group.title}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="cursor-pointer text-sm text-foreground transition-colors duration-200 hover:text-accent"
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
          <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name}. Concept redesign —
              placeholder content.
            </p>
            <p>Child safety compliant to BS EN 13120.</p>
          </div>
        </FadeInItem>
      </div>
    </FadeInSection>
  );
}
