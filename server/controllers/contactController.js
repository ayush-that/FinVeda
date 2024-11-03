import Contact from "../model/contact.js";
import { sendMailToAdmin } from "../utils/sendMail.js";

export async function saveContact(req, res) {
    try {
        const { name, email, subject, message } = req.body;

        // Check if all fields are provided
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Create new contact document
        const newContact = new Contact({ name, email, subject, message });
        sendMailToAdmin(newContact)
        // Save contact form data to the database
        await newContact.save();

        // Respond with success message
        res
            .status(201)
            .json({ message: "Contact form submitted successfully!", newContact });
    } catch (error) {
        console.error("Error saving contact form:", error);
        res.status(500).json({ message: "Failed to submit contact form.", error });
    }
}

export async function getContact(req, res) {
    res.send('hello contact')
}
