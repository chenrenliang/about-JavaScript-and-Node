const net = require('net');
const zlib = require('zlib');

let responseData = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
`;



let server = net.createServer((socket) => {
  
  socket.setKeepAlive(true, 60000);

  zlib.gzip(new Buffer(responseData), function(err, content){

    let responseDataTpl = `HTTP/1.1 200 OK
Connection: keep-alive
Date: ${new Date()}
Content-Length: ${content.length}
Content-Type: text/html
Content-encoding: gzip

`;

    socket.write(responseDataTpl);
    socket.write(content, 'binary');

    socket.pipe(socket);
  });
  

  socket.on('data', function(data){
    console.log('DATA ' + socket.remoteAddress + ': ' + data); 
    //127.0.0.1
    /**
     *  GET / HTTP/1.1
        Host: localhost:10080
        User-Agent: Mozilla/5.0 (Windows NT 6.1; rv:61.0) Gecko/20100101 Firefox/61.0
        Accept: text/html,application/xhtml+xml,application/xml;q=0.9,#/*;q=0.8
        Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2
        Accept-Encoding: gzip, deflate
        Connection: keep-alive
        Upgrade-Insecure-Requests: 1
     */
  });

  socket.on('close', function(){
    console.log('connection closed, goodbye!\n\n\n');
  });
}).on('error', (err) => {
  // handle errors here
  throw err;
});

server.listen({
  host: '0.0.0.0',
  port: 10080,
  exclusive: true
}, ()=>{
  console.log('opened server on', server.address()); // { address: '0.0.0.0', family: 'IPv4', port: 10080 }
});