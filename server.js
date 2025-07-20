// server.js
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http); // Initialize Socket.IO with the HTTP server

// Serve static files from the 'public' directory
// This line makes all files inside the 'public' folder accessible via the web server.
// For example, http://localhost:3000/index.html, http://localhost:3000/style.css, etc.
app.use(express.static('public'));

// Define the root route. When someone accesses http://localhost:3000/,
// Express.static('public') will automatically serve 'public/index.html' if it exists.
// We can explicitly send it for clarity or if there's no default index file.
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for 'message' events from the client (from public/script.js)
  socket.on('message', (data) => {
    console.log('Message received: ' + data);
    // Broadcast the received message to ALL connected clients
    io.emit('message', data);
  });

  // Handle client disconnections
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});