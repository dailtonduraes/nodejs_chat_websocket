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

    //msgToServer
    socket.on('msgToServer', function(data){

        /**dialogos */
        socket.emit(
            'msgToClient', 
            {apelido:data.apelido, mensagem:data.mensagem}
        );

        //emit mesg para todos conectados no socket
        socket.broadcast.emit(
            'msgToClient', 
            {apelido:data.apelido, mensagem:data.mensagem}
        );


        //#########################    
        /**participantes */
        if(parseInt(data.apelido_atualizado_cli) == 0){
            socket.emit(
                'participantToClient', 
                {apelido:data.apelido}
            );

            //emit mesg para todos conectados no socket
            socket.broadcast.emit(
                'participantToClient', 
                {apelido:data.apelido}
            );
        }
    


    })
})
