
console.log(add(1, 2)) //3

function add(x, y){
    return x + y;
}

const sub = function(x, y){
    return x - y;
}

const mul = (x, y) => x * y;

console.log([
    sub(1, 2), //-1
    mul(1, 2) //2
])