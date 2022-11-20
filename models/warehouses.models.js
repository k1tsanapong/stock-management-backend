const db = require('../db');

const getAllWarehouses = async () => {

    let results = [];

    try {
         results = await db
        .select('*')
        .from('warehouses');

        

        return JSON.stringify({ "status": 200, "error": null, "response": results });
;
    } catch (err) {
        return JSON.stringify({ "status": 500, "error": err, "response": results });
    }
};

const createWarehouse = async (data) => {

    const {warehouse_name} = data ?? {};

    let results = [];

    try {
        results = await db
        .insert({warehouse_name}).into('warehouses');

        return JSON.stringify({ "status": 200, "error": null, "response": results });
    }
    catch (err)
    {
        return JSON.stringify({ "status": 500, "error": err, "response": results });
    }
}



module.exports = {
    getAllWarehouses,
    createWarehouse,

};