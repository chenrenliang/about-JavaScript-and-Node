function Point(x, y){
    this.x = x;
    this.y = y;
}

Point.prototype.getLength = function(){
    return Math.sqrt(this.x ** 2 + this.y ** 2)
}

const p = new Point(3, 4)

for(const key of Object.keys(p)){ //自身可枚举
    console.log(`p.${key} is ${p[key]}.`)
}
//p.x is 3
//p.y is 4

for(const value of Object.values(p)){
    console.log(value) 
    //3 
    //4
}

for(const [key, value] of Object.entries(p)){
    console.log(`p.${key} is ${p[key]}`)
}
//p.x is 3
//p.y is 4

