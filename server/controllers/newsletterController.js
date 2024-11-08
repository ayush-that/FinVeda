import NewsLetter from "../model/Newsletter.js";
import { sendMailToSubscriber } from "../utils/sendNewsletter.js";

export async function saveNewsletter(req, res) {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Create new contact document
        const newNewsLetter = new NewsLetter({ name, email });
        sendMailToSubscriber(newNewsLetter)
        await newNewsLetter.save();
        res
            .status(201)
            .json({ message: "Contact form submitted successfully!", newNewsLetter });
    } catch (error) {
        console.error("Error saving contact form:", error);
        res.status(500).json({ message: "Failed to submit contact form.", error });
    }
}

export async function getNewsletter(req, res) {
    res.send('hello newsletter')
}
