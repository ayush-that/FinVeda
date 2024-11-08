import express from "express";
const router = express.Router();
import { getAllFeedback, saveFeedback } from "../controllers/feedbackController.js";

router.post("/saveFeedback", saveFeedback);
router.get('/getfeedback', getAllFeedback);
export default router;