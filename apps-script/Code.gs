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

function doPost(e) {
  try {
    const p = (e && e.parameter) || {};
    const name = String(p.name || '').slice(0, 200);
    const email = String(p.email || '').slice(0, 200);
    const plan = String(p.plan || '').slice(0, 120);
    const source = String(p.source || '').slice(0, 120);

    getSheet_().appendRow([new Date(), name, email, plan, source]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
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
