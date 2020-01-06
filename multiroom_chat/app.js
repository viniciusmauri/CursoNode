var app = require('./config/server');

var server = app.listen(8080, function() {
    console.log('Servidor Online');
})

var io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', function(socket) {
    socket.on('disconnect', function() {});

    /**Dialogo*/
    socket.on('msgParaServidor', function(data) {
        socket.emit('msgParaCliente', {
            apelido: data.apelido,
            mensagem: data.mensagem
        });

        socket.broadcast.emit('msgParaCliente', {
            apelido: data.apelido,
            mensagem: data.mensagem
        });
        /**Participantes */
        if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {
            socket.emit('participantesParaCliente', {
                apelido: data.apelido
            });

            socket.broadcast.emit('participantesParaCliente', {
                apelido: data.apelido
            });
        }
    });
});