/* Hongix website — Pricing, Faq, BookCall (cal.com), Footer. */
const { Button: Btn4, Badge: Badge4, PriceCard, FaqItem, Input: Input4 } = window.HongixDesignSystem_ffb926;
const SH4 = window.SectionHead;

/* Card 1 — Landing Page Conversion Sprint: a credible paid entry engagement.
   Built from the design-system hx-price classes so it matches PriceCard visually,
   with a "Starting at" prefix + consultation note the PriceCard slots can't express. */
/* Shared eyebrow above each price — a full-width row so the big number below it
   lands on the same baseline across the Sprint and Partner cards. */
const PRICE_EYEBROW = { width: '100%', fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-soft)' };
const DESC_MINH = 66; // reserve ~3 lines so both card descriptions align

const SPRINT_FEATURES = [
  'Conversion-focused UX review',
  'Hero section redesign',
  'Messaging & CTA improvements',
  'Actionable implementation roadmap',
];

function SprintCard({ onNav }) {
  return (
    <div className="hx-price">
      <Badge4 tone="coral" dot>Best for first-time clients</Badge4>
      <div>
        <h3 className="hx-price__name">Landing Page Conversion Sprint</h3>
        <p className="hx-price__desc" style={{ minHeight: DESC_MINH }}>A focused, conversion-oriented review and redesign for startups that want clearer messaging, stronger calls to action, and a more effective landing page.</p>
      </div>
      <div className="hx-price__amount">
        <span style={PRICE_EYEBROW}>Starting at</span>
        <span className="hx-price__now">$400</span>
        <span className="hx-price__per">USD · one-time</span>
      </div>
      <hr className="hx-price__hr" />
      <ul className="hx-price__list" style={{ flex: '0 0 auto' }}>
        {SPRINT_FEATURES.map((f, i) => (
          <li key={i}><span className="hx-price__check"><i className="ph-bold ph-check" aria-hidden="true" /></span>{f}</li>
        ))}
      </ul>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '.02em', color: 'var(--ink-faint)', margin: '-4px 0 0' }}>Includes Figma file + Loom walkthrough</p>
      <div style={{ flex: '1 0 auto' }} />
      <Btn4 variant="primary" size="lg" full iconRight="ph-arrow-right" onClick={() => onNav('waitlist', 'Landing Page Conversion Sprint')}>Book a Sprint</Btn4>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.5, color: 'var(--ink-soft)', textAlign: 'center', margin: 0 }}>A practical first project before committing to an ongoing partnership. Final scope &amp; pricing confirmed after a short consultation.</p>
    </div>
  );
}

/* Card 2 — Hongix Partner: the premium ongoing offer. Built with the same hx-price
   structure as SprintCard (matching eyebrow + description height) so the two prices
   line up, plus the featured gradient to make it the visual anchor. */
const PARTNER_FEATURES = [
  'Product, launch & growth design',
  'Framer & Squarespace builds included',
  'Fresh work delivered every 48 hours',
  'Work directly with the founder',
  'Request as much as you need',
  'Pause or cancel anytime',
];

function PartnerCard({ onNav }) {
  return (
    <div className="hx-price hx-price--feature">
      <Badge4 tone="ink" dot>Founding Partner · 2 spots</Badge4>
      <div>
        <h3 className="hx-price__name">Hongix Partner</h3>
        <p className="hx-price__desc" style={{ minHeight: DESC_MINH }}>Your dedicated senior design partner for product, launch, and growth. <strong style={{ color: 'var(--ink)', fontWeight: 700 }}>No hiring, no management. Just senior design when you need it.</strong></p>
      </div>
      <div className="hx-price__amount">
        <span style={PRICE_EYEBROW}>Founding rate</span>
        <span className="hx-price__was">$3,999</span>
        <span className="hx-price__now">$2,999</span>
        <span className="hx-price__per">USD / month</span>
      </div>
      <hr className="hx-price__hr" />
      <ul className="hx-price__list">
        {PARTNER_FEATURES.map((f, i) => (
          <li key={i}><span className="hx-price__check"><i className="ph-bold ph-check" aria-hidden="true" /></span>{f}</li>
        ))}
      </ul>
      <Btn4 variant="ink" size="lg" full iconRight="ph-arrow-right" onClick={() => onNav('waitlist', 'Hongix Partner')}>Apply for a founding spot</Btn4>
      <p className="hx-price__note">Founding rate locked for 6 months · next 2 partners only</p>
    </div>
  );
}

