# chyp3r.github.io — portfolio

Personal portfolio of **Gökdeniz Kuruca**. Astro + TypeScript + Tailwind CSS v4, bilingual (EN / TR), deployed to GitHub Pages.

## Stack

| | |
|---|---|
| Framework | [Astro 5](https://astro.build) (static output, near-zero JS) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) + design tokens in `src/styles/global.css` |
| Interactivity | React 19 islands (`ThemeToggle`) |
| Content | Content collections — `src/content/projects/{en,tr}/*.mdx`, `src/content/blog/{en,tr}/*.mdx` |
| i18n | Astro i18n, `en` at root, `tr` under `/tr/` |
| SEO | per-page meta + OpenGraph, `hreflang`, `Person`/`CreativeWork` JSON-LD, sitemap, RSS |

## Commands

```bash
npm install        # first time
npm run dev         # local dev  → http://localhost:4321
npm run build       # production build → dist/
npm run preview     # serve the build locally
npm run check       # astro + typescript diagnostics
```

## Adding a project

Create two files with the **same slug**:

```
src/content/projects/en/<slug>.mdx
src/content/projects/tr/<slug>.mdx
```

Frontmatter schema lives in `src/content.config.ts`. Key fields: `title`, `summary`,
`category` (`ai` · `mobile` · `game` · `research` · `education`), `year`, `order`,
`role`, `stack[]`, `status` (`shipped` · `finalist` · `award` · `wip` · `archived`),
`featured`, `cover`, `gallery[]`, `links{}`.

Put images under `src/assets/media/` and reference them relatively
(`cover: ../../../assets/media/<file>`); Astro optimises them at build.

`featured: true` surfaces the project on the home page. Everything shows in
`/projects`.

## Adding a blog post

Same pattern under `src/content/blog/{en,tr}/`. Set `draft: true` to keep it out
of production.

## Deploy

Push to `main`. `.github/workflows/deploy.yml` builds and publishes to GitHub Pages.
One-time: repo **Settings → Pages → Source → GitHub Actions**.

See [`SETUP.md`](./SETUP.md) for the full first-run checklist.
