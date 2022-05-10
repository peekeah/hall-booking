const express = require("express");
const roomRouter = require("./router/room");
const customerRouter = require("./router/customers");
const bookRoomRouter = require("./router/bookRoom");
const mongo = require("./shared/connect");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
dotenv.config();

mongo.connect();

app.use("/", (req, res, next) => {
  console.log("middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("Hall booking app");
});

app.use("/bookroom", bookRoomRouter);
app.use("/rooms", roomRouter);
app.use("/customers", customerRouter);

app.listen(process.env.PORT || 3000);
