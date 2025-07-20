const express = require("express");
const Router = express.Router();
const MethodHandler = require("../controller/methods");
const multer = require("multer");
const { storage } = require("../model/cloudinary"); // ✅ Your cloudinary config here
const upload = multer({ storage }); // ✅ Use only cloudinary storage

Router.get("/products", MethodHandler.getAllProducts)
  .get("/category", MethodHandler.getChoices)
  .get("/byCategory", MethodHandler.getProducByCategory)
  .post("/addProduct", MethodHandler.addProducts)
  .post("/addChoices", MethodHandler.addCategory)
  .post("/upload", upload.single("image"), (req, res) => {
    console.log("Uploaded image:", req.file.path); // Cloudinary gives `path` or `url`
    console.log("REQ FILE:", req.file);
    console.log("FILE URL:", req.file?.path || req.file?.url);
    res.json({ imageUrl: req.file.path }); // This will be a Cloudinary URL
  })
  .patch("/updateProducts", MethodHandler.UpdatingProducts)
  .delete("/deleteProducts", MethodHandler.deleteAll)
  .delete("/deleteChoice", MethodHandler.deleteChoices);

exports.Router = Router;
