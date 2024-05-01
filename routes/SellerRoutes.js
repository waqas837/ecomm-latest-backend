const express = require("express");
const router = express.Router();
const upload = require("../middleware/Imageupload");
const { signup } = require("../controller/usersController");
module.exports = router;
