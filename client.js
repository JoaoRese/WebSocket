const ws = new WebSocket('ws://26.100.76.12:3000');

ws.onopen = ()=> console.log('Connected to the socket');

ws.onmessage = (msg) => alert('New message: '+ msg.data)

document.addEventListener('ready', ()=>{
    alert('oi');
})