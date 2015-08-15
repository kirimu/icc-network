var mysql = require("../mydb.js");
var mongo = require("../modb.js");

function crearProyecto(parms,callback){

  mysql.query("INSERT INTO proyecto (proyectonombre, proyectodescripcion,"+
    "proyectoimagen, proyectodocumentacion, proyectoversion, proyectogiturl, clases_idClases, lenguajes_idLenguaje, usuario_userid)"+
    "values('%s','%s','%s','%s','%s','%s',1,1,'1');",parms,function(err,rs){
    callback(err,rs);
  });

}

module.exports = crearProyecto;
