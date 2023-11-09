const mongoose = require("mongoose");


const dbconnect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Api_product")
    .then(console.log("DB Connected Successfully"))
    .catch((error) => {
      console.log("DB Facing Connection Issues");
      console.log(error);
      process.exit(1);
    });
};

module.exports = dbconnect;
