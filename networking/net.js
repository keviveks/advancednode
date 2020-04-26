const server = require('net').createServer();

server.on('connection', socket => {
  console.log('client connected!');
  socket.write('Welcome new client \n');

  socket.on('data', data => {
    console.log('data is: ', data);
    socket.write('data is: ');
    socket.write(data);
  });

  socket.on('close', () => {
    console.log('client disconnected!');
  });
});

server.listen(8080, () => console.log('Server bond!!'));
