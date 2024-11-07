import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
    subscribedAt: {
        type: Date,
        default: Date.now
    }
});

const Newsletter = mongoose.model("Newsletter", newsletterSchema);

export default Newsletter;
