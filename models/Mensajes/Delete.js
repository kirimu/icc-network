var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function DeleteMenseje(parms,callback){

  mysql.query("DELETE  usuaios SET Idmensaje = MD5('') WHERE usermail = '';",parms,function(err,rs){
    callback(err,rs);
  });

}

module.exports = eliminarMensaje;
