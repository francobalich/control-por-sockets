const txtUsername = document.getElementById("txtUsername");
//La comunicacion por Sockets la realizaremos por el puerto 3000
const socket = io("http://localhost:3000/");

//Funciones
const enviarMensaje=(etiqueta,mensaje)=>{
    socket.emit(etiqueta,mensaje);
}
socket.on('username', (data)=>{
    txtUsername.innerHTML = data;
});