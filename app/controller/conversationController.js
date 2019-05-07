"use strict";

var Conversation = require("../model/conversationModel.js");

exports.list_all_conversations = function(req, res) {
  Conversation.getAllConversation(function(err, Conversation) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", Conversation);
    res.send(Conversation);
  });
};

exports.create_a_conversation = function(req, res) {
  var new_conversation = new Conversation(req.body);

  //handles null error
  if (!new_conversation.theme) {
    res
      .status(400)
      .send({ error: true, message: "Please provide pseudo/passe" });
  } else {
    new_conversation.active = 1;
    Conversation.createConversation(new_conversation, function(
      err,
      Conversation
    ) {
      if (err) res.send(err);
      res.json(Conversation);
    });
  }
};

exports.archive_conversation = function(req, res) {
  Conversation.archiveConversation(req.body, function(err, Conversation) {
    console.log("test archive : ", req.body);
    if (err) res.send(err);
    res.json(Conversation);
  });
};

exports.reactive_conversation = function(req, res) {
  Conversation.reActiveConversation(req.body, function(err, Conversation) {
    console.log("test reactive : ", req.body);
    if (err) res.send(err);
    res.json(Conversation);
  });
};

exports.get_conv_info = function(req, res) {
  Conversation.getConversationById(req.params.conversationId, function(
    err,
    Conversation
  ) {
    if (err) res.send(err);
    res.json(Conversation);
  });
};

exports.delete_conversation = function(req, res) {
  Conversation.remove(req.params.userId, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};
