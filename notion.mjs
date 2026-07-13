/* Notion CMS source for the blog.
   Reads published rows from the Notion database and returns them in the same
   shape build-blog.mjs expects: { title, slug, date, excerpt, tags, author, html, text }.
   Used automatically when NOTION_TOKEN + NOTION_DB are set (see build-blog getPosts). */

const TOKEN = process.env.NOTION_TOKEN;
const DB = process.env.NOTION_DB;
const H = { Authorization: `Bearer ${TOKEN}`, 'Notion-Version': '2022-06-28', 'Content-Type': 'application/json' };

const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const slugify = (s) => String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

// property readers (tolerant of type differences, e.g. Tags as select or multi_select)
const txt = (p) => !p ? '' : (p[p.type] && Array.isArray(p[p.type]) ? p[p.type].map((t) => t.plain_text).join('') : '');
const pick = (props, name) => props[name] || props[name?.toLowerCase()];
const statusName = (p) => !p ? '' : p.type === 'status' ? (p.status?.name || '') : p.type === 'select' ? (p.select?.name || '') : '';
const tagNames = (p) => !p ? [] : p.type === 'multi_select' ? p.multi_select.map((s) => s.name) : p.type === 'select' ? (p.select ? [p.select.name] : []) : [];

async function api(url, opts) {
  const r = await fetch(url, { headers: H, ...opts });
  const j = await r.json();
  if (j.object === 'error') throw new Error(`Notion ${j.status} ${j.code}: ${j.message}`);
  return j;
}

// rich_text[] -> inline HTML (bold/italic/code/strikethrough/links)
function inline(rich = []) {
  return rich.map((t) => {
    let s = esc(t.plain_text);
    const a = t.annotations || {};
    if (a.code) s = `<code>${s}</code>`;
    if (a.bold) s = `<strong>${s}</strong>`;
    if (a.italic) s = `<em>${s}</em>`;
    if (a.strikethrough) s = `<s>${s}</s>`;
    if (t.href) s = `<a href="${esc(t.href)}" rel="noopener">${s}</a>`;
    return s;
  }).join('');
}

async function blocksToHtml(pageId) {
  const blocks = [];
  let cursor;
  do {
    const url = `https://api.notion.com/v1/blocks/${pageId}/children?page_size=100${cursor ? `&start_cursor=${cursor}` : ''}`;
    const j = await api(url);
    blocks.push(...j.results);
    cursor = j.has_more ? j.next_cursor : null;
  } while (cursor);

  const out = [];
  let listBuf = null, listTag = null;
  const flush = () => { if (listBuf) { out.push(`<${listTag}>${listBuf}</${listTag}>`); listBuf = null; listTag = null; } };

  for (const b of blocks) {
    const t = b.type;
    const d = b[t] || {};
    if (t === 'bulleted_list_item' || t === 'numbered_list_item') {
      const tag = t === 'bulleted_list_item' ? 'ul' : 'ol';
      if (listTag && listTag !== tag) flush();
      listTag = tag; listBuf = (listBuf || '') + `<li>${inline(d.rich_text)}</li>`;
      continue;
    }
    flush();
    if (t === 'paragraph') { const h = inline(d.rich_text); if (h.trim()) out.push(`<p>${h}</p>`); }
    else if (t === 'heading_1') out.push(`<h2>${inline(d.rich_text)}</h2>`);
    else if (t === 'heading_2') out.push(`<h2>${inline(d.rich_text)}</h2>`);
    else if (t === 'heading_3') out.push(`<h3>${inline(d.rich_text)}</h3>`);
    else if (t === 'quote') out.push(`<blockquote>${inline(d.rich_text)}</blockquote>`);
    else if (t === 'code') out.push(`<pre><code>${esc((d.rich_text || []).map((x) => x.plain_text).join(''))}</code></pre>`);
    else if (t === 'divider') out.push('<hr>');
    else if (t === 'to_do') out.push(`<p>${d.checked ? '☑' : '☐'} ${inline(d.rich_text)}</p>`);
    else if (t === 'callout') out.push(`<blockquote>${inline(d.rich_text)}</blockquote>`);
    else if (t === 'image') { const src = d.type === 'external' ? d.external.url : d.file?.url; if (src) out.push(`<img src="${esc(src)}" alt="${esc(inline(d.caption))}" loading="lazy">`); }
  }
  flush();
  return out.join('\n');
}

export async function fetchNotionPosts() {
  const posts = [];
  let cursor;
  do {
    const j = await api(`https://api.notion.com/v1/databases/${DB}/query`, {
      method: 'POST',
      body: JSON.stringify({ start_cursor: cursor, page_size: 100 }),
    });
    for (const row of j.results) {
      const pr = row.properties;
      const titleKey = Object.keys(pr).find((k) => pr[k].type === 'title');
      const title = txt(pr[titleKey]) || 'Untitled';
      // Live when Status is Published/Live/Done (default Notion status works as-is).
      const status = statusName(pick(pr, 'Status')).toLowerCase();
      if (!['published', 'live', 'done', 'complete'].includes(status)) continue;

      const html = await blocksToHtml(row.id);
      const plain = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      const excerptCol = txt(pick(pr, 'Excerpt'));
      posts.push({
        title,
        slug: txt(pick(pr, 'Slug')) || slugify(title),
        date: (pick(pr, 'Date')?.date?.start || row.created_time || '').slice(0, 10),
        excerpt: excerptCol || plain.slice(0, 180),
        tags: tagNames(pick(pr, 'Tags')),
        author: txt(pick(pr, 'Author')) || 'Hongix',
        html,
        text: plain,
      });
    }
    cursor = j.has_more ? j.next_cursor : null;
  } while (cursor);

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
