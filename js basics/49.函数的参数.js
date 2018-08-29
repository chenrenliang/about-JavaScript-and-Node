
function add(x, y){
    return x + y;
}

console.log([
    add(1, 2), //3
    add.length //2
])

function sum(...numbers){
    return numbers.reduce((a, b) => a + b)
}

console.log([
    sum(1,2 ,3, 4), //10
    sum.length //0
])

function distance(p1, p2 = {x: 0, y: 0}){
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
}

console.log(distance({x: 3, y: 4}))
//5

