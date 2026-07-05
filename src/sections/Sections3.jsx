/* Hongix website — Audience, WhyHongix, Testimonials. */
const { Card: Card3, Badge: Badge3, Avatar: Avatar3 } = window.HongixDesignSystem_ffb926;
const SH3 = window.SectionHead;

const AUDIENCE = [
  ['ph-rocket-launch', 'yellow', 'The "zero-to-one" launch',
    "You are building from scratch, but your pitch deck and website don't reflect your vision. You need investor-ready branding — without the $100k salary of a full-time hire."],
  ['ph-lightning', 'coral', 'The campaign engine',
    "You need a relentless stream of social content, ads, or landing pages to keep your audience engaged. You need a fast, reliable partner to keep the assets flowing."],
  ['ph-puzzle-piece', 'sky', 'The flexible extension',
    "You need execution, not headcount. Short-term cover or long-term partner, you need an expert ready to step in and hit the ground running."],
];

function Audience() {
  return (
    <section className="hx-section">
      <div className="hx-container">
        <SH3 align="center" eyebrow="Who it's for" title={<>Who Hongix is <span className="hx-serif">built for</span></>}
          maxw="none" sub="Good design drives growth. Getting it done shouldn't be a nightmare." />
        <div className="hx-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
          {AUDIENCE.map(([ic, tone, title, body], i) => {
            const tones = { yellow: 'var(--yellow-300)', coral: 'var(--coral-300)', sky: 'var(--sky-300)' };
            return (
              <Card3 key={i} pad="lg" hover>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, background: tones[tone], border: 'var(--bw) solid var(--line)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-xs)', fontSize: 28, marginBottom: 18 }}>
                  <i className={`ph-bold ${ic}`} />
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, letterSpacing: '-.02em', margin: '0 0 8px' }}>{title}</h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.55, color: 'var(--ink-soft)', margin: 0 }}>{body}</p>
              </Card3>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const WHY = [
  ['ph-wallet', 'Predictable pricing', 'No hourly billing, no surprises. Your design needs covered by one flat monthly fee.'],
  ['ph-infinity', 'Unlimited requests', 'Drop as many tasks into your queue as you want. Hongix tackles them one at a time, delivering fresh work every 48 hours.'],
  ['ph-pause-circle', 'The pause feature', 'No need to pay for idle time. Pause your 31-day billing cycle anytime and bank your remaining days for later.'],
  ['ph-arrows-out-cardinal', 'Complete flexibility', 'No long-term contracts, no retainer minimums. You are only committed for the exact month you pay for. Cancel anytime.'],
];

function WhyHongix() {
  return (
    <section className="hx-section" style={{ background: 'var(--ink)' }}>
      <div className="hx-container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
          <div style={{ marginBottom: 14, display: 'flex', justifyContent: 'center' }}><Badge3 tone="yellow" dot>Why Hongix</Badge3></div>
          <h2 style={{ fontSize: 'var(--text-3xl)', margin: 0, lineHeight: 1.12, textWrap: 'balance', maxWidth: 'none', marginLeft: 'auto', marginRight: 'auto', color: 'var(--cream)' }}>Fast execution. <span className="hx-serif" style={{ color: 'var(--yellow-400)' }}>Zero friction.</span></h2>
          <p style={{ fontSize: 'var(--text-md)', color: 'rgba(255,246,226,.72)', margin: '14px auto 0', maxWidth: 'none' }}>
            Say goodbye to messy spreadsheets, unpredictable invoices, and lagging timelines.
          </p>
        </div>
        <div className="hx-why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-5)' }}>
          {WHY.map(([ic, title, body], i) => (
            <div key={i} style={{ display: 'flex', gap: 18, background: 'var(--paper)', border: 'var(--bw) solid var(--line)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', padding: 'var(--space-6)' }}>
              <span style={{ flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, background: 'var(--yellow-300)', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', fontSize: 28 }}>
                <i className={`ph-bold ${ic}`} />
              </span>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 21, letterSpacing: '-.02em', margin: '2px 0 6px' }}>{title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--ink-soft)', margin: 0 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const QUOTES = [
  ['Hongix felt like having a senior designer on the team — without the overhead. Every request came back sharper than I imagined.', 'Mara Lin', 'Founder, Pluto Pay', 'sky'],
  ['Fresh work every couple of days kept our whole launch on schedule. The pause feature alone paid for itself.', 'Ravi Patel', 'CMO, Sundae', 'coral'],
];

function Testimonials() {
  return (
    <section className="hx-section" style={{ background: 'var(--cream-deep)' }}>
      <div className="hx-container">
        <SH3 align="center" eyebrow="In their words" title={<>Loved by the brands we <span className="hx-serif">build with</span></>} />
        <div className="hx-why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-5)' }}>
          {QUOTES.map(([quote, name, role, tone], i) => (
            <Card3 key={i} pad="lg" shadow="var(--shadow-md)">
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, lineHeight: 1.4, letterSpacing: '-.01em', margin: '0 0 20px' }}>&ldquo;{quote}&rdquo;</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Avatar3 name={name} tone={tone} size="md" />
                <div style={{ lineHeight: 1.25 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15 }}>{name}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{role}</div>
                </div>
              </div>
            </Card3>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Audience, WhyHongix, Testimonials });
