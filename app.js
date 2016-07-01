var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res){
     res.sendfile('index.html');
});

io.on('connection', function(clientSocket) {
     clientSocket.on('draw', function(coords) {
          io.emit('draw', coords);
     });
});

//create listener and broadcaster
server.listen(3000, function() {
     console.log('Listening on 3000...');
});
