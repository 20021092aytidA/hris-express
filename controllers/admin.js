const service = require("../services/admin");
const sequelize = require("../config/sequelize");

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

module.exports = { CreateAdmin };