/* Full-width add-on — an optional implementation layer that can attach to either
   a Sprint or a Partner engagement, so it sits beneath both primary cards. */
const ADDON_FEATURES = [
  'Webflow or WordPress builds',
  'Advanced CMS architecture & integrations',
  'Custom functionality & migrations',
  'Ongoing technical maintenance',
];

function AddOnCard() {
  const skyCheck = { flex: 'none', width: 24, height: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--sky-400)', borderRadius: 999, color: 'var(--paper)', fontSize: 14, marginTop: 1 };
  return (
    <div style={{ gridColumn: '1 / -1', background: 'var(--paper)', border: 'var(--bw) solid var(--line)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)', padding: 32, display: 'flex', flexDirection: 'column', gap: 22 }}>
      {/* Full-width ribbon spanning the whole card, content beneath it */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '.55em', width: '100%', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase', lineHeight: 1, padding: '9px 15px', border: 'var(--bw) solid var(--line)', borderRadius: 'var(--radius-pill)', background: 'var(--sky-300)', color: 'var(--ink)' }}>
        <span style={{ width: 8, height: 8, borderRadius: 999, border: 'var(--bw) solid var(--line)', background: 'var(--paper)', flex: 'none' }} />
        Optional add-on
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-7)', alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 340px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <h3 className="hx-price__name">Advanced Website Development</h3>
            <p className="hx-price__desc" style={{ marginTop: 8 }}>For projects that need Webflow, WordPress, advanced CMS architecture, custom functionality, migrations, or ongoing technical implementation.</p>
          </div>
          <div className="hx-price__amount">
            <span style={PRICE_EYEBROW}>Starting at</span>
            <span className="hx-price__now" style={{ fontSize: 40 }}>+$1,000</span>
            <span className="hx-price__per">USD · scoped per project</span>
          </div>
        </div>
        <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <ul className="hx-price__list" style={{ flex: '0 1 auto' }}>
            {ADDON_FEATURES.map((f, i) => (
              <li key={i}><span style={skyCheck}><i className="ph-bold ph-check" aria-hidden="true" /></span>{f}</li>
            ))}
          </ul>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.03em', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.6 }}>Available with either a Sprint or Partner engagement. Just mention your development needs when you apply or book a consultation.</p>
        </div>
      </div>
    </div>
  );
}

function Pricing({ refEl, onNav }) {
  return (
    <section id="pricing" ref={refEl} className="hx-section">
      <div className="hx-container">
        <SH4 align="center" eyebrow="Pricing" title={<>Two ways to <span className="hx-serif">work together</span>.</>}
          maxw="none" sub="Begin with a focused Landing Page Sprint, or bring on a dedicated design partner for ongoing product, launch, and growth. Custom web development can layer onto either." />
        <div className="hx-price-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', maxWidth: 980, margin: '0 auto', alignItems: 'stretch' }}>
          <SprintCard onNav={onNav} />
          <PartnerCard onNav={onNav} />
          <AddOnCard />
        </div>
        <p style={{ textAlign: 'center', fontSize: 13.5, color: 'var(--ink-soft)', margin: 'var(--space-5) auto 0', maxWidth: 560 }}>
          Submit as many requests as you like. We work one active request at a time, so every deliverable gets senior focus. After the founding program, partners move to the standard rate or a custom agreement.
        </p>
      </div>
    </section>
  );
}

