const ex = require('express');
const ws = require('ws')

const expressServer = ex();
const wsServer = new ws.Server({
    server: expressServer.listen(3000),
    host : '26.100.76.12',
    path : '/'
})

wsServer.on('connection', (e)=>{
    console.log('Alguém Conectou');
    e.on('message', (msg)=>{
        console.log('Chegou mensagem: ' + msg)

        e.send(msg.data)
    })

})

expressServer.listen( ()=> console.log('Listening...'));