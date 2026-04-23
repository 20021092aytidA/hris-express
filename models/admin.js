const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Admin = sequelize.define("Admin", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  fullName: {
    field: "full_name",
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isSuperAdmin: {
    field: "is_super_admin",
    type: DataTypes.ENUM(["0", "1"]),
    allowNull: true,
    defaultValue: "0",
  },
  createdAt: {
    field: "created_at",
    type: DataTypes.DATE,
    allowNull: true,
  },
  createdBy: {
    field: "created_by",
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  updatedAt: {
    field: "updated_at",
    type: DataTypes.DATE,
    allowNull: true,
  },
  updatedBy: {
    field: "updated_by",
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  deletedAt: {
    field: "deleted_at",
    type: DataTypes.DATE,
    allowNull: true,
  },
  deletedBy: {
    field: "deleted_by",
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = Admin;
