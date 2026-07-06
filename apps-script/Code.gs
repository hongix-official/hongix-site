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

function doPost(e) {
  try {
    const p = (e && e.parameter) || {};
    const name = String(p.name || '').slice(0, 200);
    const email = String(p.email || '').slice(0, 200);
    const plan = String(p.plan || '').slice(0, 120);
    const source = String(p.source || '').slice(0, 120);

    getSheet_().appendRow([new Date(), name, email, plan, source]);
    notify_(name, email, plan, source);
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
