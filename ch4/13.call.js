
function Point2D(x, y){
    this.x = x;
    this.y = y;
}

Point2D.prototype.getLength = function(){
    return Math.sqrt(this.x ** 2 + this.y ** 2)
}

var p = new Point2D(1, 1)
console.log(p.getLength()) //1.414

var obj = {
    x: 3, 
    y: 4
};

console.log(p.getLength.call(obj)) //this=> obj  => 5

function foo(){
    var args = [].slice.call(arguments)

    console.log(Array.isArray(arguments)) // false 

    console.log(Array.isArray(args)) //true
}

foo()