const Socketconnection = require("../Model/socketConnectionsSchema");
const MessagesModel = require("../Model/messagesSchema");
const { Usersignup } = require("../Model/userSchema");
exports.chatController = async (socketio) => {
  try {
    // 1. Save UserID
    socketio.on("saveUserID", async (data) => {
      console.log("new connection");
      let _id = data.userdata._id;
      let socketconnids = await Socketconnection.findOne({
        userId: _id,
      });
      if (socketconnids) {
        await Socketconnection.updateOne(
          { userId: _id },
          { socketId: socketio.id }
        );
      } else {
        let data = new Socketconnection({
          socketId: socketio.id,
          userId: _id,
        });
        await data.save();
      }
    });

    // 2. Handle user messages
    socketio.on("messageSent", async (data) => {
      // later on we make it to("/")
      let { senderid, recieverId, messageText } = data;

      // 1. save the message
      let saveMsg = new MessagesModel({
        messageText,
        senderId: senderid,
        recieverId: recieverId,
        messagesItself: { [senderid]: messageText },
      });
      
      let messages = await saveMsg.save();
      await Promise.all([
        Usersignup.findOneAndUpdate(
          { _id: senderid },
          { $addToSet: { messagers: recieverId } }
        ),
        Usersignup.findOneAndUpdate(
          { _id: recieverId },
          { $addToSet: { messagers: senderid } }
        ),
      ]);

      // 2. save message for user
      await Usersignup.findOneAndUpdate(
        { _id: senderid },
        {
          $push: { messagers: recieverId },
          $push: { messages: messages._id },
        }
      );

      // 3. save the each socket connection
      let socketconnids = await Socketconnection.findOne({
        userId: recieverId,
      });
      // 5. Send message to the reciever
      // also send the reciever email address.<
      socketio.to(socketconnids.socketId).emit("recieveMessage", {
        _id: messages._id,
        messageText,
        recieverId,
        senderid,
        unread: true,
        messagesItself: {
          messagesItself: { [senderid]: messageText },
        },
        createdAt: null,
        updatedAt: null,
        __v: 0,
      });
    });
  } catch (error) {
    console.log("Error in chat controller", error);
  }
};
