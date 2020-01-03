var app = require('./config/server');

var server = app.listen(8080, function() {
    console.log('Servidor Online');
})

var io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', function(socket) {
    socket.on('disconnect', function() {});
});