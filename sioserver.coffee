sio = require('socket.io')
io = sio.listen(8080)
io.on 'connection', (socket) ->
  console.log socket.id + ' connecting'
  socket.on 'login', (data) ->
    console.log socket.id + ' login with ' + JSON.stringify(data)
    socket.emit 'ready', data
  socket.on 'disconnect', ->
    console.log socket.id + ' disconnected'
