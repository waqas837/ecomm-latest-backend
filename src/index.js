const express = require("express");
const cors = require("cors");
const socketio = require("socket.io"); // Add Socket.IO
require("./db"); // connected mongoDB
const UserRoutes = require("../routes/UserRoutes");
const AdminRoutes = require("../routes/AdminRoutes");
const app = express();
const path = require("path");
const { chatController } = require("../controller/chatController");
app.use(cors());
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ limit: "500mb", extended: true }));
var Port = process.env.PORT || 1000;

// Create HTTP server
const server = app.listen(Port, () => {
  console.log(`server is listening at port ${Port}`);
});

// Create Socket.IO server
const io = socketio(server, {
  cors: {
    origin: "*", // Allow from any origin, you can specify your domains here instead of *
    methods: ["GET", "POST"], // Allow only specified methods
  },
});

// Socket.IO connections
io.on("connection", (socket) => {
  chatController(socket);
  // Handle disconnection
  socket.on("connect", () => {
    console.log("User connected");
  });
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// User and Admin routes
app.use("/user", UserRoutes);
app.use("/admin", AdminRoutes);
app.use("/images", express.static(path.join("public/images/")));

app.get("/", (req, res) => {
  res.send("welcome to the multivendor ecommerce website");
});
