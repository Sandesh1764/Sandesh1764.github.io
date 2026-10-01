import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="section-y">
      <div className="container-page max-w-3xl">
        <Link href="/projects" className="text-sm text-[color:var(--fg-muted)] hover:text-[color:var(--fg)]">
          ← All projects
        </Link>
        <p className="eyebrow mt-6">
          {project.year} · {project.status}
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight">{project.title}</h1>
        <p className="prose-academic mt-5 text-base">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.github && (
            <a href={project.github} className="btn-secondary" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {project.publication && (
            <a
              href={project.publication}
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Publication
            </a>
          )}
          {project.external?.map((e) => (
            <a key={e.href} href={e.href} className="btn-ghost" target="_blank" rel="noopener noreferrer">
              {e.label}
            </a>
          ))}
        </div>
      </div>

      <div className="container-page mt-12 grid max-w-content gap-6 lg:grid-cols-2">
        <Block title="Research problem" body={project.problem} />
        <Block title="Why it matters" body={project.whyItMatters} />
        <Block title="My contribution" body={project.contribution} />
        <Block title="Research significance" body={project.significance} />
      </div>

      <div className="container-page mt-6 grid max-w-content gap-6 lg:grid-cols-3">
        <ListBlock title="Methods / technologies" items={project.methods} />
        <ListBlock title="Hardware / software environment" items={project.environment} />
        <ListBlock title="Key results" items={project.results} />
      </div>

      <div className="container-page mt-12 max-w-content">
        <h2 className="font-serif text-2xl tracking-tight">Figures & media</h2>
        <p className="prose-academic mt-2">
          Placeholders for diagrams, plots, and demos. Replace SVG paths under{" "}
          <code>public/images/projects/</code>.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {project.media.map((m) => (
            <figure
              key={m.src}
              className={`card-academic overflow-hidden p-0 ${m.type === "youtube" ? "md:col-span-2" : ""}`}
            >
              {m.type === "youtube" ? (
                <div className="aspect-video w-full bg-black">
                  <iframe
                    src={m.src}
                    title={m.caption}
                    className="h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              ) : (
                <div className="flex aspect-[16/10] items-center justify-center bg-[color:var(--accent-soft)] px-6 text-center text-sm text-[color:var(--fg-muted)]">
                  {m.placeholder ? (
                    <span>
                      [{m.type}] {m.caption}
                    </span>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.src} alt={m.caption} className="h-full w-full object-contain" />
                  )}
                </div>
              )}
              <figcaption className="border-t border-[color:var(--border)] p-4 text-sm text-[color:var(--fg-muted)]">
                {m.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </article>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <section className="card-academic">
      <h2 className="font-serif text-xl text-[color:var(--fg)]">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-[color:var(--fg-muted)]">{body}</p>
    </section>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="card-academic">
      <h2 className="font-serif text-xl text-[color:var(--fg)]">{title}</h2>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-[color:var(--fg-muted)]">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </section>
  );
}
