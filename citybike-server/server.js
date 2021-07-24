const express = require('express');
const http = require('http');
const cors = require('cors');
const routes = require("./routes");
const socketIo = require('socket.io');
const CityBikesController = require('./controllers')

const port = process.env.PORT || 4001;
const app = express();

const server = http.createServer(app);
const io = socketIo(server); // < Interesting!

io.on('connection', (socket) => {
  console.log('client connect - ', socket.id);

  socket.on('getData', (data) => CityBikesController.getData(socket, data.idCity));

  socket.on('getDataSearch', () => CityBikesController.getCities(socket));

  socket.on('disconnect', (reason) => {
    console.log('user disconnected', reason);
  });
});

app.use(cors());
app.use((request, response, next) => {
  request.io = io;
  next();
});
app.use(routes);

server.listen(port, () => console.log(`Listening on port ${port}`));
