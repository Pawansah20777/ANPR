const mongoose = require('mongoose');
const feedbackSchema = mongoose.Schema({
    feedback: String,
    rating: Number,
});

module.exports = mongoose.model("feedback", feedbackSchema);
