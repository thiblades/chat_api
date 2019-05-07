'use strict';

module.exports = function(app) {
  var chat = require('../controller/appController');
  console.log('testute Route : ', chat);

  // Users Routes
  app.route('/users')
    .get(chat.list_all_users)

  app.route('/users/connexion')
    .post(chat.connect_user);    
    //.post(chat.create_a_user);
};