const mongoose = require("mongoose");
const schema = mongoose.Schema;

const conversationSchema = schema({
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
});

let conversation = mongoose.model("conversation", conversationSchema);

module.exports = conversation;
