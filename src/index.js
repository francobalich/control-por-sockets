// Instanciación de los objetos necesarios para crear un servidor local con Node.JS
const express = require('express');
const path = require('path');
const port = 8080;
const app = express();

// Instanciación de los objetos necesarios para la comunicación por Sockets
const server = require('http').createServer(app);
const io = require('socket.io')(server);


// Inicio server Node.JS
const iniciarServer=()=>{
  server.listen(port,()=>{
    console.log("El programa se esta ejecutando en el puerto: "+ port)
  });
  // Obtiene la ruta del directorio publico donde se encuentran los elementos estaticos (css, js).
  var publicPath = path.resolve(__dirname, '../public'); 
  // Para que los archivos estaticos queden disponibles.
  app.use(express.static(publicPath));
  
  app.get('/', function(req, res){
    res.sendFile(__dirname + '../public/index.html');
  });
}

// SOCKETS
// Funcion que envia por sockets los datos del ultimo mensaje del chat
const refreshFront=(username,msg)=>{
  io.emit("username",username);
  io.emit("text",msg);
}

// Inicia el server Node.JS
iniciarServer();
