var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  socket.on('lessonNotification', function(lesson){
    io.emit('lessonNotification', lesson);
  });
});

var port = Number(process.env.PORT || 5000)
http.listen(port, function(){
  console.log('listening on port ' + port);
});
