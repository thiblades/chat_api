const express = require('express');
const routes = require('./app/routes/appRoutes'); //importing route
const session = require('express-session');
const config = require('./config');



app = express();
bodyParser = require('body-parser');
port = process.env.PORT || 3000;
 

app.listen(port);

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); //register the route