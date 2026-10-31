import { faqs } from "@/lib/faq";
import { yearsOfExperience } from "@/lib/yoe";

// Server-rendered on purpose: plain <details> needs no JS, and every answer stays in the HTML for crawlers.
export default function FAQ() {
  const items = faqs(yearsOfExperience());

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 bg-ink text-bone border-b-[3px] border-ink">
      <div className="relative max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-neon text-ink px-3 py-1 mono uppercase text-[11px] tracking-widest mb-3">
            06 / FAQ
          </div>
          <h2 className="display text-5xl sm:text-7xl">
            STRAIGHT{" "}
            <span className="bg-canvas text-bone border-[3px] border-bone inline-block px-3">ANSWERS.</span>
          </h2>
        </div>

        <div className="space-y-5">
          {items.map((f, i) => (
            <details
              key={f.question}
              open={i === 0}
              className="group bg-bone text-ink border-[3px] border-ink chunk-bone"
            >
              <summary
                data-cursor="active"
                className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden"
              >
                <h3 className="display text-xl sm:text-2xl leading-tight">{f.question}</h3>
                <span
                  aria-hidden
                  className="shrink-0 mono text-2xl leading-none bg-neon border-2 border-ink w-8 h-8 inline-flex items-center justify-center transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 sm:px-6 sm:pb-6 text-base sm:text-lg leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
