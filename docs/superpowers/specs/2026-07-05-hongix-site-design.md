# Hongix marketing site — design spec

**Date:** 2026-07-05
**Status:** Implemented

## Goal

Turn the Hongix Design System's `ui_kits/website/index.html` (from
claude.ai/design project `ffb926ff…`) into a production web app for **hongix.com**,
with a live **cal.com** booking embed and a **Google Sheets** waitlist. Remove the
Login UI (not needed for the current studio workflow).

## Decisions (from the user)

- **Build**: Vite production bundle (fast, SEO-friendly), not raw in-browser Babel.
- **Host**: Cloudflare Pages, custom domain hongix.com.
- **Waitlist fields**: Name, Email, Plan → Google Apps Script → Google Sheet.
- **Apps Script**: we author `Code.gs`; the user deploys and pastes the `/exec` URL.
- **cal.com**: `hongix-design-labs/15min`.
- **Login**: removed.
- **Content**: Claude design is the base; where copy differs, the updated
  <https://hongix.framer.website/> wins (stats, one service label, FAQ #1 answer).

## Architecture

The design is React via in-browser Babel + a compiled design-system global
(`window.HongixDesignSystem_ffb926`, referencing global `React`). We preserve that
runtime model but bundle it for production:

- **Vendored classic scripts** (`public/vendor/`): React + ReactDOM production UMD
  and `_ds_bundle.js`, loaded in `index.html` before the app module. They set the
  window globals the section files require.
- **Section files** (`src/sections/Sections1–4.jsx`): the design verbatim, plus
  integration edits. Read DS off `window`, assign components back to `window`.
- **Entry** (`src/main.jsx`): imports sections in order (side effects), renders `<App/>`.
- **Vite/esbuild**: JSX → `React.createElement` against global React; no
  `@vitejs/plugin-react`, no injected React import → single React instance.
- **CSS/tokens/assets**: design's `styles.css` + `tokens/` + SVGs, unchanged.

### Isolation of units

- `src/config.js` — the only file with values to edit (waitlist URL, cal handle).
- `src/waitlist.jsx` — self-contained `WaitlistModal`: validation + POST + states
  (idle/submitting/done/error). Depends only on `config.js` and global React/DS.
- `apps-script/Code.gs` — standalone backend: `doPost` appends a row; `doGet` health.

## The three integrations

1. **Remove Login** — header button, `LoginModal` (dropped entirely), footer link.
2. **cal.com** — replace the mocked `BookingCalendar` with a `CalEmbed` inline
   embed (`calLink: hongix-design-labs/15min`, brand `#FFC02E`).
3. **Waitlist** — header "Join Waitlist" + both Pricing CTAs open `WaitlistModal`
   with the plan preselected. `PriceCard` has no `onClick`, so a wrapper delegates
   the CTA `<button>` click. Submit posts form-encoded (`mode: 'no-cors'`, no
   preflight); the Sheet is the source of truth; optimistic success UI.

## Data flow

- Booking: browser → cal.com embed (client-side, external).
- Waitlist: `WaitlistModal` → `fetch(WAITLIST_ENDPOINT)` → Apps Script `doPost`
  → `SpreadsheetApp.appendRow([timestamp, name, email, plan, source])`.

## Error handling

- Waitlist: client validates name + email; blocks submit if `WAITLIST_ENDPOINT` is
  still the placeholder (clear inline error); network failure → retry message.
- cal.com / fonts / icons load from their CDNs; if unreachable the page still
  renders (React + DS are self-hosted).

## Verification

Built with Vite; driven in a real browser (Vite preview): page renders with fonts
and animations, **no console errors**, no Login button, waitlist modal opens with
validation, cal.com embed loads live availability, updated stats/labels/FAQ show.

## Deferred / placeholders

OG social image (SVG placeholder), portfolio link (figma.com), footer Instagram &
legal links. Future: a custom client app if volume outgrows the Trello + Loom flow.
