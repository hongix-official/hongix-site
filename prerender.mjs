/* Build-time prerender: render the built app in headless Chromium and snapshot
   the resulting HTML back into dist/ (landing + /work), so crawlers get fully
   rendered content in the initial response. The client JS still hydrates.

   Runs after `vite build` (see package.json). Fails soft: if Chromium isn't
   available, it warns and leaves the SPA index.html untouched so the build
   still produces a working dist. */
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, extname } from 'node:path';

const DIST = join(process.cwd(), 'dist');
const PORT = 4399;
const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.xml': 'application/xml', '.txt': 'text/plain',
  '.json': 'application/json', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json',
};

const server = createServer(async (req, res) => {
  try {
    let p = decodeURIComponent((req.url || '/').split('?')[0]);
    if (p.endsWith('/')) p += 'index.html';        // '/' -> '/index.html', '/work/' -> '/work/index.html'
    else if (!extname(p)) p += '/index.html';       // '/work' -> '/work/index.html'
    const data = await readFile(join(DIST, p));
    res.writeHead(200, { 'content-type': MIME[extname(p)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404); res.end('not found');
  }
});

await new Promise((r) => server.listen(PORT, r));

// Always seed /work with the SPA shell first, so /work exists (and the client
// renders the WorkShowcase from the path) even if the Chromium prerender below
// is unavailable and skipped.
try {
  const shell = await readFile(join(DIST, 'index.html'), 'utf8');
  await mkdir(join(DIST, 'work'), { recursive: true });
  await writeFile(join(DIST, 'work', 'index.html'), shell, 'utf8');
} catch (e) {
  console.warn('[prerender] could not seed /work shell:', e.message);
}

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  console.warn('[prerender] playwright not installed — skipping prerender.');
  server.close();
  process.exit(0);
}

// Render one route and return a clean HTML snapshot once `marker` text appears.
async function snapshot(page, path, marker) {
  await page.goto(`http://localhost:${PORT}${path}`, { waitUntil: 'networkidle', timeout: 30000 }).catch(() => {});
  await page.waitForFunction((m) => {
    const root = document.getElementById('root');
    return root && root.children.length > 0 && document.body.textContent.includes(m);
  }, marker, { timeout: 20000 });
  await page.waitForTimeout(1000);
  // Strip cal.com embed artifacts so embed.js isn't baked into the snapshot
  // (double-load otherwise breaks the calendar). Harmless where there's no embed.
  await page.evaluate(() => {
    document.querySelectorAll('script[src*="cal.com/embed"], script[src*="app.cal.com"]').forEach((el) => el.remove());
    const cal = document.getElementById('hx-cal');
    if (cal) cal.innerHTML = '';
  });
  const html = await page.content();
  if (!html.includes(marker)) throw new Error(`rendered content missing (${marker})`);
  return '<!doctype html>\n' + html.replace(/^<!doctype html>/i, '');
}

try {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' });
  const page = await ctx.newPage();

  const landing = await snapshot(page, '/', 'Founding Partner');
  await writeFile(join(DIST, 'index.html'), landing, 'utf8');

  const work = await snapshot(page, '/work', 'Logbill');
  await writeFile(join(DIST, 'work', 'index.html'), work, 'utf8');

  console.log('[prerender] snapshots written (landing + /work).');
  await browser.close();
} catch (err) {
  console.warn('[prerender] skipped:', err.message);
} finally {
  server.close();
}
