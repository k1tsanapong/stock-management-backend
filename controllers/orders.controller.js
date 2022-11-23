const ordersModels = require('../models/orders.models');

const getAllOrders = async (req, res) => 
{
    const getAllOrders = await ordersModels.getAllOrders();
    res.send(getAllOrders);
};

const createOneOrder = async (req, res) => 
{
    const createOneOrder = await ordersModels.createOneOrder();
    res.send(createOneOrder);
};

module.exports = {
    getAllOrders,
    createOneOrder,
  }