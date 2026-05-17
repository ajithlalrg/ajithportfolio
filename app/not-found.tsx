import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist. Head back to Ajith Lal R's portfolio home.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-canvas text-bone flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl w-full bg-bone text-ink border-[4px] border-ink chunk-lg p-8 sm:p-12">
        <span className="inline-block mono text-xs tracking-[0.3em] uppercase bg-ink text-bone border-[3px] border-ink px-3 py-1">
          ● 404 · Lost in transit
        </span>
        <h1 className="display text-5xl sm:text-7xl leading-none tracking-tight mt-6">
          This page<br />took a detour.
        </h1>
        <p className="mt-6 text-base sm:text-lg leading-snug max-w-lg">
          The URL you followed isn&apos;t on the map. Try heading back to the portfolio home or jump
          straight to a section below.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-ink text-bone px-6 py-3 border-[3px] border-ink chunk-bone display text-lg"
          >
            ← Back home
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 bg-neon text-ink px-6 py-3 border-[3px] border-ink chunk display text-lg"
          >
            See projects
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-bone text-ink px-6 py-3 border-[3px] border-ink display text-lg hover:bg-ink hover:text-bone transition-colors"
          >
            Contact
          </Link>
        </div>
        <ul className="mt-10 grid sm:grid-cols-2 gap-2 mono text-sm">
          <li><Link href="/#about" className="underline decoration-[3px] underline-offset-4 hover:text-brand">About Ajith Lal R</Link></li>
          <li><Link href="/#experience" className="underline decoration-[3px] underline-offset-4 hover:text-brand">Work experience</Link></li>
          <li><Link href="/#skills" className="underline decoration-[3px] underline-offset-4 hover:text-brand">Skills &amp; stack</Link></li>
          <li><Link href="/sitemap.html" className="underline decoration-[3px] underline-offset-4 hover:text-brand">All pages (sitemap)</Link></li>
        </ul>
      </div>
    </main>
  );
}
