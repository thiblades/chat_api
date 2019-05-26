'use strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'thibaut',
    password : 'test123',
    database : 'chat_mobile'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;