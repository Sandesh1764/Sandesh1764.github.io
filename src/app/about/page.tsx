import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}, researcher in AI, computer vision, and robotics.`,
};

export default function AboutPage() {
  return (
    <section className="section-y">
      <div className="container-page max-w-3xl">
        <p className="eyebrow">About</p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight">{site.name}</h1>
        <p className="mt-4 text-lg text-[color:var(--fg-muted)]">{site.title}</p>

        <div className="prose-academic mt-8 space-y-5 text-base">
          <p>{site.researchStatement}</p>
          <p>
            I am a Ph.D. student in Electronics Engineering at {site.affiliation}, affiliated with
            the {site.institute}. I completed an M.S. in Electronics Engineering at JBNU (Sep 2023–
            Dec 2025; CGPA 4.0/4.0) with a thesis on deep learning-based accurate shooting control
            for a needle-nozzle weeding machine, and a B.S. in Information Technology at Quaid-i-Azam
            University, Islamabad (2017–2021).
          </p>
          <p>
            A substantial part of my research concerns perception and control for precision
            agriculture: semantic understanding of crop and weed, domain adaptation across fields,
            model compression, hardware integration, and real-time inference on platforms that
            physically act in the field. This work contributed to a pin-precision weeding system
            covered by{" "}
            <a href={site.links.kbs} className="link-accent" target="_blank" rel="noopener noreferrer">
              KBS News
            </a>
            , documented in a{" "}
            <a
              href={site.links.youtube}
              className="link-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              system demo video
            </a>
            , and published in a 2025 journal article in{" "}
            <em>Computers and Electronics in Agriculture</em>.
          </p>
          <p>
            I am also developing research on localization (CUDA-accelerated Monte Carlo Localization,
            UWB particle filters) and on how AI workloads behave across heterogeneous computing
            platforms—from server GPUs to Jetson-class edge devices. The connecting question is how
            to build intelligent systems that are accurate, efficient, and deployable outside the
            laboratory.
          </p>
          <p>
            I am open to research collaboration with groups working on computer vision, robotics,
            autonomous systems, GPU/edge computing, and related intelligent systems.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/research" className="btn-primary">
            Research
          </Link>
          <Link href="/projects" className="btn-secondary">
            Projects
          </Link>
          <Link href="/experience" className="btn-secondary">
            Experience & education
          </Link>
          <a href={site.links.cv} className="btn-secondary">
            Download CV
          </a>
          <Link href="/contact" className="btn-ghost">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
