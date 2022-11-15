const productModels = require('../models/productsModels');

const getAllProducts = async (req, res) => {
    const allProducts =  await productModels.getAllProducts();
    console.log(allProducts);
    res.render('products',{allProducts});
  };

  
const createProductPage = (req, res) => {
  res.render('createProduct');
};

const createProduct = async(req, res) => {
  const createdProduct = await productModels.createProduct(req.body);
  res.redirect('/')
};

  module.exports = {
    getAllProducts,
    createProductPage,
    createProduct,
  };
  