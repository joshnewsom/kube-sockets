var socket = io();

console.log('socket', socket);


setInterval(function () {
  socket.emit('hi');
}, 3000);


socket.on('test', function (msg) {
  console.log('test:', msg.data);
})

