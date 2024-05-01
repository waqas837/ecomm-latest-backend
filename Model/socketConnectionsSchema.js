const mongoose = require("mongoose");

const connectionsModel = new mongoose.Schema({
  socketId: {
    type: String,
  },
  userId: {
    type: mongoose.Types.ObjectId,
  },
});

const Socketconnection = new mongoose.model(
  "socketconnection",
  connectionsModel
);
module.exports = Socketconnection;
