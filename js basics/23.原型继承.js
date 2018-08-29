function Animal(){
    this.name = 'animal'
}
Animal.prototype.eat = function(food){
    console.log(`${this.name} eat ${food}.`)
}

function Cat(petname){
    this.name = petname
}

Cat.prototype = new Animal()

Cat.prototype.bark = function(){
    console.log('喵')
}

function Dog(petname){
    this.name = petname
}
Dog.prototype = new Animal()

Dog.prototype.bark = function(){
    console.log('汪')
}

const cat = new Cat('喵星人'),
      dog = new Dog('汪星人')
 
cat.eat('鱼')      //喵星人 eat 鱼
dog.eat('骨头')   //汪星人 eat 骨头

cat.bark()    //喵
dog.bark()    //汪