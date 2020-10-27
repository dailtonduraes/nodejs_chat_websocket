/** configurações do servidor */

const app = require('./config/server');


/**Parametrizar porta */
var server = app.listen(80, function(){
    console.log('server on');
})

//
var io = require('socket.io').listen(server);

//definindo var global io
app.set('io', io);

//criando conexao pelo websocket
io.on('connection', function(socket){
    console.log('usuário conectou!!!');

    socket.on('disconnect', function(){
        console.log('Usuário saiu do chat');
    })
})
