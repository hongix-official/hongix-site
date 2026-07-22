/* Hongix website — Header, Hero, TrustBar. Exports to window. */
const { Button, Badge, Avatar, NavPill, Card } = window.HongixDesignSystem_ffb926;

/* Illustration placeholder — gradient panel where commissioned art goes */
function Illus({ grad = 'var(--grad-sunrise)', label = 'Illustration', h = 320, children, style }) {
  return (
    <div style={{
      position: 'relative', background: grad, border: 'var(--bw) solid var(--line)',
      borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', minHeight: h,
      display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', ...style,
    }}>
      {children || (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <img src="/assets/spark.svg" alt="" style={{ width: 64, height: 64 }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.1em',
            textTransform: 'uppercase', color: 'var(--ink)', background: 'var(--paper)',
            border: '1px solid var(--line)', borderRadius: 999, padding: '4px 12px' }}>{label}</span>
        </div>
      )}
    </div>
  );
}

function Shape({ kind = 'squircle', color = 'var(--sky-300)', size = 70, style }) {
  if (kind === 'sparkle') {
    return (
      <div style={{ position: 'absolute', width: size, height: size, filter: 'drop-shadow(0 4px 8px rgba(38,28,8,.16))', ...style }}>
        <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', display: 'block' }}>
          <path d="M50 13 C55 35 65 45 87 50 C65 55 55 65 50 87 C45 65 35 55 13 50 C35 45 45 35 50 13 Z" fill={color} stroke="var(--line)" strokeWidth="4" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  const radius = kind === 'pill' ? 999 : kind === 'blob' ? '60% 40% 55% 45% / 50% 55% 45% 50%' : 'var(--radius-lg)';
  return <div style={{ position: 'absolute', width: kind === 'pill' ? size * 1.5 : size, height: size,
    background: color, border: 'var(--bw) solid var(--line)', borderRadius: radius,
    boxShadow: 'var(--shadow-sm)', ...style }} />;
}

/* A single request row inside the hero queue-board mockup */
function ReqRow({ title, tag, tone, progress }) {
  return (
    <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-xs)', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: progress != null ? 9 : 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.2, whiteSpace: 'nowrap' }}>{title}</span>
        {tag && <span style={{ marginLeft: 'auto', flex: 'none' }}><Badge tone={tone}>{tag}</Badge></span>}
      </div>
      {progress != null && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ flex: 1, height: 6, borderRadius: 999, background: 'var(--cream-deep)', overflow: 'hidden' }}>
            <div style={{ width: progress + '%', height: '100%', background: 'var(--yellow-400)', borderRadius: 999 }} />
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--ink-faint)' }}>{progress}%</span>
        </div>
      )}
    </div>
  );
}

function QueueBoard() {
  const Label = ({ children }) => (
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 700, letterSpacing: '.1em',
      textTransform: 'uppercase', color: 'var(--ink-faint)' }}>{children}</span>
  );
  return (
    <div style={{ height: '100%', background: 'var(--paper)', borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--line)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '12px 14px', borderBottom: '1px solid var(--line)', background: 'var(--paper)' }}>
        <img src="/assets/logomark.svg" alt="" style={{ width: 22, height: 22 }} />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, letterSpacing: '-.01em', color: 'var(--ink)', whiteSpace: 'nowrap' }}>Your queue</span>
        <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 7 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--ink-faint)' }}>Gitta</span>
          <Avatar name="Gitta H" tone="coral" size="sm" />
        </span>
      </div>
      <div style={{ flex: 1, padding: '13px', display: 'flex', flexDirection: 'column', gap: 9, background: 'var(--paper-2)' }}>
        <Label>In progress · 1</Label>
        <ReqRow title="Brand identity refresh" tag="Designing" tone="yellow" progress={65} />
        <Label>Up next · 2</Label>
        <ReqRow title="Landing page redesign" tag="Website" tone="sky" />
        <ReqRow title="Instagram carousel · 6" tag="Social" tone="pink" />
      </div>
    </div>
  );
}

