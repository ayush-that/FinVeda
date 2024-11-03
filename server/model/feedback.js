import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    rating: {
        type: String,
        required: true,
        enum: ['1', '2', '3', '4', '5'], // assuming ratings are 1-5 as strings or adjust as necessary
    },
    comments: {
        type: String,
        trim: true,
        maxlength: 500, // optional max length
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

// Export the Feedback model
const Feedback = mongoose.model('Feedback', feedbackSchema);
export default Feedback;
