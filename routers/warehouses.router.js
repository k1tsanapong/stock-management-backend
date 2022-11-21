const express = require("express");
const warehousesController = require("../controllers/warehouses.controller");

const router = express.Router();

router.get("/", warehousesController.getAllWarehouses);

// router.get('/new', warehousesController.createWarehouse);
router.post("/new", warehousesController.createWarehouse);
router.put("/edit/:id", warehousesController.updateOneWarehouse);
router.delete("/delete/:id", warehousesController.deleteOneWarehouse);

// router.post('/upload', warehousesController.uploadImageProduct);

module.exports = router;
