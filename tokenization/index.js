require('dotenv').config();
const express = require('express');
const app =  express();
const cookieParser  = require('cookie-parser');
const { mongoose } = require('mongoose');
const userRouter = require('./router/user')

mongoose.connect('mongodb://127.0.0.1:27017/tokenization');


app.use(express.json());
app.use(cookieParser());


app.use('/api/user' , userRouter)


app.listen(8000 , ()=>{
  console.log('app is running on 8000 porthttp://localhost:8000/')
});