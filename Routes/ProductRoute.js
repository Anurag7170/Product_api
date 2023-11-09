const express = require("express");
const router = express.Router();

const {getAllProducts,getProduct, getAllProductsSorted} = require("../Controller/Product");


router.get("/getAllProduct", getAllProducts);
router.get("/getProduct", getProduct);
router.get("/getAllProduct", getAllProductsSorted);


module.exports = router;