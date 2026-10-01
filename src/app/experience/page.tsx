import type { Metadata } from "next";
import { EducationList, ExperienceTimeline } from "@/components/sections/ExperienceEducation";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
  description: `Research experience and education of ${site.name}.`,
};

export default function ExperiencePage() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">Experience</p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight">Research experience</h1>
          <p className="prose-academic mt-5">
            Academic appointments and research responsibilities. Education follows below.
          </p>
        </div>

        <div className="mt-10 max-w-4xl">
          <ExperienceTimeline />
        </div>

        <div className="mt-16 max-w-4xl">
          <h2 className="font-serif text-3xl tracking-tight">Education</h2>
          <p className="prose-academic mt-3">
            Update degree titles and dates in <code>src/data/education.ts</code> as needed.
          </p>
          <div className="mt-6">
            <EducationList />
          </div>
        </div>
      </div>
    </section>
  );
}
