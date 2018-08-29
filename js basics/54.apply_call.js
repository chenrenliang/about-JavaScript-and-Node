
function euclidDistance(){
    const {x, y, z} = this;

    return Math.sqrt(x ** 2 + y ** 2 + z ** 2)
}

const p1 = {x: 3, y: 4, z: 0},
     p2 = {x: 1, y: 2, z: 3}

console.log([
    euclidDistance.call(p1), //5
    euclidDistance.apply(p2) //根号14
])     

function append(...objs){
    return this.concat(objs)
}

console.log(append.call([1, 2, 3], 4, 5, 6))
//[1, 2, 3, 4, 5, 6]

