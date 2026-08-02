/**
 * A stylised window: warm daylight, a low horizon, and a frame with mullions.
 *
 * This stands in for the hero photograph. No photography of the client's work
 * was available when this was built, and a stock interior shot would be worse
 * than none — it would show someone else's blinds. Everything here is CSS
 * gradients and one inline SVG path, so it costs no network request, cannot
 * shift layout, and scales to any viewport without a srcset.
 *
 * Replace this component wholesale with the real hero image when it exists.
 * It is deliberately self-contained and takes no props for that reason.
 */
export function WindowScene() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-[#f6e6cd] via-[#f3ecdf] to-[#e6e2d7]">
      {/* Low winter sun, offset from centre so the light has a direction. */}
      <div
        aria-hidden
        className="absolute -top-16 left-[58%] size-[26rem] -translate-x-1/2 rounded-full bg-[#ffd9a0] opacity-70 blur-[90px]"
      />
      <div
        aria-hidden
        className="absolute top-24 left-[62%] size-40 -translate-x-1/2 rounded-full bg-[#fff1d6] opacity-80 blur-[40px]"
      />

      {/* Horizon: two overlapping ridges, kept very low contrast so the eye
          reads it as distance rather than as an illustration. */}
      <svg
        aria-hidden
        viewBox="0 0 400 120"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-2/5 w-full"
      >
        <path
          d="M0 78c46-20 74 6 116-4s58-30 104-22 62 34 104 28 52-16 76-22v62H0Z"
          fill="#c9c3b2"
          opacity="0.55"
        />
        <path
          d="M0 96c58-14 92 10 140 2s74-22 122-14 66 24 138 16v42H0Z"
          fill="#b3ac99"
          opacity="0.45"
        />
      </svg>

      {/* Frame: a fixed border plus one mullion each way. Positioned in
          percentages so the cross stays centred at every aspect ratio. */}
      <div
        aria-hidden
        className="absolute inset-0 border-[10px] border-[#fbf9f6]/90"
      />
      <div
        aria-hidden
        className="absolute inset-y-0 left-1/2 w-[7px] -translate-x-1/2 bg-[#fbf9f6]/90"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-[46%] h-[7px] bg-[#fbf9f6]/90"
      />

      {/* Vignette, to stop the panel reading as a flat rectangle of colour. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_35%,transparent_35%,rgba(26,21,18,0.14)_100%)]"
      />
    </div>
  );
}
