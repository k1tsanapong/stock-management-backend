const itemsModels = require('../models/items.models');

const getAllItems = async (req, res) => 
{
    const getAllItems = await itemsModels.getAllItems();
    res.send(getAllItems);
};

const getOneItem = async (req, res) =>
{
    const getOneItem = await itemsModels.getOneItem(req.params.id);
    res.send(getOneItem);
};

const createOneItem = async (req, res) =>
{
    const createOneItem = await itemsModels.createOneItem(req.body);
    res.send(createOneItem);
};

const updateOneItem = async (req, res) =>
{
    const updateOneItem = await itemsModels.updateOneItem(
        req.params.id,
        req.body
    );

    res.send(updateOneItem);
};

const deleteOneItem = async (req, res) => {
    const deleteOneItem = await itemsModels.deleteOneItem(
      req.params.id
      );
    res.send(deleteOneItem);
  };

  module.exports = {
    getAllItems,
    getOneItem,
    createOneItem,
    updateOneItem,
    deleteOneItem,
  }

