var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('./public'));

io.on('connection', function(clientSocket) {
     clientSocket.on('draw', function(coords) {
          io.emit('draw', coords);

          // clientSocket.on('clear', function() {
          //      io.emit('clear');
          // });
     });

     clientSocket.on('clear', function() {
          console.log('xxx');
          io.emit('clear');
     });
});


// io.on('connection', function(clientSocket) {
//      clientSocket.on('clear', function() {
//           io.emit('clear');
//      });
// });

//create listener and broadcaster
server.listen(3000, function() {
     console.log('Listening on 3000...');
});
