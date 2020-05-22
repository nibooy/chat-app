const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.render('chat.ejs');
});

io.on('connection', (socket) => {
    socket.username = 'anonymous'
    console.log('someone connected')
    socket.on('message', (msg) => io.emit('message', {'user': socket.username, 'message': msg}))
    socket.on('join', (username) => {
        socket.username = username;
        io.emit('message', { user: '🔵', 'message': socket.username + ' joined the server.'});
    })
    socket.on('disconnect', (username) => {
        io.emit('message', { user: '🔴', 'message': socket.username + ' left the server.'});
    })
})

const server = http.listen(3000, () => console.log('Listening on port 3000'))