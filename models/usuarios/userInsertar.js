var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function insertarUsuario(parms,callback){

  mysql.query("INSERT INTO usuarios (usernombre, usermail, userpwd, usercuenta, usercerfch, userultacc, usersalt, Campus_idcampus, Roles_idroles, userestado) values('%s','%s','%s','%s','%s','%s','%s',%s,%s,'%s' ) WHERE userid= ?;",[parms.usuarios],function(err,rs){
    callback(err,rs);
  });

}

module.exports = insertarUsuario;
