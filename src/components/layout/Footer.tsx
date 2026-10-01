import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[color:var(--border)]">
      <div className="container-page flex flex-col gap-4 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-lg text-[color:var(--fg)]">{site.name}</p>
          <p className="mt-1 max-w-md text-sm text-[color:var(--fg-muted)]">
            {site.affiliation} · {site.institute}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-[color:var(--fg-muted)]">
          <Link href="/research" className="hover:text-[color:var(--fg)]">
            Research
          </Link>
          <Link href="/projects" className="hover:text-[color:var(--fg)]">
            Projects
          </Link>
          <Link href="/publications" className="hover:text-[color:var(--fg)]">
            Publications
          </Link>
          <Link href="/contact" className="hover:text-[color:var(--fg)]">
            Contact
          </Link>
          <a href={site.links.cv} className="hover:text-[color:var(--fg)]">
            CV
          </a>
        </div>
      </div>
      <div className="container-page border-t border-[color:var(--border)] py-4 text-xs text-[color:var(--fg-muted)]">
        © {year} {site.name}. Academic research website.
      </div>
    </footer>
  );
}
