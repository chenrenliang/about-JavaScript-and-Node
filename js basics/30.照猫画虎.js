
function Cat(){

}
Cat.prototype.bark = function(){
    return '喵'
}

Cat.prototype.climb = function(){
    return '我会爬树'
}

function Tiger(){

}

Tiger.prototype = new Cat()

Tiger.prototype.bark = function(){
    return '嗷'
}

var tiger = new Tiger()
console.log([
    tiger.bark(), //嗷
    tiger.climb(), //我会爬树
    tiger instanceof Cat //true
])
