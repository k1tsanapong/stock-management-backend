const express = require("express");
const ordersController = require("../controllers/orders.controller");

const router = express.Router();

router.get("/", ordersController.getAllOrders);
router.post("/new", ordersController.createOneOrder);


module.exports = router;
