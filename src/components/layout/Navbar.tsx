"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail, GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const social = [
  { href: site.links.github, label: "GitHub", icon: Github },
  { href: site.links.scholar, label: "Google Scholar", icon: GraduationCap },
  { href: site.links.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: site.links.email, label: "Email", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bg)]/90 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-serif text-lg tracking-tight text-[color:var(--fg)]">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active =
              !("external" in item && item.external) &&
              (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href));
            const Comp = "external" in item && item.external ? "a" : Link;
            return (
              <Comp
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-2.5 py-1.5 text-sm transition",
                  active
                    ? "bg-[color:var(--accent-soft)] text-[color:var(--fg)]"
                    : "text-[color:var(--fg-muted)] hover:text-[color:var(--fg)]",
                )}
                {...("external" in item && item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {item.label}
              </Comp>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-0.5 sm:flex">
            {social.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="btn-ghost h-9 w-9 rounded-full p-0"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <ThemeToggle />
          <button
            type="button"
            className="btn-ghost h-9 w-9 rounded-full p-0 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[color:var(--border)] lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-3" aria-label="Mobile">
            {navItems.map((item) => {
              const Comp = "external" in item && item.external ? "a" : Link;
              return (
                <Comp
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-[color:var(--fg-muted)] hover:bg-[color:var(--accent-soft)] hover:text-[color:var(--fg)]"
                  onClick={() => setOpen(false)}
                  {...("external" in item && item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </Comp>
              );
            })}
            <div className="mt-2 flex gap-2 px-2 sm:hidden">
              {social.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="btn-secondary"
                  aria-label={label}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
