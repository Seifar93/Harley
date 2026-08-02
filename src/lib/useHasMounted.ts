"use client";

import { useSyncExternalStore } from "react";

/**
 * False during server rendering and throughout hydration; true from the first
 * commit afterwards.
 *
 * Use this to gate any branch that changes the *shape* of the DOM based on a
 * value the server cannot know — a media query, `localStorage`, the viewport.
 * Reading such a value directly during render makes the first client render
 * disagree with the server's HTML, and React discards the whole subtree with a
 * hydration error rather than patching it.
 *
 * Implemented with `useSyncExternalStore` rather than the more familiar
 * `useState(false)` + `useEffect(() => setState(true))`. The two behave the
 * same, but setting state in an effect purely to record that mounting happened
 * is exactly the pattern `react-hooks/set-state-in-effect` exists to catch, and
 * it schedules an extra render pass. `useSyncExternalStore` has a dedicated
 * server snapshot, so React reads `false` while rendering on the server and
 * while hydrating, then `true` once hydration commits — no extra state, no
 * effect, and the hydration guarantee comes from React itself.
 *
 * The three callbacks live at module scope so their identities are stable; if
 * they were defined inside the hook, `subscribe` would change every render and
 * React would resubscribe each time.
 */

/** Nothing external to watch — this value only ever changes once, at hydration. */
const subscribe = () => () => {};

const getSnapshot = () => true;

const getServerSnapshot = () => false;

export function useHasMounted() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
