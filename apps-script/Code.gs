/**
 * Hongix waitlist — Google Apps Script Web App backend (field-tolerant).
 *
 * Appends each website submission as a row in the bound Google Sheet. Unlike the
 * old version, this does NOT hardcode which fields exist: it reads the sheet's
 * header row and maps whatever the form sends into the matching columns, creating
 * a new column automatically for any field it hasn't seen before.
 *
 *   → Add a new field to the website form later and you never touch this file
 *     or redeploy again — a new column just appears in the sheet.
 *
 * SETUP (one time): Google Sheet > Extensions > Apps Script, paste this file.
 *   Deploy > New deployment > Web app (Execute as: Me · Access: Anyone),
 *   copy the /exec URL into src/config.js (WAITLIST_ENDPOINT).
 * UPDATING later: Deploy > Manage deployments > (edit the existing web app) >
 *   Version: New version > Deploy. The URL stays the same, so no config change.
 */

const SHEET_NAME = 'Waitlist';

// Columns the sheet starts with (nice order). Any extra form field becomes its
// own column automatically, appended to the right.
const BASE_HEADER = ['Timestamp', 'Name', 'Email', 'Plan', 'Source'];

// Where new-signup notifications are emailed. '' turns email off.
const NOTIFY_EMAIL = 'hello@hongix.com';

// Discord webhook lives in Script Properties (secret), not in this public file:
//   Project Settings (⚙️) > Script Properties > DISCORD_WEBHOOK_URL = https://…
function getDiscordWebhookUrl_() {
  return PropertiesService.getScriptProperties().getProperty('DISCORD_WEBHOOK_URL') || '';
}

function doPost(e) {
  try {
    const data = collectParams_(e);
    appendRecord_(data);
    notify_(data);
    notifyDiscord_(data);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

// Merge everything the request carried: form-encoded params + an optional JSON body.
function collectParams_(e) {
  const out = {};
  const p = (e && e.parameter) || {};
  Object.keys(p).forEach((k) => { if (k) out[k] = p[k]; });
  try {
    if (e && e.postData && e.postData.contents && /json/i.test(e.postData.type || '')) {
      const j = JSON.parse(e.postData.contents);
      Object.keys(j).forEach((k) => { if (k) out[k] = j[k]; });
    }
  } catch (_) { /* not JSON — ignore */ }
  return out;
}

// Append one row, matching incoming keys to header columns by normalized name and
// auto-adding a column for any key the sheet hasn't seen yet.
function appendRecord_(data) {
  const sheet = getSheet_();
  const norm = (s) => String(s).trim().toLowerCase();

  const lastCol = sheet.getLastColumn();
  let header = lastCol ? sheet.getRange(1, 1, 1, lastCol).getValues()[0].map(String) : [];
  if (!header.length || !header.some((h) => h)) {
    header = BASE_HEADER.slice();
    sheet.getRange(1, 1, 1, header.length).setValues([header]);
    sheet.setFrozenRows(1);
  }
  let headerKeys = header.map(norm);

  // Register any brand-new fields as extra columns on the right.
  let grew = false;
  Object.keys(data).forEach((k) => {
    const nk = norm(k);
    if (nk && nk !== 'timestamp' && headerKeys.indexOf(nk) === -1) {
      header.push(titleCase_(k));
      headerKeys.push(nk);
      grew = true;
    }
  });
  if (grew) sheet.getRange(1, 1, 1, header.length).setValues([header]);

  const byKey = {};
  Object.keys(data).forEach((k) => { byKey[norm(k)] = data[k]; });
  const row = headerKeys.map((hk) =>
    hk === 'timestamp' ? new Date() : (hk in byKey ? String(byKey[hk]).slice(0, 1000) : ''));
  sheet.appendRow(row);
}

// Emails you on each signup, listing whatever fields came in. Best-effort.
function notify_(data) {
  if (!NOTIFY_EMAIL) return;
  try {
    const items = Object.keys(data)
      .map((k) => '<li><strong>' + escape_(titleCase_(k)) + ':</strong> ' + escape_(data[k]) + '</li>')
      .join('');
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: '🎉 New Hongix waitlist signup — ' + (data.name || data.email || 'new lead'),
      replyTo: data.email || undefined,
      htmlBody: '<p><strong>New waitlist signup</strong></p><ul>' + items + '</ul>',
    });
  } catch (err) { /* row already saved — email is best-effort */ }
}

// Pings Discord on each signup with whatever fields came in. Best-effort.
function notifyDiscord_(data) {
  const webhookUrl = getDiscordWebhookUrl_();
  if (!webhookUrl) return;
  try {
    const fields = Object.keys(data).map((k) => ({
      name: titleCase_(k), value: String(data[k] || '—').slice(0, 1024) || '—', inline: true,
    }));
    const payload = {
      username: 'Hongix Waitlist',
      embeds: [{ title: '🎉 New waitlist signup', color: 0x5865F2, fields: fields, timestamp: new Date().toISOString() }],
    };
    UrlFetchApp.fetch(webhookUrl, {
      method: 'post', contentType: 'application/json',
      payload: JSON.stringify(payload), muteHttpExceptions: true,
    });
  } catch (err) { /* row already saved — ping is best-effort */ }
}

// 'company' -> 'Company', 'company_size' -> 'Company Size'
function titleCase_(k) {
  return String(k).replace(/[_-]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function escape_(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Health check — open the /exec URL in a browser to verify (returns JSON).
function doGet() {
  getSheet_();
  return json_({ ok: true, service: 'hongix-waitlist' });
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(BASE_HEADER.slice());
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
