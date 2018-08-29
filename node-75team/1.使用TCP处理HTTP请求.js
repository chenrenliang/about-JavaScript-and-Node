const net = require('net')

let responseDataTpl = `HTTP/1.1 200 OK
Connection: keep-alive
Date: ${new Date()}
Content-Length: 12
Content-Type: text/plain

Hello World!
`;

let server = net.createServer((socket) => {
    socket.setKeepAlive(true, 60000)

    socket.write(responseDataTpl)

    socket.pipe(socket)

    socket.on('data', data => {
        console.log('DATA ' + socket.remoteAddress + ': ' + data)
        //127.0.0.1

        //socket.end('goodbye\n')
        /**
        GET / HTTP/1.1
        Host: localhost:10080
        Connection: keep-alive
        Upgrade-Insecure-Requests: 1
        User-Agent: Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36
        Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,#/*;q=0.8
        Accept-Encoding: gzip, deflate, br
        Accept-Language: zh-CN,zh;q=0.9,en;q=0.8


        connection closed, goodbye!
         */
    })

    socket.on('close', () => {
        console.log('connection closed, goodbye!\n\n\n')
    })
}).on('error', err => {
    //handle errors here
    throw err;
})

server.listen({
    host: '0.0.0.0',
    port: 10080,
    exclusive: true
}, () => {
    console.log(`open server on`, server.address())
    //{ address: '0.0.0.0', family: 'IPv4', port: 10080 }
})

/**
 * Response Headers
 * HTTP/1.1 200 OK
    Connection: keep-alive
    Date: Fri Aug 24 2018 01:25:18 GMT+0800 (中国标准时间)
    Content-Length: 12
    Content-Type: text/plain
 */