
function Point(x, y){
    this.x = x;
    this.y = y;
}

Point.prototype = {
    get length(){
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    },
    set length(value){
        const len = this.length;
        this.x *= value / len 
        this.y *= value / len 
    }
}

const p = new Point(3, 4)
console.log(p.length); //getter 5

p.length *= 2; //10
console.log(p.length); //10
console.log([p.x, p.y]); //6 8