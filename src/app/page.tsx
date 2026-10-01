import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { ProjectGrid } from "@/components/sections/ProjectCard";
import { ResearchPreview } from "@/components/sections/ResearchPreview";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { site } from "@/data/site";

export default function HomePage() {
  const featured = projects.filter((p) => p.status === "featured" || p.status === "ongoing").slice(0, 4);

  return (
    <>
      <Hero />

      <section className="section-y border-t border-[color:var(--border)]">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">System demo</p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight">
                Field robot · pin-precision weeding
              </h2>
              <p className="prose-academic mt-3">
                Demonstration of the agricultural robot perception and weeding system developed at
                JBNU / CRIIR.
              </p>
            </div>
            <a
              href={site.links.youtube}
              className="btn-secondary shrink-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open on YouTube
            </a>
          </div>
          <div className="card-academic mt-8 overflow-hidden p-0">
            <div className="aspect-video w-full bg-black">
              <iframe
                src={site.links.youtubeEmbed}
                title="Field robot pin-precision weeding demo"
                className="h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </section>

      <ResearchPreview />

      <section className="section-y border-t border-[color:var(--border)]">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Selected research</p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight">Featured projects</h2>
              <p className="prose-academic mt-3">
                Concise research summaries intended for faculty and research-group visitors.
              </p>
            </div>
            <Link href="/projects" className="btn-secondary shrink-0">
              All projects
            </Link>
          </div>
          <div className="mt-10">
            <ProjectGrid projects={featured} />
          </div>
        </div>
      </section>

      <section className="section-y border-t border-[color:var(--border)]">
        <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">Academic output</p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight">Publications & code</h2>
            <p className="prose-academic mt-3">
              Recent peer-reviewed work and open research repositories. Full lists live on the
              dedicated pages.
            </p>
            <ul className="mt-6 space-y-4">
              {publications.slice(0, 2).map((pub) => (
                <li key={pub.id} className="card-academic">
                  <p className="text-sm text-[color:var(--fg-muted)]">
                    {pub.venue} · {pub.year}
                  </p>
                  <p className="mt-2 font-medium leading-snug text-[color:var(--fg)]">{pub.title}</p>
                  {pub.doi && (
                    <a
                      href={pub.doi}
                      className="link-accent mt-3 inline-block text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DOI
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/publications" className="btn-secondary">
                Publications
              </Link>
              <a
                href={site.links.github}
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub profile
              </a>
            </div>
          </div>

          <div className="card-academic">
            <p className="eyebrow">For faculty & collaborators</p>
            <h3 className="mt-3 font-serif text-2xl text-[color:var(--fg)]">Quick fit check</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[color:var(--fg-muted)]">
              <li>• Ph.D. student in Electronics Engineering (JBNU) with M.S. (4.0/4.0) in the same department</li>
              <li>• Computer vision and deep learning for agricultural robotics and field systems</li>
              <li>• Active work in localization (MCL, UWB) and GPU/edge efficiency</li>
              <li>• Peer-reviewed CEA paper, KBS-featured field robot, and open research repositories</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                About
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact
              </Link>
              <a href={site.links.cv} className="btn-ghost">
                CV (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
