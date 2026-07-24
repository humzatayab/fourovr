import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bot, X, Send, MessageSquare, Sparkles, CheckCircle2, RefreshCw, SendHorizontal, PhoneCall, ExternalLink, FileText, LayoutGrid, DollarSign, User, Globe, ArrowRight } from 'lucide-react';
import './AIChatWidget.css';
import logodp from '../assets/dp.png';

const WHATSAPP_NUMBER = '923204108187';
const EMAIL_DESTINATION = 'fourovr@gmail.com';

const quizQuestions = {
  creative: [
    {
      q: {
        en: "What type of branding or design do you need most right now?",
        ur: "Aapko kis qism ki branding ya design ki sabse zyada zaroorat hai?"
      },
      options: [
        '🎨 Logo & Brand Identity (Brand Book)',
        '📱 Social Media Posts & Ad Graphics',
        '🎥 Video Editing / Shorts / Motion FX',
        '💎 Custom Vector Illustrations'
      ]
    },
    {
      q: {
        en: "What is the primary visual style you want your brand to project?",
        ur: "Aap apne brand ke liye kis qism ka visual style chahte hain?"
      },
      options: [
        '⚡ Bold & Modern (Neon / Dark)',
        '🌿 Minimal & Elegant (Clean / Light)',
        '💼 Corporate & Professional',
        '🎨 Creative & Playful (Illustrated)'
      ]
    },
    {
      q: {
        en: "How many posts or creatives do you plan to publish per month?",
        ur: "Aap har mahine lagbhag kitne posts ya graphics publish karna chahte hain?"
      },
      options: [
        '📅 10-15 posts / month',
        '📅 20-30 posts / month',
        '🔥 Daily content (30+ posts)',
        '🚀 Just a one-time campaign package'
      ]
    },
    {
      q: {
        en: "What is your primary target platform?",
        ur: "Aapka primary marketing platform kaunsa hoga?"
      },
      options: [
        '📸 Instagram & Facebook',
        '💼 LinkedIn (Corporate / B2B)',
        '🎵 TikTok & Reels (Video Focus)',
        '🌐 YouTube & Website'
      ]
    },
    {
      q: {
        en: "What is your estimated monthly budget for this project?",
        ur: "Is project ke liye aapka estimated monthly budget kya hai?"
      },
      options: [
        '💵 Starter Range ($200 - $500)',
        '💵 Growth Range ($500 - $1,500)',
        '💵 Enterprise Scale ($1,500+)',
        '✏️ Custom Budget (Write yours)'
      ]
    },
    {
      q: {
        en: "What is the primary goal of these graphics?",
        ur: "In design deliverables ka primary goal kya hoga?"
      },
      options: [
        '📈 Brand Awareness & Growth',
        '💰 High-Converting Paid Ads',
        '🤝 Community Engagement',
        '💎 Professional Brand Image'
      ]
    }
  ],
  development: [
    {
      q: {
        en: "What type of website or platform are we building?",
        ur: "Hum kis qism ki website ya web platform bana rahe hain?"
      },
      options: [
        '🛍️ E-Commerce Store (Shopify / Custom)',
        '🌐 Corporate Landing Page / Portfolio',
        '💻 Custom SaaS Web Application',
        '📱 Mobile / Desktop Application'
      ]
    },
    {
      q: {
        en: "What stack or platform do you prefer?",
        ur: "Aap kaunsa technology stack ya platform prefer karte hain?"
      },
      options: [
        '🟢 Next.js / React (High Speed)',
        '🟢 MERN Stack (Custom Database)',
        '🟢 Shopify (E-Commerce Focus)',
        '🟢 WordPress / Elementor (Easy CMS)'
      ]
    },
    {
      q: {
        en: "Do you need custom database integrations or user logins?",
        ur: "Kya aapko custom database integration ya user login portal chahiye?"
      },
      options: [
        '🔒 Yes, user logins & profiles',
        '💳 Yes, payment checkout setups',
        '📂 Yes, simple CMS (Content admin)',
        '⚡ No, static speed pages only'
      ]
    },
    {
      q: {
        en: "What design style do you want?",
        ur: "Aapko visual design style kis type ka chahiye?"
      },
      options: [
        '🖤 Futuristic Glassmorphism (Dark theme)',
        '🤍 Sleek Minimalist (Light theme)',
        '💙 Professional Corporate theme',
        '🌟 Interactive Animations (Premium look)'
      ]
    },
    {
      q: {
        en: "What is your estimated monthly budget for this project?",
        ur: "Is project ke liye aapka estimated monthly budget kya hai?"
      },
      options: [
        '💵 Starter Range ($200 - $500)',
        '💵 Growth Range ($500 - $1,500)',
        '💵 Enterprise Scale ($1,500+)',
        '✏️ Custom Budget (Write yours)'
      ]
    },
    {
      q: {
        en: "What is your main timeline constraint?",
        ur: "Aapka launch timeline kya hai?"
      },
      options: [
        '⚡ ASAP (within 2-3 weeks)',
        '🗓️ Flexible (1-2 months)',
        '🚀 Enterprise scope development',
        '🔍 Looking for wireframes & design first'
      ]
    }
  ],
  automations: [
    {
      q: {
        en: "What is the main task you want to automate?",
        ur: "Aap kis main task ko automate karna chahte hain?"
      },
      options: [
        '💬 Customer Support (AI Chatbot)',
        '🔄 Automated Lead Sync (CRM / Zapier)',
        '📂 Data Entry & Extraction Pipelines',
        '📩 Automated Email Outreach Campaigns'
      ]
    },
    {
      q: {
        en: "Where do you want the AI chatbot to live?",
        ur: "Aap AI Chatbot ko kahan deploy karna chahte hain?"
      },
      options: [
        '🟢 Website Widget',
        '🟢 WhatsApp Business API',
        '🟢 Instagram & Facebook DMs',
        '🟢 Slack / Internal Discord'
      ]
    },
    {
      q: {
        en: "What database or CRM do you use?",
        ur: "Aap kaunsa CRM ya database software use karte hain?"
      },
      options: [
        '📂 Google Sheets',
        '💼 HubSpot / Salesforce',
        '⚡ Notion / Custom database',
        '🔍 None, need setup from scratch'
      ]
    },
    {
      q: {
        en: "Should the AI agent read custom company documents (PDFs, sheets)?",
        ur: "Kya AI agent ko custom PDFs, sheets ya doc files read karni hongi?"
      },
      options: [
        '📄 Yes, needs full RAG database sync',
        '📄 Yes, read standard website pages',
        '📄 No, simple prompt instructions only',
        '📄 Just structured workflow triggers'
      ]
    },
    {
      q: {
        en: "What is your estimated monthly budget for this project?",
        ur: "Is project ke liye aapka estimated monthly budget kya hai?"
      },
      options: [
        '💵 Starter Range ($200 - $500)',
        '💵 Growth Range ($500 - $1,500)',
        '💵 Enterprise Scale ($1,500+)',
        '✏️ Custom Budget (Write yours)'
      ]
    },
    {
      q: {
        en: "What is your main goal for this automation?",
        ur: "Is automation setup se aapka primary goal kya hai?"
      },
      options: [
        '⏰ Save employee time (Save hours)',
        '💰 Reduce customer support costs',
        '📈 Capture leads 24/7 without delays',
        '⚡ Eliminate data entry errors'
      ]
    }
  ],
  marketing: [
    {
      q: {
        en: "What is your primary marketing goal?",
        ur: "Aapka primary marketing goal kya hai?"
      },
      options: [
        '📈 Rank higher on Google (SEO Growth)',
        '💰 Immediate Sales & Leads (Paid Ads)',
        '📸 Brand Engagement (Social Media)',
        '📩 Client Retention (Email Campaigns)'
      ]
    },
    {
      q: {
        en: "Have you run paid advertising campaigns before?",
        ur: "Kya aapne pehle paid ads run kiye hain?"
      },
      options: [
        '👍 Yes, currently running ads',
        '👎 Yes, but they did not convert',
        '⚡ No, starting fresh',
        '🔍 Looking for audits first'
      ]
    },
    {
      q: {
        en: "What paid channel fits your target audience?",
        ur: "Aapko konsa paid ad network best lagta hai?"
      },
      options: [
        '📸 Meta (Instagram / Facebook)',
        '🔍 Google Search & Shopping Ads',
        '💼 LinkedIn Ads (B2B Leads)',
        '🎵 TikTok & Vertical Video Ads'
      ]
    },
    {
      q: {
        en: "Do you have conversion tracking set up?",
        ur: "Kya aapke paas conversion tracking pixels setup hain?"
      },
      options: [
        '⚡ Yes, Meta Pixel & Analytics',
        '⚡ Yes, but data is inaccurate',
        '👎 No, need Conversions API setup',
        '🔍 Not sure, need a tracking audit'
      ]
    },
    {
      q: {
        en: "What is your estimated monthly budget for this project?",
        ur: "Is project ke liye aapka estimated monthly budget kya hai?"
      },
      options: [
        '💵 Starter Range ($200 - $500)',
        '💵 Growth Range ($500 - $1,500)',
        '💵 Enterprise Scale ($1,500+)',
        '✏️ Custom Budget (Write yours)'
      ]
    },
    {
      q: {
        en: "What is your monthly ad spend budget range?",
        ur: "Aapka ad budget range kitna hai?"
      },
      options: [
        '💵 Under $500 / month',
        '💵 $500 - $2,000 / month',
        '💵 $2,000 - $10,000 / month',
        '🔥 Enterprise scale budget'
      ]
    }
  ]
};

