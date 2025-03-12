const conversation = require("../model/conversation");
const messageModel = require("../model/message");
const {findUsers} = require('../utils/socket');


module.exports.createMessage = async (req, res) => {
  try {
    let { text, userId, conversationId  , friendId} = req.body;
    if (!text || !userId || !conversationId) {
      return res.status(401).json({ msg: "please enter valid data" });
    }
    console.log(findUsers);
    
   let data =  findUser(friendId);
   console.log(data);
  //  if(data){
  //     io.to(data.socketId).emit('message' , text)
  //  }
    // let newMassage = new messageModel(req.body);
    // await newMassage.save();
    // return res.status(201).json({ newMassage });
  } catch (error) {
    console.log(error.messsage);
  }
};

module.exports.getAllMessage = async (req, res) => {
  try {
    const { conversationId } = req.params;
    let data = await messageModel.find({ conversationId });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.messsage);
  }
};
