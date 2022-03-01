const socket = new WebSocket('ws://localhost:3000');

// Connection opened
// socket.addEventListener('open', function (event) {
//     socket.send('Hello Server!');
// });

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('event.data ', event.data);
    console.log('typeof event.data ', typeof event.data);
});
