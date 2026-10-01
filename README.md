# Sandesh Kumar — Academic Website

Personal academic website for PhD applications, research networking, and portfolio presentation.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- next-themes (light / dark)

## Develop

```bash
export PATH="/ssd/sandesh/.local/node/bin:$PATH"
cd /ssd/sandesh/Archive_Master/sandesh-academic-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build && npm start
```

## Content

Edit data files under `src/data/`:

- `site.ts` — name, affiliation, links, research statement
- `projects.ts` — research projects
- `publications.ts` — publications
- `experience.ts` — research experience
- `education.ts` — academic background
- `research.ts` — research interest groups

Place a CV PDF at `public/cv/Sandesh_Kumar_CV.pdf` and a photo at `public/images/profile.jpg`.
