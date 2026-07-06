/* App entry — bundled by Vite.
   React / ReactDOM / the design-system are already on `window` (vendored classic
   scripts in index.html). The section files below assign their components to
   `window`; we import them in order for their side effects, then render. */
import '../styles.css';
import './sections/Sections1.jsx';
import './sections/Sections2.jsx';
import './sections/Sections3.jsx';
import './sections/Sections4.jsx';
import { WaitlistModal } from './waitlist.jsx';

const {
  Header, Hero, TrustBar, About, Steps, Services,
  Audience, WhyHongix, Testimonials, Pricing, Faq, BookCall, Footer,
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

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
