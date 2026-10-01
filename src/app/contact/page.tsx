import type { Metadata } from "next";
import { Github, GraduationCap, Linkedin, Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} for research collaboration and PhD inquiries.`,
};

export default function ContactPage() {
  return (
    <section className="section-y">
      <div className="container-page max-w-3xl">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight">Get in touch</h1>
        <p className="prose-academic mt-5">
          I welcome messages from faculty, research groups, and collaborators regarding PhD
          openings, research positions, scholarships, and related academic opportunities.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a href={site.links.email} className="card-academic transition hover:shadow-soft">
            <Mail className="h-5 w-5 text-[color:var(--accent)]" />
            <p className="mt-3 font-medium text-[color:var(--fg)]">University email</p>
            <p className="mt-1 text-sm text-[color:var(--fg-muted)]">{site.email}</p>
          </a>
          <a
            href={site.links.emailPersonal}
            className="card-academic transition hover:shadow-soft"
          >
            <Mail className="h-5 w-5 text-[color:var(--accent)]" />
            <p className="mt-3 font-medium text-[color:var(--fg)]">Personal email</p>
            <p className="mt-1 text-sm text-[color:var(--fg-muted)]">{site.emailPersonal}</p>
          </a>
          <div className="card-academic sm:col-span-2">
            <MapPin className="h-5 w-5 text-[color:var(--accent)]" />
            <p className="mt-3 font-medium text-[color:var(--fg)]">Location</p>
            <p className="mt-1 text-sm text-[color:var(--fg-muted)]">{site.location}</p>
            <p className="mt-1 text-sm text-[color:var(--fg-muted)]">
              {site.affiliation} · {site.department}
            </p>
            <p className="mt-1 text-sm text-[color:var(--fg-muted)]">{site.institute}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={site.links.github}
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={site.links.scholar}
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GraduationCap className="h-4 w-4" /> Google Scholar
          </a>
          <a
            href={site.links.linkedin}
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href={site.links.cv} className="btn-primary">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
