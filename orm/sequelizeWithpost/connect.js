const { Sequelize } = require('sequelize');

console.log(process.env.password)

const sequelize = new Sequelize(process.env.database , process.env.user , process.env.password , {
    host : 'localhost',
    dialect : 'postgres'
})


const connectDB = async()=>{
    try {
         await sequelize.authenticate();
         console.log('Connection has been established successfully.');     
    } catch (error) {
         console.log(error.message)
    }
};

module.exports =  {
    sequelize , connectDB
}