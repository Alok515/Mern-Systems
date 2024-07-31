const mongoose = require("mongoose");
const mongoUrl = process.env.MONGODB_URL;

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log(`Connected to ${mongoUrl}`);
  })
  .catch((err) => {
    console.log(err);
  });