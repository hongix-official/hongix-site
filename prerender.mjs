/* Build-time prerender: render the built app in headless Chromium and snapshot
   the resulting HTML back into dist/index.html, so crawlers get fully-rendered
   content in the initial response. The client JS still loads and takes over.

   Runs after `vite build` (see package.json). Fails soft: if Chromium isn't
   available, it warns and leaves the SPA index.html untouched so the build
   still produces a working dist. */
import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
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
    if (p === '/' || p.endsWith('/')) p = '/index.html';
    const data = await readFile(join(DIST, p));
    res.writeHead(200, { 'content-type': MIME[extname(p)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404); res.end('not found');
  }
});

await new Promise((r) => server.listen(PORT, r));

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  console.warn('[prerender] playwright not installed — skipping prerender.');
  server.close();
  process.exit(0);
}

try {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle', timeout: 30000 }).catch(() => {});
  // Wait until React has rendered real content into #root.
  await page.waitForFunction(() => {
    const root = document.getElementById('root');
    return root && root.children.length > 0 && document.body.textContent.includes('Founding Partner');
  }, { timeout: 20000 });
  await page.waitForTimeout(1000);

  const html = await page.content();
  if (!html.includes('Founding Partner')) throw new Error('rendered content missing');
  await writeFile(join(DIST, 'index.html'), '<!doctype html>\n' + html.replace(/^<!doctype html>/i, ''), 'utf8');
  console.log(`[prerender] snapshot written (${(html.length / 1024).toFixed(0)} KB).`);
  await browser.close();
} catch (err) {
  console.warn('[prerender] skipped:', err.message);
} finally {
  server.close();
}
