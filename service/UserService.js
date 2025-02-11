const bycrypt = require("bcrypt");
const userModel = require("../models/User");

const register = async (uname, pwd) => {
  const salt = await bycrypt.genSalt(10);
  const hashPwd = await bycrypt.hash(pwd, salt);

  let user = new userModel({
    username: uname,
    password: hashPwd,
  });

  return user.save();
};

const login = async (uname, pwd) => {
  const filter = {
    username: uname,
  };

  const user = await userModel.findOne(filter);
  
  const validPass = bycrypt.compare(pwd, user.password);
  if (validPass) {
    return user;
  } else {
    throw Error("Invalid User or Password");
  }
};

module.exports = {
  register,
  login,
};
