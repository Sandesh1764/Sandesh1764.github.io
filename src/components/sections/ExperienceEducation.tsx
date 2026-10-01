import { experience } from "@/data/experience";
import { education } from "@/data/education";

export function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      {experience.map((item) => (
        <article key={item.id} className="card-academic">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-serif text-xl text-[color:var(--fg)]">{item.role}</h3>
            <p className="text-sm text-[color:var(--fg-muted)]">
              {item.start} – {item.end}
            </p>
          </div>
          <p className="mt-2 text-sm font-medium text-[color:var(--fg)]">{item.organization}</p>
          <p className="text-sm text-[color:var(--fg-muted)]">{item.location}</p>

          <Section title="Responsibilities" items={item.responsibilities} />
          <Section title="Projects" items={item.projects} />
          <Section title="Technologies" items={item.technologies} chips />
          <Section title="Outcomes" items={item.outcomes} />
        </article>
      ))}
    </div>
  );
}

export function EducationList() {
  return (
    <div className="space-y-5">
      {education.map((ed) => (
        <article key={ed.id} className="card-academic">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-serif text-xl text-[color:var(--fg)]">{ed.degree}</h3>
            {(ed.start || ed.end) && (
              <p className="text-sm text-[color:var(--fg-muted)]">
                {[ed.start, ed.end].filter(Boolean).join(" – ")}
              </p>
            )}
          </div>
          <p className="mt-2 text-sm font-medium text-[color:var(--fg)]">{ed.institution}</p>
          <p className="text-sm text-[color:var(--fg-muted)]">
            {ed.field !== "—" ? `${ed.field} · ` : ""}
            {ed.location}
          </p>
          {ed.notes && (
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[color:var(--fg-muted)]">
              {ed.notes.map((n) => (
                <li key={n}>• {n}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

function Section({
  title,
  items,
  chips = false,
}: {
  title: string;
  items: string[];
  chips?: boolean;
}) {
  return (
    <div className="mt-5">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--fg-muted)]">
        {title}
      </p>
      {chips ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {items.map((t) => (
            <li
              key={t}
              className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs text-[color:var(--fg-muted)]"
            >
              {t}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-3 space-y-2 text-sm leading-6 text-[color:var(--fg-muted)]">
          {items.map((t) => (
            <li key={t}>• {t}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
