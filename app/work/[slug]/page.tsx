import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/projects";
import { siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

const findProject = (slug: string) => caseStudies.find((p) => p.slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = findProject((await params).slug);
  if (!project) return {};

  const url = `${siteUrl}/work/${project.slug}`;
  const title = `${project.name} case study`;
  const description = project.caseStudy.summary;

  // Every field the root layout sets for "/" is overridden here, or the page would canonicalise to the homepage.
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title, description, images: ["/opengraph-image"] },
    twitter: { card: "summary_large_image", title, description, images: ["/twitter-image"] },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const project = findProject((await params).slug);
  if (!project) notFound();

  const { caseStudy: cs } = project;
  const url = `${siteUrl}/work/${project.slug}`;
  const next = caseStudies[(caseStudies.indexOf(project) + 1) % caseStudies.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#work`,
        name: project.name,
        url,
        description: cs.summary,
        creator: { "@id": `${siteUrl}/#person` },
        about: { "@type": "Organization", name: project.client },
        keywords: project.technologies.join(", "),
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Work", item: `${siteUrl}/#projects` },
          { "@type": "ListItem", position: 3, name: project.name, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="px-3 sm:px-5 pt-5">
        <nav className="mx-auto max-w-6xl flex items-center justify-between gap-4 bg-bone text-ink border-[3px] border-ink chunk px-4 py-3">
          <Link href="/" data-cursor="active" className="display text-xl tracking-tight">
            AJITH/LAL<span className="sr-only"> — home</span>
          </Link>
          <Link
            href="/#projects"
            data-cursor="active"
            className="inline-flex items-center gap-2 mono uppercase text-[11px] tracking-widest hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden /> All work
          </Link>
        </nav>
      </header>

      <main id="main" className="px-4 sm:px-6 py-12 sm:py-16">
        <article className="mx-auto max-w-6xl">
          <div className="brutal-dark p-6 sm:p-10">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 mono uppercase text-[11px] tracking-widest">
                <li>
                  <Link href="/" className="hover:text-neon">Home</Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/#projects" className="hover:text-neon">Work</Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-neon">{project.name}</li>
              </ol>
            </nav>

            <p className="mt-8 inline-block bg-neon text-ink px-3 py-1 mono uppercase text-[11px] tracking-widest">
              Case study · {project.client}
            </p>
            <h1 className="display text-4xl sm:text-6xl lg:text-7xl mt-4 wrap-break-word">{project.name}</h1>
            <p className="mono uppercase text-xs tracking-widest mt-4 opacity-90">{project.role}</p>
            <p className="mt-6 max-w-3xl text-lg sm:text-xl leading-snug">{cs.summary}</p>
          </div>

          <div className="mt-10 grid lg:grid-cols-[1.6fr_1fr] gap-8 items-start">
            <div className="space-y-8">
              <section className="brutal p-6 sm:p-8">
                <h2 className="display text-3xl sm:text-4xl">The challenge</h2>
                <p className="mt-4 text-base sm:text-lg leading-relaxed">{cs.challenge}</p>
              </section>

              {cs.sections.map((s) => (
                <section key={s.heading} className="brutal p-6 sm:p-8">
                  <h2 className="display text-3xl sm:text-4xl">{s.heading}</h2>
                  <ul className="mt-5 space-y-3">
                    {s.points.map((point) => (
                      <li key={point} className="flex gap-3 text-base sm:text-lg leading-snug">
                        <span aria-hidden className="shrink-0 mt-2 w-2.5 h-2.5 bg-canvas border-2 border-ink" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <aside className="space-y-8 lg:sticky lg:top-8">
              <section className="brutal-dark p-6">
                <h2 className="display text-2xl text-neon">The stack</h2>
                <dl className="mt-5 space-y-4">
                  {cs.stack.map((g) => (
                    <div key={g.group}>
                      <dt className="mono uppercase text-[11px] tracking-widest opacity-90">{g.group}</dt>
                      <dd className="mt-2 flex flex-wrap gap-1.5">
                        {g.items.map((t) => (
                          <span
                            key={t}
                            className="mono text-[10px] uppercase tracking-widest bg-bone text-ink border-2 border-ink px-2 py-0.5"
                          >
                            {t}
                          </span>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section className="bg-neon text-ink border-[3px] border-ink chunk p-6">
                <h2 className="display text-2xl">Need this shipped?</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  I lead the teams that build platforms like this one, and I stay hands-on in the code.
                </p>
                <a
                  href={`mailto:ajithlaldev@gmail.com?subject=${encodeURIComponent(`About the ${project.name}`)}`}
                  data-cursor="active"
                  className="mt-5 inline-flex items-center gap-2 bg-ink text-bone border-[3px] border-ink px-4 py-2 mono uppercase text-[11px] tracking-widest hover:bg-canvas transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" aria-hidden /> Email me
                </a>
              </section>
            </aside>
          </div>

          <nav aria-label="More work" className="mt-12 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/#projects"
              data-cursor="active"
              className="inline-flex items-center gap-2 bg-bone text-ink border-[3px] border-ink chunk px-4 py-2 mono uppercase text-[11px] tracking-widest"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden /> All work
            </Link>
            {next.slug !== project.slug && (
              <Link
                href={`/work/${next.slug}`}
                data-cursor="active"
                className="inline-flex items-center gap-2 bg-ink text-bone border-[3px] border-ink chunk-bone px-4 py-2 mono uppercase text-[11px] tracking-widest"
              >
                Next: {next.name} <ArrowRight className="w-3.5 h-3.5" aria-hidden />
              </Link>
            )}
          </nav>
        </article>
      </main>

      <Footer />
    </>
  );
}
