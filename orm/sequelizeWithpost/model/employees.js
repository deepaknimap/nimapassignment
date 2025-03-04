const { DataTypes } = require("sequelize");
const { sequelize } = require("../connect");

const employee = sequelize.define(
  "employees",
  {
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(200),
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: { msg: "email can not be emty" },
        isEmail: { msg: "enter valid email" },
      },
    },
    number: {
      type: DataTypes.BIGINT,
      unique: true,
      validate: {
        isAlphanumeric : { msg: 'Phone number must contain only numbers' },
        len: { args: [10], msg: "please enter 10 digital number" },
      },
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.BIGINT,
    },
    age : {
        type : DataTypes.INTEGER,
        validate : {
            min : { args : [18] , msg : 'age should be greater then 18 or equal'},
            max : {args : [50] , msg : 'employee age should less then 50'}
        }
    }
  },
  {
    tableName: "employees",
  }
);

console.log(employee == sequelize.model.employee);

module.exports = employee;
