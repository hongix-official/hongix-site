/**
 * Hongix waitlist — Google Apps Script Web App backend.
 *
 * Appends each waitlist submission from the website as a row in the bound
 * Google Sheet (Timestamp, Name, Email, Plan, Source).
 *
 * SETUP: see apps-script/README.md. In short:
 *   1. Create a Google Sheet, open Extensions > Apps Script, paste this file.
 *   2. Deploy > New deployment > Web app
 *        - Execute as: Me
 *        - Who has access: Anyone
 *   3. Copy the /exec URL and paste it into src/config.js (WAITLIST_ENDPOINT).
 */

const SHEET_NAME = 'Waitlist';

// Where new-signup notifications are emailed. Change to whatever inbox you check.
// (Leave empty '' to turn email notifications off.)
const NOTIFY_EMAIL = 'hello@hongix.com';

// Discord webhook for new-signup pings. The URL is a secret, so it is NOT stored
// in this (public) file — it lives in Script Properties:
//   Project Settings (⚙️) > Script Properties > Add script property
//     Property: DISCORD_WEBHOOK_URL
//     Value:    https://discord.com/api/webhooks/…  (Server Settings > Integrations
//               > Webhooks > New Webhook > Copy Webhook URL)
// Leave the property unset to turn Discord notifications off.
function getDiscordWebhookUrl_() {
  return PropertiesService.getScriptProperties().getProperty('DISCORD_WEBHOOK_URL') || '';
}

function doPost(e) {
  try {
    const p = (e && e.parameter) || {};
    const name = String(p.name || '').slice(0, 200);
    const email = String(p.email || '').slice(0, 200);
    const plan = String(p.plan || '').slice(0, 120);
    const source = String(p.source || '').slice(0, 120);

    getSheet_().appendRow([new Date(), name, email, plan, source]);
    notify_(name, email, plan, source);
    notifyDiscord_(name, email, plan, source);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

// Emails you on each signup. Wrapped so a mail hiccup never blocks the save.
function notify_(name, email, plan, source) {
  if (!NOTIFY_EMAIL) return;
  try {
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: '🎉 New Hongix waitlist signup — ' + (name || email),
      replyTo: email || undefined,
      htmlBody:
        '<p><strong>New waitlist signup</strong></p>' +
        '<ul>' +
        '<li><strong>Name:</strong> ' + escape_(name) + '</li>' +
        '<li><strong>Email:</strong> ' + escape_(email) + '</li>' +
        '<li><strong>Plan:</strong> ' + escape_(plan) + '</li>' +
        '<li><strong>Source:</strong> ' + escape_(source) + '</li>' +
        '</ul>',
    });
  } catch (err) {
    // Ignore — the row is already saved; email is best-effort.
  }
}

// Pings a Discord channel via webhook on each signup. Best-effort like the email:
// a network hiccup never blocks the save (the row is already written).
function notifyDiscord_(name, email, plan, source) {
  const webhookUrl = getDiscordWebhookUrl_();
  if (!webhookUrl) return;
  try {
    const payload = {
      username: 'Hongix Waitlist',
      embeds: [{
        title: '🎉 New waitlist signup',
        color: 0x5865F2,
        fields: [
          { name: 'Name', value: name || '—', inline: true },
          { name: 'Email', value: email || '—', inline: true },
          { name: 'Plan', value: plan || '—', inline: false },
          { name: 'Source', value: source || '—', inline: false },
        ],
        timestamp: new Date().toISOString(),
      }],
    };
    UrlFetchApp.fetch(webhookUrl, {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload),
      muteHttpExceptions: true,
    });
  } catch (err) {
    // Ignore — the row is already saved; the Discord ping is best-effort.
  }
}

function escape_(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Health check — lets you verify the deployment in a browser (should return JSON).
function doGet() {
  getSheet_();
  return json_({ ok: true, service: 'hongix-waitlist' });
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Plan', 'Source']);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
