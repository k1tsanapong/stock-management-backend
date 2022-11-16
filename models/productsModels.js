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

    console.log('obj')
    console.log('====================')
    console.log(data)


    const {product_name, product_detail, critical, min, max, barcode} = data.detail ?? {};
    const product_img = data.img;
    // const product_img = data.files.product_img.name ?? {};

    console.log(data.detail)
    console.log(data.img)
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

const uploadImageProduct = async (data) => {

    const { product_img } = data ?? {};
    
    // console.log(product_img)

    // If no image submitted, exit
    if (!product_img) return data;

    // Move the uploaded image to our upload folder
    await product_img.mv(__dirname + '/../' + '/static/' + product_img.name);

    return product_img.name


}

module.exports = {
    getAllProducts,
    createProduct,
    uploadImageProduct,
};