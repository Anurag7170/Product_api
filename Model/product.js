const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  Products: {
    type: String,
  },
  price: {
    type: Number,
  },
  rating: {
    type: Number,
  },
});
module.exports = mongoose.model("Product", productSchema);
