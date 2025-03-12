const conModel = require("../model/conversation");

module.exports.CreateConversation = async (req, res) => {
  try {
    let { userId, friendId } = req.body;
    if (!userId || !friendId) {
      return res.status(401).json({ msg: "there us no friends" });
    }

    const newCon = new conModel({
      members: [userId, friendId],
    });
    let result = await newCon.save();

    res.status(201).json({ msg : "you may now start conversation" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.getConversation = async (req, res) => {
  try {
    let { id } = req.params;
    if (!id) {
      return res.status(401).json({ msg: "please enter valid  id" });
    }
    let data = await conModel.find({ members: { $in: [id] } }).populate({path : 'members' , match : {_id : {$ne : id}}  , select : 'username' });
    res.status(201).json({data});
  } catch (error) {
    console.log(error.message);
  }
};
