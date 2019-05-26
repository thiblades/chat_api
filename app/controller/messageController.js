"use strict";

const Message = require("../model/messageModel.js");

exports.list_all_messages = function(req, res) {
  Message.getAllMessage(req.params.conversationId, function(err, Message) {
    if (err) res.send(err);
    res.send(Message);
  });
};

exports.create_a_message = function(req, res) {
  const new_message = new Message(req.body);

  //handles null error
  if (!new_message.contenu) {
    res
      .status(400)
      .send({ error: true, message: "Please provide pseudo/passe" });
  } else {
    Message.createMessage(new_message, function(
      err,
      Message
    ) {
      if (err) res.send(err);
      res.json(Message);
    });
  }
};

exports.delete_message = function(req, res) {
  Message.remove(req.params.messageId, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
}