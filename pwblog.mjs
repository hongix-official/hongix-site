import { chromium } from 'playwright';
const OUT = '/private/tmp/claude-501/-Users-seongyeopjeong-Dev-personal/c450730d-8dfd-4b85-9504-1b078ec9ec31/scratchpad';
const B = 'https://blog.hongix.pages.dev';
const shots = [
  ['blog-index', `${B}/blog/`, 1280, 900],
  ['blog-post', `${B}/blog/design-partner-before-in-house/`, 1280, 900],
  ['blog-index-mobile', `${B}/blog/`, 390, 844],
];
const browser = await chromium.launch();
for (const [name, url, w, h] of shots) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 2, reducedMotion: 'reduce', isMobile: w < 800 });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'networkidle' }).catch(() => {});
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: true });
  console.log('shot', name, await page.evaluate(() => document.title));
  await ctx.close();
}
await browser.close();
