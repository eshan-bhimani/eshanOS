"use client";

import { useEffect, useState } from "react";

/**
 * Returns the current time, updating on a coarse interval (default 15s) —
 * fine for a menu bar clock, avoids per-second re-renders.
 * Returns null on the server / first render to avoid hydration mismatch.
 */
export function useClock(intervalMs = 15_000): Date | null {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, intervalMs);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, [intervalMs]);

  return now;
}
