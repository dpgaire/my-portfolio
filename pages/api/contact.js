import { connectDatabase } from './db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    const { db } = await connectDatabase();

    await db.collection('contacts').insertOne({ name, email, subject, message });
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

