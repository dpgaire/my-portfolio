import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Validate input (optional)
    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ success: false, error: "All fields are required." });
    }

    // Prepare the data
    const newContact = {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    };

    // Define the file path
    const filePath = path.join(process.cwd(), "data", "contacts.json");

    // Read existing data
    let existingContacts = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf8");
      existingContacts = JSON.parse(fileData);
    }

    // Add the new contact to existing contacts
    existingContacts.push(newContact);

    // Save the updated contacts back to the file
    fs.writeFileSync(
      filePath,
      JSON.stringify(existingContacts, null, 2),
      "utf8"
    );

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
