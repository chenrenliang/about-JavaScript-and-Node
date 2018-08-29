const _x = Symbol('x'), _y = Symbol('y')

class Point2D {
    constructor(x = 0, y = 0) {
        this[_x] = x
        this[_y] = y
    }
    get XY(){
        const [x, y] = [this[_x], this[_y]]
        return [x, y]
    }
    get length(){
        const [x, y] = [this[_x], this[_y]]
        return Math.sqrt(x ** 2 + y ** 2)
    }
}

const p = new Point2D(1, 2)
console.log(p._x, p._y) //undefined undefined 
console.log(p.XY, p.length) //[1, 2] 2.236