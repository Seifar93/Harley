/**
 * ─────────────────────────────────────────────────────────────────────────────
 * PLACEHOLDER COPY — REPLACE BEFORE PUBLISHING
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * starexecutivetravel.co.uk could not be reached from the build environment
 * (blocked by network policy), so the live site's wording, fleet list, prices,
 * and reviews could not be read.
 *
 * Only these details are sourced and believed accurate:
 *   - Company name, the strapline "Luxury Car Hire & Chauffeur Services"
 *   - Freephone number 0800 772 3183
 *   - Base/coverage: Bradford and the wider West Yorkshire area
 *   - Service mix: weddings, self-drive hire, chauffeur-driven executive travel
 *
 * EVERYTHING ELSE below — vehicle classes, testimonials, credentials, response
 * times — is illustrative placeholder text written to size the layout. The
 * testimonials in particular are invented and must not ship as real customer
 * reviews. Swap this file for the client's approved copy.
 */

export const site = {
  name: "Star Executive Travel",
  strapline: "Luxury Car Hire & Chauffeur Services",
  phoneDisplay: "0800 772 3183",
  phoneHref: "tel:08007723183",
  region: "West Yorkshire",
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Why us", href: "#why-us" },
  { label: "Coverage", href: "#coverage" },
] as const;

export const hero = {
  eyebrow: "Bradford · West Yorkshire",
  heading: "Arrive the way you intend to be remembered",
  body: "Chauffeur-driven executive travel, wedding cars, and self-drive luxury hire across West Yorkshire — booked directly, driven properly.",
  primaryCta: "Request a quote",
  secondaryCta: "See the fleet",
  reassurance: "Freephone booking · Fixed quotes · No account needed",
} as const;

export const services = [
  {
    icon: "rings",
    title: "Weddings",
    body: "Wedding car specialists. Ribbons, timings, and a second run for the bridal party arranged as standard.",
  },
  {
    icon: "plane",
    title: "Airport transfers",
    body: "Leeds Bradford, Manchester, and the London airports, with flight tracking and meet-and-greet arrivals.",
  },
  {
    icon: "briefcase",
    title: "Corporate & executive",
    body: "Discreet business travel with account billing, waiting time included, and consistent chauffeurs.",
  },
  {
    icon: "key",
    title: "Self-drive hire",
    body: "Take the keys yourself. Daily and weekend rates on the luxury and performance range.",
  },
  {
    icon: "sparkle",
    title: "Proms & celebrations",
    body: "Birthdays, anniversaries, and prom nights — photographs at the door, parents kept informed.",
  },
  {
    icon: "route",
    title: "Long distance",
    body: "Point-to-point across the UK at a fixed price agreed before you travel. No meters, no surge.",
  },
] as const;

/** Vehicle *classes*, not specific stock — confirm the real fleet before launch. */
export const fleet = [
  {
    name: "Executive saloon",
    seats: "3 passengers",
    body: "The default for business travel and airport runs. Quiet cabin, full-size luggage capacity.",
  },
  {
    name: "Luxury SUV",
    seats: "4–6 passengers",
    body: "Height, space, and presence. The usual choice for groups and longer motorway journeys.",
  },
  {
    name: "Wedding classic",
    seats: "2–3 passengers",
    body: "The photographs car. Dressed with ribbon in your colours and held for the full ceremony.",
  },
  {
    name: "Performance range",
    seats: "2 passengers",
    body: "Available chauffeur-driven or self-drive for milestone occasions and shoots.",
  },
] as const;

export const whyUs = [
  {
    icon: "shield",
    title: "Licensed and insured",
    body: "Fully licensed private hire operation with insurance documentation available on request.",
  },
  {
    icon: "clock",
    title: "Early, not on time",
    body: "Chauffeurs arrive ahead of the booked slot. Waiting time on airport pickups is included.",
  },
  {
    icon: "tag",
    title: "Fixed quotes",
    body: "The price agreed at booking is the price invoiced. No meter, no peak-time multiplier.",
  },
  {
    icon: "phone",
    title: "A person on the phone",
    body: "Bookings and changes handled directly on the freephone line, not through an app queue.",
  },
] as const;

export const coverage = {
  heading: "Based in Bradford, covering the North",
  body: "Regular routes across West Yorkshire and beyond. If your journey is not listed, it is almost certainly still covered — call and ask.",
  places: [
    "Bradford",
    "Leeds",
    "Halifax",
    "Huddersfield",
    "Wakefield",
    "Harrogate",
    "York",
    "Leeds Bradford Airport",
    "Manchester Airport",
    "Sheffield",
  ],
} as const;

/** INVENTED — illustrative only. Do not publish as real reviews. */
export const testimonials = [
  {
    quote:
      "Booked for our wedding in September. The car arrived early, dressed exactly as we asked, and the driver waited without a word while photographs overran by half an hour.",
    name: "Placeholder review",
    context: "Wedding · Bradford",
  },
  {
    quote:
      "I use them for Leeds Bradford runs most months. Flights get delayed and it has never once been a problem or an extra charge.",
    name: "Placeholder review",
    context: "Airport transfer · Leeds",
  },
  {
    quote:
      "Quoted on the phone in two minutes, and the invoice matched the quote to the penny. That is rarer than it should be.",
    name: "Placeholder review",
    context: "Corporate account · Halifax",
  },
] as const;

export const cta = {
  heading: "Tell us the date and the destination",
  body: "Quotes are given on the call. Weddings and long-distance journeys are worth booking early — the wedding season fills from spring.",
  primary: "Call 0800 772 3183",
  secondary: "Email an enquiry",
} as const;

export const footerGroups = [
  {
    title: "Services",
    links: ["Weddings", "Airport transfers", "Corporate", "Self-drive hire"],
  },
  {
    title: "Areas",
    links: ["Bradford", "Leeds", "Halifax", "Harrogate"],
  },
  {
    title: "Company",
    links: ["About", "Fleet", "Contact", "Terms"],
  },
] as const;
