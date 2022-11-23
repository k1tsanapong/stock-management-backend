const { db } = require("../db");
const { conn } = require("../db");

const getAllOrders = async () => {
  let results = [];

  try {
    results = await db.select("*").from("orders");

    return JSON.stringify({ status: 200, error: null, response: results });
  } catch (err) {
    return JSON.stringify({ status: 500, error: err, response: results });
  }
};

const createOneOrder = async () => {
  let results = [];

  try {
    results = await db.insert({}).into("orders");
    return JSON.stringify({ status: 200, error: null, response: results });
  } catch (err) {
    console.error(err);
    return JSON.stringify({ status: 500, error: err, response: results });
  }
};

module.exports = {
  getAllOrders,
  createOneOrder,
};
