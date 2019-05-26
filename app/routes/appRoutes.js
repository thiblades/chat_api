"use strict";

module.exports = function(app) {
  var user = require("../controller/userController");
  var conversation = require("../controller/conversationController");
  var message = require("../controller/messageController");

  // Users Routes
  app
    .route("/users")
    .get(user.list_all_users)
    .post(user.create_a_user);
  app
    .route("/users/:userId")
    .get(user.get_user_info)
    .put(user.update_user_couleur)
    .delete(user.delete_user);
  app.route("/users/login").put(user.connect_user);
  app.route("/users/logout").put(user.logout_user);

  //Conversations Routes
  app
    .route("/conversations")
    .get(conversation.list_all_conversations)
    .post(conversation.create_a_conversation);

  app
    .route("/conversations/:conversationId")
    .get(conversation.get_conv_info)
    .delete(conversation.delete_conversation);
  app.route("/conversations/archive").put(conversation.archive_conversation);
  app.route("/conversations/reactive").put(conversation.reactive_conversation);

  //Messages Routes
  app
  .route("/messages/:conversationId")
  .get(message.list_all_messages)
  .post(message.create_a_message);
  app
  .route("/message/:messageId")
  .delete(message.delete_message);
};
