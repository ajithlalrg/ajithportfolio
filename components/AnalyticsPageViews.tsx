"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// GA's history-based page views are off (so #section jumps don't inflate views), which means
// in-app route changes like "/" → "/work/…" must be sent here. The landing page is counted by gtag's config call.
export default function AnalyticsPageViews() {
  const pathname = usePathname();
  const landing = useRef(true);

  useEffect(() => {
    if (landing.current) {
      landing.current = false;
      return;
    }
    // Next swaps <title> just after the route commits; wait a beat so the event carries the new page's title.
    const t = setTimeout(() => {
      window.gtag?.("event", "page_view", { page_location: window.location.href, page_title: document.title });
    }, 150);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