const teamMembersByCategory = {
  creative: [
    { name: "Hamza Tayyab", role: "Founder & Creative Director" },
    { name: "Hanzla Madni", role: "Video Editor & Motion Designer" },
    { name: "Usama", role: "3D Artist" },
    { name: "Zainab Khan", role: "Lead Graphic Designer" }
  ],
  development: [
    { name: "Ali Raza", role: "Lead AI Engineer" },
    { name: "Zain", role: "Lead Full-Stack Developer" },
    { name: "Muhammad Soban", role: "Senior UI/UX Designer" }
  ],
  automations: [
    { name: "Ali Raza", role: "Lead AI Engineer" },
    { name: "Kiran", role: "Senior Automation Specialist" }
  ],
  marketing: [
    { name: "Kiran", role: "Lead Growth Marketer" },
    { name: "Muhammad Soban", role: "Growth Specialist" }
  ]
};

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('fourovr_chat_messages');
    return saved ? JSON.parse(saved) : [];
  });
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(() => {
    const saved = localStorage.getItem('fourovr_chat_show_lead_form');
    return saved === 'true';
  });

  // Pre-Chat Onboarding Form State
  const [isUserOnboarded, setIsUserOnboarded] = useState(() => {
    const saved = localStorage.getItem('fourovr_chat_onboarded');
    return saved === 'true';
  });
  const [onboardForm, setOnboardForm] = useState(() => {
    const saved = localStorage.getItem('fourovr_chat_onboard_form');
    return saved ? JSON.parse(saved) : { name: '', language: 'en' };
  });

  // 4-Field Lead Form state
  const [formDetails, setFormDetails] = useState(() => {
    const saved = localStorage.getItem('fourovr_chat_form_details');
    return saved ? JSON.parse(saved) : {
      name: '',
      email: '',
      phone: '',
      budget: '$100 - $300 / mo (30k - 80k PKR)'
    };
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(() => {
    const saved = localStorage.getItem('fourovr_chat_submit_success');
    return saved === 'true';
  });
  const [quizState, setQuizState] = useState(() => {
    const saved = localStorage.getItem('fourovr_chat_quiz_state');
    return saved ? JSON.parse(saved) : null;
  });
  const [customBudgetText, setCustomBudgetText] = useState('');
  const [showCustomBudgetInput, setShowCustomBudgetInput] = useState(() => {
    const saved = localStorage.getItem('fourovr_chat_show_budget_input');
    return saved === 'true';
  });
  const [brandProfileText, setBrandProfileText] = useState('');
  const [showBrandProfileInput, setShowBrandProfileInput] = useState(() => {
    const saved = localStorage.getItem('fourovr_chat_show_brand_input');
    return saved === 'true';
  });
  const [websiteLinkText, setWebsiteLinkText] = useState('');
  const [showWebsiteLinkInput, setShowWebsiteLinkInput] = useState(() => {
    const saved = localStorage.getItem('fourovr_chat_show_web_input');
    return saved === 'true';
  });
  const [generatedReportText, setGeneratedReportText] = useState(() => {
    return localStorage.getItem('fourovr_chat_generated_report') || '';
  });
  const [finalAnswers, setFinalAnswers] = useState(() => {
    const saved = localStorage.getItem('fourovr_chat_final_answers');
    return saved ? JSON.parse(saved) : [];
  });
  const [finalCategory, setFinalCategory] = useState(() => {
    return localStorage.getItem('fourovr_chat_final_category') || '';
  });

  const chatEndRef = useRef(null);

  useEffect(() => {
    // Load jsPDF from CDN dynamically
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

  // Sync state shifts to localStorage to enable complete persistence
  useEffect(() => {
    localStorage.setItem('fourovr_chat_messages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('fourovr_chat_onboarded', isUserOnboarded.toString());
  }, [isUserOnboarded]);

  useEffect(() => {
    localStorage.setItem('fourovr_chat_onboard_form', JSON.stringify(onboardForm));
  }, [onboardForm]);

  useEffect(() => {
    localStorage.setItem('fourovr_chat_quiz_state', quizState ? JSON.stringify(quizState) : '');
  }, [quizState]);

  useEffect(() => {
    localStorage.setItem('fourovr_chat_show_lead_form', showLeadForm.toString());
  }, [showLeadForm]);

  useEffect(() => {
    localStorage.setItem('fourovr_chat_submit_success', submitSuccess.toString());
  }, [submitSuccess]);

  useEffect(() => {
    localStorage.setItem('fourovr_chat_generated_report', generatedReportText);
  }, [generatedReportText]);

  useEffect(() => {
    localStorage.setItem('fourovr_chat_final_answers', JSON.stringify(finalAnswers));
  }, [finalAnswers]);

  useEffect(() => {
    localStorage.setItem('fourovr_chat_final_category', finalCategory);
  }, [finalCategory]);

  useEffect(() => {
    localStorage.setItem('fourovr_chat_show_brand_input', showBrandProfileInput.toString());
  }, [showBrandProfileInput]);

  useEffect(() => {
    localStorage.setItem('fourovr_chat_show_web_input', showWebsiteLinkInput.toString());
  }, [showWebsiteLinkInput]);

  useEffect(() => {
    localStorage.setItem('fourovr_chat_show_budget_input', showCustomBudgetInput.toString());
  }, [showCustomBudgetInput]);

  useEffect(() => {
    localStorage.setItem('fourovr_chat_form_details', JSON.stringify(formDetails));
  }, [formDetails]);

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
        text: `Hello **${userName}**! 👋 Welcome to FOUROVR Agency. I'm **Nova**, your AI Strategy Advisor.\n\nPlease choose one of our core services below to begin:`,
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
        text: `Salam **${userName}**! 👋 FOUROVR Agency me khushamdeed. Main **Nova** hoon, aapki AI Strategy Advisor.\n\nShuru karne ke liye niche diye gaye core services me se kisi ek ko select karein:`,
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
  const generateFinalProposal = async (category, answers) => {
    setIsTyping(true);
    
    // Save these in states so they can be downloaded after form submission
    setFinalAnswers(answers);
    setFinalCategory(category);

    // Construct a prompt with all quiz answers
    const answersText = answers.map((a, idx) => `Q${idx+1}: ${a.question} -> A: ${a.answer}`).join('\n');
    const systemPrompt = onboardForm.language === 'en'
      ? `You are Nova, Lead AI Strategy Advisor at FOUROVR. The client has answered a project onboarding quiz for ${category} services. Here are their answers:\n${answersText}\n\nBased on these details, write a highly detailed, professional project proposal summary of how FOUROVR will execute their project in 3-4 paragraphs. Detail our design systems, tech stack, marketing audits, or automations according to FOUROVR's capabilities. DO NOT quote any prices or rates under any circumstances. Encourage them to fill out the lead form. Keep it fluent, professional English.`
      : `You are Nova, Lead AI Strategy Advisor at FOUROVR. The client has answered a project onboarding quiz for ${category} services. Here are their answers:\n${answersText}\n\nBased on these details, write a highly detailed, professional project proposal summary of how FOUROVR will execute their project in 3-4 paragraphs in Roman Urdu. Detail our design systems, tech stack, marketing audits, or automations according to FOUROVR's capabilities. DO NOT quote any prices or rates under any circumstances. Encourage them to fill out the lead form. Keep it fluent, professional Roman Urdu.`;

    let aiReplyText = '';
    const groqKey = import.meta.env.VITE_GROQ_API_KEY || import.meta.env.GROQ_API_KEY;
    const geminiKey = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY;

    try {
      if (groqKey && groqKey.startsWith('gsk_')) {
        const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${groqKey.trim()}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [{ role: 'system', content: systemPrompt }]
          })
        });
        const groqData = await groqRes.json();
        if (groqRes.ok && groqData.choices?.[0]?.message?.content) {
          aiReplyText = groqData.choices[0].message.content;
        }
      }

      if (!aiReplyText && geminiKey && !geminiKey.includes('YOUR_GEMINI_API_KEY')) {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey.trim()}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ role: 'user', parts: [{ text: systemPrompt }] }]
            })
          }
        );
        const data = await response.json();
        if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
          aiReplyText = data.candidates[0].content.parts[0].text;
        }
      }

      if (!aiReplyText) {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            language: onboardForm.language,
            messages: [{ role: 'system', content: systemPrompt }]
          })
        });
        if (res.ok) {
          const data = await res.json();
          if (data.reply) aiReplyText = data.reply;
        }
      }
    } catch (err) {
      console.warn('Quiz AI generation error:', err);
    }

    if (!aiReplyText) {
      aiReplyText = onboardForm.language === 'en'
        ? `FOUROVR has designed a tailored execution strategy for your brand.`
        : `FOUROVR aapke brand ke liye ek custom marketing aur branding plan taiyar karega.`;
    }

    setGeneratedReportText(aiReplyText);
    setIsTyping(false);

    const inChatNoticeText = onboardForm.language === 'en'
      ? `Here is your strategy report. Please fill out the form below to submit your request and download it!`
      : `Yeh rahi aapki strategy report. Niche diye gaye form ko fill kar ke ise download kar lein!`;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 2,
        sender: 'bot',
        text: inChatNoticeText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    setShowLeadForm(true);
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

    if (!textToSend) setInputText('');

    if (quizState) {
      const { category, step, answers } = quizState;
      const currentQuestionText = quizQuestions[category][step - 1].q[onboardForm.language];
      const newAnswers = [...answers, { question: currentQuestionText, answer: text }];
      
      setMessages((prev) => [...prev, userMsg]);

      if (step < quizQuestions[category].length) {
        setIsTyping(true);
        setTimeout(() => {
          const nextQ = quizQuestions[category][step];
          const botMsg = {
            id: Date.now() + 1,
            sender: 'bot',
            text: onboardForm.language === 'en' ? nextQ.q.en : nextQ.q.ur,
            options: nextQ.options,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
          setIsTyping(false);
          setQuizState({ category, step: step + 1, answers: newAnswers });
          setMessages((prev) => [...prev, botMsg]);
        }, 600);
      } else {
        setIsTyping(true);
        generateFinalProposal(category, newAnswers);
        setQuizState(null);
      }
      return;
    }

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

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
   - If the client gives an incomplete, vague, or single-word query (e.g., just saying "real estate", "clothing", or "brand"), do NOT talk about FOUROVR at length or pitch features. Simply ask them to clarify what their brand name/product is, what they sell, and directly guide them to fill out the form.

4. PRICING & BUDGET SEQUENCING (ONLY WHEN CLIENT EXPLICITLY ASKS FOR RATES/PRICING):
   - NEVER BRING UP PRICING, PACKAGES, RATES, OR INVOICES ON YOUR OWN.
   - DO NOT ask the client if they want to know about pricing or packages.
   - DO NOT suggest checking out pricing unless they explicitly ask for it.
   - Only talk about pricing if the client explicitly uses words like "price", "rates", "fees", "charges", "packages", "cost", "how much", or "pricing". Otherwise, pricing is STRICTLY FORBIDDEN to be mentioned by you.
   - NEVER quote any numerical prices, hourly rates, packages costs, estimated ranges, or percentage fees under any circumstances. Numerical price values (like "$200", "$500", "17%") are STRICTLY FORBIDDEN.
   - When asked about rates/pricing:
     * Tell the client to fill out the contact form below so our team can email them a custom invoice based on their exact project scope.
     * Optionally redirect them to check transparent base packages at **[View Packages & Pricing](/pricing)**.
     * Standard response guidelines:
       - English: "Please fill out the form below with your project requirements, and our team will email you a custom invoice. You can also view our packages at **[View Packages & Pricing](/pricing)**."
       - Roman Urdu: "Aap niche diya gaya form fill kar dein, hamari team aapko email par custom invoice bhej degi. Aap base packages **[View Packages & Pricing](/pricing)** par bhi check kar sakte hain."

5. MEMORY & CONTEXT RETENTION (HIGHEST CONVERSATIONAL PRIORITY):
   - Review CHAT HISTORY before answering. If the client has ALREADY mentioned their brand name/niche (e.g. jewelry, clothing, real estate), NEVER ask for their brand/niche again! Reuse their details directly.

6. ANSWER "WHY FOUROVR?" WITH CONVICTION:
   - If user asks why to choose FOUROVR (e.g. "why FOUROVR?" or "main apse kiyun karwaon?"):
     * Pitch FOUROVR's real agency edge with confidence:
       - English: "Because at FOUROVR, we build high-ROAS motion reels, high-converting graphics, ultra-fast web platforms, and growth funnels engineered to maximize your return on ad spend."
       - Roman Urdu: "Kyunke FOUROVR me hum high-converting graphics, motion reels, ultra-fast web platforms aur full growth funnel build karte hain jo direct sales aur ROI deliver karta hai!"

7. SHORT & NATURAL MESSAGES (CONCISE ENFORCEMENT):
   - Keep responses highly concise and direct (2-3 short sentences max). Do NOT elongate your answers or add unnecessary greetings.
   - Do NOT ask the client unsolicited questions about pricing or prompt them to ask about pricing. Only answer exactly what they ask. Do not scale up the conversation unnecessarily.
`;

    try {
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
              ...messages.slice(-12).map((m) => ({
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

      if (!aiReplyText && geminiKey && !geminiKey.includes('YOUR_GEMINI_API_KEY')) {
        const chatContext = messages
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

      if (!aiReplyText) {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            language: onboardForm.language,
            messages: messages.slice(-12).map((m) => ({
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

    if (!aiReplyText) {
      aiReplyText = generateFallbackAIReply(text, onboardForm.language);
    }

    setIsTyping(false);

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 1,
        sender: 'bot',
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const generateFallbackAIReply = (text, langPreference) => {
    const t = text.toLowerCase().trim();
    if (langPreference === 'en') {
      if (t.includes('why') || t.includes('kiyun') || t.includes('reason') || t.includes('hire') || t.includes('choose')) {
        return `Because at FOUROVR, we build high-ROAS motion reels, high-converting graphics, ultra-fast web platforms, and growth funnels engineered to maximize your ROI.`;
      } else {
        return `Please fill out the form below with your requirements, and our team will email you a custom invoice. You can also view our packages at **[View Packages & Pricing](/pricing)**.`;
      }
    }

    if (t.includes('why') || t.includes('kiyun') || t.includes('kyun') || t.includes('reason') || t.includes('karwaon')) {
      return `Kyunke FOUROVR me hum high-converting graphics, motion reels, ultra-fast web platforms aur full growth funnel build karte hain jo direct sales aur ROI deliver karta hai.`;
    } else {
      return `Aap niche diya gaya form fill kar dein, hamari team aapko email par custom invoice bhej degi. Aap base packages **[View Packages & Pricing](/pricing)** par bhi check kar sakte hain.`;
    }
  };

  const cleanTextForPDF = (str) => {
    if (!str) return '';
    let cleaned = str;
    // Replace all common emojis with text/empty equivalents
    cleaned = cleaned.replace(/✏️|✏/g, '');
    cleaned = cleaned.replace(/🛍️|🛍/g, '');
    cleaned = cleaned.replace(/🌐/g, '');
    cleaned = cleaned.replace(/🤖/g, '');
    cleaned = cleaned.replace(/📈/g, '');
    cleaned = cleaned.replace(/🎨/g, '');
    cleaned = cleaned.replace(/📱/g, '');
    cleaned = cleaned.replace(/🎥/g, '');
    cleaned = cleaned.replace(/💎/g, '');
    cleaned = cleaned.replace(/⚡/g, '');
    cleaned = cleaned.replace(/🌿/g, '');
    cleaned = cleaned.replace(/💼/g, '');
    cleaned = cleaned.replace(/📅/g, '');
    cleaned = cleaned.replace(/🔥/g, '');
    cleaned = cleaned.replace(/🚀/g, '');
    cleaned = cleaned.replace(/📸/g, '');
    cleaned = cleaned.replace(/🎵/g, '');
    cleaned = cleaned.replace(/💚/g, '');
    cleaned = cleaned.replace(/🖤/g, '');
    cleaned = cleaned.replace(/🤍/g, '');
    cleaned = cleaned.replace(/💙/g, '');
    cleaned = cleaned.replace(/🌟/g, '');
    cleaned = cleaned.replace(/🔒/g, '');
    cleaned = cleaned.replace(/💳/g, '');
    cleaned = cleaned.replace(/📂/g, '');
    cleaned = cleaned.replace(/📄/g, '');
    cleaned = cleaned.replace(/⏰/g, '');
    cleaned = cleaned.replace(/💰/g, '');
    cleaned = cleaned.replace(/🤝/g, '');
    cleaned = cleaned.replace(/💵/g, '');
    cleaned = cleaned.replace(/👍/g, '');
    cleaned = cleaned.replace(/👎/g, '');
    cleaned = cleaned.replace(/📩/g, '');
    cleaned = cleaned.replace(/📥/g, '');
    cleaned = cleaned.replace(/📲/g, '');
    cleaned = cleaned.replace(/🎉/g, '');
    cleaned = cleaned.replace(/👋/g, '');
    // Clean any non-ASCII characters to avoid garbled encoding (þ etc.)
    cleaned = cleaned.replace(/[^\x00-\x7F]/g, "");
    return cleaned.trim();
  };

  const generatePDFBlob = (category, answers, reportText) => {
    if (!window.jspdf) {
      return null;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    
    // Draw Dark Charcoal Top Header Banner (#0d0f0d)
    doc.setFillColor(13, 15, 13);
    doc.rect(0, 0, pageWidth, 42, 'F');
    
    // Bottom neon-lime stripe under header banner
    doc.setFillColor(199, 255, 36); // #c7ff24
    doc.rect(0, 41, pageWidth, 2, 'F');
    
    // Title in Header Banner
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(199, 255, 36); // Lime Green
    doc.text("FOUROVR AGENCY", 15, 18);
    
    doc.setFontSize(9);
    doc.setTextColor(255, 255, 255);
    doc.text("STRATEGY DISCOVERY & BRAND AUDIT REPORT", 15, 26);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(160, 160, 160);
    doc.text(`DATE: ${new Date().toLocaleDateString()} | CLIENT: ${onboardForm.name.toUpperCase()}`, 15, 34);
    
    // Sub-title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(13, 15, 13);
    const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
    doc.text(`${categoryTitle} Onboarding Strategy`, 15, 54);
    
    // Project Readiness Score Box
    const scoreVal = Math.floor(Math.random() * 12) + 85; 
    doc.setFillColor(13, 15, 13); // dark box
    doc.roundedRect(pageWidth - 70, 48, 55, 15, 2, 2, 'F');
    
    doc.setFontSize(7.5);
    doc.setTextColor(199, 255, 36); // lime label
    doc.text("STRATEGY SCORE", pageWidth - 65, 53);
    doc.setFontSize(10.5);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text(`${scoreVal}% Readiness`, pageWidth - 65, 59);

    // Section 1: Brand Profile
    let currentY = 74;
    doc.setFillColor(235, 245, 230); // Very light green tint tag
    doc.rect(15, currentY - 5, pageWidth - 30, 7, 'F');
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(13, 15, 13);
    doc.text("1. BRAND PROFILE", 17, currentY);

    const brandProfileAnswer = answers[0]?.answer || "N/A";
    const websiteLinkAnswer = answers[1]?.answer || "None / Skipped";

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(60, 60, 60);
    const cleanBrandInfo = cleanTextForPDF(brandProfileAnswer);
    const cleanWebLink = cleanTextForPDF(websiteLinkAnswer);

    const splitBrandInfo = doc.splitTextToSize(`Brand Focus & Products: ${cleanBrandInfo}`, pageWidth - 34);
    doc.text(splitBrandInfo, 17, currentY + 7);
    currentY += 7 + (splitBrandInfo.length * 4.5);

    doc.text(`Website / Social Link: ${cleanWebLink}`, 17, currentY);
    currentY += 10;

    // Section 2: Client Requirement Selections
    doc.setFillColor(235, 245, 230);
    doc.rect(15, currentY - 5, pageWidth - 30, 7, 'F');
    doc.setFont("helvetica", "bold");
    doc.setTextColor(13, 15, 13);
    doc.text("2. CLIENT REQUIREMENT SELECTIONS", 17, currentY);
    currentY += 7;

    const mcAnswers = answers.slice(2);
    mcAnswers.forEach((ans, idx) => {
      const cleanQ = cleanTextForPDF(ans.question);
      const cleanA = cleanTextForPDF(ans.answer);
      
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(50, 50, 50);
      doc.text(`${idx + 1}. ${cleanQ}`, 17, currentY);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(90, 90, 90);
      doc.text(`Selected: ${cleanA}`, 22, currentY + 4.5);
      currentY += 10.5;
    });

    // Section 3: Assigned Project Team
    doc.setFillColor(235, 245, 230);
    doc.rect(15, currentY - 5, pageWidth - 30, 7, 'F');
    doc.setFont("helvetica", "bold");
    doc.setTextColor(13, 15, 13);
    doc.text("3. ASSIGNED PROJECT TEAM ROSTER", 17, currentY);
    currentY += 7;

    const teamList = teamMembersByCategory[category] || [];
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(60, 60, 60);
    teamList.forEach((member) => {
      doc.text(`- ${member.name} -- ${member.role}`, 17, currentY);
      currentY += 5;
    });
    currentY += 5;

    // Section 4: Executive Blueprint
    doc.setFillColor(235, 245, 230);
    doc.rect(15, currentY - 5, pageWidth - 30, 7, 'F');
    doc.setFont("helvetica", "bold");
    doc.setTextColor(13, 15, 13);
    doc.text("4. EXECUTIVE BLUEPRINT & STRATEGY", 17, currentY);
    currentY += 8;

    const cleanReport = cleanTextForPDF(reportText);
    const splitText = doc.splitTextToSize(cleanReport, pageWidth - 34);

    splitText.forEach((line) => {
      if (currentY > pageHeight - 20) {
        doc.addPage();
        currentY = 20;
      }
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(80, 80, 80);
      doc.text(line, 17, currentY);
      currentY += 5;
    });
    currentY += 8;

    // Section 5: Additional Resources / Links
    if (currentY > pageHeight - 30) {
      doc.addPage();
      currentY = 20;
    }
    doc.setFillColor(235, 245, 230);
    doc.rect(15, currentY - 5, pageWidth - 30, 7, 'F');
    doc.setFont("helvetica", "bold");
    doc.setTextColor(13, 15, 13);
    doc.text("5. ADDITIONAL RESOURCES & LINKS", 17, currentY);
    currentY += 7;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(60, 60, 60);
    doc.text("To view our portfolio and past case studies, visit: ", 17, currentY);
    doc.setTextColor(10, 100, 200); // Blue clickable link
    doc.textWithLink("fourovr.com/work", 88, currentY, { url: "https://www.fourovr.com/work" });

    // Footer decoration on all pages
    const totalPages = doc.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(7);
      doc.setTextColor(160, 160, 160);
      doc.text("FOUROVR Digital Agency | Lahore, Pakistan | Email: fourovr@gmail.com", 15, pageHeight - 10);
      doc.text(`Page ${i} of ${totalPages}`, pageWidth - 25, pageHeight - 10);
    }
    
    return doc.output('blob');
  };

  const downloadPDF = (category, answers, reportText) => {
    const blob = generatePDFBlob(category, answers, reportText);
    if (!blob) {
      alert("PDF library is loading, please try again in a moment!");
      return;
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `FOUROVR-Strategy-Report-${onboardForm.name.replace(/\s+/g, '-')}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleBrandProfileSubmit = (e) => {
    e.preventDefault();
    if (!brandProfileText.trim()) return;

    const brandVal = brandProfileText.trim();
    setShowBrandProfileInput(false);
    setBrandProfileText('');

    const { category, answers } = quizState;
    const qText = onboardForm.language === 'en'
      ? "What is your brand name, and what specific products/services do you sell?"
      : "Aapki company/brand ka naam kya hai aur aap exactly kya products/services sell karte hain?";

    const newAnswers = [...answers, { question: qText, answer: brandVal }];

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: brandVal,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const botMsg = {
      id: Date.now() + 1,
      sender: 'bot',
      text: onboardForm.language === 'en'
        ? "Got it! Do you have an existing website or social media page? If yes, please paste the link below. If not, just click 'Skip'."
        : "Zabardast! Kya aapki pehle se koi website ya social media page hai? Agar hai, toh niche link enter karein. Agar nahi, toh simple 'Skip' click karein.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setQuizState({ category, step: 'web_link', answers: newAnswers });
    setShowWebsiteLinkInput(true);
    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  const handleWebsiteLinkSubmit = (e, valToSubmit) => {
    if (e) e.preventDefault();

    let linkVal = valToSubmit || websiteLinkText.trim();
    if (!linkVal) return;

    setShowWebsiteLinkInput(false);
    setWebsiteLinkText('');

    const { category, answers } = quizState;
    const qText = onboardForm.language === 'en'
      ? "Do you have an existing website or social media link?"
      : "Kya aapki pehle se koi website ya social media link hai?";

    const newAnswers = [...answers, { question: qText, answer: linkVal }];

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: linkVal,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const firstQ = quizQuestions[category][0];
    const botMsg = {
      id: Date.now() + 1,
      sender: 'bot',
      text: onboardForm.language === 'en' ? firstQ.q.en : firstQ.q.ur,
      options: firstQ.options,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setQuizState({ category, step: 1, answers: newAnswers });
    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  const handleCustomBudgetSubmit = (e) => {
    e.preventDefault();
    if (!customBudgetText.trim()) return;

    const budgetVal = customBudgetText.trim();
    setShowCustomBudgetInput(false);
    setCustomBudgetText('');

    const { category, step, answers } = quizState;
    const currentQuestionText = quizQuestions[category][step - 1].q[onboardForm.language];
    const newAnswers = [...answers, { question: currentQuestionText, answer: `Custom Budget: ${budgetVal}` }];

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: budgetVal,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    if (step < quizQuestions[category].length) {
      const nextQ = quizQuestions[category][step];
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: onboardForm.language === 'en' ? nextQ.q.en : nextQ.q.ur,
        options: nextQ.options,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setQuizState({ category, step: step + 1, answers: newAnswers });
      setMessages((prev) => [...prev, userMsg, botMsg]);
    } else {
      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);
      generateFinalProposal(category, newAnswers);
      setQuizState(null);
    }
  };

  const handleOptionClick = (option) => {
    let category = null;
    if (!quizState) {
      if (option.includes('🎨')) category = 'creative';
      else if (option.includes('🌐')) category = 'development';
      else if (option.includes('🤖')) category = 'automations';
      else if (option.includes('📈')) category = 'marketing';
    }

    if (category) {
      const userMsg = {
        id: Date.now(),
        sender: 'user',
        text: option,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: onboardForm.language === 'en' 
          ? "Great choice! Tell us briefly, what is your brand/business name, and what specific products or services do you sell?"
          : "Zabardast! Hamein mukhtasir batayein, aapki company/brand ka naam kya hai aur aap exactly kya products/services sell karte hain?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setQuizState({ category, step: 0, answers: [] });
      setShowBrandProfileInput(true);
      setMessages((prev) => [...prev, userMsg, botMsg]);
    } else if (quizState) {
      const { category, step, answers } = quizState;

      if (option.includes('Custom Budget') || option.includes('Write yours')) {
        setShowCustomBudgetInput(true);
        return;
      }

      const currentQuestionText = quizQuestions[category][step - 1].q[onboardForm.language];
      const newAnswers = [...answers, { question: currentQuestionText, answer: option }];
      
      const userMsg = {
        id: Date.now(),
        sender: 'user',
        text: option,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      if (step < quizQuestions[category].length) {
        const nextQ = quizQuestions[category][step];
        const botMsg = {
          id: Date.now() + 1,
          sender: 'bot',
          text: onboardForm.language === 'en' ? nextQ.q.en : nextQ.q.ur,
          options: nextQ.options,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setQuizState({ category, step: step + 1, answers: newAnswers });
        setMessages((prev) => [...prev, userMsg, botMsg]);
      } else {
        setMessages((prev) => [...prev, userMsg]);
        setIsTyping(true);
        generateFinalProposal(category, newAnswers);
        setQuizState(null);
      }
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

      // Format a clean, human-readable lists of client selections
      let clientAnswersProfile = '';
      if (finalAnswers && finalAnswers.length > 0) {
        clientAnswersProfile = finalAnswers
          .map((a, idx) => {
            const cleanQ = cleanTextForPDF(a.question);
            const cleanA = cleanTextForPDF(a.answer);
            return `${idx + 1}. ${cleanQ}\nSelected: ${cleanA}`;
          })
          .join('\n\n');
      }

      const cleanStrategyReport = cleanTextForPDF(generatedReportText);

      // Build JSON payload for FormSubmit AJAX (table format)
      const payload = {
        _subject: `🔥 NEW HIGH-INTENT LEAD: ${formDetails.name} (${formDetails.budget})`,
        _template: 'table',
        _captcha: 'false',
        'Client Name': formDetails.name,
        'Selected Language': onboardForm.language === 'en' ? 'English' : 'Urdu / Roman Urdu',
        'Email Address': formDetails.email,
        'WhatsApp / Phone': formDetails.phone,
        'Estimated Budget': formDetails.budget,
        'Client Answers Profile': clientAnswersProfile || chatHistoryText,
        'Strategy Blueprint (Nova Report)': cleanStrategyReport || 'Inquiry via AI Chatbot'
      };

      await fetch(`https://formsubmit.co/ajax/${EMAIL_DESTINATION}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
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
    setQuizState(null);
    setBrandProfileText('');
    setShowBrandProfileInput(false);
    setWebsiteLinkText('');
    setShowWebsiteLinkInput(false);
    setGeneratedReportText('');
    setFinalAnswers([]);
    setFinalCategory('');
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

                {/* Inline custom budget input field */}
                {showCustomBudgetInput && (
                  <div className="custom-budget-card animate-fade-in" style={{ padding: '8px 12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px dashed rgba(199, 255, 36, 0.25)', borderRadius: '8px', margin: '10px 0' }}>
                    <form onSubmit={handleCustomBudgetSubmit} style={{ display: 'flex', gap: '8px', width: '100%' }}>
                      <input
                        type="text"
                        placeholder={onboardForm.language === 'en' ? "Enter your custom budget..." : "Apna budget enter karein..."}
                        value={customBudgetText}
                        onChange={(e) => setCustomBudgetText(e.target.value)}
                        className="inchat-input"
                        style={{ flex: 1, margin: 0, padding: '8px 12px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '6px', fontSize: '0.85rem' }}
                        autoFocus
                      />
                      <button 
                        type="submit" 
                        className="btn-hero-lime"
                        style={{ padding: '0 16px', borderRadius: '6px', fontSize: '0.82rem', background: '#c7ff24', color: '#0d0f0d', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
                      >
                        {onboardForm.language === 'en' ? "Submit" : "Submit"}
                      </button>
                    </form>
                  </div>
                )}

                {/* Inline custom brand profile input field */}
                {showBrandProfileInput && (
                  <div className="custom-budget-card animate-fade-in" style={{ padding: '8px 12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px dashed rgba(199, 255, 36, 0.25)', borderRadius: '8px', margin: '10px 0' }}>
                    <form onSubmit={handleBrandProfileSubmit} style={{ display: 'flex', gap: '8px', width: '100%' }}>
                      <input
                        type="text"
                        placeholder={onboardForm.language === 'en' ? "e.g. Clothing brand / Real Estate Agency..." : "e.g. Clothing brand / Real Estate Agency..."}
                        value={brandProfileText}
                        onChange={(e) => setBrandProfileText(e.target.value)}
                        className="inchat-input"
                        style={{ flex: 1, margin: 0, padding: '8px 12px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '6px', fontSize: '0.85rem' }}
                        autoFocus
                      />
                      <button 
                        type="submit" 
                        className="btn-hero-lime"
                        style={{ padding: '0 16px', borderRadius: '6px', fontSize: '0.82rem', background: '#c7ff24', color: '#0d0f0d', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
                      >
                        {onboardForm.language === 'en' ? "Submit" : "Submit"}
                      </button>
                    </form>
                  </div>
                )}

                {/* Inline custom website link input field */}
                {showWebsiteLinkInput && (
                  <div className="custom-budget-card animate-fade-in" style={{ padding: '8px 12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px dashed rgba(199, 255, 36, 0.25)', borderRadius: '8px', margin: '10px 0' }}>
                    <form onSubmit={(e) => handleWebsiteLinkSubmit(e)} style={{ display: 'flex', gap: '8px', width: '100%' }}>
                      <input
                        type="text"
                        placeholder={onboardForm.language === 'en' ? "e.g. www.mybrand.com / Instagram link..." : "e.g. www.mybrand.com / Instagram link..."}
                        value={websiteLinkText}
                        onChange={(e) => setWebsiteLinkText(e.target.value)}
                        className="inchat-input"
                        style={{ flex: 1, margin: 0, padding: '8px 12px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '6px', fontSize: '0.85rem' }}
                        autoFocus
                      />
                      <button 
                        type="submit" 
                        className="btn-hero-lime"
                        style={{ padding: '0 16px', borderRadius: '6px', fontSize: '0.82rem', background: '#c7ff24', color: '#0d0f0d', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
                      >
                        {onboardForm.language === 'en' ? "Submit" : "Submit"}
                      </button>
                    </form>
                    
                    {/* Skip Button */}
                    <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '8px' }}>
                      <button
                        type="button"
                        onClick={() => handleWebsiteLinkSubmit(null, "None / Skipped")}
                        className="option-chip"
                        style={{ margin: 0, padding: '6px 12px', fontSize: '0.78rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '15px', color: '#fff', cursor: 'pointer', transition: 'all 0.2s' }}
                      >
                        ➡️ {onboardForm.language === 'en' ? "Skip this step" : "Skip karein"}
                      </button>
                    </div>
                  </div>
                )}

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
                  <div className="lead-card success-card animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '10px' }}>
                    <CheckCircle2 size={36} className="text-lime" />
                    <h5>Inquiry Received!</h5>
                    <p>FOUROVR team will contact you within working hours with complete detail & proposal.</p>
                    <button 
                      className="inchat-quote-trigger-btn"
                      style={{ background: '#c7ff24', color: '#0d0f0d', borderColor: '#c7ff24', fontWeight: 'bold', width: '100%', padding: '10px 0', borderRadius: '6px', fontSize: '0.85rem' }}
                      onClick={() => downloadPDF(finalCategory, finalAnswers, generatedReportText)}
                    >
                      📥 Download PDF Strategy Report
                    </button>
                  </div>
                )}

                <div ref={chatEndRef} />
              </div>

              {/* Footer Input Bar replaced with quiz guide text */}
              <div className="chat-footer" style={{ justifyContent: 'center', minHeight: '52px', padding: '10px 15px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', background: 'rgba(0, 0, 0, 0.2)' }}>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.35)', fontWeight: '600', letterSpacing: '0.04em', textTransform: 'uppercase', textAlign: 'center', width: '100%' }}>
                  {onboardForm.language === 'en'
                    ? "Please select an option above to build your strategy report"
                    : "Apna strategy report banane ke liye upar diye gaye options select karein"}
                </span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
