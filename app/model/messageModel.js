"use strict";
var sql = require("./db.js");

//Conversation object constructor
var Message = function(Message) {
  this.id = Message.id;
  this.idConversation = Message.idConversation;
  this.idAuteur = Message.idAuteur;
  this.contenu = Message.contenu;
};

Message.getAllMessage = function getAllMessage(conversationId, result) {
  sql.query(
    "SELECT m.contenu, u.pseudo as auteur, u.couleur FROM messages m, users u WHERE m.idConversation=? AND m.idAuteur=u.id AND u.blacklist=0;",
    conversationId,
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("test id ", conversationId);
        result(null, res);
      }
    }
  );
};

Message.createMessage = function createMessage(newMessage, result) {
  sql.query("INSERT INTO messages set ?", newMessage, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};


Message.remove = function(id, result){
  sql.query("DELETE FROM messages WHERE id = ?", [id], function (err, res) {

             if(err) {
                 console.log("error: ", err);
                 result(null, err);
             }
             else{

              result(null, res);
             }
         });
}

module.exports = Message;
