var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function mensaje(parms,callback){

  mysql.query("SELECT * FROM mensaje WHERE Idmensaje = ?;",parms,function(err,rs){
    callback(err,rs);
  });

}

module.exports = login;
