
console.log([Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER])
//2^53-1  -(2^53-1)

var bigInteger = Number.MAX_SAFE_INTEGER + 1;

console.log([
    bigInteger,  //2^53
    bigInteger + 1, //2^53
    bigInteger + 2 //2^53 + 2
])

console.log(1234567890000000000000000000)

console.log(Math.pow(2, 53) === bigInteger) //true 

console.log([
    Number.isSafeInteger(bigInteger), //false 
    Number.isSafeInteger(bigInteger - 1) //true 
])

console.log([Number.MAX_VALUE, Number.MIN_VALUE])
//308 -324

console.log([Number.MAX_VALUE + 1, Number.MAX_VALUE * 2])
//308    +Infinity


console.log(Number.EPSILON)//e-16

console.log(0.99 - 1e-17 === 0.99) //true 

console.log(0.99 - Number.EPSILON === 0.99) //false