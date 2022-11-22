const productModels = require("../models/products.models");

const getAllProducts = async (req, res) => {
  const allProducts = await productModels.getAllProducts();
  // console.log(allProducts);
  res.send(allProducts);
};

const getOneProduct = async (req, res) => {
  const getOneProduct = await productModels.getOneProduct(req.params.id);
  // console.log(allProducts);
  res.send(getOneProduct);
};

const createProductPage = (req, res) => {
  res.render("createProduct");
};

const createProduct = async (req, res) => {
  const createdProduct = await productModels.createProduct(req.body);
  res.send(createdProduct);
};

const uploadImageProduct = async (req, res) => {
  const uploadImageProduct = await productModels.uploadImageProduct(req.files);

  const resFromUpload = JSON.stringify({
    detail: req.body,
    img: uploadImageProduct,
  });

  const resFromUploadObject = JSON.parse(resFromUpload);

  console.log(resFromUpload);

  const createdProduct = await productModels.createProduct(resFromUploadObject);

  res.send(createdProduct);
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProductPage,
  createProduct,
  uploadImageProduct,
};
