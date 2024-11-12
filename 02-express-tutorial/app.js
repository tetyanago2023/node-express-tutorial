// app.js

console.log('Express Tutorial');

const http = require('http');
const { readFileSync } = require('fs');

// get all files
const homePage = readFileSync('./index.html');

const server = http.createServer((req, res) => {
    // console.log('user hits a server')
    // console.log(req.method)
    // console.log(req.url)
    const url = req.url
    // home page
    if(url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        // res.write('<h1>Welcome to our home page</h1>')
        res.write(homePage)
        res.end()
    }
    // about page
    else if(url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>Welcome to our about page</h1>')
        res.end()
    }
    // 404 page
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }
})

server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
})
