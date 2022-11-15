const express = require("express");
const ProductController = require("../controllers/productsController");

const router = express.Router();

router.get('/', ProductController.getAllProducts);

router.get('/new', ProductController.createProductPage);
router.post('/new', ProductController.createProduct)

module.exports = router;