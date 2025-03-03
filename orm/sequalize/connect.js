const { Sequelize } = require('sequelize');
const sequelize = new  Sequelize("facebook", "root", "abcd@Mysql", {
  host: "localhost",
  dialect: "mysql"
});

const connectDb = ()=>{
sequelize
  .authenticate()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err.message);
  });
}


  module.exports = {sequelize , connectDb};
