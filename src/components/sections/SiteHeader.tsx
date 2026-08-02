import { PhoneIcon, StarIcon } from "@/components/icons";
import { nav, site } from "@/content/site";

/**
 * Deliberately not wrapped in <FadeInSection>: navigation and the phone number
 * are present on load. Fading them in would delay the two things a visitor is
 * most likely to want immediately.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          className="flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-80"
        >
          <StarIcon className="size-6 text-accent" />
          <span className="font-display text-xl font-semibold tracking-wide text-foreground">
            Star Executive Travel
          </span>
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm text-muted-foreground">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="cursor-pointer transition-colors duration-200 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={site.phoneHref}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold tracking-wide text-on-accent transition-colors duration-200 hover:bg-accent-soft"
        >
          <PhoneIcon className="size-4" />
          <span className="hidden sm:inline">{site.phoneDisplay}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
