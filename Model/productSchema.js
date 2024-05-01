const mongoose = require("mongoose");
// seller schema
const productSch = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  productimg: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {},
  comments: {},
  userInfo: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

const SellerProducts = new mongoose.model("sellerProduct", productSch);
module.exports = { SellerProducts };
