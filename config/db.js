const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: 'ls-e2029d66e023eb4cf5366724fe912a2e37ded960.czmq42a8qw3q.eu-west-2.rds.amazonaws.com',
    user: 'dbmasteruser',        // Default MySQL username in XAMPP
    password: 'London1995',        // Default MySQL password is empty in XAMPP
    database: 'solidblack',  // Your database name
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as id ' + connection.threadId);
    connection.release(); // Don't forget to release the connection back to the pool
});

module.exports = pool.promise();
