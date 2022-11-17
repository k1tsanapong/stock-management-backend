const productModels = require('../models/products.models');

const getAllProducts = async (req, res) => {
    const allProducts =  await productModels.getAllProducts();
    res.render('products',{allProducts});
  };

  
const createProductPage = (req, res) => {
  res.render('createProduct');
};

const createProduct = async(req, res) => {
  const createdProduct = await productModels.createProduct(req.body);
  res.redirect('/')
};

const uploadImageProduct = async (req, res) => {


  const uploadImageProduct = await productModels.uploadImageProduct(req.files);

  // const resFromUpload = JSON.stringify({ "detail": req.body, "img": uploadImageProduct});

  // const resFromUploadObject = JSON.parse(resFromUpload);

  // console.log(resFromUpload)

  // const createdProduct = await productModels.createProduct(resFromUploadObject);
  res.redirect('/')

}

  module.exports = {
    getAllProducts,
    createProductPage,
    createProduct,
    uploadImageProduct,
  };
  