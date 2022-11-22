const express = require("express");
const itemsController = require("../controllers/items.controller");

const router = express.Router();

router.get("/", itemsController.getAllItems);

router.post("/new", itemsController.createOneItem);
router.put("/edit/:id", itemsController.updateOneItem);
router.delete("/delete/:id", itemsController.deleteOneItem);

module.exports = router;
