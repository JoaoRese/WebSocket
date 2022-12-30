
const ws = new WebSocket('ws://26.100.76.12:3000');

ws.onopen = ()=> alert('Connected to the socket');

ws.onmessage = (msg)=>{
    alert('Nova mensagem chegando: ' + msg.data + ' Origem: ' + msg.origin);
};

var btn_msg = document.getElementById('enviar-msg');
btn_msg.addEventListener('click', ()=>{
    var text_msg = document.getElementById('msg-text').value;
    ws.send(text_msg);
})
 