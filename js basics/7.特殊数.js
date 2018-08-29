const numbers = [
    Infinity,   //Infinity
    -Infinity,  //-Infinity
    Number.MAX_VALUE * 2, //Infinity
    -Number.MAX_VALUE * 2, //-Infinity
    Number('abc') //NaN
]

console.log(numbers)

console.log([
    Infinity === Infinity, //true √√√√√
    NaN === NaN, //false 
    Number.isFinite(100), //true 
    Number.isNaN(NaN) //true
])