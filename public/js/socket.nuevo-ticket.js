// Comando para establecer la conexión

var socket = io();
var label = $('#lblNuevoTicket');

// Escuchar (on)
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar (on)
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Escuchar (on)
socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});