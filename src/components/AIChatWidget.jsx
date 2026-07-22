import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bot, X, Send, MessageSquare, Sparkles, CheckCircle2, RefreshCw, SendHorizontal, PhoneCall, ExternalLink, FileText, LayoutGrid, DollarSign } from 'lucide-react';
import './AIChatWidget.css';
import logodp from '../assets/dp.png';

const WHATSAPP_NUMBER = '923204108187';
const EMAIL_DESTINATION = 'fourovr@gmail.com';

const SYSTEM_PROMPT = `
You are Nova, Lead AI Strategy & Sales Consultant at FOUROVR Agency (Lahore, Pakistan).
WhatsApp: +92 320 4108187 | Email: fourovr@gmail.com | Portfolio URL: /work

YOUR CRITICAL OPERATING RULES:
1. MATCH USER'S LANGUAGE EXACTLY:
   - If the user types in Roman Urdu (e.g. "muaj apna bradn goeek ky liay kuch social media post banwani hn rates kya honge"), reply in natural, fluent, highly convincing Roman Urdu!
   - If user types in English, Urdu script, Arabic, Spanish, French, Hindi, etc., match that exact language!

2. CONVINCING PRICING & RATES RESPONSES (NEVER REJECT OR PUSH AWAY):
   - When a client asks about rates, charges, pricing, or costs (e.g. "kaia charges hogy", "rates kya hain", "how much cost"):
     a) Explain warmly that pricing depends on package scope (e.g. daily posts, reels vs static graphics, page management).
     b) REASSURE THE CLIENT: "Aap tension bilkul na lein! Hum FOUROVR me aapke exact budget ke mutabiq best custom package create karenge jisme aapko top design quality aur complete account growth support milegi."
     c) Pitch our high conversion work and recommend checking our [View Portfolio](/work).
     d) Ask them to share their estimated budget or fill the quick inquiry form below so our team can send a custom discounted proposal.

3. CLOSING DEALS & INVOICE FORM PROMPT (VERY IMPORTANT):
   - Whenever the user agrees or indicates deal finalization (e.g., "perfect", "ok done", "thk hai", "final hai", "deal done", "yes let's start"):
     a) Respond with immense enthusiasm!
     b) Tell them: "Zabardast! Deal final! Aap niche diya gaya quick form fill kar ke submit kar dein (Name, Email, WhatsApp Phone, Budget) — Hamara Account Manager fowran aapko official Invoice, project proposal, aur onboarding details email kar dega!"
     c) Prompt them to complete the 4-field inquiry form right below.

4. CONVINCING SALES PERSONA:
   - Be enthusiastic, reassuring, professional, and convincing. Prove why FOUROVR is the best choice.

5. FORMATTING:
   - Use clean, modern Markdown (bolding key terms, short bullet points). Keep responses concise (2-3 short paragraphs max).
`;

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: "Hello! 👋 I'm **Nova**, FOUROVR's AI Strategy Advisor.\n\nTell me about your brand or project! What are you looking to build or scale today?",
    timestamp: 'Just now'
  },
  {
    id: 2,
    sender: 'bot',
    text: "Here are a few popular services we offer:",
    options: [
      '🎨 Social Media Graphics & Branding',
      '🌐 Custom Website / Web App',
      '🤖 AI Chatbots & Automations',
      '📈 SEO & Digital Marketing'
    ],
    timestamp: 'Just now'
  }
];

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);

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
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen, showLeadForm, submitSuccess]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
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

    // Auto-trigger lead form if pricing/quote/budget or closing signals mentioned
    const tLower = text.toLowerCase();
    if (
      tLower.includes('done') ||
      tLower.includes('perfect') ||
      tLower.includes('ok') ||
      tLower.includes('final') ||
      tLower.includes('deal') ||
      tLower.includes('agree') ||
      tLower.includes('chalo') ||
      tLower.includes('invoice') ||
      tLower.includes('charge') ||
      tLower.includes('rate') ||
      tLower.includes('price') ||
      tLower.includes('cost') ||
      tLower.includes('package') ||
      tLower.includes('budget') ||
      tLower.includes('inquiry') ||
      tLower.includes('quote')
    ) {
      setShowLeadForm(true);
    }

    let aiReplyText = '';

    const groqKey = import.meta.env.VITE_GROQ_API_KEY || import.meta.env.GROQ_API_KEY;
    const geminiKey = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY;

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
              { role: 'system', content: SYSTEM_PROMPT },
              ...newMessages.slice(-6).map((m) => ({
                role: m.sender === 'user' ? 'user' : 'assistant',
                content: m.text
              }))
            ]
          })
        });

        const groqData = await groqRes.json();
        if (groqRes.ok && groqData.choices?.[0]?.message?.content) {
          aiReplyText = groqData.choices[0].message.content;
        } else if (groqData.error) {
          console.warn('Groq API Error:', groqData.error.message);
        }
      }

      // 2. Try Direct Gemini REST API if no Groq response yet
      if (!aiReplyText && geminiKey && !geminiKey.includes('YOUR_GEMINI_API_KEY')) {
        const chatContext = newMessages
          .slice(-6)
          .map((m) => `${m.sender.toUpperCase()}: ${m.text}`)
          .join('\n');

        const fullPrompt = `${SYSTEM_PROMPT}\n\nCHAT HISTORY:\n${chatContext}\n\nNOVA:`;

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
            } else if (response.status === 429) {
              aiReplyText = `⚠️ **Gemini API Key Quota Exceeded (429)**\n\nAapki Gemini API key ka daily free quota poora ho gaya hai. Aap [Google AI Studio (aistudio.google.com/app/apikey)](https://aistudio.google.com/app/apikey) se new 100% Free API Key banayein aur \`.env\` me update karein!`;
              break;
            } else if (data.error && data.error.message && !data.error.message.includes('not found')) {
              console.warn(`Gemini Error on ${modelName}:`, data.error.message);
            }
          } catch (mErr) {
            console.warn(`Fetch error for ${modelName}:`, mErr);
          }
        }
      }

      // 2. Try Vercel Serverless Function /api/chat if no direct key
      if (!aiReplyText) {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: newMessages.slice(-6).map((m) => ({
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
      console.warn('Gemini API fetch fallback:', err);
    }

    // 3. Fallback response generator if API key is not yet set up
    if (!aiReplyText) {
      aiReplyText = generateFallbackAIReply(text);
    }

    setIsTyping(false);

    const options = ['📩 Fill Quick Quote Form', '📁 View Portfolio (/work)', '📲 Chat on WhatsApp'];

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

  const generateFallbackAIReply = (text) => {
    const t = text.toLowerCase();

    if (t.includes('charge') || t.includes('rate') || t.includes('price') || t.includes('cost') || t.includes('budget') || t.includes('post') || t.includes('social') || t.includes('brand') || t.includes('graphic')) {
      return `Bohot shukriya inquiry ke liye! Social media management aur daily graphics/branding ke liye hum FOUROVR me dedicated graphic designer & content strategist assign karte hain jo aapke brand ke liye high-converting graphics, reels aur captions design karta hai.

**Charges ke baare me**: Hamare monthly packages customized hote hain (e.g. 15 posts/month ya 30 daily posts). 

Aap tension **bilkul na lein!** Hum FOUROVR me aapke exact budget ke mutabiq best package create karenge jisme aapko maximum reach aur top design quality milegi.

Aap hamare recent design projects check kar sakte hain hamare [View Portfolio](/work) page par!

Niche diya gaya chota sa form fill kar dein (Name, Email, Phone, Budget) — FOUROVR ki team working hours me aapko exact custom discounted proposal send kar degi!`;
    } else if (t.includes('website') || t.includes('web') || t.includes('app') || t.includes('dev')) {
      return `Zabardast! Hum React & Next.js par ultra-fast web platforms engineer karte hain jo 95+ Lighthouse speed score aur high conversion rates guarantee karti hain.

Rates aur package timeline aapke exact requirements par depend karte hain, lekin hum aapke budget ke mutabiq flexible custom plans bhi offer karte hain.

Aap hamare completed web systems dekh sakte hain hamare [View Portfolio](/work) par! Niche form fill kar dein instant quote ke liye.`;
    } else {
      return `Shukriya! FOUROVR me hum high-converting graphic designs, custom web platforms, SEO, aur AI automations design karte hain.

Aap tension na lein, hum aapke exact brand goals aur budget ke mutabiq complete growth solution offer karenge.

Aap hamara work check karne ke liye [View Portfolio](/work) par ja sakte hain, ya niche 4-field form fill kar ke instant proposal request kar sakte hain!`;
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
          text: "🎉 **Shukriya!** Aapki details aur project budget FOUROVR team ko (`fourovr@gmail.com`) par receive ho chuki hain!\n\nHumari senior team working hours me aap se WhatsApp / Email par direct contact karke customized proposal aur exact discounted rates share karegi. Thank you!",
          timestamp: 'Just now'
        }
      ]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetChat = () => {
    setMessages(INITIAL_MESSAGES);
    setShowLeadForm(false);
    setSubmitSuccess(false);
    setFormDetails({ name: '', email: '', phone: '', budget: '$100 - $300 / mo (30k - 80k PKR)' });
  };

  const renderFormattedText = (content) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const lines = content.split('\n');

    return lines.map((line, lIdx) => {
      let parts = [];
      let lastIdx = 0;
      let match;

      while ((match = linkRegex.exec(line)) !== null) {
        if (match.index > lastIdx) {
          parts.push(line.substring(lastIdx, match.index));
        }
        const label = match[1];
        const url = match[2];

        if (url.startsWith('/')) {
          parts.push(
            <Link key={match.index} to={url} className="chat-inline-link" onClick={() => setIsOpen(false)}>
              <LayoutGrid size={13} style={{ display: 'inline', marginRight: '4px' }} />
              {label}
            </Link>
          );
        } else {
          parts.push(
            <a key={match.index} href={url} target="_blank" rel="noreferrer" className="chat-inline-link">
              <ExternalLink size={13} style={{ display: 'inline', marginRight: '4px' }} />
              {label}
            </a>
          );
        }
        lastIdx = linkRegex.lastIndex;
      }

      if (lastIdx < line.length) {
        parts.push(line.substring(lastIdx));
      }

      const parsedContent = parts.map((part, pIdx) => {
        if (typeof part !== 'string') return part;
        const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
        return boldParts.map((bPart, bIdx) => {
          if (bPart.startsWith('**') && bPart.endsWith('**')) {
            return <strong key={bIdx}>{bPart.slice(2, -2)}</strong>;
          }
          return bPart;
        });
      });

      return (
        <p key={lIdx} style={{ margin: '0 0 6px 0' }}>
          {parsedContent}
        </p>
      );
    });
  };

  return (
    <div className="ai-chat-widget-container">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button className="ai-chat-trigger-btn" onClick={toggleChat} aria-label="Open AI Assistant">
          <div className="trigger-pulse" />
          <div className="trigger-icon-box">
            <img src={logodp} alt="FOUROVR Logo" className="trigger-logo-img" />
          </div>
          <span className="trigger-label desktop-only">Nova Here ✨</span>
          {unreadCount > 0 && <span className="unread-dot">{unreadCount}</span>}
        </button>
      )}

      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="ai-chat-window animate-scale-up">
          {/* Header */}
          <div className="chat-header">
            <div className="header-info">
              <div className="bot-avatar">
                <div className="bot-avatar-img-wrap">
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

          {/* Messages Feed */}
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
              placeholder="Ask Nova in Roman Urdu, English..."
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
        </div>
      )}
    </div>
  );
}
