const express = require('express');
const fileUpload = require('express-fileupload');

const hbs = require('hbs');

const homePage = require('./routers/homePage')
const ProductRouter = require("./routers/productsRouter");


const app = express();

app.use(fileUpload());

app.use(express.urlencoded({ extended: true}));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use('/static', express.static('static'));

app.use('/', homePage);
app.use("/products", ProductRouter);






app.listen(3000, () => {
    console.log('start');

})
