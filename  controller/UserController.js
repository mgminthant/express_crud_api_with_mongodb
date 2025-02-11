const userService = require("../service/UserService");
const jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");
const { config } = require("../config/Config");

const register = async (req, res) => {
  try {
    let user = await userService.register(req.body.username, req.body.password);
    let payload = { id: user._id };
    const token = jwt.sign(payload, config.TOKEN_SECRET);
    res.send({
      token,
    });
    res.json(user);
  } catch (err) {
    res.status(400).json({
      errMessage: "User Already Exist",
    });
  }
};

const login = async function (req, res, next) {
  let userName = req.body["username"];
  let password = req.body["password"];
  try {
    let user = await userService.login(userName, password);
    let payload = { id: user._id };
    const token = jwt.sign(payload, config.TOKEN_SECRET);
    res.status(200).send({ token });
  } catch (err) {
    console.log(err);
    res.status(401).send({ message: "Invalid user" });
  }
};

module.exports = {
  register,
  login,
};
