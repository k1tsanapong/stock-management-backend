const knex =require('knex');
const mysql = require(`mysql-await`);


const db = knex.default({
    client: 'mysql2',
    connection: {  
        user: 'root',
        password: 'kitsanapong',
        host: '127.0.0.1',
        port: 3306,
        database: 'dbsour20'
    }
})


const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "kim",
    password: "kim",
    database: "dbsour20",
    port:3306
  });

module.exports = {
    db,
    conn,
};