require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose')

let port = process.env.port || 8000;
let dbUrl = process.env.database_url || 'mongodb://127.0.0.1:27017/demo';
let secretKey = process.env.API_KEY;
console.log(secretKey);


mongoose.connect(dbUrl)
.then(()=>{
    console.log('database is connected')
})
.catch((err)=>{
    console.log(err.message);
})

app.get('/' , (req , res)=>{
    console.log('this is root route');
    res.send('this message from server side');
});

app.listen(port , ()=>{
    console.log(`your app is running on http://localhost:${port}/`);
});