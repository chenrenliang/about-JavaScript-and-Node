const http = require('http')
const json2html = require('node-json2html')

const server = http.createServer((req, res) => {
    let responseData = {
        name: 'crl',
        birthday: '10-20'
    }

    let accept = req.headers['accept']

    if(accept.indexOf('text/json') >= 0) { //不严格判断
        res.writeHead(200, {'Content-Type': 'text/json'})
        res.end(JSON.stringify(responseData))
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'})

        let transform = {"tag": "div", "html": '${name} : ${birthday}'}

        res.end(json2html(responseData, transform))
    }
})

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

server.listen(10080)