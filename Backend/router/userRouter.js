const express = require("express");
const router = express.Router();
const MethodHandler = require("../controller/authMethods");
router
  .get(
    "/userCart",
    MethodHandler.authenticatingToken,
    MethodHandler.getUserByToken
  )
  .post("/signUp", MethodHandler.creatingUser)
  .post(
    "/addToCart",
    MethodHandler.authenticatingToken,
    MethodHandler.usersCartAdd
  )
  .post("/login", MethodHandler.userLogin)
  .delete(
    "/deleteCartItem",
    MethodHandler.authenticatingToken,
    MethodHandler.deleteCartitem
  )
  .delete("/deleteAll", MethodHandler.deleteAllUsers);
exports.router = router;
