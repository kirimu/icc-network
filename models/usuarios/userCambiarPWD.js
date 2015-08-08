var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function eliminarMensaje(parms,callback){

  mysql.query("DELETE usuarios SET Idmensaje = MD5('') WHERE usermail = '';",parms,function(err,rs){
    callback(err,rs);
  });

}

module.exports = eliminarMensaje;
