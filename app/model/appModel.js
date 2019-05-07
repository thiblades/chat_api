"user strict";
var sql = require("./db.js");

//User object constructor
var User = function(User) {
  this.pseudo = User.pseudo;
  this.passe = User.passe;
  this.admin = User.admin;
  this.couleur = User.couleur;
  this.connecte = User.connecte;
};

// User.createUser = function createUser(newUser, result) {
//         sql.query("INSERT INTO users set ?", newUser, function (err, res) {

//                 if(err) {
//                     console.log("error: ", err);
//                     result(err, null);
//                 }
//                 else{
//                     console.log(res.insertId);
//                     result(null, res.insertId);
//                 }
//             });
// };

User.getAllUser = function getAllUser(result) {
  sql.query("Select * from users", function(err, res) {
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
  sql.query(
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

// User.updateById = function(id, User, result){
//   sql.query("UPDATE Users SET users = ? WHERE id = ?", [User.User, id], function (err, res) {
//           if(err) {
//               console.log("error: ", err);
//                 result(null, err);
//              }
//            else{
//              result(null, res);
//                 }
//             });
// };
// User.remove = function(id, result){
//      sql.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {

//                 if(err) {
//                     console.log("error: ", err);
//                     result(null, err);
//                 }
//                 else{

//                  result(null, res);
//                 }
//             });
// };

module.exports = User;