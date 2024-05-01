const { Usersignup } = require("../Model/userSchema");
exports.loginAccount = async (req, res) => {
  try {
    let { email, password } = req.body.credentials;
    console.log("email, password ", email, password);
    let data = await Usersignup.findOne({ email, password });
    if (data) res.json({ success: true, message: "LoggedIn Success", data });
    if (!data) res.json({ success: false, message: "Invalid credentials" });
  } catch (error) {
    console.log("error while loginAccount", error);
    res.json({ success: false, message: "Invalid credentials" });
  }
};

exports.getUserData = async (req, res) => {
  try {
    let data = await Usersignup.find();
    // data = data.filter((data)=>(data.email==="admin"))
    // console.log("data", data);
    if (data) res.json({ success: true, message: "Users", data });
    if (!data) res.json({ success: false, message: "Invalid credentials" });
  } catch (error) {
    console.log("error while getUserData", error);
    res.json({ success: false, message: "getUserData" });
  }
};

exports.ChangeUserApproval = async (req, res) => {
  try {
    let { userid, status } = req.params;
    let data = await Usersignup.findByIdAndUpdate(
      { _id: userid },
      { approved: status }
    );
    // console.log("data", data);
    if (data) res.json({ success: true, message: "Success", data });
    if (!data) res.json({ success: false, message: "Invalid credentials" });
  } catch (error) {
    console.log("error while loginAccount", error);
    res.json({ success: false, message: "Invalid credentials" });
  }
};
