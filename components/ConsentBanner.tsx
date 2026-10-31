"use client";

import { useState, useSyncExternalStore } from "react";
import { consentKey } from "@/lib/consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const subscribe = () => () => {};

// Asked only on European time zones; elsewhere GA's regional consent default applies with no banner.
function needsConsent() {
  try {
    return !localStorage.getItem(consentKey) && Intl.DateTimeFormat().resolvedOptions().timeZone.startsWith("Europe/");
  } catch {
    return false; // storage blocked: no banner, the regional default stays in force
  }
}

export default function ConsentBanner() {
  const needed = useSyncExternalStore(subscribe, needsConsent, () => false);
  const [answered, setAnswered] = useState(false);

  const choose = (value: "granted" | "denied") => {
    try {
      localStorage.setItem(consentKey, value);
    } catch {}
    // If gtag hasn't loaded yet, the init script applies the stored choice when it runs.
    window.gtag?.("consent", "update", { analytics_storage: value });
    setAnswered(true);
  };

  if (!needed || answered) return null;

  return (
    <section
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm z-60 bg-bone text-ink border-[3px] border-ink chunk p-4"
    >
      <p className="text-sm leading-snug">
        I use Google Analytics cookies to see which work gets read. No ads, no selling data.
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => choose("granted")}
          data-cursor="active"
          className="bg-ink text-bone border-[3px] border-ink px-3 py-1.5 mono uppercase text-[11px] tracking-widest"
        >
          Allow
        </button>
        <button
          type="button"
          onClick={() => choose("denied")}
          data-cursor="active"
          className="bg-bone text-ink border-[3px] border-ink px-3 py-1.5 mono uppercase text-[11px] tracking-widest"
        >
          No thanks
        </button>
      </div>
    </section>
  );
}
