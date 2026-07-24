/* Product-design showcase — the body of the /work page.
   Rendered by main.jsx inside the shared Header/Footer (same as the landing),
   so the top menu + footer are identical to the rest of the site. */
const { Button: BtnW } = window.HongixDesignSystem_ffb926;

const WORK_APPS = [
  {
    img: '/assets/work/logbill.png',
    alt: 'Logbill: track your time, it becomes your invoice and your tax set-aside.',
    eyebrow: 'Freelance finance · Web app',
    title: 'Logbill',
    think: 'Privacy-first by design: data stays on the device, no account needed. The real work was making tax feel calm, so a freelancer always knows what money is truly theirs.',
    chips: ['Free', 'Local-first', 'No sign-up', 'Designed by Hongix'],
    href: 'https://logbill.app', host: 'logbill.app',
  },
  {
    img: '/assets/work/reamly.png',
    alt: 'Reamly: get your files done. Free and private browser tools.',
    eyebrow: 'File utilities · Web app',
    title: 'Reamly',
    think: 'One promise repeated everywhere: nothing is uploaded. The design job was making 41 separate tools feel like one trustworthy product, not a menu of scripts.',
    chips: ['Free', '41 tools', 'Client-side', 'Designed by Hongix'],
    href: 'https://reamly.org', host: 'reamly.org',
  },
];

function WorkCard({ app }) {
  return (
    <article style={{ background: 'var(--paper)', border: 'var(--bw) solid var(--line)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-sm)' }}>
      <img src={app.img} alt={app.alt} loading="lazy" style={{ width: '100%', aspectRatio: '1200 / 631', objectFit: 'cover', display: 'block', borderBottom: '1px solid var(--line)', background: 'var(--cream-deep)' }} />
      <div style={{ padding: '26px 26px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: '#2f9469', verticalAlign: 'middle' }}><span className="hx-livedot" /> Live</span> · {app.eyebrow}
        </span>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-.03em', fontSize: '1.7rem', margin: '9px 0 0' }}>{app.title}</h3>
        <p style={{ fontSize: '.985rem', lineHeight: 1.6, color: 'var(--ink-soft)', margin: '12px 0 0' }}>{app.think}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '18px 0 0' }}>
          {app.chips.map((c, i) => {
            const by = i === app.chips.length - 1;
            return <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '5px 11px', borderRadius: 999, border: '1px solid var(--line)', background: by ? 'var(--ink)' : 'var(--cream)', color: by ? 'var(--cream)' : 'var(--ink-soft)' }}>{c}</span>;
          })}
        </div>
        <a href={app.href} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 'auto', paddingTop: 22, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '.98rem', color: 'var(--ink)', textDecoration: 'none', alignSelf: 'flex-start' }}>
          <span style={{ borderBottom: '2px solid var(--yellow-400)', paddingBottom: 2 }}>Try {app.host}</span> <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

function WorkShowcase({ onNav }) {
  // Set the page's own head metadata (captured by the prerender snapshot).
  React.useEffect(() => {
    const title = 'Product design · Selected work | Hongix Design Labs';
    const desc = 'Products designed and shipped end to end by Hongix. Logbill and Reamly: real product and UX design, live right now.';
    document.title = title;
    const upd = (sel, attr, val) => { const el = document.head.querySelector(sel); if (el) el.setAttribute(attr, val); };
    upd('meta[name="description"]', 'content', desc);
    upd('link[rel="canonical"]', 'href', 'https://hongix.com/work');
    upd('meta[property="og:url"]', 'content', 'https://hongix.com/work');
    upd('meta[property="og:title"]', 'content', title);
    upd('meta[property="og:description"]', 'content', desc);
    upd('meta[name="twitter:title"]', 'content', title);
  }, []);

  return (
    <section id="top" className="hx-section" style={{ paddingTop: 40 }}>
      <div className="hx-container">
        <a href="/#work" onClick={(e) => { e.preventDefault(); onNav('work'); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--ink-soft)', textDecoration: 'none', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, marginBottom: 26 }}>
          <span aria-hidden="true">←</span> Back
        </a>

        <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--coral-500)' }}>Product design</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.08, fontSize: 'clamp(1.9rem, 1.1rem + 3vw, 2.9rem)', margin: '14px 0 0', textWrap: 'balance' }}>
          Design, proven in <span className="hx-serif">products people use.</span>
        </h1>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--ink-soft)', margin: '18px 0 0', maxWidth: '44rem' }}>
          Products designed and shipped end to end by Hongix. Every one is live right now,<br />free to open, and needs no sign-up.
        </p>

        <div className="hx-work-grid" style={{ marginTop: 'var(--space-7)' }}>
          {WORK_APPS.map((app, i) => <WorkCard key={i} app={app} />)}
        </div>

        <div style={{ marginTop: 'var(--space-8)', background: 'var(--grad-sunrise)', border: 'var(--bw) solid var(--line)', borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-xl)', padding: 'var(--space-8)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-2xl)', letterSpacing: '-.02em', margin: 0, textWrap: 'balance' }}>Interested in working together?</h2>
          <p style={{ fontSize: 'var(--text-md)', color: 'var(--ink-soft)', margin: '12px auto 0', maxWidth: '42ch' }}>
            If a product like these is what your startup needs, let's talk. Tell me what you're building.
          </p>
          <div style={{ marginTop: 22, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <BtnW variant="primary" size="lg" iconLeft="ph-phone-call" onClick={() => onNav('call')}>Book a call</BtnW>
            <BtnW variant="ghost" size="lg" iconRight="ph-arrow-right" onClick={() => onNav('how')}>See how it works</BtnW>
          </div>
        </div>
      </div>
    </section>
  );
}

window.WorkShowcase = WorkShowcase;
