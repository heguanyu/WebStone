var express = require('express');
var _ = require("underscore");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var iojs = require('./server/io.js');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/assets', express.static(__dirname + '/assets'));

io.on('connection', function(socket){
    socket.join("room1");
  _.each(
      iojs.getAllIOs(),
      function(ioName) {
        socket.on(ioName, _.bind(iojs[ioName], this, socket));
      }
  )
});

http.listen(8000, function(){
  console.log('listening on *:8000');
});
