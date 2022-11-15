// const { connect } = require('http2');
const knex =require('knex');
// const Connection = require('mysql2/typings/mysql/lib/Connection');

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

module.exports = db;