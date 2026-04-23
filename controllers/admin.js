const service = require("../services/admin");
const sequelize = require("../config/sequelize");

const ViewAdmin = async (req, res) => {
  try {
    console.log(req.query);
    const view = await service.ViewAdmin(req.query);
    return res.status(200).json({
      status: 200,
      message: "Admin retrieved!",
      data: view,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "Internal server error!",
    });
  }
};

const CreateAdmin = async (req, res) => {
  try {
    const create = await service.CreateAdmin(req.body);
    return res.status(201).json({
      status: 201,
      message: "Admin created!",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal server error!",
    });
  }
};

const LoginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ status: 400, message: "Bad request, missing body!" });
    }

    const login = await service.LoginAdmin(username, password);

    if (!login) {
      return res.status(401).json({ status: 401, message: "Failed login!" });
    }

    return res.status(200).json({ status: 200, message: "Login success!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "Internal server error!",
    });
  }
};

module.exports = { ViewAdmin, CreateAdmin, LoginAdmin };
