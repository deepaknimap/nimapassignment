const express = require('express');
const app  = express();




app.get('/' , (req , res)=>{
     console.log('hello world');
})




app.listen(8000 , ()=>{
    console.log('app is running on 8000 port');
})