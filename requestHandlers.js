var querystring = require("querystring"),
    fs          = require('fs');

function iniciar( response, postData )
{
    fs.readFile( './views/iniciar.html',
        function ( err, data )
        {
            if ( err ) throw err;
            
            response.writeHead( 200, {'Content-Type': 'text/html','Content-Length':data.length} );
            response.write( data );
            response.end();
        }
    );

}

function subir(response, dataPosteada) 
{
    console.log( "Manipulador de peticion 'subir' fue llamado." );
    response.writeHead( 200, { "Content-Type": "text/html" } );
    response.write( "Tu enviaste el texto: : " + querystring.parse(dataPosteada)["text"] );
    response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;