const express = require("express");
const router = express.Router();
const upload = require("../middleware/Imageupload");
const {
  signup,
  createProduct,
  getProducts,
  userProfileUpdate,
  getUserdata,
  switchAccount,
  loginAccount,
  getGigsRandom,
  loadParticipants,
  loadParticipantsChatSingle,
  orderRequestByBuyer,
  getAllOrdersOfBuyer,
  offerAcceptedBySeller,
  getAllOrdersOfSeller,
  submitProjectDelivery,
  getCurrentOrderStatus,
  buyerOrderCompleted,
  rateSeller,
} = require("../controller/usersController");
router.post("/signup/:userType", signup);
router.post("/login", loginAccount);
router.post("/switchAccount/:userid/:userType", switchAccount);
router.get("/getUserData/:userid", getUserdata);
router.post("/createProduct/:userid", upload.single("file"), createProduct);
router.get("/getAllProducts/:userid", getProducts);
router.get("/getGigsRandom", getGigsRandom);
router.patch(
  "/userProfileImage/:userid",
  upload.single("file"),
  userProfileUpdate
);
// messages routes
router.get("/loadParticipants/:buyerid", loadParticipants);
router.get("/loadParticipantsChat/:alsoLoggedInUserId/:otherUserID", loadParticipantsChatSingle);
// booking order routes
router.post("/orderRequestByBuyer/:buyerId/:sellerId/:gigId", orderRequestByBuyer);
router.get("/getAllBueryOrders/:buyerId", getAllOrdersOfBuyer);
router.get("/getSellersOrder/:sellerId", getAllOrdersOfSeller);
router.patch("/offerAcceptedBySeller/:offerId", offerAcceptedBySeller);
router.post("/submitProjectDelivery/:orderId", upload.any(), submitProjectDelivery);
router.get("/getCurrentOrderStatus/:orderId", getCurrentOrderStatus);
router.get("/buyerOrderCompleted/:orderId", buyerOrderCompleted);
router.patch("/rateSeller/:gigId/:buyerId", rateSeller);


module.exports = router;
