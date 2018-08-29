
const privateMap = new WeakMap()

class Point2D {
    constructor(x = 0, y = 0) {
        privateMap.set(this, {x, y})
    }
    get XY(){
        const {x, y} = privateMap.get(this)
        return [x, y]
    }
    get length(){
        const {x, y} = privateMap.get(this)
        return Math.sqrt(x ** 2 + y ** 2)
    }
}

const p = new Point2D(1, 2)
console.log(p._x, p._y) //undefined undefined 

console.log(p.XY, p.length) //[1, 2] 2.236