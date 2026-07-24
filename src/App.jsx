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

// Sub-Service Pages
import WebDevServicePage from './pages/WebDevServicePage';
import GraphicDesignServicePage from './pages/GraphicDesignServicePage';
import MarketingServicePage from './pages/MarketingServicePage';
import AIAutomationServicePage from './pages/AIAutomationServicePage';
import BrandingServicePage from './pages/BrandingServicePage';
import UiUxServicePage from './pages/UiUxServicePage';
import VideoMotionServicePage from './pages/VideoMotionServicePage';
import SocialMediaCreativesServicePage from './pages/SocialMediaCreativesServicePage';

// Development Sub-Service Pages
import MobileAppsServicePage from './pages/MobileAppsServicePage';
import EcommerceServicePage from './pages/EcommerceServicePage';
import DesktopAppsServicePage from './pages/DesktopAppsServicePage';

// AI & Automation Sub-Service Pages
import AiAgentsServicePage from './pages/AiAgentsServicePage';
import WorkflowAutomationServicePage from './pages/WorkflowAutomationServicePage';
import DataPipelinesServicePage from './pages/DataPipelinesServicePage';
import AiIntegrationServicePage from './pages/AiIntegrationServicePage';

// Marketing Sub-Service Pages
import SocialMediaMarketingServicePage from './pages/SocialMediaMarketingServicePage';
import SeoGrowthServicePage from './pages/SeoGrowthServicePage';
import EmailCampaignsServicePage from './pages/EmailCampaignsServicePage';
import PaidAdsServicePage from './pages/PaidAdsServicePage';

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
          
          {/* Creative Services */}
          <Route path="/services/branding" element={<BrandingServicePage />} />
          <Route path="/services/ui-ux" element={<UiUxServicePage />} />
          <Route path="/services/video-motion" element={<VideoMotionServicePage />} />
          <Route path="/services/social-media-creatives" element={<SocialMediaCreativesServicePage />} />
          <Route path="/services/graphic-design" element={<GraphicDesignServicePage />} />

          {/* Development Services */}
          <Route path="/services/web-development" element={<WebDevServicePage />} />
          <Route path="/services/mobile-apps" element={<MobileAppsServicePage />} />
          <Route path="/services/ecommerce" element={<EcommerceServicePage />} />
          <Route path="/services/desktop-apps" element={<DesktopAppsServicePage />} />

          {/* Automations Services */}
          <Route path="/services/ai-agents" element={<AiAgentsServicePage />} />
          <Route path="/services/workflow-automation" element={<WorkflowAutomationServicePage />} />
          <Route path="/services/data-pipelines" element={<DataPipelinesServicePage />} />
          <Route path="/services/ai-integration" element={<AiIntegrationServicePage />} />
          <Route path="/services/ai-automation" element={<AIAutomationServicePage />} />

          {/* Marketing Services */}
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketingServicePage />} />
          <Route path="/services/seo-growth" element={<SeoGrowthServicePage />} />
          <Route path="/services/email-campaigns" element={<EmailCampaignsServicePage />} />
          <Route path="/services/paid-ads" element={<PaidAdsServicePage />} />
          <Route path="/services/marketing" element={<MarketingServicePage />} />
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
