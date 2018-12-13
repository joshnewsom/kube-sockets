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

  console.log('\n\n\n\n\n********************')
  console.log('++++ connection ++++')
  console.log('********************\n\n\n\n\n')

  socket.on('hi', () => {
    console.log(' hi ')
  })
})

io.on('disconnect', () => {
  console.log('\n\n\n\n\n********************')
  console.log('---- disconnect ----')
  console.log('********************\n\n\n\n\n')
})