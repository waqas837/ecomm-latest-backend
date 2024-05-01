const mongoose = require("mongoose");
const commentsRatings = new mongoose.Schema({
    comments: String,
    rating: Number,
    gigId: { type: mongoose.Schema.Types.ObjectId, ref: "sellerProduct" },
    buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },

}, { timestamps: true });

const commentsRatingModel = new mongoose.model("CommentRating", commentsRatings);
module.exports = { commentsRatingModel };
