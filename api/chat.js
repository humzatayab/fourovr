export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages, language } = req.body;
    const groqKey = process.env.GROQ_API_KEY || process.env.VITE_GROQ_API_KEY;
    const geminiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

    const isEnglishMode = language === 'en';

    const languageInstruction = isEnglishMode
      ? `STRICT DYNAMIC LANGUAGE MIRRORING (STRICT 100% ENGLISH ENFORCEMENT):
- The client explicitly selected ENGLISH as their preferred consultation language.
- You MUST respond 100% EXCLUSIVELY in pure, professional English!
- Absolutely ZERO Roman Urdu words, phrases, or greetings (NO "Zabardast", NO "Shukriya", NO "Ji", NO "Kyunke", NO "Aapka").
- Every single sentence must be 100% fluent, natural English!`
      : `STRICT DYNAMIC LANGUAGE MIRRORING (ROMAN URDU ENFORCEMENT):
- The client selected URDU / ROMAN URDU.
- You MUST respond in natural Roman Urdu!`;

    const systemInstruction = `
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

    // 1. Try Groq API if Groq key is present
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
            { role: 'system', content: systemInstruction },
            ...messages.slice(-12).map((m) => ({
              role: m.role === 'user' ? 'user' : 'assistant',
              content: m.content
            }))
          ]
        })
      });

      const groqData = await groqRes.json();
      if (groqRes.ok && groqData.choices?.[0]?.message?.content) {
        return res.status(200).json({ reply: groqData.choices[0].message.content });
      }
    }

    // 2. Try Gemini API if Gemini key is present
    if (geminiKey && !geminiKey.includes('YOUR_GEMINI_API_KEY')) {
      const chatContext = messages
        .slice(-12)
        .map((m) => `${m.role.toUpperCase()}: ${m.content}`)
        .join('\n');

      const fullPrompt = `${systemInstruction}\n\nCHAT HISTORY:\n${chatContext}\n\nNOVA:`;

      const modelsToTry = ['gemini-2.0-flash', 'gemini-2.0-flash-lite-preview', 'gemini-1.5-flash-8b'];
      for (const m of modelsToTry) {
        try {
          const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent?key=${geminiKey.trim()}`;
          const response = await fetch(geminiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ role: 'user', parts: [{ text: fullPrompt }] }]
            })
          });

          const data = await response.json();
          if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
            return res.status(200).json({ reply: data.candidates[0].content.parts[0].text });
          }
        } catch (e) {
          console.warn(`Gemini serverless fetch error for ${m}:`, e);
        }
      }
    }

    return res.status(500).json({ error: 'No valid GROQ_API_KEY or GEMINI_API_KEY configured' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
