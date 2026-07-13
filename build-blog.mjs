/* Blog static-site generator.
   Reads posts (local markdown now; Notion later) and writes fully static,
   SEO-optimized HTML pages into dist/blog/ + regenerates dist/sitemap.xml.

   Runs after `vite build` (see package.json). Blog pages are pure static HTML
   (no client JS needed) so they index fast and load instantly. */
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { marked } from 'marked';

const ROOT = process.cwd();
const DIST = join(ROOT, 'dist');
const SITE = 'https://hongix.com';
const POSTS_DIR = join(ROOT, 'src/blog/posts');

// ---- content source ---------------------------------------------------------
// Swap-in point for Notion: when NOTION_TOKEN + NOTION_DB are set we'll fetch
// published rows here instead of reading local markdown. Same shape either way.
async function getPosts() {
  if (process.env.NOTION_TOKEN && process.env.NOTION_DB) {
    const { fetchNotionPosts } = await import('./notion.mjs'); // added when token is ready
    return fetchNotionPosts();
  }
  return readLocalPosts();
}

async function readLocalPosts() {
  const files = (await readdir(POSTS_DIR)).filter((f) => f.endsWith('.md'));
  const posts = [];
  for (const f of files) {
    const raw = await readFile(join(POSTS_DIR, f), 'utf8');
    const { data, body } = parseFrontmatter(raw);
    if (String(data.status || 'published').toLowerCase() === 'draft') continue;
    posts.push({
      title: data.title || 'Untitled',
      slug: data.slug || f.replace(/\.md$/, ''),
      date: data.date || '',
      excerpt: data.excerpt || '',
      tags: data.tags || [],
      author: data.author || 'Hongix',
      html: marked.parse(body),
      text: body,
    });
  }
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Minimal frontmatter parser (avoids an extra dependency).
function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: raw };
  const data = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    let val = line.slice(i + 1).trim();
    if (val.startsWith('[') && val.endsWith(']')) {
      val = val.slice(1, -1).split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
    } else {
      val = val.replace(/^["']|["']$/g, '');
    }
    data[key] = val;
  }
  return { data, body: m[2] };
}

// ---- helpers ----------------------------------------------------------------
const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const readTime = (t) => Math.max(1, Math.round(t.trim().split(/\s+/).length / 200));
const fmtDate = (d) => {
  if (!d) return '';
  try { return new Date(d + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }); }
  catch { return d; }
};

