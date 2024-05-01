const mongoose = require("mongoose");
// seller schema
const commentsRatings = new mongoose.Schema({
    comments: {},
    rating: {},
    userInfo: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

const commentsRatingModel = new mongoose.model("CommentRating", commentsRatings);
module.exports = { commentsRatingModel };
