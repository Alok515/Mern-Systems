const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
require('./config/dbSetup');

app.use(cors());

app.get("/", (req, res) => {
  res.send("App is running try /api routes");
});

const transactionRoutes = require("./routes/transactionRoutes");
app.use("/", transactionRoutes);

const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
