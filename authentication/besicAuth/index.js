const express = require("express");
const app = express();

let user = { username: "deepak@", password: "abcd@" };

const authorization = (req, res, next) => {
  try {
    let authheader = req.headers["authorization"];
    console.log(authheader);
    if (!authheader || !authheader.startsWith("Basic ")) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    let besicCredential = authheader.split(" ")[1];
    const credentials = Buffer.from(besicCredential, "base64").toString(
      "utf-8"
    );
    let [username, password] = credentials.split(":");
    if (!username === user.username || !password === user.password) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    next();
  } catch (error) {
    console.log(error.message);
  }
};


app.post("/verify", authorization, (req, res) => {
  res.send("protectect route know you can accesss protected data");
});


app.listen(8000, () => {
  console.log("http://localhost:8000/");
});
