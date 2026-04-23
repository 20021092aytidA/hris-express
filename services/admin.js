const Admin = require("../models/admin");
const bcrpyt = require("bcrypt");

const ViewAdmin = async (qry) => {
  const view = await Admin.findAll({
    where: qry,
  });
  return view;
};

const CreateAdmin = async (newAdmin) => {
  const create = await Admin.create(newAdmin);
};

const LoginAdmin = async (username, password) => {
  let allow = false;
  const login = await Admin.findOne({
    where: {
      username: username,
    },
  });

  if (login) {
    allow = await bcrpyt.compare(password, login.password);
  }

  return allow;
};

module.exports = { ViewAdmin, CreateAdmin, LoginAdmin };
