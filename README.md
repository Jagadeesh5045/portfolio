# JAGADEESHWARA — THE PIPELINE

My portfolio, presented as a live AI evaluation pipeline. Every section is a stage; every project ships with receipts.

- **STAGE 01 — INGEST**: who I am
- **STAGE 02 — RETRIEVE**: selected work, ranked by evidence
- **STAGE 03 — RERANK**: experience, ordered by relevance
- **STAGE 04 — GENERATE**: writing, grounded in real builds
- **STAGE 05 — EVALUATE**: verify, then contact (with a groundedness report for the site itself)

## Stack

React 18, TypeScript, Vite, Tailwind CSS. All content lives in one file: `src/data/portfolio.ts`.

## Run locally

Requires Node.js 18+.

```
npm install
npm run dev
```

Production build:

```
npm run build
```

## Deploy

The site is configured for GitHub Pages (`base: '/portfolio/'` in `vite.config.ts`). The built `dist/` output deploys to https://jagadeesh5045.github.io/portfolio/.

## Content rules

Every fact on this site is real. No invented employers, numbers, or qualifications. Update `src/data/portfolio.ts` to update the site.
