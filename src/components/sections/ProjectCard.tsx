import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ResearchProject } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: ResearchProject }) {
  return (
    <article className="card-academic flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="eyebrow">
            {project.year} · {project.status}
          </p>
          <h3 className="mt-2 font-serif text-xl leading-snug text-[color:var(--fg)]">
            <Link href={`/projects/${project.slug}`} className="hover:text-[color:var(--accent)]">
              {project.title}
            </Link>
          </h3>
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="btn-ghost h-9 w-9 shrink-0 rounded-full p-0"
          aria-label={`Open ${project.title}`}
        >
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <p className="mt-4 flex-1 text-sm leading-6 text-[color:var(--fg-muted)]">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.topics.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-full bg-[color:var(--accent-soft)] px-2.5 py-1 text-[11px] text-[color:var(--fg)]"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        <Link href={`/projects/${project.slug}`} className="link-accent">
          Research summary
        </Link>
        {project.github && (
          <a href={project.github} className="link-accent" target="_blank" rel="noopener noreferrer">
            Code
          </a>
        )}
        {project.publication && (
          <a
            href={project.publication}
            className="link-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            Publication
          </a>
        )}
      </div>
    </article>
  );
}

export function ProjectGrid({
  projects,
  className,
}: {
  projects: ResearchProject[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-5 lg:grid-cols-2", className)}>
      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </div>
  );
}
