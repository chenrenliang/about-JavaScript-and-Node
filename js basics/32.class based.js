class Vector3D{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    get length(){
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2)
    }
}

class Vector2D extends Vector3D{
    constructor(x, y){
        super(x, y, 0)
    }
}

var p = new Vector2D(3, 4)
console.log([
    p.x,    //3
    p.y,  //4
    p.length, //5
    p instanceof Vector3D //true
])