
const initMap = new WeakMap()

class Foo{
    constructor(){

    }
    init(){
        if(initMap.has(this)) return;
        initMap.set(this)
        console.log('init')
    }
}

const foo = new Foo()
foo.init() //init 
foo.init()  //直接return
foo.init() //直接return