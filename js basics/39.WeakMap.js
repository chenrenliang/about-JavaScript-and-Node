// 标记对象的一些状态 —— 常规方法（有风险）

class Foo {
    constructor(){

    }
    init(){
        if(this._initialized) return;
        this._initialized = true;
        console.log('init')
    }
}

const foo = new Foo()

foo.init(); //init 
foo.init(); // 直接 return 

console.log(foo._initialized) //true 

foo._initialized = false; //有风险

foo.init(); //init