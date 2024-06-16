const mongoose = require('mongoose');


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'rateThePolicy'
});

module.exports = pool.promise();