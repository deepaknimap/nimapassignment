const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./router/user");
const cookieParser = require("cookie-parser");

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRouter);

app.get("/api/ram", (req, res) => {
  res.cookie("keys", "data");
  res.status(200).json({
    message: "done",
  });
});

app.listen(4000, () => {
  console.log("app is running on port 4000");
});
