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
