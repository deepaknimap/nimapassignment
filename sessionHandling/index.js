const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
let  MongoDBStore = require('connect-mongodb-session')(session);

const mongourl = 'mongodb://127.0.0.1:27017/sessionHandling';

mongoose
  .connect(mongourl)
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log(err.message);
  });
  
const user = [
  {
    username: "hello",
    password: "abcd",
    id: 101,
  },
  {
    username: "hello2",
    password: "abcd2",
    id: 102,
  },
  {
    username: "hello3",
    password: "abcd3",
    id: 103,
  },
  {
    username: "hello4",
    password: "abcd4",
    id: 104,
  },
];


const store = new MongoDBStore({
    url : mongourl,
    collection : "mySessions"
})

const sessionOption = {
  secret: "helloworld",
  resave: false,
  saveUninitialized: false,
  store,
  expires: 5 * 60 * 1000,
  cookie: {
    secure: false,
    HttpOnly: true,
    maxAge: 2 * 60 * 1000,
  },
};

app.use(session(sessionOption));
app.use(express.json());

app.post("/login", (req, res) => {
  try {
    let { username, password, id } = req.body;
    let data = user.find(
      (u) => u.username === username && u.password === password
    );
    if (!data) {
      return res.status(401).json({
        message: "please enter correct credential",
      });
    }
    req.session.visitingCount = (req.session.visitingCount || 0) + 1;
    req.session.name = data.username;
    return res.status(201).json({
      message: `welcome to our app ${req.session.visitingCount}`,
    });
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/visiting", (req, res) => {
  req.session.visitingCount = (req.session.visitingCount || 0) + 1;
  res.status(201).json({
    message: ` ${req.session.name} welcome to our applcation your visiting count is ${req.session.visitingCount}`,
  });
});

app.post('/logout' ,(req , res)=>{
     req.session.destroy(()=>{
      res.json({ message: "Logged out, session destroyed" });
     })
})

app.listen(8000, () => {
  console.log("app is running on http://localhost:8000");
});
