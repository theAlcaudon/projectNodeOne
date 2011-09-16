var http = require( 'http' ),
    url = require( 'url' );

function iniciar( route, handle )
{
    function onRequest( request, response ) 
    {
        var dataPosteada = "";
        var pathname = url.parse( request.url ).pathname;
        console.log( "Peticion para " + pathname + " recibida." );

        request.setEncoding( "utf8" );

        request.addListener( "data", 
            function(trozoPosteado) 
            {
              dataPosteada += trozoPosteado;
              console.log( "Recibido trozo POST '" + trozoPosteado + "'." );
            }
        );

        request.addListener( "end", 
            function() 
            {
                route( handle, pathname, response, dataPosteada );
            }
        );

    }

    http.createServer( onRequest ).listen(process.env.C9_PORT, "0.0.0.0" );
    console.log( 'Servidor Iniciado ' );

}

exports.iniciar = iniciar;

/* .listen(process.env.C9_PORT, "0.0.0.0"); */