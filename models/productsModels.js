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

const createProduct = async (data) => {

    const {product_name, product_detail, product_img, critical, min, max, barcode} = data ?? {};
    
    let results = [];

    try {
        results = await db
        .insert({product_name, product_detail, product_img, critical, min, max, barcode}).into('product_types');
    }
    catch (err)
    {
        console.error(err);
    }
}

module.exports = {
    getAllProducts,
    createProduct,
};