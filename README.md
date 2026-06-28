# Muhammad Azeem — Portfolio

A dark-mode portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Leave all settings as default (Next.js is auto-detected) and click **Deploy**.

No environment variables are required — everything is static content.

## Adding proof: screenshots, demo links, repos

Every project card has a screenshot gallery (with click-to-zoom) and a row of
proof links (Live demo / Watch demo / Source / Case study). Right now the
gallery shows honest "Screenshot pending" placeholders instead of fake images —
here's how to make them real:

### 1. Add your screenshots

Folders are already created at:

```
public/projects/n8n-ecosystem/
public/projects/skillguide-ai/
public/projects/trailmate/
public/projects/college-alert/
public/projects/arthub/
```

Drop image files in there named to match `lib/data.ts` (e.g. `1.png`, `2.png`).
Good shots to capture per project:

- **n8n workflows** — take a browser screenshot of the workflow canvas itself
  (zoom out so all nodes are visible), or a successful execution log.
- **Flutter apps** — use your phone's screenshot button, or run the app in an
  emulator and use `flutter screenshot` / your IDE's screenshot tool.

The gallery automatically detects when a real file exists at the path and
swaps the placeholder for it — no code changes needed.

### 2. Add real links

In `lib/data.ts`, each project has a `links` object. Fill in whichever apply —
leave the rest out entirely (a button only renders if the link exists, so
nothing points to a dead URL):

```ts
links: {
  demo: 'https://your-n8n-instance.com/workflow/xxxx', // a live, clickable workflow or app
  video: 'https://loom.com/share/xxxx',                // a short screen-recording walkthrough
  repo: 'https://github.com/azeem-flutter/your-repo',  // public source code
  caseStudy: 'https://your-notion-site.com/case-study',
},
```

A Loom recording showing an n8n workflow actually running end-to-end (trigger
fires → AI drafts something → email/message goes out) is usually the single
most convincing thing you can hand a client — it's worth doing for at least
the n8n ecosystem project.

## Editing content

All bio, tech-stack, project, and stats copy lives in one file: `lib/data.ts`.
The numbers in the stats strip (projects shipped, workflows built, tools used)
are computed from the data itself, so they stay accurate automatically as you
add or remove projects.

## Structure

```
app/                 Next.js App Router entry (layout, page, global styles)
components/          One component per section, plus MediaFrame (device mockups) and Lightbox (zoom)
lib/data.ts           All editable content: bio, stack, projects, screenshots, links
public/projects/<id>/ Drop real screenshots here
```
