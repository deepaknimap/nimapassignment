const express = require("express");
const app = express();
const { connectDb } = require("./connect");
const user = require("./model/user");
const userRouter = require("./router/user");

connectDb();
user.sync({});

app.use(express.json());

app.use("/api/user", userRouter);

app.listen(8000, () => {
  console.log("app is running on  http://localhost:8000");
});
