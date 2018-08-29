function Vector3D(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
}

Vector3D.prototype.getLength = function(){
    return Math.sqrt(
        this.x ** 2 + 
        this.y ** 2 + 
        this.z ** 2
    )
}

function Vector2D(x, y){
    Vector3D.call(this, x, y, 0)
}

Vector2D.prototype = new Vector3D()

var p = new Vector2D(3, 4)

console.log([
    p.x, //3
    p.y, //4
    p.getLength(), //5
    p instanceof Vector3D //true
])