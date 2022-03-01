const WebSocket = require('ws');

const ws = new WebSocket('ws://127.0.0.1:3000/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&notify_self');
// const ws = new WebSocket('wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&notify_self');

ws.on('open', () => {
    ws.send('something');
});

ws.on('close', (code, reason) => {
    console.log('code', code);
    console.log('reason', reason);
    console.log('reason', reason.toString());
});

ws.on('message', (data, isBin) => {
    console.log('isBin', isBin);
    console.log('message', data, data.toString());
    // console.log('message toString', data.toString());
    // console.log('data instanceof Buffer', data instanceof Buffer);
    // // setTimeout(() => ws.send('echo ' + data), 1000);
    setTimeout(() => ws.send(Buffer.from([1,2,3])), 1000);
    // setTimeout(() => ws.send('interval'), 1000);
});

ws.on('error', err => {
    console.log(err instanceof Error);
    console.error(err.code);
})
