const ex = require('express');
const ws = require('ws')

const expressServer = ex();
const wsServer = new ws.Server({
    server: expressServer.listen(3000),
    host : '26.100.76.12',
    path : '/'
})

let clients = [];
wsServer.on('connection', (e, req)=>{
    clients.push(e);
    ip = req.socket.remoteAddress;
    console.log('Alguém Conectou, Ip: ' + ip);
    e.on('message', (msg)=>{
        console.log('Chegou mensagem: ' + msg)

        clients.forEach(ws => {
            ws.send(msg.origin + ' disse: '+msg);
        });
    })

})

expressServer.listen( ()=> console.log('Listening...'));