import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

import feedbackRoutes from "./routes/feedbackRoutes.js";
import addBlog from "./routes/addBlogRoutes.js";
import path from "path"; // Import path module
import { fileURLToPath } from "url"; // Import fileURLToPath


dotenv.config();
const app = express();
connectDB();

app.use(express.json());

// to avoid cross-origin error
app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Serve static files from the uploads directory
app.use("/api/contact", contactRoutes);

app.use("/api/feedback", feedbackRoutes);
app.use("/api/addBlog", addBlog);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
