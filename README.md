<div align="center">

  # ⚡ FOUROVR Agency
  ### *Smarter Digital Marketing. Better Results.*

  [![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![Llama 3.3](https://img.shields.io/badge/AI-Groq%20Llama%203.3-FF4500?style=for-the-badge&logo=openai&logoColor=white)](https://groq.com/)
  [![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://fourovr.vercel.app)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

  <p align="center">
    A state-of-the-art, high-converting digital agency platform engineered for <strong>Web Development</strong>, <strong>Graphic Design & Branding</strong>, <strong>Digital Marketing</strong>, and <strong>AI Automations</strong>.
  </p>

  [Explore Platform](#-key-features) •
  [Tech Stack](#-tech-stack) •
  [Local Setup](#-getting-started) •
  [Nova AI Advisor](#-nova--ai-strategy-advisor) •
  [Deployment](#-deployment)

</div>

---

## 🌟 Overview

**FOUROVR Agency** is a premier digital growth agency platform built to turn visitors into high-value clients. Featuring a dark-mode glassmorphic design system, an embedded AI strategy advisor (**Nova**), live dynamic pricing estimators, custom proposal builders, and an interactive 2-column invoice checkout modal.

---

## ✨ Key Features

### 🤖 Nova — AI Strategy Advisor
- **Pre-Chat Onboarding Form**: Required Name & Language selection (**English** vs **Urdu / Roman Urdu**) before unlocking chat.
- **Strict Language Locking**: Responds 100% in pure English when English is selected, or natural Roman Urdu when Urdu is selected.
- **12-Turn Context Memory**: Remembers client brand details, niche, and history across turns without repeating discovery questions.
- **Proactive Brand Discovery**: Asks about client business/brand first before discussing pricing.
- **Dual AI Engine**: Serverless `/api/chat` supporting **Groq (Llama-3.3 70B)** and **Gemini 2.0 Flash** REST APIs with client-side fallback.

### 🧾 Interactive Invoice & Checkout Modal
- **Instant Invoice ID**: Generates unique tracking numbers (e.g. `#FVR-84920`).
- **2-Column Layout**: Left column displays complete package deliverables, speed, and line items; right column contains client details form and grand total ($ USD).
- **FormSubmit AJAX Pipeline**: Directly emails detailed inquiry payload to `fourovr@gmail.com` with instant in-modal Thank-You confirmation view.

### 🎨 Multi-Category Pricing & Custom Package Builder
- **Category Tabs**: Filter packages by Graphic Design, Web Development, Digital Marketing, and AI Automations.
- **Interactive Custom Builder**: Live dynamic budget range calculator ($ USD) based on selected deliverables.

### 🌐 Sub-Services Architecture
- Dedicated full-page routes for:
  - 🌐 **[Web Development](/services/web-development)**
  - 🎨 **[Graphic Design & Branding](/services/graphic-design)**
  - 📈 **[Digital Marketing & Meta Ads](/services/marketing)**
  - 🤖 **[AI & Business Automations](/services/ai-automation)**

### ⚡ Viewport-Relative Animations & Performance
- Smooth viewport scroll physics (`CollideSection`), eliminating vertical gaps.
- 95+ Lighthouse speed scores built on Vite & React 19.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 19, Vite 8.1 |
| **Routing** | React Router DOM v7 |
| **Icons & UI Assets** | Lucide React, Custom Dark Glassmorphism CSS |
| **AI LLM Engine** | Groq Llama-3.3-70B Versatile, Gemini 2.0 Flash REST API |
| **Forms & Email Delivery** | FormSubmit AJAX Pipeline (`fourovr@gmail.com`) |
| **Deployment & Hosting** | Vercel Serverless Functions (`/api/chat.js`) |

---

## 📁 Project Structure

```
fourovr-agency/
├── api/
│   └── chat.js                   # Vercel Serverless Function (Groq/Gemini AI endpoint)
├── public/                       # Favicon & static public assets
├── src/
│   ├── assets/                   # Brand logos (Flogo.png, dp.png, logo.png)
│   ├── components/
│   │   ├── AIChatWidget.jsx      # Nova AI Chatbot widget with Onboarding Form & Fallbacks
│   │   ├── AIChatWidget.css      # Dark glassmorphic widget styling
│   │   ├── PricingSection.jsx    # Category Tabs, Custom Builder & Invoice Checkout Modal
│   │   ├── PricingSection.css    # 2-column modal & builder styles
│   │   ├── CollideSection.jsx    # Viewport-relative sticky scroll stage
│   │   ├── CollideSection.css    # Responsive scroll height styles
│   │   ├── CallToActionSection.jsx # CTA Banner with Flogo watermark
│   │   ├── Navbar.jsx            # Sticky navigation bar
│   │   └── Footer.jsx            # Footer links & social handles
│   ├── pages/
│   │   ├── HomePage.jsx          # Main landing page
│   │   ├── ServicesPage.jsx      # Services showcase
│   │   ├── WebDevServicePage.jsx # Sub-page for Web Development
│   │   ├── GraphicDesignServicePage.jsx # Sub-page for Graphic Design
│   │   ├── MarketingServicePage.jsx     # Sub-page for Digital Marketing
│   │   ├── AIAutomationServicePage.jsx  # Sub-page for AI Automations
│   │   ├── WorkPage.jsx          # Case studies & portfolio
│   │   ├── AboutPage.jsx         # Agency story & team
│   │   ├── PricingPage.jsx       # Pricing page wrapper
│   │   └── ContactPage.jsx       # Contact form & direct channels
│   ├── App.jsx                   # Route registration
│   ├── main.jsx                  # React DOM entry point
│   └── index.css                 # Global CSS variables & design tokens
├── package.json                  # Dependencies & build scripts
├── vite.config.js                # Vite build configuration
└── README.md                     # Platform documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/humzatayab/fourovr.git
   cd fourovr-agency
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   VITE_GROQ_API_KEY=gsk_your_groq_api_key_here
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

5. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🤖 Nova — AI Strategy Directives

Nova is programmed with strict operating rules:
1. **Brand Discovery First**: Asks about business niche/products FIRST before discussing rates.
2. **Pricing Rules**: Quote rates in **$ USD** only (never PKR/Rs). Hourly rates ($5/hr) and fixed timeframe promises are strictly prohibited.
3. **Ads Management Scale**: Percentage-based management fee (**17% down to 5%**) applies strictly to Paid Ads/Marketing.
4. **General Service Rates**: Instructs users to fill out the form for a custom invoice or visit **[View Packages & Pricing](/pricing)**.

---



<div align="center">
  <p>© 2026 <strong>FOUROVR Agency</strong>. All rights reserved.</p>
  <p>Built with ❤️ in Lahore, Pakistan.</p>
</div>
