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
    const { messages } = req.body;
    const groqKey = process.env.GROQ_API_KEY || process.env.VITE_GROQ_API_KEY;
    const geminiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

    const systemInstruction = `
You are Nova, Lead AI Strategy & Sales Consultant at FOUROVR Agency (Lahore, Pakistan).
WhatsApp: +92 320 4108187 | Email: fourovr@gmail.com | Portfolio URL: /work

CRITICAL OPERATING RULES:
1. MATCH USER'S LANGUAGE EXACTLY:
   - If the user types in Roman Urdu (e.g. "muaj apna bradn goeek ky liay kuch social media post banwani hn rates kya honge"), reply in natural, fluent, highly convincing Roman Urdu!
   - If user types in English, Urdu script, Arabic, Spanish, French, Hindi, etc., match that exact language!

2. CONVINCING PRICING & RATES RESPONSES:
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
            ...messages.slice(-6).map((m) => ({
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
        .slice(-6)
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
