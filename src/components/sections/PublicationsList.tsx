"use client";

import { useMemo, useState } from "react";
import { publications, publicationFilters, type PublicationVenue } from "@/data/publications";
import { formatAuthors } from "@/lib/utils";

export function PublicationsList() {
  const [filter, setFilter] = useState<PublicationVenue | "all">("all");

  const items = useMemo(() => {
    const sorted = [...publications].sort((a, b) => b.year - a.year);
    if (filter === "all") return sorted;
    return sorted.filter((p) => p.venueType === filter);
  }, [filter]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Publication filters">
        {publicationFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={filter === f.id}
            className={
              filter === f.id
                ? "btn-primary"
                : "btn-secondary"
            }
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ol className="mt-8 space-y-6">
        {items.length === 0 && (
          <li className="card-academic text-sm text-[color:var(--fg-muted)]">
            No publications in this category yet. Add entries in{" "}
            <code>src/data/publications.ts</code>.
          </li>
        )}
        {items.map((pub) => {
          const authors = formatAuthors(pub.authors, pub.highlightName);
          return (
            <li key={pub.id} className="card-academic">
              <p className="eyebrow">
                {pub.venueType.replace("-", " ")} · {pub.year}
              </p>
              <h3 className="mt-2 font-serif text-xl leading-snug text-[color:var(--fg)]">
                {pub.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--fg-muted)]">
                {authors.map((a, i) => (
                  <span key={`${pub.id}-${a.name}`}>
                    {a.highlight ? <strong className="text-[color:var(--fg)]">{a.name}</strong> : a.name}
                    {i < authors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
              <p className="mt-2 text-sm italic text-[color:var(--fg-muted)]">
                {pub.venue}
                {pub.volumePages ? `, ${pub.volumePages}` : ""}
              </p>
              {pub.note && (
                <p className="mt-3 text-sm text-[color:var(--fg-muted)]">{pub.note}</p>
              )}
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                {pub.doi && (
                  <a href={pub.doi} className="link-accent" target="_blank" rel="noopener noreferrer">
                    DOI
                  </a>
                )}
                {pub.pdf && (
                  <a href={pub.pdf} className="link-accent" target="_blank" rel="noopener noreferrer">
                    PDF
                  </a>
                )}
                {pub.code && (
                  <a href={pub.code} className="link-accent" target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                )}
                {pub.dataset && (
                  <a
                    href={pub.dataset}
                    className="link-accent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dataset
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
