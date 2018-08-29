console.log([
    typeof undefined,  //'undefined'
    typeof null,   //'object'
    typeof 1.0,   //'number'
    typeof true,  //'boolean'
    typeof 'foo',   //'string'
    typeof function(){}, //'function'
    typeof {},   //'object'
    typeof Symbol('foo') //'sybmol'
])

function Animal(){
    this.name = 'animal'
}

Animal.prototype.eat = function(food){
    console.log(`${this.name} eat ${food} `)
}

function Cat(petname){
    this.name = petname;
}

Cat.prototype = new Animal()

Cat.prototype.bark = function(){
    console.log('喵')
}

const cat = new Cat('Tom')

console.log([
    cat instanceof Cat, //true
    cat instanceof Animal //true
])
