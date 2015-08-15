var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function actualizarMensaje(parms,callback){

  mysql.query("UPDATE INTO mensaje (nombre, asunto,
    fechanac,perfiltipoid, Usuarios_userid)
    values('%s','%s','%d','%s','%d','%d' );",parms,function(err,rs){
    callback(err,rs);
  });

}

module.exports = actualizarMensaje;
