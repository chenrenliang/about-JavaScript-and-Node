
function add(x, y) {
    return x + y
}

function sub(x, y) {
    return x - y
}

console.log(add(add(add(1, 2), 3), 4)) //10 不好??

console.log([1, 2, 3, 4].reduce(add)) //10

console.log([1, 2, 3, 4].reduce(sub)) // -8