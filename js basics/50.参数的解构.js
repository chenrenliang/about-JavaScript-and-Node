
function distance({x: x1, y: y1}, {x: x2, y: y2} = {x: 0, y: 0}){
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
}

console.log(distance({x: 3, y: 4}))
//5

function distance2({x: x1, y: y1}, {x: x2 = 0, y: y2 = 0} = {}) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
}

console.log(distance2({x: 6, y: 8}))
//x1:6,y1:8 x2:0, y2: 0
//10