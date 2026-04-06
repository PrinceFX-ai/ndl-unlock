// vercel-app/api/config.js
// Returns ad links, bot username, and wait time from Vercel environment variables.
// Admin updates ads by changing env vars in Vercel dashboard — no code changes needed.

export default function handler(req, res) {
  // Allow CORS so the page can call this from any domain
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "no-store");

  res.status(200).json({
    bot:      process.env.BOT_USERNAME  || "YourBotUsername",
    ad1:      process.env.AD1_URL       || "",
    ad2:      process.env.AD2_URL       || "",   // optional second ad
    waitSecs: parseInt(process.env.WAIT_SECONDS || "10", 10),
  });
}
