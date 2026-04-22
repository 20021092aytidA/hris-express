const express = require("express");
const app = express();
const db = require("./config/database");
const corsHandle = require("./middleware/cors");
const env = require("dotenv").config();

app.use(corsHandle);
app.listen(process.env.API_PORT, (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log(`API IS RUNNING! PORT:${process.env.API_PORT}`);
});
