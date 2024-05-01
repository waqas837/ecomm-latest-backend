const mongoose = require("mongoose");

// Check if the connection is already established
if (mongoose.connection.readyState === 1) {
  console.log("Already connected");
} else {
  // mongodb://127.0.0.1:27017
  // mongodb+srv://bughlani:bughlani@cluster0.9qki3lg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
  mongoose
    .connect(
      "mongodb://127.0.0.1:27017"
    )
    .then(() => console.log("db connected"))
    .catch((e) => console.log(e))
}
