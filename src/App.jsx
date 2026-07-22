import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import CookieConsent from './components/CookieConsent';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import MarqueeBar from './components/MarqueeBar';
import PageHeaderGlow from './components/PageHeaderGlow';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import WorkPage from './pages/WorkPage';
import AIAssistantPage from './pages/AIAssistantPage';
import AIChatWidget from './components/AIChatWidget';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Preloader />
      <CustomCursor />
      <Navbar />
      <main style={{ position: 'relative' }}>
        <PageHeaderGlow />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ai-assistant" element={<AIAssistantPage />} />
        </Routes>
      </main>
      <MarqueeBar />
      <Footer />
      <CookieConsent />
      <AIChatWidget />
    </Router>
  );
}

export default App;
