const express = require("express");
const warehousesController = require("../controllers/warehouses.controller");

const router = express.Router();

router.get('/', warehousesController.getAllWarehouses);

// router.get('/new', warehousesController.createWarehouse);
router.post('/new', warehousesController.createWarehouse);

// router.post('/upload', warehousesController.uploadImageProduct);

module.exports = router;