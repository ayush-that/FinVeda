import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    excerpt: {
        type: String,
        required: true,
        trim: true
    },
    featuredImage: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Add a pre-save hook to update the `updatedAt` field
blogPostSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;
