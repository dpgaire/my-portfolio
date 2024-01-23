// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, subject, message } = req.body;
//     console.log('Form Data:', { name, email, subject, message });

//     res.status(200).json({ success: true });
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }

// contact.js
import { connectDatabase } from './db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    const { db } = await connectDatabase();

    // Insert the form data into the 'contacts' collection
    await db.collection('contacts').insertOne({ name, email, subject, message });

    // Log form data to the console
    console.log('Form Data:', { name, email, subject, message });

    // Respond with success status
    res.status(200).json({ success: true });
  } else {
    // Respond with method not allowed status
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

