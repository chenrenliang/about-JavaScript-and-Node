//Cache Control
//强缓存，普通刷新会忽略它，但并不会清除它，需要强制刷新
//浏览器强制刷新，请求会带上 Cache-Control: no-cache 和  Pragma:no-cache 头

const http = require('http')
const url = require('url')
const fs = require('fs')

function getMimeType(res){
    const EXT_MIME_TYPES = {
        'default': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'text/json',

        '.jpeg': 'image/jpeg',
        '.jpg': 'image/jpg',
        '.png': 'image/png',

        //...
    }

    let path = require('path')
    let mime_type = EXT_MIME_TYPES[path.extname(res)] || EXT_MIME_TYPES['default']
    return mime_type
}

const server = http.createServer((req, res) => {
    let srvUrl = url.parse(`http://${req.url}`)
    let path = srvUrl.path
    if(path === '/') path = '/index.html'

let resPath = ('resource' + path).replace(/\?.*/g, '') //?任意字符=> ''

if(!fs.existsSync(resPath)) {
    res.writeHead(404, {"Content-Type": 'text/html'})
    return res.end('<h1>404 Not Found</h1>')
} 

let resStream = fs.createReadStream(resPath)

res.writeHead(200, {
    'Content-Type': getMimeType(resPath),
    "Cache-Control": 'max-age=86400'
})

resStream.pipe(res)

})

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

server.listen(10080, () => {
    console.log('opened server on', server.address())
})