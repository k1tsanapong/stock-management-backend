const express = require('express');
const fileUpload = require('express-fileupload');

const cors = require('cors');
const app = express();

app.use(cors({ origin: true }));
app.use(cors());

const hbs = require('hbs');

const homePage = require('./routers/homePage');
const productsRouter = require('./routers/products.router');
const warehousesRouter = require('./routers/warehouses.router');



app.use(fileUpload());

app.use(express.urlencoded({ extended: true}));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use('/static', express.static('static'));

app.use('/', homePage);
app.use('/products', productsRouter);
app.use('/warehouses', warehousesRouter);






app.listen(3001, () => {
    console.log('start');
    console.log('http://localhost:3001/');
})
