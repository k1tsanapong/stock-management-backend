const db = require('../db');
const sharp = require("sharp");

const getAllProducts = async () => {

    let results = [];

    try {
         results = await db
        .select('*')
        .from('product_types');

        console.log('getAllProducts => Successes')

        return JSON.stringify({ "status": 200, "error": null, "response": results });
    } catch (err) {
        return JSON.stringify({ "status": 500, "error": err, "response": results });
    }
};

const createProduct = async (data) => {

    const {product_name, product_detail, critical, min, max, barcode} = data.detail ?? {};
    const product_img = data.img;

    let results = [];

    try {
        results = await db
        .insert({product_name, product_detail,product_img, critical, min, max, barcode}).into('product_types');
    }
    catch (err)
    {
        console.error(err);
    }
}

const uploadImageProduct = async (image) => {

    const { product_img } = image ?? {};
    // if (!product_img) return image;

    const { data } = product_img;

    const ref = `${Math.floor(100000 + Math.random() * 900000)}-${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}.jpg`;
    
    await sharp(data)
    .jpeg({ quality: 50 })
    .toFile(__dirname + '/../' + '/static/' + ref);
    return ref

}

module.exports = {
    getAllProducts,
    createProduct,
    uploadImageProduct,
};