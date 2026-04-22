const express = require("express");
const app = express();
const db = require("./config/sequelize");
const corsHandle = require("./middleware/cors");
const env = require("dotenv").config();
const sequelize = require("./config/sequelize");

app.use(corsHandle);

// Sync Database
sequelize
  .sync()
  .then(() => console.log("Database & tables created!"))
  .catch((err) => console.error("Error syncing database:", err));

app.listen(process.env.API_PORT, (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log(`API IS RUNNING! PORT:${process.env.API_PORT}`);
});
