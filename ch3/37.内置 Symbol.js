function Point2D(x, y){
    this.x = x;
    this.y = y;
}

const _points = Symbol('points')

function Path(){
    this[_points] = []
}

Path.prototype.add = function(...points) {
    this[_points] = this[_points].concat(points)
}

Path.prototype[Symbol.iterator] = function *(){
    var i = 0, points = this[_points]

    while(points[i] !== undefined) {
        yield points[i]
        ++i;
    }
}

Object.defineProperty(Path.prototype, 'length', {
    get(){
        return this[_points].length;
    }
})

let path = new Path();//path: {Symbol(points): []}
let p1 = new Point2D(1, 1),
    p2 = new Point2D(1, 2),
    p3 = new Point2D(2, 3)

path.add(p1, p2, p3) //path: {Symbol(points): [p1, p2, p3]}    
console.log(path.length) // 3

for(let point of path){
    console.log(point) //
    //{x:1,y:1} Point2D
    //{x:1,y:2}
    //{x:2,y:3}
}