
const net = require('net');
const http = require('http');
const crypto = require('crypto');

const content = `
<h1>
  <a href="https://developer.mozilla.org/zh-CN/docs/WebSockets/Writing_WebSocket_servers">
    WebSocket is HTTP Upgrade
  </a>
</h1>
<script>
var ws = new WebSocket('ws://teach.h5jun.com:10080');
ws.onmessage = function(evt){
  console.log('received: ' + evt.data);
}
ws.onopen = function(){
  console.log('opened');
  ws.send('hello~');
}
</script>
`;

class WSServer{
  constructor(){
    const httpServer = new http.Server();

    httpServer.addListener("connection", function(){
      // requests_recv++;
    });

    httpServer.addListener("request", function(req, res){
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(content);
      res.end();
    });

    httpServer.addListener("upgrade", function(req, socket, upgradeHead){
      let secWebSocketAccept = req.headers['sec-websocket-key'] + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
      let sha1 = crypto.createHash('sha1');

      sha1.update(secWebSocketAccept);
      secWebSocketAccept = sha1.digest('base64');

      let serverHandshake = `HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: ${secWebSocketAccept}

`;

      socket.write(serverHandshake);

//  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
// +-+-+-+-+-------+-+-------------+-------------------------------+
// |F|R|R|R| opcode|M| Payload len |    Extended payload length    |
// |I|S|S|S|  (4)  |A|     (7)     |             (16/64)           |
// |N|V|V|V|       |S|             |   (if payload len==126/127)   |
// | |1|2|3|       |K|             |                               |
// +-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
// |     Extended payload length continued, if payload len == 127  |
// + - - - - - - - - - - - - - - - +-------------------------------+
// |                               |Masking-key, if MASK set to 1  |
// +-------------------------------+-------------------------------+
// | Masking-key (continued)       |          Payload Data         |
// +-------------------------------- - - - - - - - - - - - - - - - +
// :                     Payload Data continued ...                :
// + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
// |                     Payload Data continued ...                |
// +---------------------------------------------------------------+
      
      socket.on('data', function(buffer){
        let dataArr = new Uint8Array(buffer);
        let payload_len = (dataArr[1] & 0x7f);

        let MASK = dataArr.slice(2, 6);
        let ENCODED = dataArr.slice(6, 6 + payload_len);
        let DECODED = [];

        for (let i = 0; i < ENCODED.length; i++) {
            DECODED[i] = ENCODED[i] ^ MASK[i % 4];
        }
        console.log('server received: ' + String.fromCharCode(...DECODED));

        let sendDataArr = [];
        sendDataArr[0] = 0x81;
        sendDataArr[1] = 0x2;
        sendDataArr[2] = 'o'.charCodeAt(0);
        sendDataArr[3] = 'k'.charCodeAt(0);

        socket.write(new Buffer(sendDataArr));
      });
    }); 

    this.httpServer = httpServer;   
  }
  listen(port){
    this.httpServer.listen(port);
  }
}


var server = new WSServer();
server.listen(10080);

