import BlogPost from '../model/addBlog.js';
import multer from 'multer';
import path from 'path';


// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Ensure this directory exists
    },
    filename: (req, file, cb) => {
        // Set the file name to be unique
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // Preserve the original file extension
    }
});

const upload = multer({ storage: storage });

// Function to save a new blog post
export async function saveBlog(req, res) {
    try {
        const { title, excerpt, featuredImage } = req.body;

        // If an image is uploaded, use its path
        let imagePath = req.file ? req.file.path : null;


        // Check if required fields are provided
        if (!title || !excerpt) {
            return res.status(400).json({ message: "All required fields must be filled out." });
        }

        // Create a new blog document
        const newBlog = new BlogPost({
            title,
            excerpt,
            featuredImage: imagePath // Use the determined image path
        });

        console.log(newBlog);

        // Save the blog post to the database
        await newBlog.save();

        // Respond with success message
        res.status(201).json({
            message: "Blog post created successfully!",
            data: newBlog
        });
    } catch (error) {
        console.error("Error saving blog post:", error);
        res.status(500).json({ message: "Failed to create blog post.", error });
    }
}


export { upload };