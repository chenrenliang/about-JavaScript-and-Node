const http = require('http')

const server = http.createServer((req, res) => {
    if(req.method === 'POST') {
        let body = ''

        req.on('data', data => {  

            body += data;
            //Too much POST data, kill the connection!
            // 1e6 === Math.pow(10, 6) === 1 * 1000000 ~ 1MB

            if(body.length > 1e6) {
                req.connection.destroy()
            }
        })

        req.on('end', function(){
            console.log(body)
        })

        res.writeHead(200, {'Content-Type': 'text/json'})
        res.end('{"err":"","state":"success"}')

    } else {
        res.writeHead(405, {'Content-Type': 'text/html'})
        res.end('<h1>Method not allowed</h1>')
    }
})

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

server.listen(10080)