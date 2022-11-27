const express = require("express");
const fileUpload = require("express-fileupload");

const cors = require("cors");
const app = express();

app.use("/static", express.static("static"));

app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: true }));
app.use(cors());

const hbs = require("hbs");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

const homePage = require("./routers/homePage");
const productsRouter = require("./routers/products.router");
const warehousesRouter = require("./routers/warehouses.router");
const itemsRouter = require('./routers/items.router');
const ordersRouter = require('./routers/orders.router');


app.use("/", homePage);
app.use("/items", itemsRouter);
app.use("/products", productsRouter);
app.use("/warehouses", warehousesRouter);
app.use("/orders", ordersRouter);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("start");
  console.log("http://localhost:" + PORT);
});

//test ssh 
