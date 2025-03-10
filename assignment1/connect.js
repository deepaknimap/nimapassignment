const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.database , process.env.user , process.env.password , {
    host  : 'localhost',
    dialect : 'postgres',
    pool : {
        max : 10,
        min : 0,
        acquire : 30000,
        idle : 10000
    }
});


const connectDb = async()=>{
    try {
         await  sequelize.authenticate();
         console.log('database connected successfully');
    } catch (error) {
        console.log(error.message);
    }
};


module.exports = {connectDb , sequelize};