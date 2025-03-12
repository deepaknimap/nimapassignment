const mongoose = require('mongoose');
const schema = mongoose.Schema;

const messageSchema = schema({
      conversationId : {
        type : mongoose.Schema.Types.ObjectId,
        rel : 'Conversation',
        required: true,

      },
      userId : {
        type : mongoose.Schema.Types.ObjectId,
        rel : 'User',
        required: true,
      },
      text : {
        type : String,
        required: true,
      }
} , {timestamps : true});


let message = mongoose.model('message' , messageSchema);


module.exports =  message;


