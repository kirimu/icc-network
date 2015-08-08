var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function insertarMensaje(parms,callback){

  mysql.query("INSERT INTO perfil (asunto, nombre,
    fechanac, cel, perfiltipoid, Usuarios_userid)
    values('%s','%s','%d','%d','%s','%d','%d' ) WHERE perfilid= ?;",[parms.perfil],function(err,rs){
    callback(err,rs);
  });

}

module.exports = insertarMensaje;