async function tokensCss() {
  const files = ['tokens/fonts.css', 'tokens/colors.css', 'tokens/typography.css', 'tokens/spacing.css', 'tokens/base.css'];
  const parts = await Promise.all(files.map((f) => readFile(join(ROOT, f), 'utf8')));
  // strip the relative @imports inside styles.css chain (we inline directly)
  return parts.join('\n').replace(/@import url\(['"]\.\/[^)]+\);/g, '');
}

const BLOG_CSS = `
  body { background-color:#FDFBF4; background-image:radial-gradient(rgba(70,52,18,.055) 1px, transparent 1.1px); background-size:15px 15px; background-position:-5px -5px; }
  .bx-wrap { max-width:720px; margin:0 auto; padding:0 24px; }
  .bx-head { position:sticky; top:0; z-index:10; backdrop-filter:blur(10px); background:rgba(255,251,241,.82); border-bottom:1px solid var(--line); }
  .bx-head .bx-wrap { max-width:1100px; display:flex; align-items:center; justify-content:space-between; height:64px; }
  .bx-brand { display:inline-flex; align-items:center; gap:5px; text-decoration:none; }
  .bx-brand .m { display:inline-flex; align-items:center; font-family:var(--font-display); font-weight:800; font-size:22px; letter-spacing:-.04em; color:var(--ink); }
  .bx-brand .s { font-family:var(--font-mono); font-weight:700; font-size:9px; letter-spacing:.16em; text-transform:uppercase; color:var(--ink-faint); }
  .bx-nav { display:flex; gap:18px; align-items:center; }
  .bx-nav a { color:var(--ink); text-decoration:none; font-weight:600; font-size:15px; }
  .bx-cta { background:var(--yellow-400); border:1px solid var(--line); border-radius:var(--radius-sm); padding:8px 16px; box-shadow:var(--shadow-sm); }
  main { padding:56px 0 88px; }
  .bx-eyebrow { font-family:var(--font-mono); font-weight:700; font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:var(--coral-500); }
  article h1 { font-size:var(--text-4xl); line-height:1.1; letter-spacing:-.03em; margin:14px 0 0; }
  .bx-meta { display:flex; gap:10px; align-items:center; flex-wrap:wrap; color:var(--ink-faint); font-family:var(--font-mono); font-size:13px; margin:20px 0 0; }
  .bx-tag { background:var(--paper); border:1px solid var(--line); border-radius:999px; padding:3px 11px; font-size:12px; color:var(--ink-soft); }
  article .bx-body { margin-top:36px; font-size:18px; line-height:1.7; color:var(--ink); }
  .bx-body h2 { font-size:var(--text-xl); margin:40px 0 12px; letter-spacing:-.02em; }
  .bx-body p { margin:0 0 20px; }
  .bx-body ul, .bx-body ol { margin:0 0 20px; padding-left:22px; }
  .bx-body li { margin:0 0 8px; }
  .bx-body strong { font-weight:700; }
  .bx-body a { color:var(--coral-500); text-decoration-thickness:2px; text-underline-offset:3px; }
  .bx-back { display:inline-flex; align-items:center; gap:6px; color:var(--ink-soft); text-decoration:none; font-weight:600; font-size:14px; }
  .bx-endcta { margin-top:56px; background:var(--grad-sunrise); border:1px solid var(--line); border-radius:var(--radius-2xl); box-shadow:var(--shadow-lg); padding:40px; text-align:center; }
  .bx-endcta h3 { font-size:var(--text-2xl); margin:0; letter-spacing:-.02em; }
  .bx-endcta p { color:var(--ink-soft); margin:10px 0 22px; }
  .bx-btn { display:inline-block; background:var(--ink); color:var(--cream); text-decoration:none; font-family:var(--font-display); font-weight:700; padding:14px 26px; border-radius:var(--radius-md); box-shadow:var(--shadow-md); }
  /* index */
  .bx-hero { text-align:center; padding:24px 0 44px; }
  .bx-hero h1 { font-size:var(--text-4xl); letter-spacing:-.03em; margin:14px 0 0; }
  .bx-hero p { color:var(--ink-soft); font-size:var(--text-md); margin:14px auto 0; max-width:44ch; }
  .bx-list { display:flex; flex-direction:column; gap:18px; }
  .bx-card { display:block; text-decoration:none; color:inherit; background:var(--paper); border:1px solid var(--line); border-radius:var(--radius-xl); box-shadow:var(--shadow-sm); padding:28px 30px; transition:transform .18s, box-shadow .22s; }
  .bx-card:hover { transform:translateY(-2px); box-shadow:var(--shadow-md); }
  .bx-card h2 { font-size:var(--text-xl); letter-spacing:-.02em; margin:10px 0 8px; }
  .bx-card p { color:var(--ink-soft); margin:0; }
  .bx-foot { border-top:1px solid var(--line); margin-top:24px; }
  .bx-foot .bx-wrap { max-width:1100px; display:flex; justify-content:space-between; flex-wrap:wrap; gap:12px; padding-top:28px; padding-bottom:28px; font-family:var(--font-mono); font-size:13px; color:var(--ink-faint); }
  @media (max-width:560px){ article h1,.bx-hero h1{font-size:var(--text-3xl);} }
`;

const WORDMARK = `<span class="m">hongi<svg viewBox="0 0 100 100" style="width:20px;height:22px;margin:0 -1px;overflow:visible" role="img" aria-label="x"><defs><linearGradient id="hx" x1="0.1" y1="0" x2="0.9" y2="1"><stop offset="0" stop-color="#FFA23E"/><stop offset="1" stop-color="#EC5A1A"/></linearGradient></defs><path transform="rotate(45 50 50)" d="M50 13 C55 35 65 45 87 50 C65 55 55 65 50 87 C45 65 35 55 13 50 C35 45 45 35 50 13 Z" fill="url(#hx)" stroke="url(#hx)" stroke-width="10" stroke-linejoin="round"/></svg></span>`;

function shell({ title, description, canonical, jsonld, body, ogType = 'website' }) {
  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<link rel="icon" type="image/png" href="/assets/favicon.png">
<meta property="og:type" content="${ogType}">
<meta property="og:url" content="${canonical}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${SITE}/assets/og.png">
<meta property="og:site_name" content="Hongix Design Labs">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${SITE}/assets/og.png">
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css">
${jsonld ? `<script type="application/ld+json">${jsonld}</script>` : ''}
<style>${TOKENS}${BLOG_CSS}</style>
</head><body>
<header class="bx-head"><div class="bx-wrap">
  <a class="bx-brand" href="/">${WORDMARK}<span class="s">Design&nbsp;Labs</span></a>
  <nav class="bx-nav"><a href="/blog/">Blog</a><a href="/#how">How it works</a><a class="bx-cta" href="/#pricing">See pricing</a></nav>
</div></header>
${body}
<footer class="bx-foot"><div class="bx-wrap"><span>© 2026 HONGIX DESIGN LABS</span><a href="mailto:hello@hongix.com" style="color:inherit">hello@hongix.com</a></div></footer>
</body></html>`;
}

let TOKENS = '';

function postPage(p) {
  const url = `${SITE}/blog/${p.slug}/`;
  const jsonld = JSON.stringify({
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: p.title, description: p.excerpt, datePublished: p.date,
    author: { '@type': 'Person', name: p.author },
    publisher: { '@type': 'Organization', name: 'Hongix Design Labs', logo: { '@type': 'ImageObject', url: `${SITE}/assets/favicon.png` } },
    image: `${SITE}/assets/og.png`, mainEntityOfPage: url,
  });
  const body = `<main class="bx-wrap"><article>
  <a class="bx-back" href="/blog/"><i class="ph-bold ph-arrow-left"></i> All posts</a>
  <div style="margin-top:22px"><span class="bx-eyebrow">${esc((p.tags[0] || 'Notes'))}</span></div>
  <h1>${esc(p.title)}</h1>
  <div class="bx-meta"><span>${fmtDate(p.date)}</span><span>·</span><span>${readTime(p.text)} min read</span><span>·</span><span>${esc(p.author)}</span>
    ${p.tags.map((t) => `<span class="bx-tag">${esc(t)}</span>`).join('')}</div>
  <div class="bx-body">${p.html}</div>
  <div class="bx-endcta">
    <h3>A design partner for founders &amp; growing brands</h3>
    <p>Product, launch &amp; growth design — one predictable subscription.</p>
    <a class="bx-btn" href="/#pricing">See how it works →</a>
  </div>
</article></main>`;
  return shell({ title: `${p.title} — Hongix`, description: p.excerpt, canonical: url, jsonld, body, ogType: 'article' });
}

function indexPage(posts) {
  const url = `${SITE}/blog/`;
  const body = `<main class="bx-wrap">
  <div class="bx-hero"><span class="bx-eyebrow">Hongix Journal</span>
    <h1>Notes on design, startups &amp; shipping fast</h1>
    <p>Field notes from a design partner for founders and growing brands.</p></div>
  <div class="bx-list">${posts.map((p) => `
    <a class="bx-card" href="/blog/${p.slug}/">
      <span class="bx-eyebrow">${esc(p.tags[0] || 'Notes')}</span>
      <h2>${esc(p.title)}</h2>
      <p>${esc(p.excerpt)}</p>
      <div class="bx-meta"><span>${fmtDate(p.date)}</span><span>·</span><span>${readTime(p.text)} min read</span></div>
    </a>`).join('')}</div>
</main>`;
  return shell({ title: 'Blog — Hongix Design Labs', description: 'Notes on design, startups, and shipping fast, from Hongix — a design partner for founders and growing brands.', canonical: url, body });
}

async function sitemap(posts) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: `${SITE}/`, lastmod: today, priority: '1.0', freq: 'weekly' },
    { loc: `${SITE}/blog/`, lastmod: today, priority: '0.8', freq: 'weekly' },
    ...posts.map((p) => ({ loc: `${SITE}/blog/${p.slug}/`, lastmod: p.date || today, priority: '0.7', freq: 'monthly' })),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.freq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n')}
</urlset>\n`;
  await writeFile(join(DIST, 'sitemap.xml'), xml, 'utf8');
}

// ---- run --------------------------------------------------------------------
TOKENS = await tokensCss();
const posts = await getPosts();
await mkdir(join(DIST, 'blog'), { recursive: true });
await writeFile(join(DIST, 'blog', 'index.html'), indexPage(posts), 'utf8');
for (const p of posts) {
  await mkdir(join(DIST, 'blog', p.slug), { recursive: true });
  await writeFile(join(DIST, 'blog', p.slug, 'index.html'), postPage(p), 'utf8');
}
await sitemap(posts);
console.log(`[blog] generated ${posts.length} post(s) + index, sitemap updated.`);
