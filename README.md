# Three Guys — Mind over matter.

One-page site for Three Guys, a creative studio for design, entertainment and marketing.
Next.js (App Router, static export) + TypeScript + Tailwind CSS. No CMS, no database.

## Edit the content
- `content/site.ts` — email, phone, WhatsApp, Instagram, domain, team, testimonials switch.
- `content/projects.ts` — the Work grid.
- Copy marked `TODO: draft copy` in `src/app/page.tsx`.

## Brand files
Drop the supplied logo SVGs into `public/brand/` (see `public/brand/README.md`).
Never edit, recolour or redraw them. Favicon, app icons and the Open Graph image are
regenerated from them on every build (`npm run brand:assets` runs as `prebuild`).

## Run
```bash
npm install
npm run dev
npm run build   # static site in ./out
```

## Deploy
Import this repo in Vercel (framework: Next.js, default settings). Every push to `main` deploys.
