# Case studies — format, location, and how to add real ones

> **Status (2026-07-29):** One **sample** case study is live at
> **https://hongix.com/case-study** with **placeholder content** (marked
> "Sample · placeholder content" at the top). The *format is approved*; it's
> waiting for a real project's content to replace the placeholders.

## Why this exists

Visitors read **Hero → Portfolio → Pricing**. A strong Hero + Pricing isn't enough
to justify **$2,999/mo** — the work in between has to prove it. A case study told as
**Before → Problem → Solution → Result** sells the Partner plan far better than a
few project screenshots. That's the job of this page.

## The format (section order)

1. **Snapshot** — Client · Sector · Engagement · Timeline (4-cell meta card)
2. **Before / After** — two visuals side by side (placeholder boxes for now)
3. **01 · Before** — the starting point, in prose
4. **02 · The problem** — what actually held it back (clarity, conversion, speed)
5. **03 · What we did** — the strategic moves (a 2×2 card grid). Sell *judgment*,
   not deliverables (no "we made Figma files").
6. **04 · The result** — 3 metric tiles + a client quote
7. **CTA** — "Want results like this?" → Start your own / Book a call

## Where the code lives

| File | Role |
|------|------|
| `src/sections/CaseStudy.jsx` | The page body (`window.CaseStudyShowcase`). All content lives in the consts at the top: `CS_META`, `CS_MOVES`, `CS_STATS`, plus the headline, subhead, Before/After boxes, and the quote inline. |
| `src/main.jsx` | Routing. `CaseStudyPage` wraps the body in the shared Header/Footer/modal; the route table renders it when `pathname === '/case-study'`. |
| `prerender.mjs` | Seeds `dist/case-study/index.html` with the SPA shell **and** snapshots the rendered page (marker text `'A quiet launch'`) so the static route resolves on Cloudflare. |

Routing is pathname-based (no router lib): `main.jsx` reads `window.location.pathname`
and picks the page. Cloudflare serves `/case-study` via a 308 → `/case-study/` →
`dist/case-study/index.html`.

## How to add / replace with a REAL case study

**To fill the existing sample with real content**, edit the consts at the top of
`src/sections/CaseStudy.jsx`:

- `CS_META` — client, sector, engagement, timeline
- Headline `<h1>` + subhead `<p>` — the one-line story
- Before/After `<CSShot>` — swap the placeholder boxes for real screenshots
  (drop images in `public/assets/…` and use `<img>` like `WorkCard` in `Work.jsx`)
- `01/02/03` prose — the narrative
- `CS_MOVES` — the strategic moves (title + one line each)
- `CS_STATS` — the 3 result metrics
- The `<blockquote>` — a real client quote + name/company
- **Remove the "Sample · placeholder content" pill** once content is real.
- Update the `React.useEffect` meta (title/description) for SEO.

**To support MULTIPLE case studies** (a list + per-study pages), the current
single-route setup needs generalizing: turn the content into an array of study
objects, route `/case-study/:slug` (extend the pathname check in `main.jsx`), add a
listing page, and seed/snapshot each slug in `prerender.mjs`. Not done yet — one
sample only.

## Intentional decisions (don't "fix" these without asking)

- **Landing portfolio buttons untouched.** The "Explore the portfolio" tracks
  (Website design / Product design) in `Sections2.jsx` were **left exactly as-is**
  at the user's request. Case studies are **not** wired to any button yet — you reach
  the page by URL. When ready, the natural home is the **Website design** track
  (a landing-page conversion case study is website work, not product/app work).
- **Placeholder metrics are clearly marked.** Per SPEC.md, never imply guaranteed
  conversion lifts. Real numbers replace the placeholders, or go qualitative.
- Tone: premium, calm, outcome-focused. No "unlimited", no em-dashes (the user
  finds em-dashes AI-ish), USD only.

## Known small gaps

- The prerendered static `<title>`/meta for `/case-study` currently serialize the
  **default landing** values (the correct title is set client-side by the
  `useEffect`, so browser tabs are fine; only the static snapshot is stale). Worth
  fixing when the page carries real content that should rank.

## Deploy

Ships like the rest of the site: **`git push origin main`** → Cloudflare CI builds.
See the deploy notes memory for the flow and the rollup/Linux build-failure fix.
