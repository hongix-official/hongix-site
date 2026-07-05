# Hongix — marketing site

The Hongix Design Labs landing page, built from the **Hongix Design System**
(claude.ai/design) and bundled with **Vite** for production. Deploys as static
files to **Cloudflare Pages** at **hongix.com**.

Integrations:
- **Book a call** → live [cal.com](https://cal.com/hongix-design-labs/15min) inline embed.
- **Waitlist** → Google Sheet via Apps Script (see [`apps-script/`](./apps-script)).

## Develop

```bash
npm install
npm run dev        # local dev server (http://localhost:5173)
npm run build      # production build → dist/
npm run preview    # serve the built dist/ locally
```

## Configure

Everything you need to set lives in [`src/config.js`](./src/config.js):

| Constant | What it is |
|---|---|
| `WAITLIST_ENDPOINT` | Your Apps Script `/exec` URL. **Must be set** for the waitlist to save. See [`apps-script/README.md`](./apps-script/README.md). |
| `CAL_LINK` | cal.com handle for the booking embed (already set to `hongix-design-labs/15min`). |

After changing config, run `npm run build` again and redeploy.

## Architecture

The design ships as React rendered via in-browser Babel, with the design system
compiled to a global (`window.HongixDesignSystem_ffb926`). To keep it
pixel-identical while making it production-grade, the site **bundles** the design
rather than rewriting it:

- `public/vendor/` — React + ReactDOM (production UMD) and the design-system
  bundle, loaded as **classic `<script>`s** in `index.html`. They set the window
  globals the section files expect **before** the app module runs.
- `src/sections/Sections1–4.jsx` — the design's sections (verbatim, with only the
  integration edits below). They read the DS off `window` and assign their
  components back to `window`.
- `src/main.jsx` — Vite entry: imports the sections in order for their side
  effects, then renders `<App/>`.
- Vite compiles JSX to classic `React.createElement` against the global React
  (no `@vitejs/plugin-react`, no injected `import React`) so there's a single
  React instance.

### What changed from the raw design

- **Login removed** — header button, modal, and footer link all gone (the studio
  runs on a waitlist → Trello/Loom flow, no customer login yet).
- **cal.com** — the mocked calendar in `BookCall` is replaced with the real
  cal.com inline embed.
- **Waitlist** — the header "Join Waitlist" button and both Pricing CTAs open a
  `WaitlistModal` (name, email, plan) that posts to the Apps Script endpoint.
- **Content** — stats, one service label, and the first FAQ answer follow the
  updated copy from <https://hongix.framer.website/>.

## Deploy to Cloudflare Pages

### Option A — Git integration (recommended)

1. Push this folder to a GitHub/GitLab repo.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo and set:
   - **Framework preset**: `Vite` (or None)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. **Save and Deploy**. Every push then auto-deploys.

### Option B — Direct upload (Wrangler)

```bash
npm run build
npx wrangler pages deploy dist --project-name hongix
```

### Connect the hongix.com domain

1. In your Pages project → **Custom domains → Set up a custom domain**.
2. Add **`hongix.com`** and **`www.hongix.com`**.
3. If your DNS is on Cloudflare, the records are added automatically. Otherwise
   add the `CNAME` records Cloudflare shows you at your registrar.
4. Wait for the certificate to provision (usually a few minutes). Done.

## Placeholders to finish later

- **OG/social image** — `index.html` points `og:image` at the SVG logomark. For
  rich link previews, add a real `public/assets/og.png` (1200×630) and update the
  `og:image` / `twitter:image` URLs.
- **Portfolio link** — "See selected works" points at `figma.com`
  (`PORTFOLIO_URL` in `src/sections/Sections2.jsx`). Swap for the real portfolio.
- **Instagram / legal links** in the footer are placeholders (`#`).