const FAQS = [
  ["Why shouldn't I just hire a full-time designer?",
   "Hiring a senior in-house designer means salary, tools, onboarding, and downtime. Hongix gives you that same strategic eye on demand, so you only pay for the design support you actually need."],
  ["How many requests can I have in my queue?",
   "Queue as much as you like. We work one active request at a time so every deliverable gets senior-level focus, moving through your queue with fresh work on a 48-hour cadence."],
  ["How fast will my designs be delivered?",
   "Most standard tasks, like social assets or landing page mockups, are delivered within 48 hours. For larger builds like a full website, the project is divided into milestones so you still see fresh progress every couple of days."],
  ["How exactly does the pause feature work?",
   "Subscriptions run on a 31-day cycle. If you use 20 days and don't need more work that month, you can pause. The remaining 11 days are banked, ready to activate whenever your next project pops up. You never pay for idle time."],
  ["How do I submit my design briefs?",
   "Everything happens inside your dedicated Kanban board. Write a brief on a card, attach a Google Doc, drop in visual inspiration, or link a Loom video. As long as the details are on the board, the work is ready to begin."],
  ["Are there any creative services you do not cover?",
   "To keep speed and quality high, Hongix stays focused on core design. That means no 3D modeling, heavy document typesetting, complex custom app architecture, or non-design work like copywriting, strategy, and SEO research."],
  ["Why are Webflow and WordPress separate?",
   "Framer and Squarespace projects typically fit within our standard design workflow, so they're included in the Partner plan. Webflow and WordPress projects often require more advanced development, such as CMS architecture, integrations, migrations, or ongoing technical maintenance. For those cases we offer an optional development add-on, so you're only paying more when the work genuinely calls for it, not because of the platform you picked."],
  ["Do you offer refunds if I change my mind?",
   "Because of the intensive nature of the work and the immediate time invested, refunds are not offered. Instead, we keep refining each request until you are absolutely thrilled with the result."],
];

function Faq({ refEl }) {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" ref={refEl} className="hx-section">
      <div className="hx-container" style={{ maxWidth: 820 }}>
        <SH4 align="center" eyebrow="FAQ" title={<>Questions, <span className="hx-serif">answered</span>.</>} />
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
    <div className="hx-book-embed" style={{ background: 'var(--paper)', border: 'var(--bw) solid var(--line)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)', padding: 10 }}>
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
        <div className="hx-book-grid hx-book-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)', alignItems: 'center', background: 'var(--grad-sunrise)', border: 'var(--bw) solid var(--line)', borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-xl)', padding: 'var(--space-8)' }}>
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
  'Apply': 'waitlist',
};

/* Footer labels → external URLs (open in a new tab) */
const FOOT_EXTERNAL = {
  'Instagram': 'https://www.instagram.com/sparkinordinary/',
  'LinkedIn': 'https://www.linkedin.com/in/gittaputri/',
};

function Footer({ onNav }) {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--cream)', borderTop: 'var(--bw) solid var(--line)' }}>
      <div className="hx-container" style={{ padding: 'var(--space-9) var(--gutter) var(--space-6)' }}>
        <div className="hx-foot-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 'var(--space-7)', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <img src="/assets/hongix-logo-light.svg" alt="Hongix Designs" style={{ height: 40, width: 'auto', display: 'block' }} />
            </div>
            <p style={{ color: 'rgba(255,246,226,.7)', maxWidth: '34ch', marginTop: 14 }}>
              Your design support to launch, scale, and stand out, in one subscription.
            </p>
            <div style={{ marginTop: 20 }}>
              <Btn4 variant="primary" iconRight="ph-arrow-right" onClick={() => onNav('pricing')}>View pricing</Btn4>
            </div>
          </div>
          <FootCol title="Hongix" links={['How it works', 'Work', 'Pricing', 'FAQ', 'Blog']} onNav={onNav} />
          <FootCol title="Connect" links={['Book a call', 'Apply', 'hello@hongix.com', 'Instagram', 'LinkedIn']} onNav={onNav} />
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
    if (l === 'Blog' || l.includes('@') || FOOT_EXTERNAL[l]) return; // Blog/external = real link; mailto = native
    if (FOOT_NAV[l]) { e.preventDefault(); onNav(FOOT_NAV[l]); }
  };
  const hrefFor = (l) => (l === 'Blog' ? '/blog/' : l.includes('@') ? `mailto:${l}` : FOOT_EXTERNAL[l] || (FOOT_NAV[l] ? `#${FOOT_NAV[l]}` : '#'));
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,246,226,.55)', marginBottom: 14 }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map((l, i) => <li key={i}><a href={hrefFor(l)} onClick={(e) => handle(e, l)} {...(FOOT_EXTERNAL[l] ? { target: '_blank', rel: 'noopener noreferrer' } : {})} style={{ color: 'var(--cream)', textDecoration: 'none', fontSize: 15 }}>{l}</a></li>)}
      </ul>
    </div>
  );
}

Object.assign(window, { Pricing, Faq, BookCall, Footer });
