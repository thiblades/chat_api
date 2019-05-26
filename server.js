const express = require('express');
const mysql = require('mysql');
const routes = require('./app/routes/appRoutes'); //importing route

// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: '',// your username
    password: '',//your pass
    database: '' // db
});

app = express();
bodyParser = require('body-parser');
port = process.env.PORT || 3000;
 
// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); //register the route