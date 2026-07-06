# Waitlist backend — Google Sheets + Apps Script

The waitlist form on the site POSTs each submission to a Google Apps Script
Web App, which appends a row to a Google Sheet. No server, no database, free.

## One-time setup (5 minutes)

1. **Create the sheet** — go to <https://sheet.new> and name it e.g. `Hongix Waitlist`.
2. **Open the script editor** — in that sheet: **Extensions → Apps Script**.
3. **Paste the code** — delete the default `myFunction` stub, paste the entire
   contents of [`Code.gs`](./Code.gs), and click **Save** (💾).
4. **Deploy as a Web App**:
   - Click **Deploy → New deployment**.
   - Click the gear ⚙️ → **Web app**.
   - **Description**: `Hongix waitlist`
   - **Execute as**: **Me**
   - **Who has access**: **Anyone**
   - Click **Deploy**, then **Authorize access** and approve the permissions
     (Google will warn it's an unverified app — that's expected for your own script).
5. **Copy the Web app URL** — it looks like
   `https://script.google.com/macros/s/AKfy…/exec` (ends in `/exec`).
6. **Wire it into the site** — open [`../src/config.js`](../src/config.js) and paste
   that URL as `WAITLIST_ENDPOINT`. Then rebuild (`npm run build`) and redeploy.

## Test it

- Open the `/exec` URL in a browser — you should see `{"ok":true,"service":"hongix-waitlist"}`.
- Submit the waitlist form on the site. A new row (Timestamp, Name, Email, Plan,
  Source) should appear in the **Waitlist** tab of your sheet within a second.

## Updating the code later

Edit `Code.gs` in the Apps Script editor, then **Deploy → Manage deployments →**
(pencil) **→ Version: New version → Deploy**. The `/exec` URL stays the same, so
you don't need to touch the site.

## Notes

- The site posts with `mode: 'no-cors'` (Apps Script can't send CORS headers), so
  the browser can't read the response — the **sheet is the source of truth**. The
  form shows a success state once the request is sent.
- **Email on each signup is built in.** `Code.gs` emails `NOTIFY_EMAIL` (top of the
  file, default `hello@hongix.com`) whenever a row is saved. Change it to whatever
  inbox you check, or set it to `''` to turn notifications off. The email is sent
  *from* the Google account that owns the sheet. Note Google's free MailApp quota
  is ~100 emails/day, which is plenty for a waitlist.
- **After editing `Code.gs` you must redeploy a new version** for changes to take
  effect (Deploy → Manage deployments → pencil → Version: New version → Deploy).
  The `/exec` URL stays the same, so the site needs no change.
