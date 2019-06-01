const mysql = require('mysql');

const databaseOptions = {
  host: '', // your host
  user: '',// your username
  password: '',//your password
  database: '' // you DB
}

// connection configurations
const connection = mysql.createConnection({
  host     : databaseOptions.host,
  database : databaseOptions.database,
  user     : databaseOptions.user,
  password : databaseOptions.password,
  port     : databaseOptions.port
});

connection.connect();

module.exports = {
    secret: 'worldisfullofdevelopers',
    sql : connection
  };