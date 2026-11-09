<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Site standards (Profound Productions rule, 9 Nov 2026)

Keep these when changing this site:
- Icons throughout: burger icon that morphs into an ✕, arrows on buttons/links, ticks on lists, an icon on every contact method, social icon buttons in the footer. Inline SVG in `src/components/icons.tsx`; icon-only buttons need an `aria-label`.
- Full-screen mobile menu below a solid header (no backdrop-blur: it traps the fixed menu). Page scroll locked while open; closes on link tap, ✕, Esc, or widening to desktop.
- Animations and effects: hero entrance, scroll reveals (`data-reveal` + `RevealObserver`), hover lift/zoom/nudges, animated burger, staggered menu links. All motion off under `prefers-reduced-motion`; content never hidden without JS. Never rotate, stretch or redraw the logo or faces.
- Mobile first, always: design and check at 375px first, then 768px, then 1440px. On an iPhone SE (375×568) the headline and main button are visible without scrolling; phone header ~64–72px (wordmark on phones, primary logo from md); every tap target ≥44px; hover-only effects live inside `@media (hover: hover)` with press feedback (`.press`) for touch; long card lists become a swipe row on phones.
