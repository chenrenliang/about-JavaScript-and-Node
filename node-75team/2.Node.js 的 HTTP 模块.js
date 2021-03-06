const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})

    res.end('hello world!')
})

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

server.listen(10080, () => {
    console.log('opened server on', server.address()) // { address: '::', family: 'IPv6', port: 10080 }
})