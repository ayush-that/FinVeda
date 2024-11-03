import express from "express";
import { saveBlog, upload } from "../controllers/addBlogController.js";
const router = express.Router();

router.post("/saveBlog", upload.single('featuredImage'), saveBlog);


export default router;
