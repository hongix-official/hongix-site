/* Hongix website — SectionHead, About, Steps, Services + Portfolio. */
const { Button: Btn2, Badge: Badge2, Card: Card2, Tag, StepCard, Avatar: Avatar2 } = window.HongixDesignSystem_ffb926;

function SectionHead({ eyebrow, title, sub, align = 'left', maxw = '32ch', size = 'lg', titleMaxw = '20ch' }) {
  const cen = align === 'center';
  return (
    <div style={{ textAlign: align, marginBottom: 'var(--space-7)' }}>
      {eyebrow && <div style={{ marginBottom: 14 }}><Badge2 tone="coral" dot>{eyebrow}</Badge2></div>}
      <h2 style={{ fontSize: size === 'sm' ? 'var(--text-3xl)' : 'var(--text-4xl)', margin: 0, lineHeight: 1.12, textWrap: 'balance', maxWidth: titleMaxw, marginLeft: cen ? 'auto' : undefined, marginRight: cen ? 'auto' : undefined }}>{title}</h2>
      {sub && <p style={{ fontSize: 'var(--text-md)', color: 'var(--ink-soft)', margin: '14px 0 0', maxWidth: maxw, marginLeft: cen ? 'auto' : 0, marginRight: cen ? 'auto' : 0 }}>{sub}</p>}
    </div>
  );
}

