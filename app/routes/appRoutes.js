'use strict';

module.exports = function(app) {
  var user = require('../controller/userController');
  console.log('testute Route : ', user);

  // Users Routes
  app.route('/users')
    .get(user.list_all_users)
    .post(user.create_a_user);
  app.route('/users/:userId')
    .get(user.get_user_info)
    .put(user.update_user_couleur)
    .delete(user.delete_user);
  app.route('/users/login')
    .post(user.connect_user);    
    //.post(chat.create_a_user);
  app.route('/users/logout')
    .post(user.logout_user);
};