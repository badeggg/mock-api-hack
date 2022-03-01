const WebSocket = require('ws');

const ws = new WebSocket('ws://127.0.0.1:3000/?name=xuxu');

ws.on('open', () => {
    // ws.send('0000000000000000000000000000000000000000000000000');
    ws.send(Buffer.from('你好').slice(0,4), {binary: false});
});

ws.on('close', (code, reason) => {
    console.log('code', code);
    console.log('reason', reason);
    console.log('reason', reason.toString());
});

ws.on('error', (err) => {
    console.error(err);
});

ws.on('message', (data, isBin) => {
    // console.log('isBin', isBin);
    console.log('message', data.toString());
    // console.log('message toString', data.toString());
    // console.log('data instanceof Buffer', data instanceof Buffer);
    // // setTimeout(() => ws.send('echo ' + data), 1000);
    setTimeout(() => ws.send(), 1000);
});
