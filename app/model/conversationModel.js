"use strict";
const sql = require("./db.js");

//Conversation object constructor
const Conversation = function(Conversation) {
  this.id = Conversation.id;
  this.active = Conversation.active;
  this.theme = Conversation.theme;

};

Conversation.createConversation = function createConversation(newConversation, result) {
        sql.query("INSERT INTO conversations set ?", newConversation, function (err, res) {

                if(err) {
                    result(err, null);
                }
                else{
                    result(null, res.insertId);
                }
            });
};

Conversation.getAllConversation = function getAllConversation(result) {
  sql.query("Select * from conversations", function(err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Conversation.archiveConversation = function archiveConversation(Conversation, result) {
  sql.query("UPDATE conversations SET active='0' WHERE id= ?;", [Conversation.id], function(
    err,
    res
  ) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};


Conversation.reActiveConversation = function reActiveConversation(Conversation, result) {
  sql.query("UPDATE conversations SET active='1' WHERE id= ?;", [Conversation.id], function(
    err,
    res
  ) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Conversation.getConversationById = function getConversationById(ConversationId, result){
    sql.query("SELECT * from conversations where id = ?", ConversationId, function(err, res){
        if(err) {
            result(err, null);
        }
        else{
            result(null, res);
      
        } 
    })
}


Conversation.remove = function(id, result){
     sql.query("DELETE FROM conversations WHERE id = ?", [id], function (err, res) {

                if(err) {
                    result(null, err);
                }
                else{

                 result(null, res);
                }
            });
};
module.exports = Conversation;

