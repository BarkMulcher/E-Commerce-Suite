// import mysql
const mysql = require('mysql2');

// create connection
const conx = mysql.createConnection({
    host: 'localhost',
    user: 'ecommerce_db',
    password: 'password',
    database: 'ecommerce_db'
});

module.exports = conx;
