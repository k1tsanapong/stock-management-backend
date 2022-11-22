const warehousesModels = require("../models/warehouses.models");

const getAllWarehouses = async (req, res) => {
  const getAllWarehouses = await warehousesModels.getAllWarehouses();

  console.log("getAllWarehouses");
  res.send(getAllWarehouses);
};

const createWarehouse = async (req, res) => {
  const createWarehouse = await warehousesModels.createWarehouse(req.body);
  res.send(createWarehouse);
};

const updateOneWarehouse = async (req, res) => {

  
  const updateOneWarehouse = await warehousesModels.updateOneWarehouse(
    req.params.id,
    req.body
  );
  res.send(updateOneWarehouse);
};

const deleteOneWarehouse = async (req, res) => {
  const deleteOneWarehouse = await warehousesModels.deleteOneWarehouse(
    req.params.id
    );
  res.send(deleteOneWarehouse);
};

module.exports = {
  getAllWarehouses,
  createWarehouse,
  updateOneWarehouse,
  deleteOneWarehouse,
};

//kim 5435
