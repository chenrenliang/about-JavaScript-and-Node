var str = 'Hello World'
var strObj = new String(str)

console.log([
    str,  //Hello World
    strObj //[[primitiveValue]]: 'Hello world' '0': 'H' ... 2: 'l' 
])

console.log([
    typeof str,  //string
    typeof strObj //object
])

console.log([
    str instanceof String, //false 左操作数必须为对象
    strObj instanceof String //true
])

var n = new Number(10)
console.log([
    typeof n, //object
    typeof ++n //number
])