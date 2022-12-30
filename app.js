// Criando WebSocket, esse parametro 'ws://localhost:8080 define o endereço de conexão.
const socket = new WebSocket('wss://localhost:8080');


// Abrindo conexão com o server
socket.addEventListener('open', (e) =>{
    socket.send('Eae caralhooo!');

});

// Fazendo o Socket ficar ligeiro caso chegue alguma conexão

socket.addEventListener('message', (e) =>{
    console.log('Mensagem do servidor: ' + e.data);

})


