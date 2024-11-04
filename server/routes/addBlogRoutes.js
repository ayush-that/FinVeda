import express from "express";
import { saveBlog, upload, getAllBlog } from "../controllers/addBlogController.js";
const router = express.Router();

router.post("/saveBlog", upload.single('featuredImage'), saveBlog);
router.get("/getAllBlog", getAllBlog);


export default router;
