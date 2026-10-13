export default async function handler(req, res) {
  const prompt = req.body.prompt;
  const API_KEY = process.env.GEMINI_API_KEY; // Stored securely on the server

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    }
  );

  const data = await response.json();
  return res.status(200).json(data);
}