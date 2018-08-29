function Point(x, y){
    this.x = x;
    this.y = y;
}

Point.prototype  = {
    get length(){
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
}

const p = new Point(3, 4)
console.log(p.length); //触发getter 5

p.length *= 2; //要触发setter 但是没定义setter 因此触发失败

console.log(p.length); //5