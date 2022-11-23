const {db} = require("../db");

const getAllWarehouses = async () => {
  let results = [];

  try {
    results = await db.select("*").from("warehouses");

    return JSON.stringify({ status: 200, error: null, response: results });
  } catch (err) {
    return JSON.stringify({ status: 500, error: err, response: results });
  }
};

const createWarehouse = async (data) => {
  const { warehouse_name, warehouse_detail } = data ?? {};

  let results = [];

  try {
    results = await db.insert({ warehouse_name, warehouse_detail }).into("warehouses");

    return JSON.stringify({ status: 200, error: null, response: results });
  } catch (err) {
    return JSON.stringify({ status: 500, error: err, response: results });
  }
};

const updateOneWarehouse = async (id, data) => {
  let results = [];


  const { warehouse_name } = data ?? {};

  try {
    results = await db("warehouses")
      .where({ warehouse_id: id })
      .update({ warehouse_name});

      

    return JSON.stringify({ status: 200, error: null, response: results });
  } catch (err) {
    return JSON.stringify({ status: 500, error: err, response: results });
  }

};


const deleteOneWarehouse = async (id, data) => {
  let results = [];

  try {
    results = await db.where({ warehouse_id: id }).del().from("warehouses");

    return JSON.stringify({ status: 200, error: null, response: results });
  } catch (err) {
    return JSON.stringify({ status: 500, error: err, response: results });
  }
};

module.exports = {
  getAllWarehouses,
  createWarehouse,
  updateOneWarehouse,
  deleteOneWarehouse,
};
