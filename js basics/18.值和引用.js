let i = 0

function foo(i){
    i++
    return i;
}
console.log([foo(i), i]); //1 0

let obj = { x: 1}

function fooRef(obj){
    obj.x++
    return obj
}

console.log([fooRef(obj).x, obj.x])
//2   2