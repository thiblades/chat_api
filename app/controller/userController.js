"use strict";

import User from "../model/userModel.js";

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
    const sess = req.session;
    if (sess.views) {
      sess.views++;
    } else {
      sess.views = 1
    }
    response = { status: 200, message: "Login successful!", authenticated: true, user_id: user_id, views: sess.views }
    res.status(response.status).send(JSON.stringify(response));
    if (err) res.send(err);
    res.json(User);
  });
};

exports.logout_user = function(req, res) {
  User.logoutUser(req.body, function(err, User) {
    console.log("test logout : ", req.body);
    if (err) res.send(err);
    res.json(User);
  });
};

exports.create_a_user = function(req, res) {
  const new_user = new User(req.body);
console.log("creation d'un nouveau utilisateur");
  //handles null error
  if (!new_user.pseudo || !new_user.passe) {
    res
      .status(400)
      .send({ error: true, message: "Please provide pseudo/passe" });
  } else {
    User.createUser(new_user, function(err, User) {
      if (err) res.send(err);
      res.json(User);
    });
  }
};

exports.get_user_info = function(req, res) {
  User.getUserById(req.params.userId, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.update_user_couleur = function(req, res) {
  User.updateUserColor(req.params.userId, req.body, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.delete_user = function(req, res) {
  User.remove(req.params.userId, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};
