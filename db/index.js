require('dotenv').config()

const knex =require('knex');
const mysql = require(`mysql-await`);


const db = knex.default({
    client: 'mysql2',
    connection: {  
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        // port: 3306,
    }
})


const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // port: 3306,
  });

module.exports = {
    db,
    conn,
};