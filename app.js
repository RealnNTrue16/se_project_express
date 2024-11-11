const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");

const app = express();

const { PORT = 3001 } = process.env;

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to the DataBase");
  })
  .catch((err) => console.error(err));

//Route Implements
app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log("Running on Port:", PORT);
});
