const { Sequelize } = require("sequelize");
const env = require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    define: {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    },
  },
);

module.exports = sequelize;
