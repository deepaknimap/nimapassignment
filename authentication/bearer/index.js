const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

let user = [
  { username: "deepak", password: "abcd" },
  { username: "rahul", password: "abcdj" },
];

const secret = "hellow_world";

app.post("/login", (req, res) => {
  try {
    let { password, username } = req.body;
    let result = user.find(
      (user) => user.username === username && user.password === password
    );
    if (!result) {
      return res.status(401).json({ msg: "please enter valid credential" });
    }
    let token = jwt.sign({ result }, secret, { expiresIn: "10m" });
    res.status(201).json({ msg: "user is created succefully", token });
  } catch (error) {
    console.log(error.message);
  }
});

const authenticateToken = (req, res, next) => {
  try {
    let authHeader = req.headers["authorization"];
    let token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ msg: "please login first" });
    }
    let data = jwt.verify(token, secret);
    if (!data) {
      return res.status(401).json({ msg: "please login first" });
    } else {
      req.body = data;
      next();
    }
  } catch (error) {
    console.log("triggered");
    console.log(error.message);
  }
};

app.get("/protectedRoute", authenticateToken, (req, res) => {
  res.status(201).json({ result: req.body });
});

app.listen(8000, () => {
  console.log("http://localhost:8000/");
});
