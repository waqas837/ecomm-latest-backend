const mongoose = require("mongoose");

const bookOrder = new mongoose.Schema(
    {
        sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
        buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
        gigId: { type: mongoose.Schema.Types.ObjectId, ref: "sellerProduct" },
        deliveryTime: String,
        projectDesc: String,
        Price: Number,
        pojectCompleted: { type: Boolean, default: false }, // This field may not used
        acceptedBySeller: { type: Boolean, default: false },
        markAsCompleteBySeller: { type: Boolean, default: false },
        markAsCompleteByBuyer: { type: Boolean, default: false },
        projectRecieved: { type: Boolean, default: false },
        projectFilePaths: [String]
    },
    { timestamps: true }
);

const BookOrder = new mongoose.model("BookOrder", bookOrder);
module.exports = { BookOrder };