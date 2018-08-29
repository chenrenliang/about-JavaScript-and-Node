const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer((req, res) => {
    let srvUrl = url.parse(`http://${req.url}`)
    let {path} = srvUrl

    if(path === '/') path = '/index.html'

    let resPath = '.' + path;

    if(!fs.existsSync(resPath)) {
        res.writeHead(404, {'Content-Type': 'text/html'})
        
        return res.end('<h1>404 Not Found</h1>')
    }

    let resStream = fs.createReadStream(resPath)
    res.writeHead(200, {'Content-Type': 'text/html'})

    resStream.pipe(res)
})

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

server.listen(10080)