function Point(x, y){
    this.x = x;
    this.y = y;
}

Point.prototype.getLength = function(){
    return Math.sqrt(this.x ** 2 + this.y ** 2)
}
const p1 = new Point(1, 2),
      p2 = new Point(3, 4)

console.log([
    p1.getLength(), //2.236
    p2.getLength() //5
])      