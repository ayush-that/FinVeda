import express from "express";
const router = express.Router();
import { getContact, saveContact } from "../controllers/contactController.js";

router.post("/saveContact", saveContact);
router.get("/saveContact", getContact);

export default router;
