const obj = {x: 1, y: 2}

const {x, y} = obj;

console.log([x, y, x + y])
//1 2 3

const arr = [1, 2, 3, 4]
let [a, b, c, d] = arr;

console.log([a, b, c, d])
//1, 2, 3, 4

;[a, b] = [b, a]

console.log([a, b]) //2 1