import express from "express";
const router = express.Router();
import { getFeedback, saveFeedback } from "../controllers/feedbackController.js";

router.post("/saveFeedback", saveFeedback);
router.get("/saveFeedback", getFeedback);

export default router;