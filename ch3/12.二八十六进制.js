
//严格模式 不支持8进制

var a = 64

console.log([
    a === 64, //true
    a === 0b1000000, //true
    a === 0o100, //true
    a === 0x40 //true 
])

function foo(){
    'use strict'

    var oNum = 0100, num = 256  //SyntaxError: Octal literals are not allowed in strict mode.

    console.log(oNum, num.toString(8), num.toString(16))
    //64  '400' '100'
}

foo()