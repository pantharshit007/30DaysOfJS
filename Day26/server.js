// server.js
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
    console.log('> Client connected 🟢');

    ws.on('message', (data) => {
        const { type, message, username } = JSON.parse(data);;
        // console.log(`> Received: ${message} ${username}`);

        // Broadcast the message to all connected clients
        server.clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                const incoming = JSON.stringify({ type, message, username })
                client.send(incoming);
            }
        })
    });

    ws.on('close', () => {
        console.log('> Client disconnected 🔴');
    });
});

console.log('>> WebSocket server is running on ws://localhost:8080');
