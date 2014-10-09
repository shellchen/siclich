(function() {
  var io, sio;

  sio = require('socket.io');

  io = sio.listen(8080);

  io.on('connection', function(socket) {
    console.log(socket.id + ' connecting');
    socket.on('login', function(data) {
      console.log(socket.id + ' login with ' + JSON.stringify(data));
      return socket.emit('ready', data);
    });
    return socket.on('disconnect', function() {
      return console.log(socket.id + ' disconnected');
    });
  });

}).call(this);
