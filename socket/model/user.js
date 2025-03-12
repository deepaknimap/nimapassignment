const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = schema({
      username : {
        type : String
      },
      password : {
        type : String,
        maxLength : 20
      }
});


let user = mongoose.model('user' , userSchema);


module.exports = user;