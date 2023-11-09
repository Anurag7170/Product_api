const productdata = require("./MOCK_DATA.json");
const connectDb = require("./Config/database");
const Product = require("./Model/product");

const InsertAllData = async (req, res) => {
  try {
    connectDb();
    await Product.create(productdata);
    console.log("Success");
  } catch (error) {
    console.log("Error:", error);
  }
};

InsertAllData();