const http = require('http')
const through = require('through2')

const server = http.createServer((req, res) => {
    if(req.method === 'POST') {
        let body = ''

        res.writeHead(200, {'Content-Type': 'text/json'})

        req.pipe(through.obj((content, encode, done) => {
            if(encode === 'buffer') {
                content = {
                    srcData: content.toString('utf8'),
                    err: '',
                    state: 'succes'
                };

                encode = 'utf8'
            }

            done(null, JSON.stringify(content), encode)


       })).pipe(res)

    } else {
        res.writeHead(405, {'Content-Type': 'text/html'})

        res.end('<h1>Method not allowed</h1>')
    }
        
})

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

server.listen(10080)
    

