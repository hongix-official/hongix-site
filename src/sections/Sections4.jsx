/* Hongix website — Pricing, Faq, BookCall (cal.com), Footer. */
const { Button: Btn4, Badge: Badge4, PriceCard, FaqItem, Input: Input4 } = window.HongixDesignSystem_ffb926;
const SH4 = window.SectionHead;

/* Wraps a PriceCard so its CTA button opens the waitlist modal with the plan preselected.
   PriceCard has no onClick prop — the only interactive control inside it is the CTA button,
   so we delegate clicks from the wrapper. */
function PlanCard({ plan, onNav, ...props }) {
  // The CTA renders a native <button>; its clicks (mouse + keyboard) bubble here.
  const openWaitlist = (e) => {
    if (!e.target.closest('button, a')) return;
    e.preventDefault();
    onNav('waitlist', plan);
  };
  return (
    <div onClick={openWaitlist} style={{ height: '100%' }}>
      <PriceCard {...props} />
    </div>
  );
}

function Pricing({ refEl, onNav }) {
  return (
    <section id="pricing" ref={refEl} className="hx-section">
      <div className="hx-container">
        <SH4 align="center" eyebrow="Pricing" title={<>One subscription. <span className="hx-serif">Everything</span> you need.</>}
          maxw="none" sub="Pause or cancel anytime. No contracts, no retainer minimums." />
        <div className="hx-price-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-6)', maxWidth: 920, margin: '0 auto', alignItems: 'stretch' }}>
          <PlanCard
            plan="Design & No-code"
            onNav={onNav}
            name="Design & No-code"
            description="Perfect for ongoing marketing, branding, UI/UX, and simple no-code sites."
            badge="Founding Member Rate" was="$4,999" now="$3,999" per="USD / month"
            features={[
              'One active request at a time',
              'Graphic design, branding, social & UI/UX',
              'Framer & Squarespace site builds',
              'Source files delivered in Figma',
              'Unlimited revisions',
              'Pause or cancel anytime',
            ]}
            cta="Join waitlist"
          />
          <PlanCard
            plan="Design & Webflow Dev"
            onNav={onNav}
            featured
            name="Design & Webflow Dev"
            description="Perfect for businesses that need a fully custom website built and maintained."
            badge="Founding Member Rate" was="$5,999" now="$4,999" per="USD / month"
            features={[
              'Everything in Design & No-code, plus:',
              'Full custom Webflow development',
              'Complex website architectures & CMS',
              'Unlimited revisions',
              'Pause or cancel anytime',
            ]}
            cta="Claim your spot"
          />
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  ["Why shouldn't I just hire a full-time designer?",
   "Hiring a senior in-house designer means salary, tools, onboarding, and downtime. Hongix gives you that same strategic eye on demand, so you only pay for the design support you actually need."],
  ["Is there a limit to the number of requests I can make?",
   "Not at all. Load up your Kanban board with as many tasks as you need. Requests are systematically tackled one active task at a time until your entire queue is clear."],
  ["How fast will my designs be delivered?",
   "Most standard tasks — like social assets or landing page mockups — are delivered within 48 hours. For larger builds like a full website, the project is divided into milestones so you still see fresh progress every couple of days."],
  ["How exactly does the pause feature work?",
   "Subscriptions run on a 31-day cycle. If you use 20 days and don't need more work that month, you can pause. The remaining 11 days are banked, ready to activate whenever your next project pops up. You never pay for idle time."],
  ["How do I submit my design briefs?",
   "Everything happens inside your dedicated Kanban board. Write a brief on a card, attach a Google Doc, drop in visual inspiration, or link a Loom video. As long as the details are on the board, the work is ready to begin."],
  ["Are there any creative services you do not cover?",
   "To keep speed and quality high, Hongix stays focused on core design. That means no 3D modeling, heavy document typesetting, complex custom app architecture, or non-design work like copywriting, strategy, and SEO research."],
  ["Do you offer refunds if I change my mind?",
   "Because of the intensive nature of the work and the immediate time invested, refunds are not offered. However, the unlimited revision policy guarantees revisions continue until you are absolutely thrilled with your deliverables."],
];

function Faq({ refEl }) {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" ref={refEl} className="hx-section">
      <div className="hx-container" style={{ maxWidth: 820 }}>
        <SH4 align="center" eyebrow="FAQ" title={<>Questions, <span className="hx-serif">answered</span></>} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQS.map(([q, a], i) => (
            <FaqItem key={i} question={q} open={open === i} onToggle={(n) => setOpen(n ? i : -1)}>{a}</FaqItem>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Real cal.com inline embed — replaces the earlier mocked calendar.
   Books the 15-minute discovery call at cal.com/hongix-design-labs/15min. */
function CalEmbed() {
  React.useEffect(() => {
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal; let ar = arguments;
        if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); }
          else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", "discovery", { origin: "https://cal.com" });
    window.Cal.ns.discovery("inline", {
      elementOrSelector: "#hx-cal",
      config: { layout: "month_view" },
      calLink: "hongix-design-labs/15min",
    });
    window.Cal.ns.discovery("ui", {
      cssVarsPerTheme: { light: { "cal-brand": "#FFC02E" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <div style={{ background: 'var(--paper)', border: 'var(--bw) solid var(--line)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)', padding: 10 }}>
      {/* Capped height + internal scroll so the long slot list doesn't stretch the page.
          Shows the month calendar and the first times; the rest scrolls inside the card. */}
      <div id="hx-cal" style={{ width: '100%', height: 'min(620px, 82vh)', overflowY: 'auto', overflowX: 'hidden', borderRadius: 'var(--radius-lg)', background: 'var(--paper)', WebkitOverflowScrolling: 'touch' }} />
    </div>
  );
}

function BookCall({ refEl }) {
  return (
    <section id="call" ref={refEl} className="hx-section" style={{ background: 'var(--cream-deep)' }}>
      <div className="hx-container">
        <div className="hx-book-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)', alignItems: 'center', background: 'var(--grad-sunrise)', border: 'var(--bw) solid var(--line)', borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-xl)', padding: 'var(--space-8)' }}>
          <div>
            <Badge4 tone="ink" dot>15-minute discovery call</Badge4>
            <h2 style={{ fontSize: 'var(--text-3xl)', margin: '16px 0 0', textWrap: 'balance', maxWidth: '20ch' }}>Not sure where to start? <span className="hx-serif">Let's talk.</span></h2>
            <p style={{ fontSize: 'var(--text-md)', color: 'var(--ink-soft)', maxWidth: '40ch', margin: '14px 0 0' }}>
              Pick a time that works for you and book a quick call with Gitta to see if Hongix is the right fit. No pressure, no pitch, just a real conversation about your design needs.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '22px 0 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Walk through your current goals', 'See how the queue would work for you', 'Get a clear next step'].map((t, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15.5, fontWeight: 600 }}>
                  <span style={{ width: 24, height: 24, flex: 'none', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 999, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}><i className="ph-bold ph-check" /></span>{t}
                </li>
              ))}
            </ul>
          </div>
          <CalEmbed />
        </div>
      </div>
    </section>
  );
}

/* Footer nav labels → in-page section ids / actions */
const FOOT_NAV = {
  'Work': 'work',
  'How it works': 'how',
  'Pricing': 'pricing',
  'FAQ': 'faq',
  'Book a call': 'call',
  'Join waitlist': 'waitlist',
};

function Footer({ onNav }) {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--cream)', borderTop: 'var(--bw) solid var(--line)' }}>
      <div className="hx-container" style={{ padding: 'var(--space-9) var(--gutter) var(--space-6)' }}>
        <div className="hx-foot-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 'var(--space-7)', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 25, letterSpacing: '-.04em', color: 'var(--cream)', lineHeight: 1 }}>
                hongi
                <svg viewBox="0 0 100 100" style={{ width: 24, height: 26, margin: '0 -1px', overflow: 'visible' }} aria-label="x" role="img">
                  <defs><linearGradient id="hxSparkFooter" x1="0.1" y1="0" x2="0.9" y2="1"><stop offset="0" stopColor="#FFA23E" /><stop offset="1" stopColor="#EC5A1A" /></linearGradient></defs>
                  <path transform="rotate(45 50 50)" d="M50 13 C55 35 65 45 87 50 C65 55 55 65 50 87 C45 65 35 55 13 50 C35 45 45 35 50 13 Z" fill="url(#hxSparkFooter)" stroke="url(#hxSparkFooter)" strokeWidth="10" strokeLinejoin="round" />
                </svg>
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, letterSpacing: '.01em', color: 'rgba(255,246,226,.72)', whiteSpace: 'nowrap' }}>Design Labs</span>
            </div>
            <p style={{ color: 'rgba(255,246,226,.7)', maxWidth: '34ch', marginTop: 14 }}>
              Your design support to launch, scale, and stand out — in one subscription.
            </p>
            <div style={{ marginTop: 20 }}>
              <Btn4 variant="primary" iconRight="ph-arrow-right" onClick={() => onNav('pricing')}>View pricing</Btn4>
            </div>
          </div>
          <FootCol title="Hongix" links={['Work', 'How it works', 'Pricing', 'FAQ']} onNav={onNav} />
          <FootCol title="Connect" links={['Book a call', 'Join waitlist', 'hi@hongix.studio', 'Instagram']} onNav={onNav} />
        </div>
        <div style={{ borderTop: '1px solid rgba(255,246,226,.16)', marginTop: 'var(--space-7)', paddingTop: 'var(--space-5)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 13, color: 'rgba(255,246,226,.6)', fontFamily: 'var(--font-mono)' }}>
          <span>© 2026 HONGIX DESIGN LABS</span>
          <span style={{ display: 'flex', gap: 20 }}>
            <a href="#" style={{ color: 'inherit' }}>Terms &amp; conditions</a>
            <a href="#" style={{ color: 'inherit' }}>Privacy policy</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FootCol({ title, links, onNav }) {
  const handle = (e, l) => {
    if (l.includes('@')) return; // let mailto anchors work natively
    if (FOOT_NAV[l]) { e.preventDefault(); onNav(FOOT_NAV[l]); }
  };
  const hrefFor = (l) => (l.includes('@') ? `mailto:${l}` : FOOT_NAV[l] ? `#${FOOT_NAV[l]}` : '#');
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,246,226,.55)', marginBottom: 14 }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map((l, i) => <li key={i}><a href={hrefFor(l)} onClick={(e) => handle(e, l)} style={{ color: 'var(--cream)', textDecoration: 'none', fontSize: 15 }}>{l}</a></li>)}
      </ul>
    </div>
  );
}

Object.assign(window, { Pricing, Faq, BookCall, Footer });
