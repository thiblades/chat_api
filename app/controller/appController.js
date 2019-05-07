"use strict";

var User = require("../model/appModel.js");

exports.list_all_users = function(req, res) {
  User.getAllUser(function(err, User) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", User);
    res.send(User);
  });
};

exports.connect_user = function(req, res) {
  User.connectUser(req.body, function(err, User) {
    console.log("test connexion : ", req.body);
    if (err) res.send(err);
    res.json(User);
  });
};

/*

exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);

  //handles null error 
   if(!new_user.user || !new_user.status){

            res.status(400).send({ error:true, message: 'Please provide User/status' });

        }
else{
  
  User.createUser(new_user, function(err, User) {
    
    if (err)
      res.send(err);
    res.json(User);
  });
}
};


exports.read_a_user = function(req, res) {
  User.getUserById(req.params.userId, function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};




exports.delete_a_user = function(req, res) {


  User.remove( req.params.userId, function(err, User) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
}; */