/* Animated Kanban illustration — one request, crafted step by step (loops) */
function AboutArt() {
  const Check = () => (
    <svg viewBox="0 0 20 20" style={{ width: '100%', height: '100%' }}><path d="M5 10.5 L9 14 L15 6.5" fill="none" stroke="var(--paper)" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" /></svg>
  );
  const Item = ({ n, label }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
      <span style={{ position: 'relative', width: 22, height: 22, flex: 'none', borderRadius: 999, border: '1.5px solid var(--line-strong)', background: 'var(--paper)' }}>
        <span className={'kb-c' + n} style={{ position: 'absolute', inset: -1.5, opacity: 0, borderRadius: 999, background: 'var(--mint-400)', border: '1.5px solid var(--mint-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 4 }}><Check /></span>
      </span>
      <span style={{ position: 'relative', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ink)', whiteSpace: 'nowrap' }}>
        {label}
        <span className={'kb-s' + n} style={{ position: 'absolute', left: 0, top: '54%', height: 1.5, width: '0%', background: 'var(--ink-faint)', borderRadius: 2 }} />
      </span>
    </div>
  );
  return (
    <div style={{ background: 'var(--grad-candy)', border: 'var(--bw) solid var(--line)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', aspectRatio: '4/5', position: 'relative', overflow: 'hidden' }}>
      <img src="/assets/spark.svg" alt="" style={{ position: 'absolute', top: '7%', right: '10%', width: 30, transform: 'rotate(8deg)', opacity: .9 }} />
      <span style={{ position: 'absolute', bottom: '9%', left: '11%', width: 14, height: 14, borderRadius: 999, background: 'var(--sky-400)', border: '1px solid var(--line)' }} />
      <span style={{ position: 'absolute', top: '11%', left: '14%', width: 11, height: 11, borderRadius: 999, background: 'var(--mint-400)', border: '1px solid var(--line)' }} />

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '85%', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>
          <svg viewBox="0 0 100 100" style={{ width: 18, height: 21 }} aria-hidden="true">
            <defs><linearGradient id="kbSpark" x1="0.1" y1="0" x2="0.9" y2="1"><stop offset="0" stopColor="#FFA23E" /><stop offset="1" stopColor="#EC5A1A" /></linearGradient></defs>
            <path d="M50 1 C53 38 60 47 94 50 C60 53 53 60 50 99 C47 60 40 53 6 50 C40 47 47 38 50 1 Z" fill="url(#kbSpark)" />
          </svg>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, letterSpacing: '-.01em', color: 'var(--ink)', whiteSpace: 'nowrap' }}>Crafting your request</span>
          <span className="kb-pulse" style={{ marginLeft: 'auto', width: 10, height: 10, borderRadius: 999, background: 'var(--mint-400)', flex: 'none' }} />
        </div>
        <div style={{ padding: 18, background: 'var(--paper-2)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>In progress</span>
          <div style={{ marginTop: 11, background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', padding: '16px 16px 18px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: 'var(--ink)', marginBottom: 15 }}>Landing page · v2</div>
            <div className="kb-work" style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              <Item n={1} label="Wireframe & layout" />
              <Item n={2} label="Visual design" />
              <Item n={3} label="Spacing & polish" />
              <Item n={4} label="Final review" />
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 5 }}>
                <div style={{ flex: 1, height: 7, borderRadius: 999, background: 'var(--cream-deep)', overflow: 'hidden' }}>
                  <div className="kb-prog" style={{ width: '0%', height: '100%', borderRadius: 999, background: 'var(--yellow-400)' }} />
                </div>
                <span className="kb-stamp" style={{ opacity: 0, display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 11, color: 'var(--mint-500)', whiteSpace: 'nowrap' }}>
                  <svg viewBox="0 0 20 20" style={{ width: 13, height: 13 }}><path d="M4 10.5 L8.5 15 L16 5.5" fill="none" stroke="var(--mint-500)" strokeWidth={2.8} strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Done
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="hx-section" style={{ background: 'var(--cream-deep)' }}>
      <div className="hx-container">
        <div className="hx-about-grid" style={{ display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: 'var(--space-8)', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <AboutArt />
          </div>
          <div>
            <SectionHead size="sm" eyebrow="Who is Hongix" title={<>Handled <span className="hx-serif hx-serif--accent">personally</span>, crafted with care.</>} />
            <p style={{ fontSize: 'var(--text-md)', color: 'var(--ink-soft)', maxWidth: '54ch' }}>
              Every project is thoughtfully designed by the founder, Gitta, who brings over 5 years of design experience across agency and client work. Hongix works with only a select few clients at a time, so your creative work gets the dedicated attention it deserves.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 22 }}>
              <Tag icon="ph-user-focus">One designer, fully invested</Tag>
              <Tag icon="ph-target">Focused scope</Tag>
              <Tag icon="ph-heart">Crafted with care</Tag>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Steps({ refEl }) {
  return (
    <section id="how" ref={refEl} className="hx-section">
      <div className="hx-container">
        <SectionHead align="center" eyebrow="How it works" title={<>How the <span className="hx-serif">subscription</span> works.</>}
          titleMaxw="none" maxw="none" sub="Get your design needs done with a simple, three-step system." />
        <div className="hx-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
          <StepCard step="1" icon="ph-kanban" iconTone="yellow" title="Subscribe & queue">
            Get access to your dedicated board. Add your requests and priorities with all the context you want — briefs, links, Loom videos. No meetings required.
          </StepCard>
          <StepCard step="2" icon="ph-paint-brush-broad" iconTone="coral" title="The work begins">
            One active request at a time. Big projects are broken into milestones with early alignment, so you see purposeful progress every 48 hours.
          </StepCard>
          <StepCard step="3" icon="ph-arrows-clockwise" iconTone="sky" title="Revise until perfect">
            Don't love the first draft? No problem. You get unlimited revisions until you are 100% happy with the result.
          </StepCard>
        </div>
      </div>
    </section>
  );
}

/* Services grouped around startup outcomes, not a flat checklist. */
const SERVICE_GROUPS = [
  ['Product', 'ph-cube', 'var(--sky-300)', [
    ['ph-app-window', 'SaaS UI'], ['ph-device-mobile', 'Mobile apps'], ['ph-chart-line', 'Dashboards'],
    ['ph-cursor-click', 'UX improvements'], ['ph-flow-arrow', 'User flows'], ['ph-squares-four', 'Design systems'],
  ]],
  ['Launch', 'ph-rocket-launch', 'var(--yellow-300)', [
    ['ph-browser', 'Landing pages'], ['ph-globe', 'Marketing websites'], ['ph-presentation-chart', 'Pitch decks'],
    ['ph-flag', 'Product launches'], ['ph-pen-nib', 'Brand identity'],
  ]],
  ['Growth', 'ph-trend-up', 'var(--coral-300)', [
    ['ph-megaphone', 'Campaign assets'], ['ph-palette', 'Marketing design'], ['ph-file-text', 'Sales collateral'],
    ['ph-cards', 'Presentation design'], ['ph-instagram-logo', 'Social assets'],
  ]],
];

const WORK = [
  ['Veridia', 'Brand identity & website', 'var(--grad-sunrise)', 'tall'],
  ['Pluto Pay', 'Fintech app UI/UX', 'var(--grad-sky)', 'short'],
  ['Marlow & Co', 'Logo & packaging', 'var(--grad-candy)', 'short'],
  ['Sundae', 'Campaign & ad assets', 'var(--grad-citrus)', 'tall'],
];

const PORTFOLIO_URL = 'https://www.figma.com';

/* Animated Figma workspace — a design being built, with multiplayer cursors (loops) */
function FigmaCanvas() {
  const cur = { position: 'absolute', top: 0, left: 0, display: 'flex', alignItems: 'flex-start', gap: 2, pointerEvents: 'none' };
  const Cursor = ({ cls, name, tone }) => (
    <div className={cls} style={cur}>
      <svg viewBox="0 0 24 24" style={{ width: 27, height: 27, flex: 'none', filter: 'drop-shadow(0 2px 3px rgba(0,0,0,.22))' }}>
        <path d="M5 2.4 L19.2 11.8 L12.3 12.7 L16.1 20.2 L13 21.6 L9.2 14 L5 17.8 Z" fill="var(--paper)" stroke="var(--ink)" strokeWidth={1.7} strokeLinejoin="round" />
      </svg>
      <span style={{ background: tone, color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 700, padding: '3px 8px', borderRadius: 6, marginTop: 13, whiteSpace: 'nowrap' }}>{name}</span>
    </div>
  );
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {/* artboard being designed */}
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '64%', minWidth: 230, background: 'var(--paper)', border: '1px solid rgba(28,22,6,.16)', borderRadius: 12, boxShadow: '0 18px 38px rgba(18,52,60,.22)', padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span style={{ position: 'absolute', top: -22, left: 2, fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.92)' }}>Hero / v3</span>
        <div className="fig-el1" style={{ height: 72, borderRadius: 8, background: 'var(--grad-sunrise)' }} />
        <div className="fig-el2" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ height: 10, width: '74%', borderRadius: 999, background: 'var(--cream-deep)' }} />
          <span style={{ height: 10, width: '52%', borderRadius: 999, background: 'var(--cream-deep)' }} />
        </div>
        <div className="fig-el3" style={{ display: 'flex', gap: 9, marginTop: 2 }}>
          <span style={{ height: 30, width: 92, borderRadius: 8, background: 'var(--coral-400)' }} />
          <span style={{ height: 30, width: 60, borderRadius: 8, background: 'var(--cream-deep)' }} />
        </div>
      </div>
      {/* multiplayer cursors */}
      <Cursor cls="fig-cur1" name="Gitta" tone="var(--coral-400)" />
      <Cursor cls="fig-cur2" name="You" tone="var(--lilac-400)" />
    </div>
  );
}

function Services({ refEl }) {
  return (
    <section id="work" ref={refEl} className="hx-section" style={{ background: 'var(--cream-deep)' }}>
      <div className="hx-container">
        <SectionHead size="sm" eyebrow="Services & portfolio" titleMaxw="none" maxw="none" title={<>What you can drop in your <span className="hx-serif">queue</span>.</>}
          sub="One subscription covers the full range of creative work your brand needs." />
        <div className="hx-svc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
          {SERVICE_GROUPS.map(([group, gic, tone, items], i) => (
            <div key={i}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ width: 40, height: 40, flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: tone, border: 'var(--bw) solid var(--line)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-xs)', fontSize: 20 }}><i className={`ph-bold ${gic}`} /></span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, letterSpacing: '-.02em' }}>{group}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {items.map(([ic, l], j) => <Tag key={j} icon={ic}>{l}</Tag>)}
              </div>
            </div>
          ))}
        </div>

        <div className="hx-portfolio" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', border: 'var(--bw) solid var(--line)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden', minHeight: 296, background: 'var(--paper)' }}>
          {/* LEFT — animated Figma workspace on a blue-green gradient */}
          <div style={{ position: 'relative', background: 'var(--grad-sky)', overflow: 'hidden', minHeight: 264, borderRight: 'var(--bw) solid var(--line)' }}>
            <FigmaCanvas />
          </div>
          {/* RIGHT — portfolio CTA */}
          <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14 }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-2xl)', margin: 0, letterSpacing: '-.02em', textWrap: 'balance' }}>Explore the portfolio</h4>
            <p style={{ fontSize: 'var(--text-md)', color: 'var(--ink-soft)', margin: 0, maxWidth: '34ch' }}>Let the works speak for themselves.</p>
            <div style={{ marginTop: 6 }}>
              <Btn2 href={PORTFOLIO_URL} target="_blank" rel="noopener" variant="primary" size="lg" iconRight="ph-arrow-up-right">See selected works</Btn2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SectionHead, About, Steps, Services });
