var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);
var connections = 0;
app.get('/',function(req,res)
{
    res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection',function(socket)
{
    
    console.log('connecting');
    
    // socket.on('disconnect',function(msg)
    // {
    //     console.log('Disconnected.......   '); 
    //     connections--;
    // });
    socket.on('chat message',function(msg)
    {
        io.sockets.emit('new chat message',{message :msg});
        console.log(msg);
       
    }); 
});

http.listen(3001,function()
{
    console.log('listening  .....');
});