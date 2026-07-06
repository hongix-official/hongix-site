/* Waitlist modal — collects Name, Email, Plan and posts to the Google Apps
   Script web app (which appends a row to your Google Sheet).

   React is provided as a global (window.React) by the vendored UMD build,
   so we reference it bare, matching the design's section files. */
import { WAITLIST_ENDPOINT } from './config.js';

const PLANS = ['Design & No-code', 'Design & Webflow Dev', 'Not sure yet'];
const PLACEHOLDER = 'PASTE_YOUR_APPS_SCRIPT_EXEC_URL_HERE';

const field = {
  width: '100%', fontFamily: 'var(--font-body)', fontSize: 15.5, color: 'var(--ink)',
  background: 'var(--paper)', border: '1.5px solid var(--line-strong)', borderRadius: 'var(--radius-sm)',
  padding: '12px 14px', outline: 'none', boxSizing: 'border-box',
};
const label = {
  display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
  letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 7,
};

export function WaitlistModal({ open, plan, onClose }) {
  const { Button } = window.HongixDesignSystem_ffb926;
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [choice, setChoice] = React.useState(plan || PLANS[0]);
  const [status, setStatus] = React.useState('idle'); // idle | submitting | done | error
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    if (open) {
      setChoice(plan || PLANS[0]);
      setStatus('idle');
      setError('');
    }
  }, [open, plan]);

  // Close on Escape
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const canSubmit = name.trim().length > 1 && emailValid && status !== 'submitting';

  const submit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    if (!WAITLIST_ENDPOINT || WAITLIST_ENDPOINT === PLACEHOLDER) {
      setStatus('error');
      setError('Waitlist is not connected yet. Add your Apps Script URL in src/config.js.');
      return;
    }
    setStatus('submitting');
    setError('');
    try {
      const body = new URLSearchParams({
        name: name.trim(),
        email: email.trim(),
        plan: choice,
        source: 'hongix.com',
      });
      // Apps Script web apps don't return CORS headers, so we can't read the
      // response. no-cors lets the POST through without a preflight; the Sheet
      // is the source of truth. A rejected promise means a real network error.
      await fetch(WAITLIST_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body,
      });
      setStatus('done');
    } catch (err) {
      setStatus('error');
      setError('Something went wrong sending your details. Please try again or email hello@hongix.com.');
    }
  };

  return (
    <div onClick={onClose} role="dialog" aria-modal="true" aria-label="Join the waitlist"
      style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(28,22,6,.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div onClick={(e) => e.stopPropagation()}
        style={{ background: 'var(--paper)', border: 'var(--bw) solid var(--line)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', padding: 'var(--space-7)', maxWidth: 420, width: '100%', position: 'relative' }}>
        <button onClick={onClose} aria-label="Close"
          style={{ position: 'absolute', top: 16, right: 16, width: 34, height: 34, borderRadius: 999, border: '1px solid var(--line)', background: 'var(--paper)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-soft)' }}>
          <i className="ph-bold ph-x" />
        </button>

        {status === 'done' ? (
          <div style={{ textAlign: 'center', padding: '8px 4px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, background: 'var(--mint-300)', border: '1px solid var(--line)', borderRadius: 999, fontSize: 32, marginBottom: 14 }}><i className="ph-bold ph-check-circle" /></span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, margin: '0 0 8px' }}>You're on the list!</h3>
            <p style={{ color: 'var(--ink-soft)', margin: '0 0 20px' }}>
              Thanks{name.trim() ? `, ${name.trim().split(' ')[0]}` : ''} — we'll be in touch about <strong style={{ color: 'var(--ink)' }}>{choice}</strong> as founding-member spots open up.
            </p>
            <Button variant="primary" size="lg" full onClick={onClose}>Done</Button>
          </div>
        ) : (
          <>
            <img src="/assets/logomark.svg" alt="" style={{ width: 48, height: 48, marginBottom: 14 }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, margin: '0 0 6px' }}>Join the waitlist</h3>
            <p style={{ color: 'var(--ink-soft)', margin: '0 0 22px' }}>Founding-member spots are limited. Drop your details and we'll reach out as they open up.</p>

            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label htmlFor="wl-name" style={label}>Name</label>
                <input id="wl-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Cooper" autoComplete="name" style={field} />
              </div>
              <div>
                <label htmlFor="wl-email" style={label}>Email</label>
                <input id="wl-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@company.com" autoComplete="email" style={field} />
              </div>
              <div>
                <label htmlFor="wl-plan" style={label}>Which plan?</label>
                <select id="wl-plan" value={choice} onChange={(e) => setChoice(e.target.value)} style={{ ...field, appearance: 'none', cursor: 'pointer' }}>
                  {PLANS.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              {status === 'error' && (
                <p style={{ margin: 0, color: 'var(--danger)', fontSize: 14, fontWeight: 600 }}>{error}</p>
              )}

              <div style={{ marginTop: 2 }}>
                <Button type="submit" variant="primary" size="lg" full iconRight="ph-arrow-right" disabled={!canSubmit}>
                  {status === 'submitting' ? 'Sending…' : 'Join waitlist'}
                </Button>
              </div>
              <p style={{ margin: 0, textAlign: 'center', fontSize: 12.5, color: 'var(--ink-faint)' }}>
                No spam. We'll only email you about your spot.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
