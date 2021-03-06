"use strict";
import config from  "../../config";
import bcrypt from 'bcrypt';

//User object constructor
const User = function(User) {
  this.pseudo = User.pseudo;
  this.passe = User.passe;
  this.admin = User.admin;
  this.id = User.id;
  this.couleur = User.couleur;
  this.connecte = User.connecte;
};

User.createUser = function createUser(newUser, result) {
  console.log("creating users.........");
  bcrypt.hash(newUser.passe, 15).then(function(hash) {
    // Store hash in your password DB.
    newUser.passe = hash;
    config.sql.query("INSERT INTO users set ?", newUser, function (err, res) {

      if(err) {
          console.log("error: ", err);
          result(err, null);
      }
      else{
          console.log(res);
          result(null, res.insertId);
      }
});
  });
};

User.getAllUser = function getAllUser(result) {
  config.sql.query("Select * from users", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Users : ", res);

      result(null, res);
    }
  });
};

User.connectUser = function connectUser(user, result) {
  config.sql.query(
    "UPDATE users SET connecte='1' WHERE pseudo= ? and passe= ?;",
    [user.pseudo, user.passe],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("conect user", res);
        result(null, res);
      }
    }
  );
};

User.logoutUser = function logoutUser(user, result) {
  config.sql.query("UPDATE users SET connecte='0' WHERE id= ?;", [user.id], function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("conect user", res);
      result(null, res);
    }
  });
};

User.getUserById = function getUserById(userId, result){
    config.sql.query("SELECT * from users where id = ?", userId, function(err, res){
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
      
        } 
    })
}

User.updateUserColor = function(id, User, result){

  config.sql.query("UPDATE users SET couleur = ? WHERE id = ?", [User.couleur, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{
             result(null, res);
                }
            });

}

User.remove = function(id, result){
     config.sql.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{

                 result(null, res);
                }
            });
};
module.exports = User;

