// 14-request-event.js

const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end("Welcome!")
// })

const server = http.createServer()

server.on('request', (req, res) => {
    res.end("Welcome!!!")
})


// server.listen('Server is running on http://localhost:5000')
server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
})
