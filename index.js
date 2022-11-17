const express = require('express');
const fileUpload = require('express-fileupload');

const cors = require('cors');
const app = express();

app.use(cors({ origin: true }));
app.use(cors());

const hbs = require('hbs');

const homePage = require('./routers/homePage')
const ProductRouter = require("./routers/products.router");



app.use(fileUpload());

app.use(express.urlencoded({ extended: true}));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use('/static', express.static('static'));

app.use('/', homePage);
app.use("/products", ProductRouter);






app.listen(3001, () => {
    console.log('start');
    console.log('http://localhost:3001/');
})
