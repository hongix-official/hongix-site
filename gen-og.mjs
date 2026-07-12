/* Renders og-template.html to public/assets/og.png (1200x630) for social link previews. */
import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { join } from 'node:path';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
const page = await ctx.newPage();
await page.goto(pathToFileURL(join(process.cwd(), 'og-template.html')).href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);
await page.screenshot({ path: join(process.cwd(), 'public/assets/og.png') });
await browser.close();
console.log('public/assets/og.png written (1200x630)');
