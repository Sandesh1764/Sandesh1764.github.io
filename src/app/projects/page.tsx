import type { Metadata } from "next";
import { ProjectGrid } from "@/components/sections/ProjectCard";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Research projects by ${site.name} in localization, computer vision, efficient AI, and precision agriculture.`,
};

export default function ProjectsPage() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">Projects</p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight">Research projects</h1>
          <p className="prose-academic mt-5">
            Each entry is written as a short research summary: problem, motivation, contribution,
            methods, and results. Open a project for the full structured description and figure
            placeholders.
          </p>
        </div>
        <div className="mt-10">
          <ProjectGrid projects={projects} />
        </div>
      </div>
    </section>
  );
}
