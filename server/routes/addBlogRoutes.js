import express from "express";
import { saveBlog, upload, getAllBlog, getBlog } from "../controllers/addBlogController.js";
const router = express.Router();

router.post("/saveBlog", upload.single('featuredImage'), saveBlog);
router.get("/getAllBlog", getAllBlog);
router.get("/getBlogById/:id", getBlog);


export default router;
