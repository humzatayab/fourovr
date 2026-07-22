import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bot, X, Send, MessageSquare, Sparkles, CheckCircle2, RefreshCw, SendHorizontal, PhoneCall, ExternalLink, FileText, LayoutGrid, DollarSign, User, Globe, ArrowRight } from 'lucide-react';
import './AIChatWidget.css';
import logodp from '../assets/dp.png';

const WHATSAPP_NUMBER = '923204108187';
const EMAIL_DESTINATION = 'fourovr@gmail.com';

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);

  // Pre-Chat Onboarding Form State
  const [isUserOnboarded, setIsUserOnboarded] = useState(false);
  const [onboardForm, setOnboardForm] = useState({
    name: '',
    language: 'en' // 'en' for English, 'ur' for Urdu / Roman Urdu
  });

  // 4-Field Lead Form state
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '$100 - $300 / mo (30k - 80k PKR)'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && isUserOnboarded) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen, showLeadForm, submitSuccess, isUserOnboarded]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Pre-Chat Onboarding Submit Handler
  const handleOnboardSubmit = (e) => {
    e.preventDefault();
    if (!onboardForm.name.trim()) return;

    const userName = onboardForm.name.trim();
    const lang = onboardForm.language;

    setIsUserOnboarded(true);

    const welcomeMsg = lang === 'en'
      ? {
          id: 1,
          sender: 'bot',
          text: `Hello **${userName}**! 👋 Welcome to FOUROVR Agency. I'm **Nova**, your AI Strategy Advisor.\n\nAwesome to meet you! What industry or niche is your business/company in, and what specific products or services do you sell?`,
          options: [
            '🎨 Social Media Graphics & Branding',
            '🌐 Custom Website / Web App',
            '🤖 AI Chatbots & Automations',
            '📈 SEO & Digital Marketing'
          ],
          timestamp: 'Just now'
        }
      : {
          id: 1,
          sender: 'bot',
          text: `Salam **${userName}**! 👋 FOUROVR Agency me khushamdeed. Main **Nova** hoon, aapki AI Strategy Advisor.\n\nZabardast! Aapki company/brand kis niche me hai aur aap exactly kya products/services sell karte hain?`,
          options: [
            '🎨 Social Media Graphics & Branding',
            '🌐 Custom Website / Web App',
            '🤖 AI Chatbots & Automations',
            '📈 SEO & Digital Marketing'
          ],
          timestamp: 'Just now'
        };

    setMessages([welcomeMsg]);
    setFormDetails((prev) => ({ ...prev, name: userName }));
  };

  const handleSendMessage = async (textToSend) => {
    const text = textToSend || inputText.trim();
    if (!text) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    // Auto-dismiss lead form on new user message unless user explicitly requests invoice/form
    const tLower = text.toLowerCase();
    const isClosingSignal = (
      tLower.includes('fill form') ||
      tLower.includes('send invoice') ||
      tLower.includes('official quotation') ||
      tLower.includes('ready to start') ||
      tLower.includes('book order') ||
      tLower.includes('fill quick quote')
    );

    if (isClosingSignal) {
      setShowLeadForm(true);
    } else {
      setShowLeadForm(false);
    }

    let aiReplyText = '';

    const groqKey = import.meta.env.VITE_GROQ_API_KEY || import.meta.env.GROQ_API_KEY;
    const geminiKey = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY;
    const isEnglishMode = onboardForm.language === 'en';

    const languageInstruction = isEnglishMode
      ? `STRICT DYNAMIC LANGUAGE MIRRORING (STRICT 100% ENGLISH ENFORCEMENT):
- The client explicitly selected ENGLISH as their preferred consultation language.
- You MUST respond 100% EXCLUSIVELY in pure, professional English!
- Absolutely ZERO Roman Urdu words, phrases, or greetings (NO "Zabardast", NO "Shukriya", NO "Ji", NO "Kyunke", NO "Aapka").
- Every single sentence must be 100% fluent, natural English!`
      : `STRICT DYNAMIC LANGUAGE MIRRORING (ROMAN URDU ENFORCEMENT):
- The client selected URDU / ROMAN URDU.
- You MUST respond in natural Roman Urdu!`;

    const dynamicSystemPrompt = `
You are Nova, Lead AI Strategy & Agency Advisor exclusively at FOUROVR Agency (Lahore, Pakistan).
WhatsApp: +92 320 4108187 | Email: fourovr@gmail.com | Portfolio URL: /work | Pricing URL: /pricing

CRITICAL OPERATING DIRECTIVES FOR NOVA:

1. EXCLUSIVELY FOUROVR BRANDING:
   - You work EXCLUSIVELY for FOUROVR Agency. Never mention or recommend third-party marketing or automation agencies. You advise clients on how FOUROVR will scale their business.

2. ${languageInstruction}

3. PROACTIVE BRAND & BUSINESS DISCOVERY FIRST (ASK FIRST BEFORE PRICING):
   - When a client starts chatting or says they want any service (e.g., "social media post banwani hai", "website banwani hai", "marketing krwani hai"):
     * FIRST ask 1 friendly direct question about their business/brand IN THEIR EXACT LANGUAGE:
       - English: "Awesome! What niche or industry is your business in, and what specific products or services do you sell?"
       - Roman Urdu: "Zabardast! Aapki company/brand kis niche me hai aur aap exactly kya products/services sell karte hain?"
   - DO NOT mention pricing, packages, quotes, forms, or links on this initial discovery turn unless the client explicitly asked for pricing!
   - Understand their business/product first so you can give smart, tailored advice.

4. PRICING & BUDGET SEQUENCING (ONLY WHEN CLIENT EXPLICITLY ASKS FOR RATES/PRICING):
   - NEVER quote hourly rates ($5/hr or $10/hr is STRICTLY PROHIBITED).
   - NEVER promise an exact completion timeframe ("done in 3 days" is PROHIBITED), because exact timelines are set by the Account Manager after reviewing project specs.
   - When asked about rates/pricing:
     a) For General Services (Graphics, Web Dev, Posts, Branding): Direct them to fill out the quick form below for an official customized invoice emailed based on their scope, or check transparent packages at **[View Packages & Pricing](/pricing)**.
     b) For Paid Marketing & Meta/Google Ads: FOUROVR charges a percentage of total ad budget:
        * Standard Ad Budget: **17% management fee** of total ad spend.
        * Budget around $10,000 / 1M PKR: **15% management fee**.
        * Budget around $50,000 / 5M PKR: **12% management fee**.
        * Enterprise Budget $100,000+ / 1 Crore PKR+: **8% management fee**.
        * Minimum fee floor: Never below **5%**.
     c) If they insist on knowing estimated ranges, quote a flexible budget range in **$ (USD)** (e.g. *$200 - $500 USD*). Never give a single fixed amount.

5. MEMORY & CONTEXT RETENTION (HIGHEST CONVERSATIONAL PRIORITY):
   - Review CHAT HISTORY before answering. If the client has ALREADY mentioned their brand name/niche (e.g. jewelry, clothing, real estate), NEVER ask for their brand/niche again! Reuse their details directly.

6. ANSWER "WHY FOUROVR?" WITH CONVICTION:
   - If user asks why to choose FOUROVR (e.g. "why FOUROVR?" or "main apse kiyun karwaon?"):
     * Pitch FOUROVR's real agency edge with confidence:
       - English: "Because at FOUROVR, we build high-ROAS motion reels, high-converting graphics, ultra-fast web platforms, and growth funnels engineered to maximize your return on ad spend."
       - Roman Urdu: "Kyunke FOUROVR me hum high-converting graphics, motion reels, ultra-fast web platforms aur full growth funnel build karte hain jo direct sales aur ROI deliver karta hai!"

7. SHORT & NATURAL MESSAGES (2-3 SENTENCES MAX):
   - Keep responses short, natural, and human-like (2-3 short sentences max).
   - Always quote rates ONLY in **$ (USD)** (never PKR/Rs.).
`;

    try {
      // 1. Try Groq API (gsk_...) first if key is present
      if (groqKey && groqKey.startsWith('gsk_')) {
        const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${groqKey.trim()}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
              { role: 'system', content: dynamicSystemPrompt },
              ...newMessages.slice(-12).map((m) => ({
                role: m.sender === 'user' ? 'user' : 'assistant',
                content: m.text
              }))
            ]
          })
        });

        const groqData = await groqRes.json();
        if (groqRes.ok && groqData.choices?.[0]?.message?.content) {
          aiReplyText = groqData.choices[0].message.content;
        }
      }

      // 2. Try Direct Gemini REST API if no Groq response yet
      if (!aiReplyText && geminiKey && !geminiKey.includes('YOUR_GEMINI_API_KEY')) {
        const chatContext = newMessages
          .slice(-12)
          .map((m) => `${m.sender.toUpperCase()}: ${m.text}`)
          .join('\n');

        const fullPrompt = `${dynamicSystemPrompt}\n\nCHAT HISTORY:\n${chatContext}\n\nNOVA:`;
        const modelsToTry = ['gemini-2.0-flash', 'gemini-2.0-flash-lite-preview', 'gemini-1.5-flash-8b'];

        for (const modelName of modelsToTry) {
          try {
            const response = await fetch(
              `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${geminiKey.trim()}`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  contents: [{ role: 'user', parts: [{ text: fullPrompt }] }]
                })
              }
            );

            const data = await response.json();
            if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
              aiReplyText = data.candidates[0].content.parts[0].text;
              break;
            }
          } catch (mErr) {
            console.warn(`Fetch error for ${modelName}:`, mErr);
          }
        }
      }

      // 3. Try Vercel Serverless Function /api/chat if no direct key
      if (!aiReplyText) {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            language: onboardForm.language,
            messages: newMessages.slice(-12).map((m) => ({
              role: m.sender === 'user' ? 'user' : 'assistant',
              content: m.text
            }))
          })
        });

        if (res.ok) {
          const data = await res.json();
          if (data.reply) {
            aiReplyText = data.reply;
          }
        }
      }
    } catch (err) {
      console.warn('AI fetch fallback:', err);
    }

    // 4. Fallback response generator based on selected language
    if (!aiReplyText) {
      aiReplyText = generateFallbackAIReply(text, onboardForm.language);
    }

    setIsTyping(false);

    const options = ['📩 Fill Quick Quote Form'];

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 1,
        sender: 'bot',
        text: aiReplyText,
        options: options,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const generateFallbackAIReply = (text, langPreference) => {
    const t = text.toLowerCase().trim();
    const isAskingPrice = (
      t.includes('charge') ||
      t.includes('rate') ||
      t.includes('price') ||
      t.includes('cost') ||
      t.includes('fee') ||
      t.includes('package') ||
      t.includes('budget') ||
      t.includes('kitne') ||
      t.includes('kitna')
    );

    if (langPreference === 'en') {
      // 🇬🇧 ENGLISH FALLBACK RESPONSES
      if (t.includes('why') || t.includes('kiyun') || t.includes('reason') || t.includes('hire') || t.includes('choose')) {
        return `Because at FOUROVR, we build high-ROAS motion reels, high-converting graphics, ultra-fast web platforms, and growth funnels engineered to maximize your ROI.`;
      } else if (isAskingPrice) {
        if (t.includes('marketing') || t.includes('ads') || t.includes('ad spend')) {
          return `For Meta & Google Ads campaigns, our ad management fee ranges from 17% down to 5% depending on your monthly ad spend. What is your estimated ad budget?`;
        } else {
          return `For custom project pricing, please fill out the quick quote form below for an official customized invoice emailed to you, or explore **[View Packages & Pricing](/pricing)**!`;
        }
      } else {
        return `Awesome! What niche or industry is your business in, and what specific products or services do you sell?`;
      }
    }

    // 🇵🇰 ROMAN URDU FALLBACK RESPONSES
    if (t.includes('why') || t.includes('kiyun') || t.includes('kyun') || t.includes('reason') || t.includes('karwaon')) {
      return `Kyunke FOUROVR me hum high-converting graphics, motion reels, ultra-fast web platforms aur full growth funnel build karte hain jo direct sales aur ROI deliver karta hai.`;
    } else if (isAskingPrice) {
      if (t.includes('marketing') || t.includes('ads') || t.includes('ad spend')) {
        return `Meta aur Google Ads ke liye hamari management fee total ad budget ka 17% se 5% hoti hai ad spend ke mutabiq. Aapka monthly estimated ad budget kitna hai?`;
      } else {
        return `Custom project pricing ke liye niche quick form fill karein taake hum aapko official invoice email kar sakein, ya **[View Packages & Pricing](/pricing)** check karein!`;
      }
    } else {
      return `Zabardast! Aapki company/brand kis niche me hai aur aap exactly kya products/services sell karte hain?`;
    }
  };

  const handleOptionClick = (option) => {
    if (option.includes('Quote Form') || option.includes('Inquiry')) {
      setShowLeadForm(true);
      handleSendMessage('📩 Fill Quick Quote Form');
    } else if (option.includes('WhatsApp')) {
      handleSendMessage('📲 Connect on WhatsApp');
    } else {
      handleSendMessage(option);
    }
  };

  const handleLeadFormSubmit = async (e) => {
    e.preventDefault();
    if (!formDetails.name || !formDetails.email || !formDetails.phone) return;

    setIsSubmitting(true);
    try {
      const chatHistoryText = messages
        .filter((m) => m.sender === 'user')
        .map((m) => m.text)
        .join(' | ');

      await fetch(`https://formsubmit.co/ajax/${EMAIL_DESTINATION}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `🔥 NEW HIGH-INTENT LEAD: ${formDetails.name} (${formDetails.budget})`,
          _template: 'table',
          _captcha: 'false',
          'Client Name': formDetails.name,
          'Selected Language': onboardForm.language === 'en' ? 'English' : 'Urdu / Roman Urdu',
          'Email Address': formDetails.email,
          'WhatsApp / Phone': formDetails.phone,
          'Estimated Budget': formDetails.budget,
          'Chat Context': chatHistoryText || 'Inquiry via AI Chatbot'
        })
      });

      setSubmitSuccess(true);
      setShowLeadForm(false);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: onboardForm.language === 'en'
            ? `🎉 **Thank you, ${formDetails.name}!** Your inquiry details have been sent to FOUROVR team (\`fourovr@gmail.com\`).\n\nOur Account Manager will contact you via WhatsApp / Email shortly with your official proposal and quotation!`
            : `🎉 **Shukriya, ${formDetails.name}!** Aapki details FOUROVR team ko (\`fourovr@gmail.com\`) par receive ho chuki hain!\n\nHumari team WhatsApp / Email par aap se contact karke official invoice aur proposal share karegi.`,
          timestamp: 'Just now'
        }
      ]);
    } catch (err) {
      setSubmitSuccess(true);
      setShowLeadForm(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormattedText = (text) => {
    return text.split('\n').map((line, i) => {
      let formattedLine = line;
      formattedLine = formattedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      formattedLine = formattedLine.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noreferrer" class="inchat-link">$1</a>');

      return (
        <span key={i}>
          <span dangerouslySetInnerHTML={{ __html: formattedLine }} />
          {i < text.split('\n').length - 1 && <br />}
        </span>
      );
    });
  };

  const resetChat = () => {
    setIsUserOnboarded(false);
    setMessages([]);
    setShowLeadForm(false);
    setSubmitSuccess(false);
    setOnboardForm({ name: '', language: 'en' });
  };

  return (
    <div className="ai-chat-widget-wrapper">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button className="chat-trigger-btn" onClick={toggleChat} aria-label="Open AI Strategy Advisor">
          <div className="trigger-icon-box">
            <img src={logodp} alt="FOUROVR Logo" className="trigger-avatar" />
            <span className="trigger-ping" />
            <span className="trigger-online-dot" />
          </div>
          <div className="trigger-text-wrapper">
            <span className="trigger-title">Nova Here ✨</span>
            <span className="trigger-sub">Lead AI Strategy Advisor</span>
          </div>
          {unreadCount > 0 && <span className="unread-badge">{unreadCount}</span>}
        </button>
      )}

      {/* Main Chat Modal Window */}
      {isOpen && (
        <div className="chat-modal-window">
          {/* Header Bar */}
          <div className="chat-header">
            <div className="header-info">
              <div className="header-avatar-box">
                <div className="header-avatar-ring">
                  <img src={logodp} alt="FOUROVR Logo" className="header-logo-img" />
                </div>
                <span className="online-indicator" />
              </div>
              <div>
                <h4 className="bot-name">Nova — AI Agency Advisor</h4>
                <span className="bot-status">● Online | Active AI Strategy</span>
              </div>
            </div>
            <div className="header-actions">
              <button onClick={resetChat} title="Reset Chat" className="header-btn">
                <RefreshCw size={15} />
              </button>
              <button onClick={toggleChat} title="Close Chat" className="header-btn">
                <X size={18} />
              </button>
            </div>
          </div>

          {/* PRE-CHAT ONBOARDING FORM SCREEN (If not yet onboarded) */}
          {!isUserOnboarded ? (
            <div className="onboarding-screen">
              <div className="onboarding-card">
                <div className="onboarding-header">
                  <div className="onboard-avatar">
                    <img src={logodp} alt="FOUROVR Logo" className="onboard-logo" />
                  </div>
                  <h4 className="onboard-title">Start AI Consultation</h4>
                  <p className="onboard-subtext">
                    Please enter your name and select your preferred language before chatting with Nova.
                  </p>
                </div>

                <form onSubmit={handleOnboardSubmit} className="onboard-form">
                  <div className="onboard-field-group">
                    <label className="onboard-label">YOUR NAME *</label>
                    <div className="onboard-input-wrapper">
                      <User size={16} className="onboard-input-icon" />
                      <input
                        type="text"
                        placeholder="e.g. John Doe / Ali Khan"
                        value={onboardForm.name}
                        onChange={(e) => setOnboardForm({ ...onboardForm, name: e.target.value })}
                        required
                        className="onboard-input"
                        autoFocus
                      />
                    </div>
                  </div>

                  <div className="onboard-field-group">
                    <label className="onboard-label">PREFERRED LANGUAGE *</label>
                    <div className="language-selector-row">
                      <button
                        type="button"
                        className={`lang-option-btn ${onboardForm.language === 'en' ? 'active' : ''}`}
                        onClick={() => setOnboardForm({ ...onboardForm, language: 'en' })}
                      >
                        <Globe size={15} />
                        <span>English</span>
                      </button>

                      <button
                        type="button"
                        className={`lang-option-btn ${onboardForm.language === 'ur' ? 'active' : ''}`}
                        onClick={() => setOnboardForm({ ...onboardForm, language: 'ur' })}
                      >
                        <Globe size={15} />
                        <span>Urdu / Roman Urdu</span>
                      </button>
                    </div>
                  </div>

                  <button type="submit" className="btn-hero-lime btn-onboard-submit" disabled={!onboardForm.name.trim()}>
                    <span>Start Consultation</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </div>
          ) : (
            /* UNLOCKED CHAT MESSAGES FEED */
            <>
              <div className="chat-messages-list">
                {messages.map((msg) => (
                  <div key={msg.id} className={`message-item ${msg.sender}`}>
                    <div className="message-bubble">
                      <div className="message-content">{renderFormattedText(msg.text)}</div>
                      <span className="message-time">{msg.timestamp}</span>
                    </div>

                    {/* Option Chips */}
                    {msg.options && (
                      <div className="options-container">
                        {msg.options.map((opt, idx) => (
                          <button key={idx} className="option-chip" onClick={() => handleOptionClick(opt)}>
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="message-item bot">
                    <div className="message-bubble typing-bubble">
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                    </div>
                  </div>
                )}

                {/* Embedded 4-Field Lead Form */}
                {showLeadForm && !submitSuccess && (
                  <div className="lead-card email-card animate-fade-in">
                    <div className="card-header">
                      <FileText size={18} className="text-lime" />
                      <h5>📩 Request Custom Quote & Proposal</h5>
                    </div>
                    <p>Fill in your details below and FOUROVR will contact you within working hours!</p>
                    <form onSubmit={handleLeadFormSubmit} className="inchat-form">
                      <div className="inchat-field-group">
                        <label className="inchat-label">YOUR NAME *</label>
                        <input
                          type="text"
                          placeholder="e.g. Ali Khan"
                          value={formDetails.name}
                          onChange={(e) => setFormDetails({ ...formDetails, name: e.target.value })}
                          required
                          className="inchat-input"
                        />
                      </div>

                      <div className="inchat-field-group">
                        <label className="inchat-label">EMAIL ADDRESS *</label>
                        <input
                          type="email"
                          placeholder="e.g. name@company.com"
                          value={formDetails.email}
                          onChange={(e) => setFormDetails({ ...formDetails, email: e.target.value })}
                          required
                          className="inchat-input"
                        />
                      </div>

                      <div className="inchat-field-group">
                        <label className="inchat-label">WHATSAPP / PHONE *</label>
                        <input
                          type="text"
                          placeholder="e.g. +92 300 1234567"
                          value={formDetails.phone}
                          onChange={(e) => setFormDetails({ ...formDetails, phone: e.target.value })}
                          required
                          className="inchat-input"
                        />
                      </div>

                      <div className="inchat-field-group">
                        <label className="inchat-label">ESTIMATED BUDGET *</label>
                        <select
                          value={formDetails.budget}
                          onChange={(e) => setFormDetails({ ...formDetails, budget: e.target.value })}
                          className="inchat-select"
                        >
                          <option value="$100 - $300 / mo (30k - 80k PKR)">$100 - $300 / mo (30k - 80k PKR)</option>
                          <option value="$300 - $800 / mo (80k - 200k PKR)">$300 - $800 / mo (80k - 200k PKR)</option>
                          <option value="$800+ / mo (200k+ PKR)">$800+ / mo (200k+ PKR)</option>
                          <option value="Custom Project Budget">Custom Project Budget</option>
                        </select>
                      </div>

                      <button type="submit" className="btn-inchat-submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Inquiry to fourovr@gmail.com'}
                      </button>
                    </form>
                  </div>
                )}

                {submitSuccess && (
                  <div className="lead-card success-card animate-fade-in">
                    <CheckCircle2 size={36} className="text-lime" />
                    <h5>Inquiry Received!</h5>
                    <p>FOUROVR team will contact you within working hours with complete detail & proposal.</p>
                  </div>
                )}

                <div ref={chatEndRef} />
              </div>

              {/* Footer Input Bar */}
              <div className="chat-footer">
                <input
                  type="text"
                  className="chat-input"
                  placeholder={onboardForm.language === 'en' ? "Ask Nova a question..." : "Ask Nova in Roman Urdu..."}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  className="chat-send-btn"
                  onClick={() => handleSendMessage()}
                  disabled={!inputText.trim()}
                  aria-label="Send message"
                >
                  <SendHorizontal size={18} />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
