const {sequelize} = require('../connect');
const {DataTypes, UUID} = require('sequelize');

const  test = sequelize.define('test' , {
    id : {
        type : DataTypes.UUID,
        primaryKey : true,
        allowNull : false,
        defaultValue : DataTypes.UUIDV4
    },
    firstname : {
         type : DataTypes.STRING,
          validate : {
            len : {args : [2 , 20] , msg : 'character should less then 20'}
          }
    },
    lastname: {
        type : DataTypes.STRING,
        validate : {
            len : {args : [2, 20] , msg : 'character should less then 25'}
          }
    },
    email : {
        type : DataTypes.STRING,
        unique : {
            msg : 'this email already a user have please enter different email'
        },
        validate : {
            isEmail : {msg : 'please enter valid email'},
        }
    },
    age : {
        type : DataTypes.INTEGER,
        validate : {
            customeError(value){
                console.log(value);
                if(value < 18 || this.age === null ){
                 throw new Error('age should be greater then 18 should not null')
                }
            }
        }
    },
    test : {
        type : DataTypes.INTEGER,
        validate : {
        isNumeric : {msg : 'test should be number'},
        }
    }
},
{
    tableName : 'tests'
});

module.exports = test;