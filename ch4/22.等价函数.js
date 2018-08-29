function __equal__(fn){
    return function(...args){
        return fn.apply(this, args)
    };
}

function add(x, y){
    return x + y;
}

add = __equal__(add) //function(...args){return add.apply(this, args)}

console.log(add(3, 4)) //7

let obj = {
    x: 1,
    y: 2, 
    add(){
        return this.x + this.y
    }
};

let objAdd = __equal__(obj.add)

console.log(objAdd.call(obj)) //3