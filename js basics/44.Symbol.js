const _axes = Symbol('axes')

class Point {
    constructor(...axes){
        this[_axes] = axes; 
    }

    get dimension(){
        return this[_axes].length
    }
    get x(){
        return this[_axes][0]
    } 
    get y(){
        return this[_axes][1]
    } 
    get z(){
        return this[_axes][2]
    } 
    get w(){
        return this[_axes][3]
    } 
    axis(i){
        return this[_axes][i]
    }

    get length(){
        return Math.sqrt(this[_axes].reduce((r, a) => r + a ** 2, 0))
    }
}

const p = new Point(1, 2, 3)
console.log([
    p.x, //1
    p.y, //2
    p.z,  //3
    p.axis(1), //2
    p.length //根号14
])