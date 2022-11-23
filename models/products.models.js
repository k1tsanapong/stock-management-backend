const {db} = require("../db");
const sharp = require("sharp");

const {conn} = require("../db");



conn.connect((err) => {

  if (err) throw err;
    console.log(err);
    
  console.log("Mysql Connected...");
});


const getAllProducts = async () => {
  let results = [];

  try {
    // results = await db.select("*").from("product_types");

    /*
    results = await db('items')
    .select(['product_types.*'])
    .count('items.product_id AS count')
    .leftJoin('product_types', 'product_types.product_id', 'items.product_id')
    .groupBy(['items.product_id', 'product_types.product_name']);

    */


    let sql = "SELECT *, IFNULL(items_count, 0) AS product_count FROM product_types LEFT JOIN (SELECT product_id, count(*) as items_count FROM items GROUP BY product_id) properties USING (product_id);";
    let results = await conn.awaitQuery(sql);

    return JSON.stringify({ status: 200, error: null, response: results });
  } catch (err) {

    

    return JSON.stringify({ status: 500, error: err, response: results });
  }
};

const getOneProduct = async (id) => {
  let results = [];

  try {
    // results = await db.select("*,").from("product_types").where({product_id:id});
    let sql = "SELECT *, IFNULL(items_count, 0) AS product_count FROM product_types LEFT JOIN (SELECT product_id, count(*) as items_count FROM items GROUP BY product_id) properties USING (product_id) Where product_id = ?;";
    let results = await conn.awaitQuery(sql,id);

    return JSON.stringify({ status: 200, error: null, response: results });
  } catch (err) {
    return JSON.stringify({ status: 500, error: err, response: results });
  }
};

const createProduct = async (data) => {
  const { product_name, product_detail, critical, min, max, barcode } =
    data.detail ?? {};
  const product_img = data.img;

  let results = [];

  try {
    results = await db
      .insert({
        product_name,
        product_detail,
        product_img,
        critical,
        min,
        max,
        barcode,
      })
      .into("product_types");
    return JSON.stringify({ status: 200, error: null, response: results });

      
  } catch (err) {
    console.error(err);
    return JSON.stringify({ status: 500, error: err, response: results });

  }
};

const uploadImageProduct = async (image) => {
  const { product_img } = image ?? {};
  // if (!product_img) return image;

  const { data } = product_img;

  const ref = `${Math.floor(
    100000 + Math.random() * 900000
  )}-${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}.jpg`;

  await sharp(data)
    .jpeg({ quality: 50 })
    .toFile(__dirname + "/../" + "/static/" + ref);
  return ref;
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  uploadImageProduct,
};
