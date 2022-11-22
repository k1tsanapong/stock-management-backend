const db = require("../db");

const getAllItems = async () => {
  let results = [];

  try {
    results = await db.select("*").from("items");

    return JSON.stringify({ status: 200, error: null, response: results });
  } catch (err) {
    return JSON.stringify({ status: 500, error: err, response: results });
  }
};

const getOneItem = async (id) => {
  let results = [];

  try {
    results = await db.select("*").from("items").where({ item_id: id });

    return JSON.stringify({ status: 200, error: null, response: results });
  } catch (err) {
    return JSON.stringify({ status: 500, error: err, response: results });
  }
};

const createOneItem = async (data) => {
  const { item_id, product_id, expire, warehouse_id, order_id, checking } =
    data;

  let results = [];

  try {
    results = await db
      .insert({
        
        product_id,
        expire,
        warehouse_id,
        order_id,
        checking,
      })
      .into("items");
    return JSON.stringify({ status: 200, error: null, response: results });
  } 
  catch (err) {
    console.error(err);
    return JSON.stringify({ status: 500, error: err, response: results });
  }
};

const updateOneItem = async (id, data) =>
{
    let results = [];

    const { item_id, product_id, expire, warehouse_id, order_id, checking } = data;

    try
    {
        results = await db("items")
        .where({item_id: id})
        .update({
            product_id,
            expire,
            warehouse_id,
            order_id,
            checking,
        })
        return JSON.stringify({ status: 200, error: null, response: results });

    }
    catch (err) {
        console.error(err);
        return JSON.stringify({ status: 500, error: err, response: results });
      }
};

const deleteOneItem = async (item_id) => 
{
    let results = [];

    try
    {
        results = await db.where({item_id})
        .del()
        .from("items");
        return JSON.stringify({ status: 200, error: null, response: results });

    }
    catch (err) {
        console.error(err);
        return JSON.stringify({ status: 500, error: err, response: results });
      }
    
};

module.exports = 
{
    getAllItems,
    getOneItem,
    createOneItem,
    updateOneItem,
    deleteOneItem,
}