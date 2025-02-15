const express = require('express');
const app = express();

//customr middlwware 
const middleware = (req ,res , next)=>{
    console.log('middleware is 1 triggered')
    req.user = {
        id : 101,
        name : 'johna'
    }
    next();
}

const middleware2 = (req ,res , next)=>{
     console.log('middleware is 2 trigger');
     next();
}

app.get('/' , middleware ,  middleware2 , (req , res)=>{
    let user = req.user;
    res.json({
        user
    })
});

app.listen(8000 , ()=>{
    console.log('http://localhost:8000/');
})