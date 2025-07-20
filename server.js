const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // Allows connections from any origin (good for development)
        methods: ["GET", "POST"]
    }
});

// Serve a simple HTML file for testing
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Will create this in a moment
});

// Socket.IO connection logic
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // When a message is received from a client
    socket.on('chat message', (msg) => {
        console.log('Message received:', msg);
        // Broadcast the message to all connected clients
        io.emit('chat message', msg);
    });

    // When a client disconnects
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});