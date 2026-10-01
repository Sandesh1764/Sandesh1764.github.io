import Link from "next/link";
import { researchGroups } from "@/data/research";

export function ResearchPreview({ full = false }: { full?: boolean }) {
  return (
    <section className="section-y border-t border-[color:var(--border)]">
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Research interests</p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-[color:var(--fg)]">
              Areas of focus
            </h2>
            <p className="prose-academic mt-3">
              Related topics are grouped so a visitor can quickly map my work onto a laboratory&apos;s
              themes.
            </p>
          </div>
          {!full && (
            <Link href="/research" className="btn-secondary shrink-0">
              Full research page
            </Link>
          )}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {researchGroups.map((group) => (
            <article key={group.id} className="card-academic">
              <h3 className="font-serif text-xl text-[color:var(--fg)]">{group.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--fg-muted)]">
                {group.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs text-[color:var(--fg-muted)]"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
