const mongoose = require('mongoose');


async function connectDb(url){
    try{
    return mongoose.connect(url)
    }
    catch(err){
        console.log(err.message)
    }
};

module.exports = {
    connectDb,
}