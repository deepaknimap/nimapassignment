const express = require('express');
const app = express();
const session = require('express-session');


const sessionOption = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure : false,
        maxAge :  30 * 60 * 1000,
        httpOnly : true
     }
}

app.use(session(sessionOption));


app.get('/', (req, res) => {
    res.send('hello world');
});


app.get('/check', (req, res) => {
    req.session.visited = true;
    console.log(req.session);
    console.log(req.sessionID);

    res.json({ 
        message: "Session checked!",
        sessionID: req.sessionID
    });
});



app.listen(3000, () => {
    console.log('app is running on http://localhost:3000/')
})