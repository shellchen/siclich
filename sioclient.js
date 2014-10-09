(function() {
  var io, sio;

  sio = require('socket.io-client');

  io = sio.connect('http://localhost:8080');

  io.on('ready', function(data) {
    console.log(JSON.stringify(data));
    return io.close();
  });

  io.on('connect', function() {
    return io.emit('login', {
      employee: "95D22",
      password: "longbow2"
    });
  });

}).call(this);
