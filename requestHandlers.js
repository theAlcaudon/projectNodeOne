var querystring =   require("querystring");
var fs          =   require('fs');

function iniciar(response, postData) 
{
    console.log("Manipulador de peticion 'inicio' fue llamado.");
    fs.readFile('./views/iniciar.html',function (err, data){
        response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        response.write(data);
        response.end();
    });
}

function subir(response, dataPosteada) {
    console.log("Manipulador de peticion 'subir' fue llamado.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Tu enviaste el texto: : " + querystring.parse(dataPosteada)["text"]);
    response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;