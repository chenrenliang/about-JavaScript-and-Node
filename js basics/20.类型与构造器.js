const p1 = {x: 1, y: 2},
        p2 = {x: 3, y: 4}

p1.getLength = p2.getLength = function(){
    return Math.sqrt(this.x ** 2 + this.y ** 2)
}        

console.log([
    p1.getLength(), //2.236
    p2.getLength() //5
])

function Point(x, y){
    this.x = x;
    this.y = y;
    this.getLength = function(){
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
}

const p3 = new Point(2, 2),
    p4 = new Point(6, 8)

console.log([
    p3.getLength(), //2.828
    p4.getLength() //10
])    