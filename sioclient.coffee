sio = require('socket.io-client')
io = sio.connect('http://localhost:8080')

io.on('ready', (data) ->
  console.log(JSON.stringify(data))
  io.close()
)
io.on('connect', () ->
  io.emit('login', {
    employee: "95D22"
    password: "longbow2"
  })
)
