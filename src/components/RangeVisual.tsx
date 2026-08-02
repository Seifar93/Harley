import type { IconKey } from "@/components/icons";

/**
 * Product artwork for the range cards.
 *
 * Same reasoning as WindowScene: no photography of the client's work was
 * available, and stock imagery of a competitor's blinds would be worse than an
 * honest abstraction. Each card gets a colour drawn from the material — walnut
 * for wooden Venetians, chalk for shutters — plus a repeating gradient that
 * mimics that product's geometry, so the eight cards are distinguishable at a
 * glance rather than being eight identical swatches.
 *
 * Swap these for real photographs before launch; the card layout already
 * reserves a fixed aspect ratio, so dropping images in will not shift anything.
 */

type Tone =
  | "linen"
  | "sand"
  | "walnut"
  | "chalk"
  | "clay"
  | "stone"
  | "sage"
  | "ink";

/** Top and bottom stops for each material. */
const TONES: Record<Tone, [string, string]> = {
  linen: ["#f7f1e7", "#e6dccc"],
  sand: ["#f0e4d3", "#dbc9af"],
  walnut: ["#9a6a45", "#4f3220"],
  chalk: ["#ffffff", "#ece7dd"],
  clay: ["#ddbda7", "#b4876c"],
  stone: ["#eae6df", "#cbc3b7"],
  sage: ["#dbe2d5", "#a9b8a0"],
  ink: ["#33291f", "#14100c"],
};

/**
 * Geometry overlay per product. Percentages rather than pixels, so the stripe
 * count stays constant as the card grows instead of getting denser.
 */
function patternFor(icon: IconKey): string | undefined {
  switch (icon) {
    // Fine horizontal louvres, with a highlight on the upper face of each slat.
    case "venetian":
      return `repeating-linear-gradient(180deg, rgba(255,255,255,0.26) 0 2%, rgba(0,0,0,0.16) 2% 5%, transparent 5% 7.5%)`;
    // Deeper, softer folds that pool towards the bottom of each stack.
    case "roman":
      return `repeating-linear-gradient(180deg, rgba(255,255,255,0.34) 0 4%, rgba(0,0,0,0.11) 10% 13%, transparent 13% 16%)`;
    // Wide louvres plus the central tilt rod.
    case "shutter":
      return `linear-gradient(90deg, transparent 48.6%, rgba(0,0,0,0.16) 48.6% 51.4%, transparent 51.4%),
              repeating-linear-gradient(180deg, rgba(255,255,255,0.4) 0 3.5%, rgba(0,0,0,0.1) 3.5% 9%, transparent 9% 12%)`;
    // Vertical louvres, evenly spaced.
    case "vertical":
      return `repeating-linear-gradient(90deg, rgba(255,255,255,0.3) 0 4%, rgba(0,0,0,0.13) 4% 8%, transparent 8% 12%)`;
    // Irregular pleats — the varying stops are what stop it reading as a barcode.
    case "curtain":
      return `repeating-linear-gradient(90deg, rgba(255,255,255,0.34) 0 3%, rgba(0,0,0,0.14) 6% 9%, transparent 9% 14%)`;
    // A blind clipped inside a frame: an inset outline, no stripes.
    case "perfectfit":
      return `linear-gradient(0deg, transparent 8%, rgba(0,0,0,0.09) 8% 9%, transparent 9% 91%, rgba(0,0,0,0.09) 91% 92%, transparent 92%),
              linear-gradient(90deg, transparent 8%, rgba(0,0,0,0.09) 8% 9%, transparent 9% 91%, rgba(0,0,0,0.09) 91% 92%, transparent 92%)`;
    // Motorised: a clean drop with a single bottom bar, no visible cords.
    case "motor":
      return `linear-gradient(180deg, transparent 88%, rgba(255,255,255,0.22) 88% 93%, transparent 93%)`;
    // Roller: plain cloth with the tube shadow at the head and the hem bar.
    case "roller":
      return `linear-gradient(180deg, rgba(0,0,0,0.12) 0 4%, transparent 4% 90%, rgba(0,0,0,0.14) 90% 95%, transparent 95%)`;
    default:
      return undefined;
  }
}

export function RangeVisual({ icon, tone }: { icon: IconKey; tone: string }) {
  const [from, to] = TONES[(tone as Tone) in TONES ? (tone as Tone) : "linen"];
  const pattern = patternFor(icon);

  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{ background: `linear-gradient(180deg, ${from}, ${to})` }}
    >
      {pattern && (
        <div className="absolute inset-0" style={{ backgroundImage: pattern }} />
      )}
      {/* Light falling from the top-left, so the swatches share a light source. */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.28),transparent_55%)]" />
    </div>
  );
}
