
class Point2D {
    constructor(x = 0, y = 0) {
        this._x = x
        this._y = y
    }
    get XY(){
        return [this._x, this._y]
    }
    get length(){
        return Math.sqrt(this._x ** 2 + this._y ** 2)
    }
}

const p = new Point2D(1, 2)

console.log(p._x, p._y) //1, 2