/* App entry — bundled by Vite.
   React / ReactDOM / the design-system are already on `window` (vendored classic
   scripts in index.html). The section files below assign their components to
   `window`; we import them in order for their side effects, then render. */
import '../styles.css';
import './sections/Sections1.jsx';
import './sections/Sections2.jsx';
import './sections/Sections3.jsx';
import './sections/Sections4.jsx';
import './sections/Work.jsx';
import './sections/CaseStudy.jsx';
import { WaitlistModal } from './waitlist.jsx';

const {
  Header, Hero, TrustBar, About, Steps, Services,
  Audience, WhyHongix, Testimonials, Pricing, Faq, BookCall, Footer, WorkShowcase, CaseStudyShowcase,
} = window;

// NOTE: TrustBar (stats) and Testimonials are intentionally not rendered yet —
// no track record / real testimonials to show. The components are kept in the
// section files; re-enable them below when we have real numbers and quotes.

function App() {
  const [waitlist, setWaitlist] = React.useState({ open: false, plan: null });

  const onNav = (id, arg) => {
    if (id === 'waitlist') {
      setWaitlist({ open: true, plan: arg || null });
      return;
    }
    const el = document.getElementById(id === 'top' ? 'top' : id);
    if (el) window.scrollTo({ top: window.scrollY + el.getBoundingClientRect().top - 80, behavior: 'smooth' });
  };

  return (
    <React.Fragment>
      <Header onNav={onNav} />
      <main>
        <Hero onNav={onNav} />
        {/* <TrustBar />  ← re-enable when we have real stats */}
        <WhyHongix />
        <Audience />
        <About />
        <Steps />
        <Services />
        <Pricing onNav={onNav} />
        {/* <Testimonials />  ← re-enable when we have real client testimonials */}
        <Faq />
        <BookCall />
      </main>
      <Footer onNav={onNav} />
      <WaitlistModal open={waitlist.open} plan={waitlist.plan} onClose={() => setWaitlist({ open: false, plan: null })} />
    </React.Fragment>
  );
}

/* The /work product-design page — same Header/Footer/modal as the landing,
   with cross-page nav (in-page anchors live on the landing). */
function WorkPage() {
  const [waitlist, setWaitlist] = React.useState({ open: false, plan: null });
  const onNav = (id, arg) => {
    if (id === 'waitlist') { setWaitlist({ open: true, plan: arg || null }); return; }
    window.location.href = '/#' + (id === 'top' ? 'top' : id);
  };
  return (
    <React.Fragment>
      <Header onNav={onNav} />
      <main>
        <WorkShowcase onNav={onNav} />
      </main>
      <Footer onNav={onNav} />
      <WaitlistModal open={waitlist.open} plan={waitlist.plan} onClose={() => setWaitlist({ open: false, plan: null })} />
    </React.Fragment>
  );
}

/* The /case-study route — shared Header/Footer/modal, case study body. */
function CaseStudyPage() {
  const [waitlist, setWaitlist] = React.useState({ open: false, plan: null });
  const onNav = (id, arg) => {
    if (id === 'waitlist') { setWaitlist({ open: true, plan: arg || null }); return; }
    window.location.href = '/#' + (id === 'top' ? 'top' : id);
  };
  return (
    <React.Fragment>
      <Header onNav={onNav} />
      <main>
        <CaseStudyShowcase onNav={onNav} />
      </main>
      <Footer onNav={onNav} />
      <WaitlistModal open={waitlist.open} plan={waitlist.plan} onClose={() => setWaitlist({ open: false, plan: null })} />
    </React.Fragment>
  );
}

const route = window.location.pathname.replace(/\/+$/, '') || '/';
ReactDOM.createRoot(document.getElementById('root')).render(
  route === '/work' ? <WorkPage /> : route === '/case-study' ? <CaseStudyPage /> : <App />
);
