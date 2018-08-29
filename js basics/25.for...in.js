function Point(x, y){
    this.x = x;
    this.y = y;
}

Point.prototype.getLength = function(){
    return Math.sqrt(this.x ** 2 + this.y ** 2)
}

const p = new Point(3, 4)

for(let key in p){  //自身以及原型上可枚举的属性
    console.log(`p.${key} is ${p[key]}`)
}
//p.x is 3
//p.y is 4
//p.getLength is ...function