const Admin = require("../models/admin");

const ViewAdmin = async (qry) => {
  const view = await Admin.findAll({
    where: qry,
  });
  return view;
};

const CreateAdmin = async (newAdmin) => {
  const create = await Admin.create(newAdmin);
};

module.exports = { ViewAdmin, CreateAdmin };
