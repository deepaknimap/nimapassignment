const { sequelize } = require("../connect");
const { DataTypes } = require("sequelize");

const user = sequelize.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    follower: {
      type: DataTypes.BIGINT,
      defaultValue: 0,
    },
    following: {
      type: DataTypes.BIGINT,
      defaultValue: 0,
    },
  },
  {
    tableName: "user",
  }
);

console.log(user === sequelize.models.users); // true

module.exports = user;
