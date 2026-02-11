"use client";

import { useEffect, useState } from "react";
import { VIEWPORT_BREAKPOINT_PX } from "@/lib/constants";

const MEDIA_QUERY = `(max-width: ${VIEWPORT_BREAKPOINT_PX}px)`;

/**
 * Hook koji proverava da li je trenutni viewport "mobile" (širina <= breakpoint).
 * Koristi window.matchMedia i osluškuje promene (resize).
 * Na serveru uvek vraća false (nema window).
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MEDIA_QUERY);

    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    queueMicrotask(() => setIsMobile(mediaQuery.matches));

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
}
