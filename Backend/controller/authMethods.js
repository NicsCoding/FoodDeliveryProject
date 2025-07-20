const getter = require("../model/databases");
const userModel = getter.user;
const jwt = require("jsonwebtoken");
const path = require("path");
const bcrypt = require("bcrypt");
const fs = require("fs");
const { use } = require("bcrypt/promises");
const { error } = require("console");
const privateKey = fs.readFileSync(
  path.resolve(__dirname, "../PrivateKey.key"),
  "utf-8"
);
const publicKey = fs.readFileSync(
  path.resolve(__dirname, "../PublicKey.key"),
  "utf-8"
);
exports.authenticatingToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split("Bearer ")[1];
  if (token === null) {
    res.status(401).json({ message: "No Token Provided" });
  }
  jwt.verify(token, publicKey, (err, user) => {
    if (err) {
      res.status(403).json({ message: "Invalid Token" });
    }
    req.user = user;
    next();
  });
};
exports.getUserByToken = async (req, res) => {
  try {
    const email = req.user.email;
    const users = await userModel.findOne({ email }).populate("cart");
    const cartData = users.cart;
    return res.status(200).json(cartData);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server Error", error: err.message });
  }
};
exports.usersCartAdd = async (req, res) => {
  try {
    const email = req.user.email;
    const user = await userModel.findOne({ email });
    const { productId } = req.body;
    if (user.cart.includes(productId)) {
      console.log("yeah duplicate");
      return res
        .status(400)
        .json({ message: "Item's Alreadt exist in the cart" });
    }
    user.cart.push(productId);
    await user.save();
    res.status(200).json({ message: "Item aded to the cart" });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
exports.deleteCartitem = async (req, res) => {
  try {
    const email = req.user.email;
    const user = await userModel.findOne({ email });
    const { productId } = req.body;
    const indexToDelete = user.cart.indexOf(productId);
    if (indexToDelete === -1) {
      return res.status(400).json({ message: "Item not found in cart" });
    }
    user.cart.splice(indexToDelete, 1);
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server Error", error: err.message });
  }
};
const generatingToken = (userData) => {
  const createdToken = jwt.sign({ email: userData.email }, privateKey, {
    algorithm: "RS256",
    expiresIn: "168h",
  });
  return createdToken;
};
exports.creatingUser = async (req, res) => {
  try {
    const userData = new userModel(req.body);
    const userNameExist = await userModel.findOne({
      userName: userData.userName,
    });
    if (userNameExist) {
      return res.status(400).json({
        message: "This User-name Already Exist Try Using Another One",
      });
    }
    const emailExist = await userModel.findOne({ email: userData.email });
    if (emailExist) {
      return res.status(400).json({ message: "Email already exist" });
    }
    if (userData.password.length < 6) {
      return res
        .status(400)
        .json({ message: "Your password Must Contain At least 6 Character" });
    }
    const hash = bcrypt.hashSync(req.body.password, 10);
    userData.password = hash;
    await userData.save();
    return res.status(201).json(userData);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server Error", error: err.message });
  }
};
exports.deleteAllUsers = async (req, res) => {
  try {
    const Deleted = await userModel.deleteMany({});
    res.status(200).json(Deleted);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.userLogin = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).json({ message: "Email doesn't exist" });
    }
    if (user) {
      const auth = bcrypt.compareSync(req.body.password, user.password);
      if (!auth) {
        return res.status(401).json({ message: "Incorrect PassWord" });
      }
      const createdToken = generatingToken(user);
      user.token = createdToken;
      await user.save();
      res.status(200).json({ createdToken });
    } else {
      res.status(401).json({ message: "Incorrect Password Or email" });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server Error", error: err.message });
  }
};
