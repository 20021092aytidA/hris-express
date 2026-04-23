const Admin = require("../models/admin");

const CreateAdmin = async (newAdmin) => {
  const result = await Admin.create(newAdmin);
};

module.exports = { CreateAdmin };
