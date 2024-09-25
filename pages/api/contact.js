import { connectDatabase } from "./db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message, gRecaptchaToken } = req.body;
    console.log(gRecaptchaToken);

    const secretKey = process.env.RECAPTCHA_SECRET;

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${gRecaptchaToken}`,
      {
        method: "POST",
      }
    );

    const data = await response.json();

    if (data.success) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false });
    }

    // const response = await verifyRecaptcha(gRecaptchaToken)
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
