const mongoose = require("mongoose");

// messages schema
const messagesModel = new mongoose.Schema(
  {
    messageText: { type: String },
    recieverId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    unread: { type: Boolean, default: true },
    messagesItself: {},
  },
  { timestamps: true }
);

const messagesSchema = new mongoose.model("message", messagesModel);
module.exports = messagesSchema;
