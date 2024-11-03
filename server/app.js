import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
const app = express();
connectDB();

app.use(express.json());

// to avoid cross-origin error
app.use(cors());


// Serve static files from the uploads directory
app.use("/api/contact", contactRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
