const Product = require("../Model/product");

// api to get all Data
const getAllProducts = async (req, res) => {
  try {
    const response = await Product.find();
    res.json({ msg: "Success", data: response });
  } catch (error) {
    res.json({ error });
  }
};

// searching and filtering through product name
const getProduct = async (req, res) => {
  try {
    const { Products } = req.query;
    const queryObject = {};

    if (Products) {
      queryObject.Products = { $regex: Products, $options: "i" };
    }
    console.log(queryObject)
    const response = await Product.find(queryObject);
    res.json({ msg: "sucess", data: response });
  } catch (error) {
    res.json({ error });
  }
};

const getAllProductsSorted = async (req, res) => {
    try {
      const response = await Product.find().sort("rating");
      res.json({ msg: "Success", data: response });
    } catch (error) {
      res.json({ error });
    }
  };
  

module.exports = { getAllProducts, getProduct , getAllProductsSorted };
