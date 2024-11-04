import Feedback from "../model/feedback.js";

export async function saveFeedback(req, res) {
    try {
        const { name, email, rating, comments } = req.body;

        // Check if all fields are provided
        if (!name || !email || !rating || !comments) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Create new contact document
        const newFeedback = new Feedback({ name, email, rating, comments });

        // Save contact form data to the database
        await newFeedback.save();

        // Respond with success message
        res
            .status(201)
            .json({ message: "Feedback form submitted successfully!", newFeedback });
    } catch (error) {
        console.error("Error saving feedback form:", error);
        res.status(500).json({ message: "Failed to submit feedback form.", error });
    }
}

export async function getFeedback(req, res) {
    res.send('hello feedback')
}
