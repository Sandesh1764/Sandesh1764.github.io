import type { Metadata } from "next";
import { PublicationsList } from "@/components/sections/PublicationsList";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Publications",
  description: `Publications by ${site.name}.`,
};

export default function PublicationsPage() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">Publications</p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight">Academic publications</h1>
          <p className="prose-academic mt-5">
            Filter by venue type. Add or edit entries in <code>src/data/publications.ts</code> —
            author highlighting, DOI, PDF, code, and dataset fields are supported.
          </p>
        </div>
        <div className="mt-10 max-w-4xl">
          <PublicationsList />
        </div>
      </div>
    </section>
  );
}
