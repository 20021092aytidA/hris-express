const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer();
const db = require("./config/sequelize");
const corsHandle = require("./middleware/cors");
const env = require("dotenv").config();
const sequelize = require("./config/sequelize");
const adminRouter = require("./routes/admin");

app.use(corsHandle);

app.use("/hrsi-api/v1/admins", upload.none(), adminRouter);

app.listen(process.env.API_PORT, (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log(`API IS RUNNING! PORT:${process.env.API_PORT}`);
});
