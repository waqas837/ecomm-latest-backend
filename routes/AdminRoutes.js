const express = require("express");
const router = express.Router();
const upload = require("../middleware/Imageupload");
const { loginAccount, getUserData, ChangeUserApproval } = require("../controller/adminController");

router.post("/login", loginAccount);
router.get("/getUserData", getUserData);
router.post("/ChangeUserApproval/:userid/:status", ChangeUserApproval); 

module.exports = router;
