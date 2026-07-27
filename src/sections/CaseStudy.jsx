/* Case study page body — the /case-study route.
   Format: Snapshot → Before → Problem → Solution → Result → CTA.
   Rendered by main.jsx inside the shared Header/Footer (same as /work).
   Placeholder content for now; swap in a real project when one is ready. */
const { Button: BtnCS } = window.HongixDesignSystem_ffb926;

const CS_META = [['Client', '[ Startup name ]'], ['Sector', 'SaaS · Fintech'], ['Engagement', 'Landing Page Sprint'], ['Timeline', '2 weeks']];
const CS_MOVES = [
  ['Sharpened the message', 'A headline that names the audience and the outcome in one line.'],
  ['Rebuilt the hero', 'One clear promise, one primary action, proof placed right beside it.'],
  ['Guided the scroll', 'Each section answers the next objection, in order.'],
  ['Made the CTA obvious', 'A single, repeated call to action with zero competing links.'],
];
const CS_STATS = [['+38%', 'Trial signups', 'var(--yellow-300)'], ['2.1×', 'Demo bookings', 'var(--coral-300)'], ['−41%', 'Hero bounce rate', 'var(--mint-300)']];

function CSStep({ n, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '0 0 16px' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--coral-500)', whiteSpace: 'nowrap' }}>{n} · {children}</span>
      <span style={{ flex: 1, height: 1, background: 'var(--line)' }} />
    </div>
  );
}
function CSShot({ tag, bg = 'var(--cream-deep)' }) {
  return (
    <div style={{ aspectRatio: '16 / 10', background: bg, border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'flex-end', padding: 14, boxShadow: 'var(--shadow-sm)' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-faint)', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 999, padding: '4px 10px' }}>{tag}</span>
    </div>
  );
}

function CaseStudyShowcase({ onNav }) {
  React.useEffect(() => {
    const title = 'Case study · Landing Page Sprint | Hongix Design Labs';
    const desc = 'How a focused Landing Page Sprint turned unclear positioning into a landing experience that converts.';
    document.title = title;
    const upd = (sel, attr, val) => { const el = document.head.querySelector(sel); if (el) el.setAttribute(attr, val); };
    upd('meta[name="description"]', 'content', desc);
    upd('link[rel="canonical"]', 'href', 'https://hongix.com/case-study');
    upd('meta[property="og:url"]', 'content', 'https://hongix.com/case-study');
    upd('meta[property="og:title"]', 'content', title);
    upd('meta[property="og:description"]', 'content', desc);
    upd('meta[name="twitter:title"]', 'content', title);
  }, []);

  const bodyText = { fontSize: 'var(--text-md)', lineHeight: 1.7, color: 'var(--ink-soft)', margin: 0, maxWidth: '62ch' };
  return (
    <section id="top" className="hx-section" style={{ paddingTop: 40 }}>
      <div className="hx-container" style={{ maxWidth: 900 }}>
        <a href="/#work" onClick={(e) => { e.preventDefault(); onNav('work'); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--ink-soft)', textDecoration: 'none', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, marginBottom: 26 }}>
          <span aria-hidden="true">←</span> Back to work
        </a>

        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-faint)', border: '1px dashed var(--line)', borderRadius: 999, padding: '5px 12px', marginBottom: 20 }}>Sample · placeholder content</span>

        <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--coral-500)' }}>Case study</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.08, fontSize: 'clamp(1.9rem, 1.1rem + 3vw, 2.9rem)', margin: '14px 0 0', textWrap: 'balance' }}>
          A quiet launch, turned into <span className="hx-serif">a conversion engine.</span>
        </h1>
        <p style={{ ...bodyText, margin: '18px 0 0', fontSize: 'var(--text-lg)' }}>
          One focused engagement, from unclear positioning to a landing experience that turns visits into signups.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', margin: 'var(--space-6) 0 0', background: 'var(--paper)', border: 'var(--bw) solid var(--line)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
          {CS_META.map(([k, v], i) => (
            <div key={i} style={{ padding: '18px 20px', borderLeft: i ? '1px solid var(--line)' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>{k}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, letterSpacing: '-.01em', color: 'var(--ink)', marginTop: 6 }}>{v}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)', margin: 'var(--space-6) 0 0' }}>
          <CSShot tag="Before" />
          <CSShot tag="After" bg="var(--grad-sunrise)" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)', margin: 'var(--space-8) 0 0' }}>
          <div>
            <CSStep n="01">Before</CSStep>
            <p style={bodyText}>The old page led with a feature list and a vague headline. Visitors couldn't tell, in five seconds, who it was for or why it mattered, so most bounced before scrolling.</p>
          </div>
          <div>
            <CSStep n="02">The problem</CSStep>
            <p style={bodyText}>Traffic wasn't the issue; clarity was. The value proposition, the audience, and the single next action were all competing for attention, and none of them won.</p>
          </div>
          <div>
            <CSStep n="03">What we did</CSStep>
            <p style={{ ...bodyText, marginBottom: 18 }}>We rebuilt the page around one decision: what should this visitor understand, feel, and do first.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
              {CS_MOVES.map(([t, d], i) => (
                <div key={i} style={{ background: 'var(--paper)', border: 'var(--bw) solid var(--line)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', padding: 20 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, letterSpacing: '-.01em' }}>{t}</div>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--ink-soft)', margin: '8px 0 0' }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <CSStep n="04">The result</CSStep>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
              {CS_STATS.map(([n, l, c], i) => (
                <div key={i} style={{ background: 'var(--paper)', border: 'var(--bw) solid var(--line)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', padding: '26px 22px', position: 'relative', overflow: 'hidden' }}>
                  <span style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: c }} />
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, letterSpacing: '-.03em', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 14, color: 'var(--ink-soft)', marginTop: 8 }}>{l}</div>
                </div>
              ))}
            </div>
            <blockquote style={{ margin: 'var(--space-6) 0 0', padding: '22px 26px', background: 'var(--cream-deep)', border: 'var(--bw) solid var(--line)', borderRadius: 'var(--radius-lg)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 19, lineHeight: 1.5, letterSpacing: '-.01em', textWrap: 'balance' }}>
              "For the first time, people landed on our site and just got it. <span className="hx-serif">Signups started the same week.</span>"
              <footer style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginTop: 14 }}>[ Founder name ] · [ Company ]</footer>
            </blockquote>
          </div>
        </div>

        <div style={{ marginTop: 'var(--space-8)', background: 'var(--grad-sunrise)', border: 'var(--bw) solid var(--line)', borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-xl)', padding: 'var(--space-8)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-2xl)', letterSpacing: '-.02em', margin: 0, textWrap: 'balance' }}>Want results like this?</h2>
          <p style={{ fontSize: 'var(--text-md)', color: 'var(--ink-soft)', margin: '12px auto 0', maxWidth: '42ch' }}>Start with a focused Sprint, or bring us on as your ongoing design partner.</p>
          <div style={{ marginTop: 22, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <BtnCS variant="primary" size="lg" iconRight="ph-arrow-right" onClick={() => onNav('waitlist')}>Start your own</BtnCS>
            <BtnCS variant="ghost" size="lg" iconLeft="ph-phone-call" onClick={() => onNav('call')}>Book a call</BtnCS>
          </div>
        </div>
      </div>
    </section>
  );
}

window.CaseStudyShowcase = CaseStudyShowcase;
