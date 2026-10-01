import Link from "next/link";
import { ArrowRight, FileText, Github, GraduationCap } from "lucide-react";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="section-y">
      <div className="container-page grid items-start gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="eyebrow">Academic research profile</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-[color:var(--fg)] sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[color:var(--fg-muted)]">
            {site.title}
          </p>
          <p className="mt-3 text-sm font-medium text-[color:var(--fg)]">
            {site.affiliation}
            <span className="text-[color:var(--fg-muted)]"> · {site.institute}</span>
          </p>
          <p className="mt-1 text-sm text-[color:var(--fg-muted)]">{site.department}</p>

          <p className="prose-academic mt-8">{site.researchStatement}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/research" className="btn-primary">
              View Research <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/projects" className="btn-secondary">
              View Projects
            </Link>
            <Link href="/publications" className="btn-secondary">
              Publications
            </Link>
            <a href={site.links.cv} className="btn-secondary" target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4" /> Download CV
            </a>
            <a
              href={site.links.github}
              className="btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={site.links.scholar}
              className="btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GraduationCap className="h-4 w-4" /> Scholar
            </a>
          </div>
        </div>

        <aside className="flex flex-col gap-6">
          <div className="card-academic overflow-hidden p-0">
            <div className="relative aspect-[4/5] w-full bg-[color:var(--accent-soft)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile.jpg"
                alt={`${site.name}, researcher at Jeonbuk National University`}
                className="h-full w-full object-cover object-[center_20%]"
              />
            </div>
          </div>

          <div className="card-academic">
            <p className="eyebrow">Currently working on</p>
            <ul className="mt-4 space-y-3">
              {site.currentlyWorkingOn.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-[color:var(--accent)] pl-3 text-sm leading-6 text-[color:var(--fg-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
