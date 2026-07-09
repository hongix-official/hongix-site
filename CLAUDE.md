# CLAUDE.md — Hongix site

## Read this first
**[`SPEC.md`](./SPEC.md) is the brand constitution.** Read it before making ANY
change to copy, color, layout, pricing, or components. Every decision must
reinforce the positioning:

> "The design partner ambitious startups hire before building an in-house design team."

Before shipping any change, run the positioning test: *does this make Hongix feel
more premium, trustworthy, strategic, and founder-friendly?* If a change conflicts
with SPEC.md, **the positioning wins** — flag the conflict, don't ship it.

Hard rules from the constitution (common violations to avoid):
- Never say "unlimited requests/revisions", "AI-powered", "discount/sale".
- Sell outcomes (momentum, launches, conversion), not deliverables (Figma files, graphics).
- Pricing: US$3,999 public · US$2,999 Founding Partner (next 2, locked 6 months). USD only.
- Tone: calm, confident, understated (Apple/Linear/Vercel/Stripe) — never loud/salesy/cheap.

## Project
Vite static site → Cloudflare Pages (project `hongix`) → **hongix.com**.
Built from the Hongix Design System; React is vendored as a global.

- Dev: `npm run dev` · Build: `npm run build` · Preview: `npm run preview`
- Deploy: `npx wrangler pages deploy dist --project-name hongix --branch main`
- Config to edit: `src/config.js` (`WAITLIST_ENDPOINT`, `CAL_LINK`).
- Sections live in `src/sections/Sections1–4.jsx`; page order in `src/main.jsx`.
- Waitlist backend: `apps-script/Code.gs` (Google Sheet + email notify).

## Architecture note
`public/vendor/` holds React/ReactDOM UMD + the design-system bundle, loaded as
classic scripts in `index.html` so `window.React` / `window.HongixDesignSystem_ffb926`
exist before the app module runs. JSX compiles to classic `React.createElement`
against the global (no `@vitejs/plugin-react`). Don't add `import React`.
