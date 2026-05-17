"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }, [error]);

  return (
    <main className="min-h-screen bg-canvas text-bone flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl w-full bg-bone text-ink border-[4px] border-ink chunk-lg p-8 sm:p-12">
        <span className="inline-block mono text-xs tracking-[0.3em] uppercase bg-brand text-bone border-[3px] border-ink px-3 py-1">
          ● Something broke
        </span>
        <h1 className="display text-5xl sm:text-7xl leading-none tracking-tight mt-6">
          Hit a snag<br />on the way.
        </h1>
        <p className="mt-6 text-base sm:text-lg leading-snug max-w-lg">
          An unexpected error occurred while rendering this page. You can retry, or head back to the
          home page.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 bg-ink text-bone px-6 py-3 border-[3px] border-ink chunk-bone display text-lg cursor-pointer"
          >
            ↻ Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-neon text-ink px-6 py-3 border-[3px] border-ink chunk display text-lg"
          >
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
