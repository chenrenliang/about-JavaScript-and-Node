//协商缓存
//1.弱缓存，普通刷新会启用弱缓存，忽略强缓存。
//2.只有从地址栏或收藏夹输入网址、通过链接引用资源等情况下，浏览器才会启用强缓存
//3.这也是为什么有时候我们更新一张图片、一个js文件，页面内容依然是旧的，但是直接浏览器访问那个图片或文件，看到的内容却是新的。


const http = require('http')
const url = require('url')
const fs = require('fs')

function getMimeType(res) {
    const EXT_MIME_TYPES = {
        'default': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'text/json',

        '.jpeg': 'image/jpeg',
        '.jpg': 'image/jpg',
        '.png': 'image/png'
    };

    let path = require('path')
    let mime_type = EXT_MIME_TYPES(path.extname(res)) || EXT_MIME_TYPES['default']

    return mime_type;
}

const server = http.createServer((req, res) => {
    let srvUrl = url.parse(`http://${req.url}`)
    let path = srvUrl.path;

    if(path === '/') path = '/index.html'

    let resPath = '.' + path;

    let lastModified = req.headers['if-modified-since']

    if(lastModified && Date.now() - new Date(lastModified) < 86400000) {
        res.writeHead(304, { //还存在缓存里 未过期
            'Content-Type': getMimeType(resPath),
            'Last-Modfied': new Date(lastModified), //写回last-Modified
            'Expires': new Date(new Date(lastModified) + 86400000)
        })

        res.end()
    } else {
        if(!fs.existsSync(resPath)) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end('<h1>404 Not Found</h1>')
        }

        let resStream = fs.createReadStream(resPath)

        res.writeHead(200, {
            'Content-Type': getMimeType(resPath),
            'Last-Modifed': new Date(),
            'Expires': new Date(Date.now() + 86400000)
        })

        resStream.pipe(res)
    }


})

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

server.listen(10080)


