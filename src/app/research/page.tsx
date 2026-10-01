import type { Metadata } from "next";
import { ResearchPreview } from "@/components/sections/ResearchPreview";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Research",
  description: `Research interests of ${site.name}: perception, autonomous systems, efficient computing, and applied AI.`,
};

export default function ResearchPage() {
  return (
    <>
      <section className="section-y pb-0">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">Research</p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight">Research agenda</h1>
          <p className="prose-academic mt-5">{site.researchStatement}</p>
          <p className="prose-academic mt-4">
            Across projects I care about methods that remain credible outside curated benchmarks:
            localization under geometric uncertainty, perception under domain shift, and compute
            budgets that match robot hardware.
          </p>
        </div>
      </section>
      <ResearchPreview full />
    </>
  );
}
