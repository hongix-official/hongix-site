/* Build-time generator for the /work product-design showcase page.
   Pure static HTML (no client JS), using the shared brand tokens and fonts,
   the same approach as build-blog.mjs. Runs after build-blog (see package.json)
   so it can append /work to the already-generated sitemap. */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = process.cwd();
const DIST = join(ROOT, 'dist');
const SITE = 'https://hongix.com';

const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Inline the brand tokens (fonts + colors + type + spacing + base), stripping
// only the relative @imports (the Google Fonts @import stays so fonts load).
async function tokensCss() {
  const files = ['tokens/fonts.css', 'tokens/colors.css', 'tokens/typography.css', 'tokens/spacing.css', 'tokens/base.css'];
  const parts = await Promise.all(files.map((f) => readFile(join(ROOT, f), 'utf8')));
  return parts.join('\n').replace(/@import url\(['"]\.\/[^)]+\);/g, '');
}

const WORDMARK = `<span class="m">hongi<svg viewBox="0 0 100 100" style="width:20px;height:22px;margin:0 -1px;overflow:visible" role="img" aria-label="x"><defs><linearGradient id="hxw" x1="0.1" y1="0" x2="0.9" y2="1"><stop offset="0" stop-color="#FFA23E"/><stop offset="1" stop-color="#EC5A1A"/></linearGradient></defs><path transform="rotate(45 50 50)" d="M50 13 C55 35 65 45 87 50 C65 55 55 65 50 87 C45 65 35 55 13 50 C35 45 45 35 50 13 Z" fill="url(#hxw)" stroke="url(#hxw)" stroke-width="10" stroke-linejoin="round"/></svg></span>`;

const WORK_CSS = `
  body{ background-color:var(--cream); background-image:radial-gradient(rgba(70,52,18,.05) 1px, transparent 1.1px); background-size:15px 15px; background-position:-5px -5px; }
  .wk-wrap{ max-width:1060px; margin:0 auto; padding:0 24px; }

  .wk-head{ position:sticky; top:0; z-index:10; backdrop-filter:blur(10px); background:rgba(255,251,241,.82); border-bottom:1px solid var(--line); }
  .wk-head .wk-wrap{ display:flex; align-items:center; justify-content:space-between; height:64px; }
  .wk-brand{ display:inline-flex; align-items:center; gap:5px; text-decoration:none; }
  .wk-brand .m{ display:inline-flex; align-items:center; font-family:var(--font-display); font-weight:800; font-size:22px; letter-spacing:-.045em; color:var(--ink); }
  .wk-brand .s{ font-family:var(--font-mono); font-weight:700; font-size:9px; letter-spacing:.16em; text-transform:uppercase; color:var(--ink-faint); }
  .wk-nav{ display:flex; gap:18px; align-items:center; }
  .wk-nav a{ color:var(--ink); text-decoration:none; font-weight:600; font-size:15px; }
  .wk-nav .cta{ background:var(--yellow-400); border:1px solid var(--line); border-radius:var(--radius-sm); padding:8px 16px; box-shadow:var(--shadow-sm); }

  main{ padding:40px 0 40px; }
  .wk-back{ display:flex; width:fit-content; align-items:center; gap:7px; margin-bottom:26px; color:var(--ink-soft); text-decoration:none; font-family:var(--font-display); font-weight:700; font-size:14px; }
  .wk-back .a{ transition:transform .18s; }
  .wk-back:hover{ color:var(--coral-500); }
  .wk-back:hover .a{ transform:translateX(-3px); }
  .wk-eyebrow{ font-family:var(--font-mono); font-weight:700; font-size:12px; letter-spacing:.16em; text-transform:uppercase; color:var(--coral-500); }
  h1.wk-head-title{ font-family:var(--font-display); font-weight:800; letter-spacing:-.035em; line-height:1.05; font-size:clamp(2.1rem,1.2rem+3.4vw,3.5rem); margin:16px 0 0; text-wrap:balance; max-width:16ch; }
  .wk-serif{ font-family:var(--font-serif); font-style:italic; font-weight:400; letter-spacing:.01em; }
  .wk-sub{ font-size:1.075rem; color:var(--ink-soft); margin:18px 0 0; max-width:50ch; }

  .wk-cards{ display:grid; grid-template-columns:1fr 1fr; gap:26px; margin-top:52px; }
  .wk-card{ background:var(--paper); border:1px solid var(--line); border-radius:var(--radius-2xl); overflow:hidden; display:flex; flex-direction:column; box-shadow:var(--shadow-sm); transition:transform .2s, box-shadow .2s; }
  .wk-card:hover{ transform:translateY(-3px); box-shadow:var(--shadow-lg); }
  .wk-img{ width:100%; aspect-ratio:1200/631; object-fit:cover; display:block; border-bottom:1px solid var(--line); background:var(--cream-deep); }
  @keyframes wkPulse{ 0%{ box-shadow:0 0 0 0 rgba(47,148,105,.5); } 70%{ box-shadow:0 0 0 6px rgba(47,148,105,0); } 100%{ box-shadow:0 0 0 0 rgba(47,148,105,0); } }
  .wk-body{ padding:26px 26px 28px; display:flex; flex-direction:column; flex:1; }
  .wk-c-eyebrow{ font-family:var(--font-mono); font-size:11px; font-weight:700; letter-spacing:.13em; text-transform:uppercase; color:var(--ink-faint); }
  .wk-live-tag{ display:inline-flex; align-items:center; gap:5px; color:#2f9469; vertical-align:middle; }
  .wk-live-tag::before{ content:""; width:6px; height:6px; border-radius:999px; background:#2f9469; animation:wkPulse 2s ease-out infinite; }
  .wk-c-title{ font-family:var(--font-display); font-weight:800; letter-spacing:-.03em; font-size:1.7rem; margin:9px 0 0; }
  .wk-c-think{ font-size:.985rem; line-height:1.6; color:var(--ink-soft); margin:12px 0 0; }
  .wk-chips{ display:flex; flex-wrap:wrap; gap:8px; margin:18px 0 0; }
  .wk-chip{ font-family:var(--font-mono); font-size:11px; letter-spacing:.02em; padding:5px 11px; border-radius:999px; border:1px solid var(--line); background:var(--cream); color:var(--ink-soft); }
  .wk-chip.by{ background:var(--ink); color:var(--cream); border-color:var(--ink); }
  .wk-visit{ display:inline-flex; align-items:center; gap:8px; margin:auto 0 0; padding-top:22px; font-family:var(--font-display); font-weight:700; font-size:.98rem; color:var(--ink); text-decoration:none; align-self:flex-start; }
  .wk-visit .u{ border-bottom:2px solid var(--yellow-400); padding-bottom:2px; transition:border-color .18s; }
  .wk-visit:hover .u{ border-color:var(--coral-500); }
  .wk-visit .ar{ transition:transform .18s; }
  .wk-visit:hover .ar{ transform:translate(2px,-2px); }

  .wk-foot{ border-top:1px solid var(--line); margin-top:20px; }
  .wk-foot .wk-wrap{ display:flex; justify-content:space-between; flex-wrap:wrap; gap:12px; padding:28px 24px; font-family:var(--font-mono); font-size:12px; letter-spacing:.05em; text-transform:uppercase; color:var(--ink-faint); }
  .wk-foot a{ color:inherit; text-decoration:none; }

  @media (max-width:760px){
    .wk-cards{ grid-template-columns:1fr; gap:22px; }
    main{ padding:32px 0 32px; }
    .wk-nav a:not(.cta){ display:none; }
  }
`;

function card({ img, alt, eyebrow, title, think, chips, href, host }) {
  return `<article class="wk-card">
    <img class="wk-img" src="${img}" alt="${esc(alt)}" loading="lazy">
    <div class="wk-body">
      <span class="wk-c-eyebrow"><span class="wk-live-tag">Live</span> · ${esc(eyebrow)}</span>
      <h2 class="wk-c-title">${esc(title)}</h2>
      <p class="wk-c-think">${esc(think)}</p>
      <div class="wk-chips">${chips.map((c, i) => `<span class="wk-chip${i === chips.length - 1 ? ' by' : ''}">${esc(c)}</span>`).join('')}</div>
      <a class="wk-visit" href="${href}" target="_blank" rel="noopener"><span class="u">Try ${esc(host)}</span> <span class="ar" aria-hidden="true">&#8599;</span></a>
    </div>
  </article>`;
}

function page(TOKENS) {
  const title = 'Product design · Selected work | Hongix Design Labs';
  const desc = 'Products designed and shipped end to end by Hongix. Logbill and Reamly: real product and UX design, live right now.';
  const url = `${SITE}/work`;
  const jsonld = JSON.stringify({
    '@context': 'https://schema.org', '@type': 'CollectionPage',
    name: 'Product design · Selected work', description: desc, url,
    publisher: { '@type': 'Organization', name: 'Hongix Design Labs', url: SITE },
  });
  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<link rel="icon" type="image/png" href="/assets/favicon.png">
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${SITE}/assets/og.png">
<meta property="og:site_name" content="Hongix Design Labs">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${SITE}/assets/og.png">
<script type="application/ld+json">${jsonld}</script>
<style>${TOKENS}${WORK_CSS}</style>
</head><body>
<header class="wk-head"><div class="wk-wrap">
  <a class="wk-brand" href="/">${WORDMARK}<span class="s">Design&nbsp;Labs</span></a>
  <nav class="wk-nav"><a href="/#work">Work</a><a href="/blog/">Blog</a><a class="cta" href="/#call">Book a call</a></nav>
</div></header>

<main class="wk-wrap">
  <a class="wk-back" href="/#work"><span class="a" aria-hidden="true">&#8592;</span> Back</a>
  <span class="wk-eyebrow">Product design</span>
  <h1 class="wk-head-title">Design, proven in <span class="wk-serif">products people use.</span></h1>
  <p class="wk-sub">Products designed and shipped end to end by Hongix. Every one is live right now, free to open, and needs no sign-up.</p>

  <div class="wk-cards">
    ${card({
      img: '/assets/work/logbill.png',
      alt: 'Logbill: track your time, it becomes your invoice and your tax set-aside.',
      eyebrow: 'Freelance finance · Web app',
      title: 'Logbill',
      think: 'Privacy-first by design: data stays on the device, no account needed. The real work was making tax feel calm, so a freelancer always knows what money is truly theirs.',
      chips: ['Free', 'Local-first', 'No sign-up', 'Designed by Hongix'],
      href: 'https://logbill.app', host: 'logbill.app',
    })}
    ${card({
      img: '/assets/work/reamly.png',
      alt: 'Reamly: get your files done. Free and private browser tools.',
      eyebrow: 'File utilities · Web app',
      title: 'Reamly',
      think: 'One promise repeated everywhere: nothing is uploaded. The design job was making 41 separate tools feel like one trustworthy product, not a menu of scripts.',
      chips: ['Free', '41 tools', 'Client-side', 'Designed by Hongix'],
      href: 'https://reamly.org', host: 'reamly.org',
    })}
  </div>

</main>

<footer class="wk-foot"><div class="wk-wrap">
  <span>© 2026 Hongix Design Labs</span>
  <a href="/">hongix.com</a>
</div></footer>
</body></html>`;
}

const TOKENS = await tokensCss();
await mkdir(join(DIST, 'work'), { recursive: true });
await writeFile(join(DIST, 'work', 'index.html'), page(TOKENS), 'utf8');

// Append /work to the sitemap that build-blog generated (if not already present).
try {
  const smPath = join(DIST, 'sitemap.xml');
  let sm = await readFile(smPath, 'utf8');
  if (!sm.includes(`${SITE}/work`)) {
    const entry = `  <url>\n    <loc>${SITE}/work</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    sm = sm.replace('</urlset>', entry + '</urlset>');
    await writeFile(smPath, sm, 'utf8');
  }
} catch { /* sitemap optional */ }

console.log('[work] product-design page generated (dist/work/index.html).');
