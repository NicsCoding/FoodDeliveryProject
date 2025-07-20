const dataBase = require("../model/databases");
const Product = dataBase.product;
const Category = dataBase.category;
const fs = require("fs");
const path = require("path");
const Path = require("path");
exports.getAllProducts = async (req, res) => {
  try {
    const query = Product.find();
    const pageLimit = 8;
    if (req.query.page) {
      const clickedPage = req.query.page;
      const data = await query
        .skip(pageLimit * (clickedPage - 1))
        .limit(pageLimit)
        .exec();
      res.status(201).json(data);
    } else {
      const foodLength = (await Product.find()).length;
      const data = await query.limit(pageLimit);
      const FinalData = { data, foodLength };
      res.status(201).json(FinalData);
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
exports.getChoices = async (req, res) => {
  try {
    const data = await Category.find();
    res.status(201).json(data);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
exports.getProducByCategory = async (req, res) => {
  try {
    if (req.query.cat) {
      const data = await Product.find({ category: req.query.cat });
      res.status(200).json(data);
    } else if (req.query.search) {
      console.log("i am here now", req.query.search);
      const data = await Product.find({
        name: new RegExp(req.query.search, "i"),
      });
      res.status(200).json(data);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.addCategory = async (req, res) => {
  try {
    const data = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname, "./DataForCategory.json"),
        "utf-8"
      )
    );
    const products = productsData.slice(0, 31).map((product) => {
      product.price = Math.floor(Math.random() * 1500);
      return product;
    });
    const newProducts = await Product.insertMany(products);
    return res.status(201).json(newProducts);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
exports.addProducts = async (req, res) => {
  try {
    const notData = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname, "./DataForProducts.json"),
        "utf-8"
      )
    );
    const products = productsData.slice(0, 31).map((product) => {
      product.price = Math.floor(Math.random() * 1500);
      return product;
    });
    const newProducts = await Product.insertMany(products);
    return res.status(201).json(newProducts);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
exports.UpdatingProducts = async (req, res) => {
  try {
    const products = Product.find({});
    for (const product of products) {
      const randomNum = Math.floor(Math.random() * 1500 + 1);
      await Product.updateOne(
        { _id: product._id },
        { $set: { price: randomNum } }
      );
    }
    return res.status(201).json({ message: "Products successfully updated" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
exports.deleteAll = async (req, res) => {
  try {
    const element = await Product.deleteMany({});
    res.status(200).json(element);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
exports.deleteChoices = async (req, res) => {
  try {
    const data = await Category.deleteMany({});
    res.status(200).json(data);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
