

"use strict";

var Message = require("../model/messageModel.js");

exports.list_all_messages = function(req, res) {
  Message.getAllMessage(req.params.conversationId, function(err, Message) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", Message);
    res.send(Message);
  });
};
