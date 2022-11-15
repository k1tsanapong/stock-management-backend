const db = require('../db');

const getAllProducts = async () => {

    let results = [];

    try {
         results = await db
        .select('*')
        .from('product_types');

        

        return results;
    } catch (err) {
        return results;
    }
};

module.exports = {
    getAllProducts
};