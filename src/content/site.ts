/**
 * ─────────────────────────────────────────────────────────────────────────────
 * PLACEHOLDER COPY — REPLACE BEFORE PUBLISHING
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * bespokeblinds.co.uk could not be reached from the build environment: the
 * egress proxy answers 403 to CONNECT for that host, and web search returned
 * only unrelated blind retailers. The live site's wording, product range,
 * prices, coverage area, contact details and reviews could therefore not be
 * read, and NONE of them are transcribed here.
 *
 * Everything below is illustrative placeholder text, written to exercise the
 * layout at realistic lengths. It is a plausible made-to-measure blinds
 * business, not this one. Before launch, every value in this file needs to be
 * replaced with the client's approved copy — in particular:
 *
 *   - `site.phoneDisplay` / `phoneHref` / `email` are INVENTED. The phone
 *     number uses Ofcom's 0117 496 xxxx drama range, which is permanently
 *     unallocated, so it cannot ring a real person if it ships by accident.
 *   - `testimonials` are INVENTED and must not ship as real customer reviews.
 *   - `stats` (years trading, blinds fitted, guarantee) are INVENTED and are
 *     the kind of claim that attracts an ASA complaint if wrong.
 *   - `ranges` are generic product categories every blinds firm sells, not a
 *     confirmed catalogue.
 *   - `coverage` names a plausible service region; confirm the real one.
 */

export const site = {
  name: "Bespoke Blinds",
  strapline: "Made-to-Measure Blinds, Shutters & Curtains",
  /** INVENTED — Ofcom drama range, never allocated to a real subscriber. */
  phoneDisplay: "0117 496 0142",
  phoneHref: "tel:01174960142",
  /** INVENTED. */
  email: "hello@bespokeblinds.co.uk",
  emailHref: "mailto:hello@bespokeblinds.co.uk",
  region: "the South West",
} as const;

export const nav = [
  { label: "Ranges", href: "#ranges" },
  { label: "Light control", href: "#light" },
  { label: "How it works", href: "#process" },
  { label: "Coverage", href: "#coverage" },
] as const;

export const hero = {
  eyebrow: "Measured, made and fitted in the UK",
  /** Split on whitespace and animated word by word — keep it short. */
  heading: "Windows dressed to the millimetre",
  body: "Blinds, plantation shutters and curtains made to your exact openings — not cut down from stock. One person measures, specifies and fits, so nothing is lost between the survey and the screwdriver.",
  primaryCta: "Book a free measure",
  secondaryCta: "See the ranges",
  reassurance: "Free home visit · No-obligation quote · Fitted, not flat-packed",
} as const;

/** INVENTED figures — verify or delete before launch. */
export const stats = [
  { value: 24, suffix: "", label: "Years fitting windows" },
  { value: 60000, suffix: "+", label: "Blinds made to measure" },
  { value: 10, suffix: "yr", label: "Guarantee on every fit" },
  { value: 98, suffix: "%", label: "Fitted on the first visit" },
] as const;

/**
 * Product categories. `tone` drives the CSS gradient standing in for the
 * product photograph — see RangeCard. Real photography replaces it.
 */
export const ranges = [
  {
    icon: "roller",
    name: "Roller blinds",
    body: "The plainest thing you can put on a window, and the hardest to get right. Blackout, dim-out, translucent and screen fabrics, all cut square to the frame.",
    detail: "Blackout · Screen · Dim-out",
    tone: "linen",
  },
  {
    icon: "roman",
    name: "Roman blinds",
    body: "Soft folds and a lined body, so a window reads as a furnishing rather than a fitting. Made from our fabric books or from yours.",
    detail: "Lined · Interlined · Your own fabric",
    tone: "sand",
  },
  {
    icon: "venetian",
    name: "Wooden Venetians",
    body: "Basswood and faux-wood slats in 25, 35 and 50mm, with tapes to match or contrast. The most precise light control of anything on this page.",
    detail: "25 / 35 / 50mm slats",
    tone: "walnut",
  },
  {
    icon: "shutter",
    name: "Plantation shutters",
    body: "A permanent fitting, built to the reveal and hinged to your handles. Full height, tier-on-tier, café style and solid panels.",
    detail: "Tier-on-tier · Café · Full height",
    tone: "chalk",
  },
  {
    icon: "curtain",
    name: "Curtains & poles",
    body: "Hand-finished headings, weighted hems, and poles or tracks fitted to carry the weight of them. Measured for stack-back, not just for drop.",
    detail: "Wave · Pinch pleat · Eyelet",
    tone: "clay",
  },
  {
    icon: "vertical",
    name: "Vertical blinds",
    body: "Still the most practical answer to a wide patio door or a south-facing office. Replaceable louvres, child-safe chains as standard.",
    detail: "89 / 127mm louvres",
    tone: "stone",
  },
  {
    icon: "perfectfit",
    name: "Perfect Fit",
    body: "Clipped into the beading of a uPVC frame — no drilling, no cords, and the blind travels with the window when it opens.",
    detail: "No-drill · Tilt & turn safe",
    tone: "sage",
  },
  {
    icon: "motor",
    name: "Motorised systems",
    body: "Battery, mains or solar, on a timer or a scene. Worth it on anything above a stairwell or behind a sink where nobody reaches the cord.",
    detail: "App · Timer · Voice",
    tone: "ink",
  },
] as const;

