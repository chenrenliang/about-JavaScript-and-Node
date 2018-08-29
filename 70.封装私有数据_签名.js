let crypto = require('crypto')
let md5 = crypto.createHash('md5')
let result = md5.update(`${process.env.secretKey}.Point2D`).digest('hex')
console.log(result)

function _sign(prop) {
    return '7b525e49646bf4a2840ffc3748d5ec79' + prop 
}

class Point2D {
    constructor(x = 0, y = 0) {
        this[_sign('x')] = x 
        this[_sign('y')] = y
    }

    get XY() {
        return [this[_sign('x')], this[_sign('y')]]
    }
    get length(){
        const [x, y] = [this[_sign('x')], this[_sign('y')]]
        return Math.sqrt(x ** 2 + y ** 2)
    }
}

const p = new Point2D(1, 2)
console.log(p._x, p._y) //undefined undefined 
console.log(p.XY, p.length)
//[1, 2]   2.236
