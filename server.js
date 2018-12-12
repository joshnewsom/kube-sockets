const express = require('express')
const app = express()

const server = app.listen(8080)

const io = require('socket.io')(server)

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.status(200).sendFile(`${__dirname}/index.html`)
})

setInterval(function () {
  io.emit('test', { data: Math.floor(Math.random() * 100) })
}, 2000)

io.on('connection', socket => {
  socket.on('hi', () => {
    console.log(' hi ')
  })
})