/**
 * Copy for the interactive light-control demo. The slider tilts a set of
 * slats through five positions; each position gets a label and a note.
 */
export const lightControl = {
  eyebrow: "Try it",
  heading: "The whole point is the angle",
  body: "A blind is not a switch. Slat angle decides how much light enters, where it lands, and whether anyone outside can see in. Drag to tilt.",
  positions: [
    {
      label: "Closed down",
      note: "Full privacy, near-blackout. Light is turned back out of the room.",
    },
    {
      label: "Ajar",
      note: "A soft wash along the ceiling. Enough to work by without a lamp.",
    },
    {
      label: "Level",
      note: "Maximum daylight, minimum glare. The everyday position.",
    },
    {
      label: "Tilted up",
      note: "Light bounced onto the ceiling. Screens stay readable at midday.",
    },
    {
      label: "Closed up",
      note: "Privacy from below — the setting for a ground-floor front room.",
    },
  ],
} as const;

export const process = {
  eyebrow: "How it works",
  heading: "Four visits, one of them optional",
  body: "No showroom trip, no measuring yourself, no waiting in for a courier.",
  steps: [
    {
      title: "The call",
      body: "Ten minutes on the phone to work out roughly what you need and what it is likely to cost. Nobody visits before you have a ballpark.",
    },
    {
      title: "The measure",
      body: "We come to you with the fabric books and measure every opening ourselves. Recess, face-fit and out-of-square are our problem, not yours.",
    },
    {
      title: "The making",
      body: "Cut and assembled to your sizes in the UK, typically within ten working days. You get a fitting date before we start, not after.",
    },
    {
      title: "The fit",
      body: "The person who measured comes back and fits. Packaging leaves with them, and nothing is signed off until it hangs straight.",
    },
  ],
} as const;

export const whyUs = [
  {
    icon: "ruler",
    title: "We measure, so we carry the risk",
    body: "If a blind comes back the wrong size, that is ours to remake. The measurement is never the customer's liability.",
  },
  {
    icon: "shield",
    title: "Child-safe by default",
    body: "Every corded product is supplied to BS EN 13120 with breakaway devices and cleats fitted, not left in the bag.",
  },
  {
    icon: "leaf",
    title: "Made in the UK",
    body: "Cut and assembled here, which is why a remake takes days rather than a container ship.",
  },
  {
    icon: "wallet",
    title: "The quote is the price",
    body: "Fitting, brackets, waste removal and VAT are in the number we give you on the day.",
  },
] as const;

export const coverage = {
  eyebrow: "Coverage",
  heading: "Free measure across the South West",
  body: "We cover roughly an hour from the workshop. If you are just outside it, call anyway — a full-house job is usually still worth the drive.",
  places: [
    "Bristol",
    "Bath",
    "Clifton",
    "Chipping Sodbury",
    "Thornbury",
    "Portishead",
    "Clevedon",
    "Nailsea",
    "Weston-super-Mare",
    "Keynsham",
    "Frome",
    "Trowbridge",
    "Chippenham",
    "Stroud",
    "Gloucester",
    "Cheltenham",
  ],
} as const;

/** INVENTED — illustrative only. Do not publish as real reviews. */
export const testimonials = [
  {
    quote:
      "Fourteen windows, not one of them a standard size, and every blind went up first time. The fitter took the old ones away without being asked.",
    name: "Placeholder review",
    context: "Full house · Bristol",
  },
  {
    quote:
      "I had been quoted for shutters twice before and both firms wanted me to measure my own bay. These came out, measured it, and the price never moved.",
    name: "Placeholder review",
    context: "Plantation shutters · Bath",
  },
  {
    quote:
      "The motorised blinds in the stairwell were the thing I was most nervous about and they are the ones I show people.",
    name: "Placeholder review",
    context: "Motorised · Portishead",
  },
] as const;

export const cta = {
  eyebrow: "Next step",
  heading: "Book the measure. Decide afterwards.",
  body: "The home visit is free and carries no obligation — you get the sizes, the fabric books and a fixed written quote, whether or not you order.",
  primary: "Call for a free measure",
  secondary: "Email an enquiry",
} as const;

export const footerGroups = [
  {
    title: "Ranges",
    links: ["Roller blinds", "Roman blinds", "Wooden Venetians", "Shutters"],
  },
  {
    title: "Areas",
    links: ["Bristol", "Bath", "Portishead", "Cheltenham"],
  },
  {
    title: "Company",
    links: ["How it works", "Guarantee", "Child safety", "Contact"],
  },
] as const;
