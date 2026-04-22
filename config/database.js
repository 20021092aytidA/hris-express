const mysql = require("mysql2/promise");
const env = require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  enableKeepAlive: true,
});

module.exports = db;
