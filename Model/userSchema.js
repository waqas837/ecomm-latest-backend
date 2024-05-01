const mongoose = require("mongoose");
const validator = require("validator");

// seller schema
const userData = new mongoose.Schema({
  email: {
    unique: true,
    type: String,
    validate(val) {
      if (!validator.isEmail(val)) throw new Error("emailWrongPattern");
    },
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  profileImg: {
    type: String,
  },
  occupation: {
    type: String,
  },
  approved: {
    type: Boolean,
    default: false,
  },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "sellerProduct" }],
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "message" }],
  messagers: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
});

const Usersignup = new mongoose.model("users", userData);
module.exports = { Usersignup };
