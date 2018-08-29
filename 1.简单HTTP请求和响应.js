const net = require('net')

let dataTpl = `HTTP/1.1 200 OK
Connection: keep-alive
Date: ${new Date()}
Content-Length: 12
Content-Type: text/plain;charset=utf8

Hello world!
`;

const server = net.createServer((socket) => {
    socket.setKeepAlive(true, 60000)

    socket.write(dataTpl)
    socket.pipe(socket)

    socket.on('data', data => {
        console.log('DATA: ' + socket.remoteAddress + ": " + data)
        

        // socket.end('goodbye!\n')
    })

    socket.on('close', () => {
        console.log('connection closed!\n\n\n')
    })

})

server.on('error', err => {
    throw err
    
})

server.listen({
    host: 'localhost',
    port: 8888,
    exclusive: true
}, () => {
    console.log('opened server on ', server.address())
    // { address: '127.0.0.1', family: 'IPv4', port: 8888 }
})