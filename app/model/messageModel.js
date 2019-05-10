"Conversation strict";
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
module.exports = Message;
