const warehousesModels = require('../models/warehouses.models');

const getAllWarehouses = async (req, res) => {
    const getAllWarehouses =  await warehousesModels.getAllWarehouses();

    console.log('getAllWarehouses');
    res.send(getAllWarehouses);
  };

  

const createWarehouse = async(req, res) => {
  const createWarehouse= await warehousesModels.createWarehouse(req.body);
  res.send(createWarehouse)
};

  module.exports = {
    getAllWarehouses,
    createWarehouse,
  };

  //kim 5435
  