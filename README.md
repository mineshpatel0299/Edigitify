# Edigitify Marketing Site

A Next.js 14 (App Router + TypeScript) marketing experience for Edigitify, inspired by format-3.co. It uses Tailwind CSS, Framer Motion animations, Lenis-powered smooth scrolling, and data-driven sections fed from `/src/data`.

## Stack

- Next.js 14 App Router + TypeScript
- Tailwind CSS 3 with custom design tokens
- Framer Motion (route transitions, reveals, hover micro-interactions)
- Lenis for smooth scrolling (with reduced-motion fallback)
- Next Fonts + Next/Image everywhere

## Getting Started

```bash
npm install
npm run dev
```

- Visit `http://localhost:3000`.
- `npm run lint` to check code quality.
- `npm run build && npm start` to test the production bundle.

## Project Structure

```
src/
  app/              # App Router routes, metadata, sitemap/robots
  components/       # Reusable UI (hero, header, marquee, work cards, etc.)
  data/             # JSON content powering sections
  lib/              # Helpers (content loaders, utils)
public/
  logo.svg          # Edigitify mark derived from provided asset
  logos/            # Simple wordmark stand-ins for the marquee
```

## Content Model

All homepage/secondary sections pull from static JSON so you can iterate without touching components:

- `src/data/work.json` – add/edit case studies (slug, tags, summary, problem/solution, metrics, gallery).
- `src/data/clients.json` – update marquee logos (name, logo path in `public/logos`, outbound URL).
- `src/data/awards.json` – vertical recognition list.
- `src/data/insights.json` – teaser cards on home + /insights anchors.
- `src/data/cities.json` – world clock strip (city, country, IANA time zone).

After editing any JSON file, restart the dev server (or re-run `next build`) so static imports refresh.

## Adding New Work Items

1. Duplicate an entry inside `src/data/work.json`.
2. Update `slug`, `title`, `tags`, `summary`, and hero `image` (local asset or allowed remote URL).
3. Provide `problem`, `solution`, `outcomes[]`, `metrics[]`, and `gallery[]` to drive the detail page sections.
4. Add any supporting assets under `public/work/` if you prefer local imagery (Next/Image already whitelists Unsplash URLs if you stick with remote images).

The list automatically reflects new records on `/` and the `/work` masonry grid; `/work/[slug]` renders the detailed page based on the slug.

## Updating Awards or Insights

- Add rows to `src/data/awards.json` to show additional recognition. Items fade in automatically.
- Update `src/data/insights.json` to surface new articles across the home and `/insights` page.

## Smooth Scrolling & Motion

- `SmoothScrollProvider` wires Lenis to `requestAnimationFrame` and pauses when `prefers-reduced-motion` is enabled.
- Route transitions live inside `src/app/template.tsx` via `AnimatePresence`.
- Reusable reveal + ticker/marquee components respect reduced-motion preferences.

## Deployment Notes

- SEO metadata + Open Graph are defined in `src/app/layout.tsx`.
- `src/app/sitemap.ts` and `src/app/robots.ts` keep search bots happy.
- Keep `next.config.ts` image domains in sync if you introduce new remote assets.
# Edigitify
