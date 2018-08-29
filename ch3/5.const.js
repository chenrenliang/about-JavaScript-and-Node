
const BUFFER_SIZE = 1024

let buffer = new ArrayBuffer(BUFFER_SIZE)

console.log(buffer) //ArrayBuffer { byteLength: 1024 }

let data = new Uint16Array(buffer)
let data2 = new Uint8Array(buffer)


data[0] = 0xff06;

console.log(data2[0], data2[1])
//06 ff
//6  255
