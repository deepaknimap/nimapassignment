require("dotenv").config();
const express = require("express");
const app = express();
const { connectDb } = require("./connect");
const testModel = require("./model/test");
const userRouter = require("./router/user");

connectDb();

testModel.sync({
  alter: false,
  logging: (msg) => console.log("table alter updated successfully"),
});

const port = process.env.port || 8000;

app.use(express.json());

app.use("/api/user/", userRouter);

app.listen(3000, () => {
  console.log(`app is running on port 8000 http://localhost:${port}/`);
});