function Header({ onNav }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('[data-scroll-root]') || window;
    const onScroll = () => {
      const y = el === window ? window.scrollY : el.scrollTop;
      setScrolled(y > 24);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, padding: scrolled ? '10px 24px' : '18px 24px',
      transition: 'padding var(--dur-base) var(--ease-out)' }}>
      <div className="hx-container">
        <div style={{
          display: 'flex', alignItems: 'center', gap: 18, padding: scrolled ? '8px 12px 8px 16px' : '10px 14px 10px 18px',
          background: 'rgba(255,251,241,.82)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
          border: 'var(--bw) solid var(--line)', borderRadius: 'var(--radius-pill)',
          boxShadow: scrolled ? 'var(--shadow-sm)' : 'var(--shadow-md)', transition: 'all var(--dur-base) var(--ease-out)',
        }}>
          <a href="#top" onClick={(e) => { e.preventDefault(); onNav('top'); }} style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2, textDecoration: 'none' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, letterSpacing: '-.04em', color: 'var(--ink)', lineHeight: 1 }}>
              hongi
              <svg viewBox="0 0 100 100" style={{ width: 24, height: 26, margin: '0 -1px', overflow: 'visible' }} aria-label="x" role="img">
                <defs><linearGradient id="hxSparkHeader" x1="0.1" y1="0" x2="0.9" y2="1"><stop offset="0" stopColor="#FFA23E" /><stop offset="1" stopColor="#EC5A1A" /></linearGradient></defs>
                <path transform="rotate(45 50 50)" d="M50 13 C55 35 65 45 87 50 C65 55 55 65 50 87 C45 65 35 55 13 50 C35 45 45 35 50 13 Z" fill="url(#hxSparkHeader)" stroke="url(#hxSparkHeader)" strokeWidth="10" strokeLinejoin="round" />
              </svg>
            </span>
            <span style={{ display: 'block', width: '100%', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--ink-faint)', whiteSpace: 'nowrap', textAlign: 'justify', textAlignLast: 'justify', marginLeft: 1 }}>Design Labs</span>
          </a>
          <nav style={{ display: 'flex', gap: 4, marginLeft: 8 }} className="hx-hide-md">
            <NavPill href="#how" onClick={(e) => { e.preventDefault(); onNav('how'); }}>How it works</NavPill>
            <NavPill href="#work" onClick={(e) => { e.preventDefault(); onNav('work'); }}>Work</NavPill>
            <NavPill href="#pricing" onClick={(e) => { e.preventDefault(); onNav('pricing'); }}>Pricing</NavPill>
            <NavPill href="#faq" onClick={(e) => { e.preventDefault(); onNav('faq'); }}>FAQ</NavPill>
            <NavPill href="/blog/">Blog</NavPill>
          </nav>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
            <Button className="hx-hide-hdrcta" variant="ghost" size="sm" iconLeft="ph-sparkle" onClick={() => onNav('waitlist')}>Apply</Button>
            <Button variant="primary" size="sm" iconLeft="ph-phone-call" onClick={() => onNav('call')}>Book a call</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

/* Animated hero story: a new request lands on the board → cursor opens it → landing page delivered in 48h (loops) */
function HeroFlow() {
  const dot = (c) => ({ width: 10, height: 10, borderRadius: 999, background: c, border: '1px solid var(--line)' });
  const bar = (w, h, c) => ({ width: w, height: h, borderRadius: 999, background: c });
  const Label = ({ children }) => (
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>{children}</span>
  );
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'relative', width: 360, height: 410 }}>

        {/* Delivered landing-page mockup (scene 3) */}
        <div className="hx-flow-page" style={{ position: 'absolute', top: 54, left: 12, width: 336, height: 300, background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '11px 14px', borderBottom: '1px solid var(--line)', background: 'var(--paper-2)' }}>
            <span style={dot('var(--coral-400)')} /><span style={dot('var(--yellow-400)')} /><span style={dot('var(--mint-400)')} />
            <span style={{ marginLeft: 8, flex: 1, height: 11, borderRadius: 999, background: 'var(--cream-deep)' }} />
          </div>
          <div style={{ padding: 16 }}>
            <div style={{ background: 'var(--grad-sunrise)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--line)', padding: 17, display: 'flex', flexDirection: 'column', gap: 9 }}>
              <span style={bar(146, 12, 'rgba(255,255,255,.92)')} />
              <span style={bar(94, 9, 'rgba(255,255,255,.72)')} />
              <span style={{ ...bar(70, 22, 'var(--yellow-100)'), marginTop: 5 }} />
            </div>
            <div style={{ display: 'flex', gap: 9, marginTop: 14 }}>
              <span style={{ flex: 1, height: 50, borderRadius: 'var(--radius-xs)', background: 'var(--cream-deep)' }} />
              <span style={{ flex: 1, height: 50, borderRadius: 'var(--radius-xs)', background: 'var(--cream-deep)' }} />
              <span style={{ flex: 1, height: 50, borderRadius: 'var(--radius-xs)', background: 'var(--cream-deep)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: 13 }}>
              <span style={bar('85%', 8, 'var(--cream-deep)')} />
              <span style={bar('62%', 8, 'var(--cream-deep)')} />
            </div>
          </div>
        </div>

        {/* Delivered stamp */}
        <div className="hx-flow-stamp" style={{ position: 'absolute', top: 44, right: -2, background: 'var(--ink)', color: 'var(--cream)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, padding: '10px 19px', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-lg)', transform: 'rotate(-5deg)', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 8 }}>
          <i className="ph-bold ph-check-circle" style={{ fontSize: 20, color: 'var(--mint-300)' }} /> Delivered in 48h
        </div>

        {/* Kanban board — a new request lands (scene 1) */}
        <div className="hx-flow-board" style={{ position: 'absolute', top: 32, left: 10, width: 340, height: 336, opacity: 0, background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>
            <svg viewBox="0 0 100 100" style={{ width: 19, height: 22 }} aria-hidden="true">
              <defs><linearGradient id="hxSparkBoard" x1="0.1" y1="0" x2="0.9" y2="1"><stop offset="0" stopColor="#FFA23E" /><stop offset="1" stopColor="#EC5A1A" /></linearGradient></defs>
              <path d="M50 1 C53 38 60 47 94 50 C60 53 53 60 50 99 C47 60 40 53 6 50 C40 47 47 38 50 1 Z" fill="url(#hxSparkBoard)" />
            </svg>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, letterSpacing: '-.01em', color: 'var(--ink)', whiteSpace: 'nowrap' }}>Your queue</span>
            <span style={{ marginLeft: 'auto' }}><Avatar name="Gitta H" tone="coral" size="sm" /></span>
          </div>
          <div style={{ flex: 1, padding: 15, display: 'flex', flexDirection: 'column', gap: 11, background: 'var(--paper-2)' }}>
            <Label>New request</Label>
            <div className="hx-flow-newcard" style={{ background: 'var(--paper)', border: '1.5px solid var(--yellow-400)', borderRadius: 'var(--radius-md)', boxShadow: '0 0 0 3px rgba(255,192,46,.20)', padding: '13px 14px', display: 'flex', alignItems: 'center', gap: 11 }}>
              <span style={{ width: 38, height: 38, flex: 'none', background: 'var(--yellow-300)', border: '1px solid var(--line)', borderRadius: 'var(--radius-sm)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 19 }}><i className="ph-bold ph-browser" /></span>
              <div style={{ flex: 1, minWidth: 0, lineHeight: 1.3 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15.5, whiteSpace: 'nowrap' }}>Landing page</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-soft)', whiteSpace: 'nowrap' }}>Brief attached · just now</div>
              </div>
              <span style={{ flex: 'none', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 10, letterSpacing: '.06em', color: 'var(--cream)', background: 'var(--coral-400)', borderRadius: 999, padding: '3px 9px' }}>NEW</span>
            </div>
            <Label>In review</Label>
            <ReqRow title="Brand identity" tone="yellow" />
          </div>
        </div>

        {/* Cursor */}
        <i className="hx-flow-cursor ph-bold ph-cursor" style={{ position: 'absolute', top: 150, left: 250, opacity: 0, fontSize: 34, color: 'var(--ink)', filter: 'drop-shadow(0 2px 3px rgba(38,28,8,.3))' }} />
      </div>
    </div>
  );
}

function Hero({ onNav }) {
  return (
    <section id="top" style={{ position: 'relative', paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-9)', overflow: 'hidden' }}>
      {/* floating shapes — kept in corner negative space, behind content, never over text */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <Shape kind="sparkle" color="var(--yellow-300)" size={52} style={{ top: 8, right: '1.5%', transform: 'rotate(-10deg)', opacity: .95 }} />
      </div>
      <div className="hx-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hx-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 'var(--space-8)', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 1.5rem + 3.4vw, 4rem)', margin: 0, lineHeight: 1.04 }}>
              Your <span className="hx-serif">design&nbsp;partner</span> for founders &amp; growing brands
            </h1>
            <p style={{ margin: '22px 0 0' }}>
              <span className="hx-stamp" style={{
                display: 'inline-block', fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'var(--text-xl)', letterSpacing: '-.01em', lineHeight: 1.1,
                color: 'var(--cream)', background: 'var(--coral-400)',
                padding: '9px 20px 10px', borderRadius: 'var(--radius-sm)',
                transform: 'rotate(-2.5deg)', transformOrigin: 'left center',
                boxShadow: 'var(--shadow-md)',
              }}>In one subscription</span>
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 50 }}>
              <Button variant="ghost" size="lg" iconRight="ph-tag" onClick={() => onNav('pricing')}>View pricing</Button>
              <Button variant="primary" size="lg" iconRight="ph-arrow-right" onClick={() => onNav('how')}>See how it works</Button>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <Illus grad="var(--grad-sunrise)" h={468} label="Hero illustration">
              <HeroFlow />
            </Illus>
            <Shape kind="sparkle" color="var(--coral-400)" size={40} style={{ top: -14, right: 24, transform: 'rotate(14deg)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const stats = [
    ['5', '+', 'Years of design experience'],
    ['20', '+', 'Brands & clients supported'],
    ['80', '+', 'Projects successfully delivered'],
  ];
  return (
    <section style={{ background: 'var(--ink)', borderTop: 'var(--bw) solid var(--line)', borderBottom: 'var(--bw) solid var(--line)' }}>
      <div className="hx-container" style={{ padding: 'var(--space-6) var(--gutter)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }} className="hx-trust-grid">
          {stats.map(([v, s, l], i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-4xl)', letterSpacing: '-.03em', color: 'var(--cream)', lineHeight: 1 }}>
                {v}<span style={{ color: 'var(--yellow-400)' }}>{s}</span>
              </span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,246,226,.75)', maxWidth: '26ch' }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Illus, Shape, Header, Hero, TrustBar });
